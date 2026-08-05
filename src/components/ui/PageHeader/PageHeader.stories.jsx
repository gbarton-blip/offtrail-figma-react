import PageHeader from './PageHeader'

export default {
  title: 'Components/PageHeader',
  component: PageHeader,
  argTypes: {
    title: { control: 'text' },
    showShareButton: { control: 'boolean' },
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const Default = {
  args: {
    title: 'Heading',
    showShareButton: true,
  },
}

export const WithoutShareButton = {
  args: {
    title: 'Heading',
    showShareButton: false,
  },
}
