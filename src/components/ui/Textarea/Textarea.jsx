import { useState } from 'react'
import './Textarea.css'

export default function Textarea({
  label = 'Label',
  description = 'Description',
  showLabel = true,
  hasDescription = true,
  value,
  defaultValue = '',
  placeholder = 'Value',
  onChange,
  className = '',
}) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const wrapperClasses = ['textarea', className].filter(Boolean).join(' ')

  function handleChange(e) {
    if (!isControlled) {
      setInternalValue(e.target.value)
    }
    onChange?.(e)
  }

  return (
    <div className={wrapperClasses}>
      {showLabel && <label className="textarea__label">{label}</label>}
      <div className="textarea__box">
        <textarea
          className="textarea__value"
          value={currentValue}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
      {hasDescription && <p className="textarea__description">{description}</p>}
    </div>
  )
}
