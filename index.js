import { defineConfig } from "oxfmt";

export default defineConfig({
  $schema: "./node_modules/oxfmt/configuration_schema.json",
  sortTailwindcss: {
    functions: ["clsx", "cn", "cva"],
  },
  overrides: [
    {
      files: ["**/*.md", "**/*.mdx"],
      options: {
        proseWrap: "always",
      },
    },
    {
      files: ["**/.changeset/*.md", "CHANGELOG.md"],
      options: {
        proseWrap: "never",
      },
    },
  ],
});
