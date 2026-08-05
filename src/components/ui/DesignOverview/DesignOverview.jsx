import './DesignOverview.css'

const primitiveColors = [
  {
    name: 'Orange',
    swatches: [
      { label: '100', value: '#732c00', var: '--otds-orange-100' },
      { label: '200', value: '#9e4700', var: '--otds-orange-200' },
      { label: '300', value: '#e76f00', var: '--otds-orange-300' },
      { label: '400', value: '#ff932e', var: '--otds-orange-400' },
      { label: '500', value: '#ffbf58', var: '--otds-orange-500' },
      { label: '600', value: '#efe5cd', var: '--otds-orange-600' },
    ],
  },
  {
    name: 'Blue',
    swatches: [
      { label: '100', value: '#2c3039', var: '--otds-blue-100' },
      { label: '200', value: '#424857', var: '--otds-blue-200' },
      { label: '300', value: '#5f788e', var: '--otds-blue-300' },
      { label: '400', value: '#86a8c0', var: '--otds-blue-400' },
      { label: '500', value: '#bbe4ff', var: '--otds-blue-500' },
      { label: '600', value: '#d2edff', var: '--otds-blue-600' },
    ],
  },
  {
    name: 'Grey',
    swatches: [
      { label: '100', value: '#353535', var: '--otds-grey-100' },
      { label: '200', value: '#5a5a5a', var: '--otds-grey-200' },
      { label: '300', value: '#848484', var: '--otds-grey-300' },
      { label: '400', value: '#aaaaaa', var: '--otds-grey-400' },
      { label: '500', value: '#d4d4d4', var: '--otds-grey-500' },
      { label: '600', value: '#e8e8e8', var: '--otds-grey-600' },
    ],
  },
]

const semanticColors = [
  { label: 'color-primary', var: '--otds-color-primary' },
  { label: 'color-secondary', var: '--otds-color-secondary' },
  { label: 'color-tertiary', var: '--otds-color-tertiary' },
  { label: 'color-dim', var: '--otds-color-dim' },
  { label: 'color-brand-primary', var: '--otds-color-brand-primary' },
  { label: 'color-brand-secondary', var: '--otds-color-brand-secondary' },
  { label: 'color-brand-tertiary', var: '--otds-color-brand-tertiary' },
  { label: 'color-alt', var: '--otds-color-alt' },
  { label: 'color-on-reverse', var: '--otds-color-on-reverse' },
  { label: 'color-on-reverse-secondary', var: '--otds-color-on-reverse-secondary' },
  { label: 'color-border-primary', var: '--otds-color-border-primary' },
  { label: 'color-border-secondary', var: '--otds-color-border-secondary' },
  { label: 'bg-brand-primary', var: '--otds-bg-brand-primary' },
  { label: 'bg-brand-secondary', var: '--otds-bg-brand-secondary' },
  { label: 'bg-on-brand', var: '--otds-bg-on-brand' },
]

const otherColors = [
  {
    name: 'Black',
    swatches: [
      { label: '100', value: '#10071b', var: '--otds-black-100' },
      { label: '200', value: 'rgba(16, 7, 27, 0.8)', var: '--otds-black-200' },
      { label: '300', value: 'rgba(16, 7, 27, 0.6)', var: '--otds-black-300' },
      { label: '400', value: 'rgba(16, 7, 27, 0.4)', var: '--otds-black-400' },
      { label: '500', value: 'rgba(16, 7, 27, 0.2)', var: '--otds-black-500' },
      { label: '600', value: 'rgba(16, 7, 27, 0.09)', var: '--otds-black-600' },
    ],
  },
  {
    name: 'White',
    swatches: [
      { label: '100', value: '#ffffff', var: '--otds-white-100' },
      { label: '200', value: 'rgba(255, 255, 255, 0.8)', var: '--otds-white-200' },
      { label: '300', value: 'rgba(255, 255, 255, 0.6)', var: '--otds-white-300' },
      { label: '400', value: 'rgba(255, 255, 255, 0.4)', var: '--otds-white-400' },
      { label: '500', value: 'rgba(255, 255, 255, 0.2)', var: '--otds-white-500' },
      { label: '600', value: 'rgba(255, 255, 255, 0.1)', var: '--otds-white-600' },
    ],
  },
]

const typeStyles = [
  {
    name: 'display-xxlarge',
    className: 'type-display-xxlarge',
    details: 'Workbench / 88px / 400 / uppercase',
    sample: 'Offtrail',
  },
  {
    name: 'display-xlarge',
    className: 'type-display-xlarge',
    details: 'Workbench / 58px / 400 / uppercase',
    sample: 'Offtrail',
  },
  {
    name: 'display-large',
    className: 'type-display-large',
    details: 'Workbench / 40px / 400 / uppercase',
    sample: 'Offtrail',
  },
  {
    name: 'display-medium',
    className: 'type-display-medium',
    details: 'Workbench / 24px / 400 / uppercase',
    sample: 'Offtrail',
  },
  {
    name: 'display-small',
    className: 'type-display-small',
    details: 'Workbench / 16px / 400 / uppercase',
    sample: 'Offtrail',
  },
  {
    name: 'heading-1',
    className: 'type-heading-1',
    details: 'Inter / 28px / 500 / -2px tracking',
    sample: 'Sunset Run',
  },
  {
    name: 'heading-2',
    className: 'type-heading-2',
    details: 'Inter / 18px / 500',
    sample: 'Trail Run & Social Jog',
  },
  {
    name: 'body-large',
    className: 'type-body-large',
    details: 'Inter / 16px / 400',
    sample: '649 Highway Trail, Red Rock',
  },
  {
    name: 'body-large-strong',
    className: 'type-body-large-strong',
    details: 'Inter / 16px / 600',
    sample: '649 Highway Trail, Red Rock',
  },
  {
    name: 'body-medium',
    className: 'type-body-medium',
    details: 'Inter / 14px / 400',
    sample: '649 Highway Trail, Red Rock',
  },
  {
    name: 'caption',
    className: 'type-caption',
    details: 'Geist Mono / 14px / 400 / uppercase',
    sample: '3:00pm \u2013 6:00PM',
  },
]

