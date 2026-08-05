import Textarea from './Textarea'

export default {
  title: 'Components/Form Fields/Textarea',
  component: Textarea,
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    showLabel: { control: 'boolean' },
    hasDescription: { control: 'boolean' },
    defaultValue: { control: 'text' },
    placeholder: { control: 'text' },
  },
}

export const Default = {
  args: {
    label: 'Label',
    description: 'Description',
  },
}

export const WithoutLabel = {
  args: {
    label: 'Label',
    description: 'Description',
    showLabel: false,
    defaultValue: 'Value',
  },
}

export const WithoutDescription = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    hasDescription: false,
  },
}
