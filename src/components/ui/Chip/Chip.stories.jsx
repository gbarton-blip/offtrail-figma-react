import Chip from './Chip'

export default {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
    active: { control: 'boolean' },
    label: { control: 'text' },
  },
}

export const Default = {
  args: {
    label: 'Tag',
    active: true,
  },
}

