import './Avatar.css'

const sizeClassMap = {
  80: 'avatar--80',
  56: 'avatar--56',
  40: 'avatar--40',
  32: 'avatar--32',
}

export default function Avatar({
  src,
  alt = '',
  size = 80,
  className = '',
}) {
  const classes = [
    'avatar',
    sizeClassMap[size],
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <img className="avatar__image" src={src} alt={alt} />
    </div>
  )
}

Avatar.sizes = Object.keys(sizeClassMap).map(Number)
