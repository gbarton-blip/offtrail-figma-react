import Dropdown from './Dropdown'

const sampleOptions = [
  { value: 'one', label: 'Option One' },
  { value: 'two', label: 'Option Two' },
  { value: 'three', label: 'Option Three' },
]

export default {
  title: 'Components/Form Fields/Dropdown',
  component: Dropdown,
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    showLabel: { control: 'boolean' },
    showDescription: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
}

export const Default = {
  args: {
    label: 'Label',
    description: 'Description',
    options: sampleOptions,
  },
}
