import { useState } from 'react'
import Icon from '../Icon/Icon'
import './Checkbox.css'

export default function Checkbox({
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

  const wrapperClasses = ['checkbox', className].filter(Boolean).join(' ')
  const boxClasses = ['checkbox__box', isActive ? 'checkbox__box--active' : ''].filter(Boolean).join(' ')

  function handleClick() {
    const next = !isActive
    if (!isControlled) {
      setInternalActive(next)
    }
    onChange?.(next)
  }

  return (
    <div className={wrapperClasses} onClick={handleClick}>
      <div className="checkbox__row">
        <div className={boxClasses}>
          {isActive && <Icon glyph="check" className="checkbox__check" />}
        </div>
        <p className="checkbox__label">{label}</p>
      </div>
      {showDescription && (
        <div className="checkbox__description-row">
          <p className="checkbox__description">{description}</p>
        </div>
      )}
    </div>
  )
}
