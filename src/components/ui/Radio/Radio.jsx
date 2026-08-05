import { useState } from 'react'
import './Radio.css'

export default function Radio({
  label = 'Label',
  description = 'Description',
  active,
  defaultActive = false,
  showDescription = true,
  onChange,
  className = '',
}) {
  const [internalActive, setInternalActive] = useState(defaultActive)
  const isControlled = active !== undefined
  const isActive = isControlled ? active : internalActive

  const wrapperClasses = ['radio', className].filter(Boolean).join(' ')
  const circleClasses = ['radio__circle', isActive ? 'radio__circle--active' : ''].filter(Boolean).join(' ')

  function handleClick() {
    const next = !isActive
    if (!isControlled) {
      setInternalActive(next)
    }
    onChange?.(next)
  }

  return (
    <div className={wrapperClasses} onClick={handleClick}>
      <div className={circleClasses}>
        {isActive && <span className="radio__dot" />}
      </div>
      <div className="radio__text">
        <p className="radio__label">{label}</p>
        {showDescription && <p className="radio__description">{description}</p>}
      </div>
    </div>
  )
}
