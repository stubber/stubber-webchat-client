import { get, writable } from "svelte/store";
import _ from "lodash-es";
import { deepEqual } from "fast-equals";

export function createField(state_key, form) {
  const store = writable(_.cloneDeep(form.getField(state_key)));

  form.subscribe(() => {
    let oldValue = _.cloneDeep(get(store));
    let newValue = _.cloneDeep(form.getField(state_key));
    let is_different = !deepEqual(newValue, oldValue);
    if (is_different) {
      store.set(newValue);
    }
  });

  function setStore(update) {
    form.setField(state_key, _.cloneDeep(update));
  }

  function updateStore(func) {
    let current_store = _.cloneDeep(get(store));
    let new_store = func(current_store);
    setStore(new_store);
  }

  return {
    subscribe: store.subscribe,
    set: setStore,
    update: updateStore,
    unsubscribe: store.unsubscribe,
  };
}
