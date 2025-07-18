import tailwindcss from '@tailwindcss/vite';

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@chromatic-com/storybook', '@storybook/addon-docs', '@storybook/addon-a11y', '@storybook/addon-vitest'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async config => {
    // tailwindcss 플러그인 추가
    config.plugins = [...(config.plugins || []), tailwindcss()];
    return config;
  },
};
export default config;
