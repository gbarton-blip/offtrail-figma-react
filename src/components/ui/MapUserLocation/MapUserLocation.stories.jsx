import MapUserLocation from './MapUserLocation'

export default {
  title: 'Components/Map/MapUserLocation',
  component: MapUserLocation,
  argTypes: {
    size: {
      control: 'select',
      options: MapUserLocation.sizes,
    },
  },
}

export const Large = {
  args: {
    size: 'large',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const Small = {
  args: {
    size: 'small',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}
