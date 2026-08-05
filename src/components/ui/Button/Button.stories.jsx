import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    colour: {
      control: 'select',
      options: Button.colours,
    },
    size: {
      control: 'select',
      options: Button.sizes,
    },
    icon: { control: 'boolean' },
    label: { control: 'text' },
  },
}

export const Brand = {
  args: {
    label: 'Button',
    colour: 'brand',
    size: 'large',
    icon: false,
  },
}

export const TransparentWhite = {
  args: {
    label: 'Button',
    colour: 'transparent-white',
    size: 'large',
    icon: false,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const TransparentBlack = {
  args: {
    label: 'Button',
    colour: 'transparent-black',
    size: 'large',
    icon: false,
  },
}

export const WithIcon = {
  args: {
    label: 'Button',
    colour: 'brand',
    size: 'large',
    icon: true,
  },
}

export const Medium = {
  args: {
    label: 'Button',
    colour: 'brand',
    size: 'medium',
    icon: false,
  },
}
