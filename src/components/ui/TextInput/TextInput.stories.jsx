import TextInput from './TextInput'

export default {
  title: 'Components/Form Fields/TextInput',
  component: TextInput,
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    showLabel: { control: 'boolean' },
    showDescription: { control: 'boolean' },
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

export const Empty = {
  args: {
    label: 'Label',
    description: 'Description',
    placeholder: 'Placeholder text',
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
