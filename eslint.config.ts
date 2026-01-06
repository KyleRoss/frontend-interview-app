import { defineConfig, globalIgnores } from 'eslint/config';
import { appendFiles } from '@findoctave/eslint-config';
import octaveBrowserConfig from '@findoctave/eslint-config/browser';
import octaveReactConfig from '@findoctave/eslint-config-react';
import { configure as configureTypeScriptConfig } from '@findoctave/eslint-config-typescript';
import octaveVitestConfig from '@findoctave/eslint-config-vitest';


export default defineConfig([
  // Global ignores
  globalIgnores([
    'node_modules',
    'dist',
    '.vscode',
    'public',
  ]),
  // Standard JS Config (browser)
  ...octaveBrowserConfig,
  // TypeScript Config
  ...configureTypeScriptConfig({
    project: 'tsconfig.json',
  }, {
    alwaysTryTypes: true,
  }),
  // React Config
  ...octaveReactConfig,
  // Vitest Config
  ...appendFiles(octaveVitestConfig, ['src/setupTests.ts']) as unknown as Array<Record<string, unknown>>,
  {
    rules: {
      'import/order': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
    },
  },
]);
