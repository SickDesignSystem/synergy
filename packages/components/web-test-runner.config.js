// ---------------------------------------------------------------------
// 🔒 AUTOGENERATED BY VENDORISM
// Removing this comment will prevent it from being managed by it.
// ---------------------------------------------------------------------

/* eslint-disable */
import { esbuildPlugin } from '@web/dev-server-esbuild';
import { globbySync } from 'globby';
import { playwrightLauncher } from '@web/test-runner-playwright';
import synTestPlugins from './scripts/tests/index.js';

export default {
  rootDir: '.',
  files: 'src/**/*.test.ts', // "default" group
  concurrentBrowsers: 3,
  nodeResolve: {
    exportConditions: ['production', 'default']
  },
  testFramework: {
    config: {
      timeout: 3000,
      retries: 1
    }
  },
  plugins: [
    ...synTestPlugins.plugins,
    esbuildPlugin({
      ts: true,
      target: 'es2020'
    })
  ],
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
    // Firefox started failing randomly so we're temporarily disabling it here. This could be a rogue test, not really
    // sure what's happening.
    // playwrightLauncher({ product: 'firefox' }),
    playwrightLauncher({ product: 'webkit' })
  ],
  testRunnerHtml: testFramework => `
    <html lang="en-US">
      <head></head>
      <body>
        <link rel="stylesheet" href="node_modules/@synergy-design-system/tokens/dist/themes/light.css">
        <script>
          window.process = {env: { NODE_ENV: "production" }}
        </script>
        <script type="module" src="${testFramework}"></script>
      </body>
    </html>
  `,
  // Create a named group for every test file to enable running single tests. If a test file is `split-panel.test.ts`
  // then you can run `npm run test -- --group split-panel` to run only that component's tests.
  groups: globbySync('src/**/*.test.ts').map(path => {
    const groupName = path.match(/^.*\/(?<fileName>.*)\.test\.ts/).groups.fileName;
    return {
      name: groupName,
      files: path
    };
  })
};
