import Checkbox from "$/lib/forms/fields/components/Checkbox.svelte";
import Currency from "$/lib/forms/fields/components/Currency.svelte";
import Date from "$/lib/forms/fields/components/Date.svelte";
import Datetime from "$/lib/forms/fields/components/Datetime.svelte";
import Email from "$/lib/forms/fields/components/Email.svelte";
import FileField from "$/lib/forms/fields/components/File.svelte";
import Heading from "$/lib/forms/fields/components/Heading.svelte";
import Hiddenlocation from "$/lib/forms/fields/components/Hiddenlocation.svelte";
import Html from "$/lib/forms/fields/components/Html.svelte";
import Multicheckbox from "$/lib/forms/fields/components/Multicheckbox.svelte";
import Multistep from "$/lib/forms/fields/components/Multistep.svelte";
import Number from "$/lib/forms/fields/components/Number.svelte";
import Radio from "$/lib/forms/fields/components/Radio.svelte";
import Section from "$/lib/forms/fields/components/Section.svelte";
import Select from "$/lib/forms/fields/components/Select.svelte";
import Signature from "$/lib/forms/fields/components/Signature.svelte";
import Telephone from "$/lib/forms/fields/components/Telephone.svelte";
import Text from "$/lib/forms/fields/components/Text.svelte";

export const components = {
  checkbox: Checkbox,
  currency: Currency,
  date: Date,
  datetime: Datetime,
  email: Email,
  file: FileField,
  heading: Heading,
  hiddenlocation: Hiddenlocation,
  html: Html,
  multicheckbox: Multicheckbox,
  multistep: Multistep,
  number: Number,
  radio: Radio,
  section: Section,
  select: Select,
  signature: Signature,
  telephone: Telephone,
  text: Text,
};
