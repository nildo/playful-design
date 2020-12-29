module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config) => {
    // remove default css rule from storybook
    config.module.rules = config.module.rules.filter((f) => f.test.toString() !== '/\\.css$/');

    // push our custom easy one
    config.module.rules.push({
      test: /\.s?css$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: { modules: true },
        },
        {
          loader: 'sass-loader',
        },
      ],
    });

    // Return the altered config
    return config;
  },
}