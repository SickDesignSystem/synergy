/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { SynButton, SynTextarea } from '@synergy-design-system/components';
import '../../../components/src/components/textarea/textarea';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { userEvent } from '@storybook/testing-library';
import { waitUntil } from '@open-wc/testing-helpers';
import { generateStoryDescription, storybookDefaults, storybookHelpers, storybookTemplate } from '../../src/helpers/component.js';

const { args, argTypes } = storybookDefaults('syn-textarea');
const { overrideArgs } = storybookHelpers('syn-textarea');
const { generateTemplate } = storybookTemplate('syn-textarea');

const meta: Meta = {
  args,
  argTypes,
  parameters: {
    docs: {
      description: {
        component: generateStoryDescription('textarea', 'default'),
      },
    },
  },
  title: 'Components/syn-textarea',
};
export default meta;

type Story = StoryObj;

export const Default = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'default'),
      },
    },
  },
  render: (args: any) => generateTemplate({ args }),
} as Story;

export const Labels: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'labels'),
      },
    },
  },
  render: () => html`<syn-textarea label="Comments"></syn-textarea>`,
};

export const HelpText: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'help-text'),
      },
    },
  },
  render: () => html`<syn-textarea label="Feedback" help-text="Please tell us what you think."> </syn-textarea>`,
};

export const Rows: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'rows'),
      },
    },
  },
  render: () => html`
    <syn-textarea rows="1" placeholder="One row shown"></syn-textarea>
    <syn-textarea rows="5" placeholder="Five rows shown"></syn-textarea>
    <syn-textarea rows="3" placeholder="Three rows shown"></syn-textarea>
    <style>
    syn-textarea {
      margin-bottom: 1rem;
    }
    </style>`,
};

export const Placeholders: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'placeholder'),
      },
    },
  },
  render: () => html`<syn-textarea placeholder="Type something"></syn-textarea>`,
};

export const ReadonlyTextareas: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'readonly'),
      },
    },
  },
  render: () => html`<syn-textarea value="Read-only content"  readonly></syn-textarea>`,
};

export const Focus: Story = {
  args: {
    placeholder: 'This is in focus',
  },
  parameters: {
    docs: {
      description: generateStoryDescription('focus'),
    },
  },
  play: ({ canvasElement }) => {
    const textarea = canvasElement.querySelector('syn-textarea') as SynTextarea;
    if (textarea) {
      textarea.focus();
    }
  },
  render: (args: any) => html`
      <form>
        ${generateTemplate({
    args,
  })}
      </form>
    `,
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'disabled'),
      },
    },
  },
  render: () => html`<syn-textarea placeholder="Textarea" help-text="Please tell us what you think." label="Label" disabled></syn-textarea>`,
};

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'size'),
      },
    },
  },
  render: () => html`
  <syn-textarea placeholder="Small" size="small"></syn-textarea><br/>
  <syn-textarea placeholder="Medium" size="medium"></syn-textarea><br/>
  <syn-textarea placeholder="Large" size="large"></syn-textarea>`,
};

export const Invalid: Story = {
  args: {
    helpText: 'This textarea is required.',
    placeholder: 'Type something',
  },
  parameters: {
    controls: { exclude: ['required'] },
    docs: {
      description: generateStoryDescription('invalid'),
    },
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    try {
      const form = canvasElement.querySelector('form')!;
      const textarea = form.querySelector('syn-textarea') as SynTextarea;
      const button = form.querySelector('syn-button') as SynButton;

      if (button && textarea) {
        // make sure to always fire both events:
        // 1. userEvent.click is needed for storybooks play function to register
        // 2. button.click is needed to really click the button
        // userEvent.click works on native elements only
        await userEvent.click(button);
        button.click();
      }
    } catch (error) {
      console.error('Error in play function:', error);
    }
  },
  render: (args: any) => html`
    <form class="custom-validity">
  ${generateTemplate({
    args,
    constants: [{
      name: 'required',
      type: 'attribute',
      value: true,
    }],
  })}
      <syn-button type="submit" variant="filled">Submit</syn-button>
    </form>
    <style>
    .custom-validity {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    syn-button {
      align-self: flex-start;
    }
    </style>
  `,
};

export const PreventResizing: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'resize'),
      },
    },
  },
  render: () => html`<syn-textarea resize="none"></syn-textarea>`,
};

export const ExpandWithContent: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('textarea', 'resize-auto'),
      },
    },
  },
  render: () => html`<syn-textarea resize="auto" placeholder="Type something"></syn-textarea>`,
};
