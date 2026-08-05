import TileLocation from './TileLocation'

export default {
  title: 'Components/Tiles/TileLocation',
  component: TileLocation,
  argTypes: {
    location: { control: 'text' },
    latitude: { control: 'number' },
    longitude: { control: 'number' },
    mode: { control: 'select', options: ['Light', 'Dark'] },
  },
}

export const Default = {
  args: {
    location: 'Ventura, CA',
    latitude: 34.27,
    longitude: -119.23,
    mode: 'Dark',
  },
}
