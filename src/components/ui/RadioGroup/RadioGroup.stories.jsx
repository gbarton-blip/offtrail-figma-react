import RadioGroup from './RadioGroup'

const sampleOptions = [
  { value: 'one', label: 'Option One', description: 'Description for option one' },
  { value: 'two', label: 'Option Two', description: 'Description for option two' },
  { value: 'three', label: 'Option Three', description: 'Description for option three' },
]

export default {
  title: 'Components/Form Fields/RadioGroup',
  component: RadioGroup,
  argTypes: {
    showDescriptions: { control: 'boolean' },
  },
}

export const Default = {
  args: {
    options: sampleOptions,
  },
}
