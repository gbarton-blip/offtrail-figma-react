import Icon from './Icon'

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    glyph: {
      control: 'select',
      options: Icon.glyphs,
    },
  },
}

export const Default = {
  args: {
    glyph: 'x',
  },
}

export const AllGlyphs = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      {Icon.glyphs.map((glyph) => (
        <div key={glyph} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <Icon glyph={glyph} />
          <span style={{ fontSize: '10px', color: '#888' }}>{glyph}</span>
        </div>
      ))}
    </div>
  ),
}
