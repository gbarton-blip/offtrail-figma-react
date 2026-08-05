import './CardGuide.css'

export default function CardGuide({
  src,
  name = 'Amelia B.',
  category = 'SURFING',
  className = '',
}) {
  const classes = [
    'card-guide',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <img className="card-guide__image" src={src} alt={name} />
      <div className="card-guide__scrim" />
      <div className="card-guide__info">
        <p className="card-guide__name">{name}</p>
        <p className="card-guide__category">{category}</p>
      </div>
    </div>
  )
}
