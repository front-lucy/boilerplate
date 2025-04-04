import { mergeConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

export default {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)', '../src/**/*.mdx'],
  addons: ['@storybook/addon-essentials'],
  viteFinal: async config => {
    console.log('✅ Storybook viteFinal is running')
    return mergeConfig(config, {
      plugins: [svgr()],
    })
  },
}
