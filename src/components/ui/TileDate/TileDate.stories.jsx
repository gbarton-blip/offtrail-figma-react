import TileDate from './TileDate'

export default {
  title: 'Components/Tiles/TileDate',
  component: TileDate,
  argTypes: {
    month: { control: 'text' },
    day: { control: 'text' },
  },
}

export const Default = {
  args: {
    month: 'Jun',
    day: '28',
  },
}
