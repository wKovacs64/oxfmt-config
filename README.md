# @wkovacs64/oxfmt-config

This is my personal [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html) configuration.

[![npm Version](https://img.shields.io/npm/v/@wkovacs64/oxfmt-config.svg?style=for-the-badge)](https://www.npmjs.com/package/@wkovacs64/oxfmt-config)
[![Build Status](https://img.shields.io/badge/CI-GitHub%20Actions-success?logo=github&style=for-the-badge)](https://github.com/wKovacs64/oxfmt-config/actions?query=workflow%3Aci)

### Install

```sh
pnpm add --save-dev @wkovacs64/oxfmt-config oxfmt
```

### IDE Integration with Oxfmt

If you use VS Code (or a fork), install the official
[Oxc extension](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode) and verify the
extension ID is `oxc.oxc-vscode`.

You can commit a repo-level `.vscode/extensions.json` so VS Code recommends the extension:

```json
{
  "recommendations": ["oxc.oxc-vscode"]
}
```

You can also commit a repo-level `.vscode/settings.json` so contributors get the same formatter by
default:

```json
{
  "editor.defaultFormatter": "oxc.oxc-vscode",
  "editor.formatOnSave": true,
  "editor.formatOnSaveMode": "file",
  "[javascript]": {
    "editor.defaultFormatter": "oxc.oxc-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "oxc.oxc-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "oxc.oxc-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "oxc.oxc-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "oxc.oxc-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "oxc.oxc-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "oxc.oxc-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "oxc.oxc-vscode"
  },
  "[yaml]": {
    "editor.defaultFormatter": "oxc.oxc-vscode"
  }
}
```

### Usage

Create an `oxfmt.config.ts` file in your project root:

```js
import { defineConfig } from "oxfmt";
import baseConfig from "@wkovacs64/oxfmt-config";

export default defineConfig({
  ...baseConfig,
  // overrides here
});
```

Add scripts to `package.json`:

```json
{
  "scripts": {
    "format": "oxfmt",
    "format:check": "oxfmt --check"
  }
}
```

### Customization

In JavaScript/TypeScript config files, customize by importing and spreading the shared config:

```js
import { defineConfig } from "oxfmt";
import baseConfig from "@wkovacs64/oxfmt-config";

export default defineConfig({
  ...baseConfig,
  ignorePatterns: [
    ...(baseConfig.ignorePatterns ?? []),
    "my-custom-stuff-to-ignore-in-addition-to-the-defaults/**",
  ],
  sortTailwindcss: {
    ...baseConfig.sortTailwindcss,
    functions: [...(baseConfig.sortTailwindcss?.functions ?? []), "tw"],
  },
});
```
