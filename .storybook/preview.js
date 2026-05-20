import '../src/index.css'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'pink',
      values: [
        { name: 'pink', value: '#fff5f7' },
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
}

export default preview
