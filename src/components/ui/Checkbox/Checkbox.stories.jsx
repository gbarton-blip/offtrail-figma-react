import Checkbox from './Checkbox'

export default {
  title: 'Components/Form Fields/Checkbox',
  component: Checkbox,
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