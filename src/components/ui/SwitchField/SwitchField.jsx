import { useState } from 'react'
import './SwitchField.css'

export default function SwitchField({
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

  const wrapperClasses = ['switch-field', className].filter(Boolean).join(' ')
  const toggleClasses = ['switch-field__toggle', isActive ? 'switch-field__toggle--active' : ''].filter(Boolean).join(' ')
  const knobClasses = ['switch-field__knob', isActive ? 'switch-field__knob--active' : ''].filter(Boolean).join(' ')

  function handleClick() {
    const next = !isActive
    if (!isControlled) {
      setInternalActive(next)
    }
    onChange?.(next)
  }

  return (
    <div className={wrapperClasses} onClick={handleClick}>
      <div className="switch-field__text">
        <p className="switch-field__label">{label}</p>
        {showDescription && <p className="switch-field__description">{description}</p>}
      </div>
      <button className={toggleClasses} role="switch" aria-checked={isActive} type="button" tabIndex={-1}>
        <span className={knobClasses} />
      </button>
    </div>
  )
}
