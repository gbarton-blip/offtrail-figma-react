import CardGuide from './CardGuide'
const portraitSrc = 'https://static.figma.com/uploads/8eb0c462ff293938b2f59327f4fddb5cceed1b1c'

export default {
  title: 'Components/CardGuide',
  component: CardGuide,
  argTypes: {
    name: { control: 'text' },
    category: { control: 'text' },
    src: { control: 'text' },
  },
}

export const Default = {
  args: {
    src: portraitSrc,
    name: 'Amelia B.',
    category: 'SURFING',
  },
}
