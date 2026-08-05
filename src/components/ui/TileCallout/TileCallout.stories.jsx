import TileCallout from './TileCallout'

export default {
  title: 'Components/Tiles/TileCallout',
  component: TileCallout,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    variant: { control: 'select', options: TileCallout.variants },
  },
}

export const Subtle = {
  args: {
    label: 'Elevation',
    value: '2,400 ft',
    variant: 'Subtle',
  },
}

export const Highlight = {
  args: {
    label: 'Elevation',
    value: '2,400 ft',
    variant: 'Highlight',
  },
}
