import './TileCallout.css'

const variantClassMap = {
  Subtle: 'tile-callout--subtle',
  Highlight: 'tile-callout--highlight',
}

export default function TileCallout({
  label = 'Label',
  value = 'Value',
  variant = 'Subtle',
  className = '',
}) {
  const classes = ['tile-callout', variantClassMap[variant], className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <p className="tile-callout__label">{label}</p>
      <p className="tile-callout__value">{value}</p>
    </div>
  )
}

TileCallout.variants = Object.keys(variantClassMap)
