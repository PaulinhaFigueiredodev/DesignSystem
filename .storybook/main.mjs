/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],

  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],

  framework: "@storybook/web-components-vite",

  docs: {
    autodocs: "tag"
  },

  async viteFinal(config) {
    config.esbuild ||= {};
    config.esbuild.target = "es2020";
    return config;
  }
};

export default config;
