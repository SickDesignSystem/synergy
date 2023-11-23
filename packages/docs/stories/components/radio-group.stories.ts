/* eslint-disable import/no-relative-packages */

import '../../../components/src/components/radio-group/radio-group.js';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import docsTokens from '../../../tokens/src/figma-tokens/_docs.json';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../src/helpers/component.js';

const { args, argTypes } = storybookDefaults('syn-radio-group');
const { overrideArgs } = storybookHelpers('syn-radio-group');
const { generateTemplate } = storybookTemplate('syn-radio-group');

const meta: Meta = {
  component: 'radio-group',
  args,
  argTypes,
  title: 'Components/syn-radio-group',
  parameters: {
    docs: {
      description: {
        component: docsTokens?.components?.['radio-group']?.default?.description?.value ?? 'No Description',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default = {
  parameters: {
    docs: {
      description: {
        story: docsTokens?.components?.['radio-group']?.default?.description?.value ?? 'No Description',
      },
    },
  },
  render: (args: any) => generateTemplate({ args }),
} as Story;

export const Label: Story = {
  render: () => html`<syn-radio-group label="This is a label">
  <syn-radio value="1">Option</syn-radio>
  <syn-radio value="2">Option</syn-radio>
  <syn-radio value="3">Option</syn-radio>
</syn-radio-group>`,
};

/**
 * Add descriptive help text to a radio group with the help-text attribute.
 * For help texts that contain HTML, use the help-text slot instead.
 */
export const HelpText: Story = {
  render: () => html`<syn-radio-group label="This is a label" help-text="This is the help-text" name="a" value="1">
  <syn-radio value="1">Option</syn-radio>
  <syn-radio value="2">Option</syn-radio>
  <syn-radio value="3">Option</syn-radio>
</syn-radio-group>`,
};

/**
 * Radios and radio buttons can be disabled
 * by adding the disabled attribute to the respective options inside the radio group.
 */
export const DisablingOptions: Story = {
  render: () => html`<syn-radio-group label="Select an option" name="a" value="1">
  <syn-radio value="1">Option 1</syn-radio>
  <syn-radio value="2" disabled>Option 2</syn-radio>
  <syn-radio value="3">Option 3</syn-radio>
</syn-radio-group>`,
};

/**
 * The size of  and  will be determined by the Radio Group's size attribute.:::tip
 and  also have a size attribute. This can be useful in certain compositions,
 but it will be ignored when used inside of a Radio Group.
:::Setting the required attribute to make selecting an option mandatory.
If a value has not been selected,
it will prevent the form from submitting and display an error message.
 */
export const Validation: Story = {
  render: () => html`<form class="validation">
  <syn-radio-group label="Select an option" name="a" required>
    <syn-radio value="1">Option 1</syn-radio>
    <syn-radio value="2">Option 2</syn-radio>
    <syn-radio value="3">Option 3</syn-radio>
  </syn-radio-group>
  <br />
  <syn-button type="submit" variant="primary">Submit</syn-button>
</form>

<script type="module">
  const form = document.querySelector('.validation');

  // Handle form submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>`,
};

/**
 * Use the setCustomValidity() method to set a custom validation message.
 * This will prevent the form from submitting and
 * make the browser display the error message you provide.
 * To clear the error, call this function with an empty string.
 */
export const CustomValidity: Story = {
  render: () => html`<form class="custom-validity">
  <syn-radio-group label="Select an option" name="a" value="1">
    <syn-radio value="1">Not me</syn-radio>
    <syn-radio value="2">Me neither</syn-radio>
    <syn-radio value="3">Choose me</syn-radio>
  </syn-radio-group>
  <br />
  <syn-button type="submit" variant="primary">Submit</syn-button>
</form>

<script type="module">
  const form = document.querySelector('.custom-validity');
  const radioGroup = form.querySelector('syn-radio-group');
  const errorMessage = 'You must choose the last option';

  // Set initial validity as soon as the element is defined
  customElements.whenDefined('syn-radio').then(() => {
    radioGroup.setCustomValidity(errorMessage);
  });

  // Update validity when a selection is made
  form.addEventListener('syn-change', () => {
    const isValid = radioGroup.value === '3';
    radioGroup.setCustomValidity(isValid ? '' : errorMessage);
  });

  // Handle form submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>`,
};
