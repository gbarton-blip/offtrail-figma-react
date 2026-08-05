import CardEvent from './CardEvent'
const eventSrc = 'https://static.figma.com/uploads/c4873192a4772ee39f42a888fd7cd802dd8f089b'

export default {
  title: 'Components/CardEvent',
  component: CardEvent,
  argTypes: {
    size: { control: 'select', options: CardEvent.sizes },
    title: { control: 'text' },
    location: { control: 'text' },
    people: { control: 'text' },
    time: { control: 'text' },
    month: { control: 'text' },
    day: { control: 'text' },
    overlay: { control: 'text' },
    src: { control: 'text' },
  },
}

export const Large = {
  args: {
    src: eventSrc,
    size: 'large',
    title: 'Weekend Surf Session',
    location: 'Ventura, CA',
    people: '12',
    time: '6:30AM – 1:00PM',
    month: 'Jun',
    day: '12',
  },
}

export const Small = {
  args: {
    ...Large.args,
    size: 'small',
  },
}

export const WithOverlay = {
  args: {
    ...Large.args,
    overlay: 'Group Surf',
  },
}

export const MobileWidth = {
  args: Large.args,
  decorators: [
    (Story) => (
      <div style={{ width: 390, maxWidth: '100%' }}>
        {Story()}
      </div>
    ),
  ],
}

export const DesktopWidth = {
  args: {
    ...Large.args,
    overlay: 'Group Surf',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 680, maxWidth: '100%' }}>
        {Story()}
      </div>
    ),
  ],
}
