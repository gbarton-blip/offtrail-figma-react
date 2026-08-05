import Avatar from './Avatar'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: 'select',
      options: Avatar.sizes,
    },
    src: { control: 'text' },
    alt: { control: 'text' },
  },
}

export const Size80 = {
  args: {
    src: 'https://i.pravatar.cc/160',
    alt: 'User avatar',
    size: 80,
  },
}

export const Size56 = {
  args: {
    src: 'https://i.pravatar.cc/112',
    alt: 'User avatar',
    size: 56,
  },
}

export const Size40 = {
  args: {
    src: 'https://i.pravatar.cc/80',
    alt: 'User avatar',
    size: 40,
  },
}

export const Size32 = {
  args: {
    src: 'https://i.pravatar.cc/64',
    alt: 'User avatar',
    size: 32,
  },
}
