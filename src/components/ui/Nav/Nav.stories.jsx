import Nav from './Nav'

export default {
  title: 'Components/Nav',
  component: Nav,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#10071b' },
      ],
    },
  },
}

export const Default = {}

export const MobileViewport = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 390, maxWidth: '100%', margin: '0 auto' }}>
        {Story()}
      </div>
    ),
  ],
}

export const DesktopViewport = {
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
  decorators: [
    (Story) => (
      <div style={{ height: 700 }}>
        {Story()}
      </div>
    ),
  ],
}
