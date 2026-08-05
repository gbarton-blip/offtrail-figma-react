import TileCommunity from './TileCommunity'

export default {
  title: 'Components/Tiles/TileCommunity',
  component: TileCommunity,
  argTypes: {
    activity: { control: 'text' },
    count: { control: 'text' },
  },
}

export const Default = {
  args: {
    activity: 'Meditation',
    count: '64',
  },
}
