import { useState, useEffect } from 'react'
import WidgetCompass from './WidgetCompass'

export default {
  title: 'Components/WidgetCompass',
  component: WidgetCompass,
  parameters: {
    backgrounds: { default: 'dark' },
  },
  argTypes: {
    bearing: {
      control: { type: 'range', min: 0, max: 359, step: 1 },
    },
    live: {
      control: 'boolean',
    },
  },
}

export const Default = {
  args: {
    bearing: 355,
  },
}

export const North = {
  args: {
    bearing: 0,
  },
}

export const East = {
  args: {
    bearing: 90,
  },
}

export const South = {
  args: {
    bearing: 180,
  },
}

export const West = {
  args: {
    bearing: 270,
  },
}

export const Animated = {
  parameters: { controls: { disable: true } },
  render: () => {
    const [bearing, setBearing] = useState(0)
    useEffect(() => {
      const id = setInterval(() => setBearing(b => (b + 1) % 360), 50)
      return () => clearInterval(id)
    }, [])
    return <WidgetCompass bearing={bearing} />
  },
}

// Use live={true} on a real device (requires HTTPS) to read from the phone's magnetometer.
// On iOS, tapping "Enable Compass" will trigger the system permission prompt.
export const Live = {
  args: {
    live: true,
    bearing: 0,
  },
}
