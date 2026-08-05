import BrandIcon from '../BrandIcon/BrandIcon'
import './IconButton.css'

export default function IconButton({
  glyph = 'caret',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
  ...props
}) {
  const classes = [
    'icon-button',
    `icon-button--${variant}`,
    `icon-button--${size}`,
    disabled && 'icon-button--disabled',
    className,
  ].filter(Boolean).join(' ')

  return (
    <button className={classes} disabled={disabled} {...props}>
      <BrandIcon glyph={glyph} />
    </button>
  )
}

IconButton.variants = ['primary', 'outline', 'neutral']
IconButton.sizes = ['medium', 'small']
