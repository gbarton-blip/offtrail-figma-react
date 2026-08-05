import SearchInput from './SearchInput'

export default {
  title: 'Components/Form Fields/SearchInput',
  component: SearchInput,
  argTypes: {
    defaultValue: { control: 'text' },
    placeholder: { control: 'text' },
  },
}

export const Empty = {
  args: {
    placeholder: 'Find things to do...',
  },
}

export const WithValue = {
  args: {
    defaultValue: 'Hiking trails',
    placeholder: 'Find things to do...',
  },
}
