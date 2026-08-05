import Carousel from './Carousel'
import CardGuide from '../CardGuide/CardGuide'
import Chip from '../Chip/Chip'
const portraitSrc = 'https://static.figma.com/uploads/a760126f639ca34680e11f727e7593119d9c44fe'
const portraitSrc2 = 'https://static.figma.com/uploads/f7e2ba11c6a11c6d7712a56321a70b474a3dbc53'
const portraitSrc3 = 'https://static.figma.com/uploads/8bc77a91af9a6bae4d369a5d2768f26cd66e2c03'

export default {
  title: 'Components/Carousel',
  component: Carousel,
  argTypes: {
    title: { control: 'text' },
    linkLabel: { control: 'text' },
  },
}

export const WithGuides = {
  args: {
    title: 'Guides',
  },
  render: (args) => (
    <Carousel {...args}>
      <CardGuide src={portraitSrc} name="Amelia B." category="SURFING" />
      <CardGuide src={portraitSrc2} name="Teresa M." category="MEDITATION" />
      <CardGuide src={portraitSrc3} name="Karim N." category="HIKING" />
      <CardGuide src={portraitSrc} name="Jordan L." category="CLIMBING" />
    </Carousel>
  ),
}

export const WithChips = {
  args: {
    title: 'Categories',
    linkLabel: 'See all',
  },
  render: (args) => (
    <Carousel {...args}>
      <Chip label="Hiking" active />
      <Chip label="Surfing" />
      <Chip label="Climbing" />
      <Chip label="Meditation" />
      <Chip label="Running" />
      <Chip label="Cycling" />
    </Carousel>
  ),
}

export const MobileWidth = {
  ...WithGuides,
  decorators: [
    (Story) => (
      <div style={{ width: 390, maxWidth: '100%' }}>
        {Story()}
      </div>
    ),
  ],
}

export const DesktopWidth = {
  ...WithGuides,
  decorators: [
    (Story) => (
      <div style={{ width: 760, maxWidth: '100%' }}>
        {Story()}
      </div>
    ),
  ],
}
