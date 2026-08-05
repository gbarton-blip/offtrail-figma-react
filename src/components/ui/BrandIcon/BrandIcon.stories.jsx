import BrandIcon from './BrandIcon'

export default {
  title: 'Components/BrandIcon',
  component: BrandIcon,
  argTypes: {
    glyph: {
      control: 'select',
      options: BrandIcon.glyphs,
    },
  },
}

export const Default = {
  args: {
    glyph: 'home',
  },
}

export const AllGlyphs = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      {BrandIcon.glyphs.map((glyph) => (
        <div key={glyph} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <BrandIcon glyph={glyph} />
          <span style={{ fontSize: '10px', color: '#888' }}>{glyph}</span>
        </div>
      ))}
    </div>
  ),
}
