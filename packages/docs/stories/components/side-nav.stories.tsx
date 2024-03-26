/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import '../../../components/src/components/side-nav/side-nav.js';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import {
  generateScreenshotStory,
  generateStoryDescription,
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
} from '../../src/helpers/component.js';
import { DisableFocusTrap } from '../../src/DisableFocusTrap.js';

const { args: defaultArgs, argTypes } = storybookDefaults('syn-side-nav');
const { overrideArgs } = storybookHelpers('syn-side-nav');
const { generateTemplate } = storybookTemplate('syn-side-nav');

const meta: Meta = {
  args: overrideArgs([], defaultArgs),
  argTypes,
  component: 'syn-side-nav',
  parameters: {
    docs: {
      container: DisableFocusTrap,
      description: {
        component: generateStoryDescription('side-nav', 'default'),
      },
    },
  },
  title: 'Components/syn-side-nav',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: overrideArgs([
    {
      name: 'open',
      type: 'attribute',
      value: true,
    },
    {
      name: 'default',
      type: 'slot',
      value: `
      <syn-nav-item vertical current>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider vertical>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider vertical>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider vertical>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider vertical>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item vertical slot="footer">
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider vertical slot="footer">
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      `,
    },
  ], defaultArgs),
  parameters: {
    controls: {
      disable: false,
    },
    docs: {
      description: {
        story: generateStoryDescription('side-nav', 'default'),
      },
    },
  },
  render: (args: unknown) => html`
  <syn-button class="side-nav-default-toggle">Toggle Side-Nav</syn-button>
  <main style="position: relative; height: 500px;" class="side-nav-default">
    ${generateTemplate({ args })}
  </main> 
  <script type="module">
    const openButtons = document.querySelectorAll('.side-nav-default-toggle');
    
     // Make sure to add each event only once!
     Array.from(openButtons).forEach((btn) => {
      if (!btn.classList.contains('story-loaded')) {
        const sideNav = btn.nextElementSibling.querySelector('.side-nav-default > syn-side-nav');

        btn.addEventListener('click', () => {
          sideNav.open = !sideNav.open;
        });

        btn.classList.add('story-loaded');
      }
    });
  </script>
`,
};

export const Fixed: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('side-nav', 'fixed'),
      },
    },
  },
  render: () => html`
  <syn-button class="side-nav-fixed-toggle">Toggle Side-Nav</syn-button>
  <main class="main">
    <syn-side-nav class="side-nav-fixed" open>
      <syn-nav-item vertical current>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider vertical>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider vertical>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider vertical>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider vertical>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item vertical slot="footer">
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider vertical slot="footer">
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
    </syn-side-nav>
    <div class="content">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   
      Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
      et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,      
    </div>
  </main>
  <script type="module">
    const sideNav = document.querySelector('.side-nav-fixed');
    const toggleButton = document.querySelector('.side-nav-fixed-toggle');
    toggleButton.addEventListener('click', () => {
      sideNav.open = !sideNav.open;
    });
  </script>
  <style>
    .main{
      position: relative;
      height: 500px;
    }

    .content {
      padding: var(--syn-spacing-large);
    }
  </style>
  `,
};

export const Rail: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('side-nav', 'rail'),
      },
    },
  },
  render: () => html`
  <main class="main">
    <syn-side-nav class="side-nav-rail" rail>
      <syn-nav-item vertical current>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider vertical>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider vertical>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider vertical>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider vertical>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item vertical slot="footer">
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider vertical slot="footer">
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
    </syn-side-nav>
    <div class="content">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   
      Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
      et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,      
    </div>
  </main>
  <style>
    .main {
      position: relative;
      height: 500px;
      display: flex;
    }

    .content {
      padding: var(--syn-spacing-large);
    }
  </style>
  `,
};

export const Shrink: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('side-nav', 'shrinking'),
      },
    },
  },
  render: () => html`
  <syn-button class="side-nav-shrink-toggle">Toggle Side-Nav</syn-button>
   <main class="main">
    <syn-side-nav open class="side-nav-shrink" no-focus-trapping>
      <syn-nav-item vertical current>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider vertical>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider vertical>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider vertical>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider vertical>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item vertical slot="footer">
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider vertical slot="footer">
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
    </syn-side-nav>
    <div class="content">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   
      Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
      et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,    
    </div>
  </main>
  <script type="module">
    const sideNav = document.querySelector('.side-nav-shrink');
    const toggleButton = document.querySelector('.side-nav-shrink-toggle');

    toggleButton.addEventListener('click', () => {
      sideNav.open = !sideNav.open;
    });
  </script>
  <style>
    .main {
      position: relative;
      height: 500px;
      display: flex;
    }

    .side-nav-shrink::part(overlay) {
      display: none;
    }
    
    .content {
      padding: var(--syn-spacing-large);
    }
  </style>
  `,
};

export const Indentation: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('side-nav', 'indentation'),
      },
    },
  },
  render: () => html`
  <syn-button class="side-nav-indentation-toggle">Toggle Side-Nav</syn-button>
  <main class="main">
    <syn-side-nav class="side-nav-indentation" open>
      <syn-nav-item vertical open>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
        <syn-nav-item vertical divider slot="children" open>
          Navigation Item
          <syn-nav-item vertical divider slot="children" current>
            Navigation Item
          </syn-nav-item>
          <syn-nav-item vertical divider slot="children">
            Navigation Item
          </syn-nav-item>
        </syn-nav-item>
      </syn-nav-item>
      <syn-nav-item divider vertical>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider vertical>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider vertical>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider vertical>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item vertical slot="footer">
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider vertical slot="footer">
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
    </syn-side-nav>
    <div class="content">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   
      Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
      et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,      
    </div>
  </main>
  <script type="module">
    const sideNav = document.querySelector('.side-nav-indentation');
    const toggleButton = document.querySelector('.side-nav-indentation-toggle');

    toggleButton.addEventListener('click', () => {
      sideNav.open = !sideNav.open;
    });
  </script>
  <style>
    .main{
      position: relative;
      height: 500px;
    }

    .content {
      padding: var(--syn-spacing-large);
    }
  </style>
  `,
};

/* eslint-disable sort-keys */
export const Screenshot: Story = generateScreenshotStory({
  Default,
  Fixed,
  Rail,
  Shrink,
  Indentation,
}, 700);
/* eslint-enable sort-keys */
