import Radio from './Radio'

export default {
  title: 'Components/Form Fields/Radio',
  component: Radio,
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    defaultActive: { control: 'boolean' },
    showDescription: { control: 'boolean' },
  },
}

export const Default = {
  args: {
    label: 'Label',
    description: 'Description',
    showDescription: true,
  },
}