const variables = [
  {
    category: 'Font Families',
    items: [
      { name: '--otds-font-family-headline', value: "'Workbench', sans-serif" },
      { name: '--otds-font-family-sans', value: "'Inter', sans-serif" },
      { name: '--otds-font-family-mono', value: "'Geist Mono', monospace" },
    ],
  },
  {
    category: 'Font Sizes',
    items: [
      { name: '--otds-size-font-10xlarge', value: '88px' },
      { name: '--otds-size-font-7xlarge', value: '58px' },
      { name: '--otds-size-font-display', value: '40px' },
      { name: '--otds-size-font-3xlarge', value: '28px' },
      { name: '--otds-size-font-xlarge', value: '24px' },
      { name: '--otds-size-font-large', value: '18px' },
      { name: '--otds-size-font-medium', value: '16px' },
      { name: '--otds-size-font-small', value: '14px' },
    ],
  },
  {
    category: 'Padding',
    items: [
      { name: '--otds-size-padding-xxsmall', value: '4px' },
      { name: '--otds-size-padding-xsmall', value: '8px' },
      { name: '--otds-size-padding-small', value: '12px' },
      { name: '--otds-size-padding-medium', value: '16px' },
      { name: '--otds-size-padding-large', value: '24px' },
    ],
  },
  {
    category: 'Gap',
    items: [
      { name: '--otds-size-gap-xsmall', value: '4px' },
      { name: '--otds-size-gap-small', value: '8px' },
      { name: '--otds-size-gap-medium', value: '16px' },
      { name: '--otds-size-gap-large', value: '24px' },
      { name: '--otds-size-gap-xlarge', value: '40px' },
      { name: '--otds-size-gap-xxlarge', value: '56px' },
    ],
  },
  {
    category: 'Corner Radius',
    items: [
      { name: '--otds-size-corner-small', value: '4px' },
      { name: '--otds-size-corner-medium', value: '8px' },
      { name: '--otds-size-corner-large', value: '12px' },
      { name: '--ads-size-corner', value: '32px' },
      { name: '--otds-size-corner-full', value: '999px' },
    ],
  },
  {
    category: 'Borders',
    items: [
      { name: '--otds-size-border', value: '0.5px' },
      { name: '--otds-size-border-bottom', value: '1px' },
      { name: '--ads-size-border', value: '1px' },
      { name: '--sds-size-stroke-border', value: '1px' },
    ],
  },
]

function ColorPalette({ palette }) {
  return (
    <div className="color-group">
      <p className="color-group-label">{palette.name}</p>
      <div className="color-row">
        {palette.swatches.map((swatch) => (
          <div className="color-swatch" key={swatch.var}>
            <div
              className="color-swatch-box"
              style={{ backgroundColor: `var(${swatch.var})` }}
            />
            <span className="color-swatch-label">{swatch.label}</span>
            <span className="color-swatch-hex">{swatch.var}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function SemanticSwatch({ swatch }) {
  return (
    <div className="color-swatch" key={swatch.var}>
      <div
        className="color-swatch-box"
        style={{ backgroundColor: `var(${swatch.var})` }}
      />
      <span className="color-swatch-label">{swatch.label}</span>
      <span className="color-swatch-hex">{swatch.var}</span>
    </div>
  )
}

function TypeSample({ style }) {
  return (
    <div className="type-sample">
      <div className="type-sample-meta">
        <p className="type-sample-name">{style.name}</p>
        <p className="type-sample-details">{style.details}</p>
      </div>
      <div className={`type-sample-preview ${style.className}`}>
        {style.sample}
      </div>
    </div>
  )
}

export default function TokenOverview() {
  return (
    <div className="design-overview">
      <h1>Token Overview</h1>

      <section className="color-section">
        <h2>Primitive Colors</h2>
        {primitiveColors.map((palette) => (
          <ColorPalette key={palette.name} palette={palette} />
        ))}
      </section>

      <section className="color-section">
        <h2>Semantic Colors</h2>
        <div className="color-row">
          {semanticColors.map((swatch) => (
            <SemanticSwatch key={swatch.var} swatch={swatch} />
          ))}
        </div>
      </section>

      <section className="color-section">
        <h2>Other Colors</h2>
        {otherColors.map((palette) => (
          <ColorPalette key={palette.name} palette={palette} />
        ))}
      </section>

      <section className="type-section">
        <h2>Type Styles</h2>
        {typeStyles.map((style) => (
          <TypeSample key={style.name} style={style} />
        ))}
      </section>

      <section className="variables-section">
        <h2>Variables</h2>
        {variables.map((group) => (
          <div key={group.category}>
            <h3 className="var-category">{group.category}</h3>
            <table className="var-table">
              <thead>
                <tr>
                  <th>Variable</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {group.items.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </section>
    </div>
  )
}
