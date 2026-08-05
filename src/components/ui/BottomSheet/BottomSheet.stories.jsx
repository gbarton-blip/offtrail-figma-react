import BottomSheet from './BottomSheet'
import CardEvent from '../CardEvent/CardEvent'
const eventSrc = 'https://static.figma.com/uploads/c4873192a4772ee39f42a888fd7cd802dd8f089b'

export default {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  argTypes: {
    size: { control: 'select', options: BottomSheet.sizes },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#10071b' }],
    },
  },
}

const sheetContent = (
  <div style={{ display: 'grid', gap: 16, padding: '0 16px' }}>
    <CardEvent
      size="small"
      src={eventSrc}
      title="Weekend Surf Session"
      location="Ventura, CA"
      people="12"
      time="6:30AM - 1:00PM"
      month="Jun"
      day="12"
    />
  </div>
)

export const MobilePanel = {
  args: {
    size: 'Default',
    children: sheetContent,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 390, maxWidth: '100%', margin: '0 auto' }}>
        {Story()}
      </div>
    ),
  ],
}

export const DesktopPanel = {
  args: {
    size: 'Tall',
    children: sheetContent,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 400, height: 700, borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
        {Story()}
      </div>
    ),
  ],
}
