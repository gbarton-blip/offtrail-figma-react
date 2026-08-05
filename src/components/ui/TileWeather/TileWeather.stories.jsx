import TileWeather from './TileWeather'

export default {
  title: 'Components/Tiles/TileWeather',
  component: TileWeather,
  argTypes: {
    time: { control: 'text' },
    conditions: { control: 'text' },
    temp: { control: 'text' },
    low: { control: 'text' },
    high: { control: 'text' },
  },
}

export const Default = {
  args: {
    time: '3:43PM',
    conditions: 'Light Rain',
    temp: '65°F',
    low: '42°',
    high: '67°',
  },
}
