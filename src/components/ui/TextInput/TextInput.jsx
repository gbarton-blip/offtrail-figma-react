import { useState } from 'react'
import './TextInput.css'

export default function TextInput({
  label = 'Label',
  description = 'Description',
  showLabel = true,
  showDescription = true,
  value,
  defaultValue = '',
  placeholder = 'Value',
  onChange,
  className = '',
}) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue
  const isEmpty = currentValue === ''

  const wrapperClasses = ['text-input', className].filter(Boolean).join(' ')
  const inputClasses = [
    'text-input__input',
    isEmpty ? 'text-input--empty' : 'text-input--default',
  ].filter(Boolean).join(' ')

  function handleChange(e) {
    if (!isControlled) {
      setInternalValue(e.target.value)
    }
    onChange?.(e)
  }

  return (
    <div className={wrapperClasses}>
      {showLabel && <label className="text-input__label">{label}</label>}
      <div className={inputClasses}>
        <input
          className="text-input__value"
          type="text"
          value={currentValue}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
      {showDescription && <p className="text-input__description">{description}</p>}
    </div>
  )
}
