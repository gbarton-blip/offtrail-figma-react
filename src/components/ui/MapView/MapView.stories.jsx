import MapView from './MapView'

export default {
  title: 'Components/Map/MapView',
  component: MapView,
  argTypes: {
    variant: {
      control: 'select',
      options: MapView.variants,
    },
    mode: {
      control: 'select',
      options: MapView.modes,
    },
    zoom: {
      control: { type: 'range', min: 1, max: 20, step: 0.5 },
    },
    latitude: { control: 'number' },
    longitude: { control: 'number' },
    interactive: { control: 'boolean' },
    showUserLocation: { control: 'boolean' },
  },
}

export const Full = {
  args: {
    variant: 'full',
    latitude: 34.07,
    longitude: -118.25,
    zoom: 12,
    showUserLocation: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '430px', height: '562px' }}>
        {Story()}
      </div>
    ),
  ],
}

export const Card = {
  args: {
    variant: 'card',
    latitude: 34.07,
    longitude: -118.25,
    zoom: 14,
    interactive: false,
    showUserLocation: true,
  },
}

export const ResponsiveCard = {
  args: Card.args,
  decorators: [
    (Story) => (
      <div style={{ width: 640, maxWidth: '100%' }}>
        {Story()}
      </div>
    ),
  ],
}

export const DesktopFull = {
  args: Full.args,
  decorators: [
    (Story) => (
      <div style={{ width: 960, maxWidth: '100%', height: 620 }}>
        {Story()}
      </div>
    ),
  ],
}

export const WithMarkers = {
  args: {
    variant: 'full',
    latitude: 34.07,
    longitude: -118.25,
    zoom: 12,
    showUserLocation: true,
    markers: [
      { id: '1', lng: -118.27, lat: 34.09 },
      { id: '2', lng: -118.22, lat: 34.06 },
      { id: '3', lng: -118.24, lat: 34.04 },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ width: '430px', height: '562px' }}>
        {Story()}
      </div>
    ),
  ],
}
