import Checkbox from "$/lib/forms/fields/components/Checkbox.svelte";
import Currency from "$/lib/forms/fields/components/Currency.svelte";
import Date from "$/lib/forms/fields/components/Date.svelte";
import Datetime from "$/lib/forms/fields/components/Datetime.svelte";
import Email from "$/lib/forms/fields/components/Email.svelte";
import Heading from "$/lib/forms/fields/components/Heading.svelte";
import Hiddenlocation from "$/lib/forms/fields/components/Hiddenlocation.svelte";
import Html from "$/lib/forms/fields/components/Html.svelte";
import Multicheckbox from "$/lib/forms/fields/components/Multicheckbox.svelte";
import Multistep from "$/lib/forms/fields/components/Multistep.svelte";
import Number from "$/lib/forms/fields/components/Number.svelte";
import Radio from "$/lib/forms/fields/components/Radio.svelte";
import Section from "$/lib/forms/fields/components/Section.svelte";
import Select from "$/lib/forms/fields/components/Select.svelte";
import Telephone from "$/lib/forms/fields/components/Telephone.svelte";
import Text from "$/lib/forms/fields/components/Text.svelte";
import Signature from "$/lib/forms/fields/components/Signature.svelte";
import ScrollAndReadDisplay from "$/lib/forms/fields/components/Scrollandreaddisplay.svelte";

export const components = {
  checkbox: Checkbox,
  currency: Currency,
  date: Date,
  datetime: Datetime,
  email: Email,
  heading: Heading,
  hiddenlocation: Hiddenlocation,
  html: Html,
  multicheckbox: Multicheckbox,
  multistep: Multistep,
  number: Number,
  radio: Radio,
  section: Section,
  select: Select,
  telephone: Telephone,
  text: Text,
  signature:Signature,
  scrollandreaddisplay:ScrollAndReadDisplay
};
