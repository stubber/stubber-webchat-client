import { deepEqual } from "fast-equals";
import _ from "lodash-es";
import { derived, writable } from "svelte/store";

export function syncStoreToStore(
  store_a,
  store_b,
  a_to_b,
  b_to_a,
  debounce_a_to_b,
  debounce_b_to_a
) {
  // make sure that the stores are there
  if (!store_a || !store_b) return;

  // keep track of the last values to prevent infinite loops
  let last_a;
  let last_b;

  // create a derived store of both
  const store_ab = derived([store_a, store_b], ([$a, $b]) => {
    return [$a, $b];
  });

  let a_b_timeout;
  let b_a_timeout;
  async function handleChange(a, b, d_a_b, d_b_a) {
    let a_changed = !deepEqual(a, last_a);
    let b_changed = !deepEqual(b, last_b);
    clearTimeout(a_b_timeout);
    clearTimeout(b_a_timeout);

    if (a_changed) {
      if (d_a_b) {
        a_b_timeout = setTimeout(() => {
          handleChange(a, b);
        }, d_a_b);
      } else {
        // calculate update
        let update = b;
        try {
          update = await a_to_b(_.cloneDeep(a), update);
        } catch (err) {
          console.warn("error transforming a to b", err.toString());
        }

        // update last value
        last_a = _.cloneDeep(a);
        last_b = _.cloneDeep(update);

        // update the store
        if (store_b?.set) store_b.set(_.cloneDeep(update));
      }
    } else if (b_changed) {
      if (d_b_a) {
        b_a_timeout = setTimeout(() => {
          handleChange(a, b);
        }, d_b_a);
      } else {
        // calculate update
        let update = a;
        try {
          update = await b_to_a(update, _.cloneDeep(b));
        } catch (err) {
          console.warn("error transforming b to a", err.toString());
        }

        // update last value
        last_a = _.cloneDeep(update);
        last_b = _.cloneDeep(b);

        // update the store
        if (store_a?.set) store_a.set(_.cloneDeep(update));
      }
    }
  }

  // subscribe to the derived store
  const unsubscribe = store_ab.subscribe(([a, b]) => {
    handleChange(a, b, debounce_a_to_b, debounce_b_to_a);
  });

  function destroy() {
    unsubscribe();
  }

  return { destroy };
}

export function syncStoreToValue(store_a, init_b, a_to_b, b_to_a, update_value) {
  const store_b = writable(_.cloneDeep(init_b));

  const storesSync = syncStoreToStore(store_a, store_b, a_to_b, b_to_a);

  const unsubscribe = store_b.subscribe((b) => {
    update_value(b);
  });

  function destroy() {
    storesSync.destroy();
    unsubscribe();
  }

  return {
    destroy,
    notifyValueChange: (v) => {
      if (!store_b?.set) return;
      store_b.set(_.cloneDeep(v));
    },
  };
}

export function syncValueToStore(init_a, store_b, a_to_b, b_to_a, update_value) {
  const store_a = writable(_.cloneDeep(init_a));

  const storesSync = syncStoreToStore(store_a, store_b, a_to_b, b_to_a);

  const unsubscribe = store_a.subscribe((a) => {
    update_value(a);
  });

  function destroy() {
    storesSync.destroy();
    unsubscribe();
  }

  return {
    destroy,
    notifyValueChange: (v) => {
      if (!store_a?.set) return;
      store_a.set(_.cloneDeep(v));
    },
  };
}
