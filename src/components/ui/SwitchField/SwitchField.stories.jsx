import SwitchField from './SwitchField'

export default {
  title: 'Components/Form Fields/SwitchField',
  component: SwitchField,
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