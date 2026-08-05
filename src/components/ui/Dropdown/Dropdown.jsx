import { useState, useRef, useEffect } from 'react'
import BrandIcon from '../BrandIcon/BrandIcon'
import './Dropdown.css'

export default function Dropdown({
  label = 'Label',
  description = 'Description',
  showLabel = true,
  showDescription = true,
  options = [],
  value,
  defaultValue,
  placeholder = 'Select an option',
  onChange,
  className = '',
}) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue
  const selectedOption = options.find((o) => o.value === currentValue)

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  function handleSelect(optionValue) {
    if (!isControlled) {
      setInternalValue(optionValue)
    }
    onChange?.(optionValue)
    setOpen(false)
  }

  const wrapperClasses = ['dropdown', className].filter(Boolean).join(' ')
  const inputClasses = [
    'dropdown__input',
    selectedOption ? 'dropdown--active' : 'dropdown--placeholder',
    open ? 'dropdown__input--open' : '',
  ].filter(Boolean).join(' ')

  return (
    <div className={wrapperClasses} ref={ref}>
      {showLabel && <label className="dropdown__label">{label}</label>}
      <div className="dropdown__control">
        <div className={inputClasses} onClick={() => setOpen(!open)}>
          <p className="dropdown__value">
            {selectedOption ? selectedOption.label : placeholder}
          </p>
          <BrandIcon glyph="caret" className={`dropdown__caret ${open ? 'dropdown__caret--open' : ''}`} />
        </div>
        {open && options.length > 0 && (
          <ul className="dropdown__menu">
            {options.map((option) => (
              <li
                key={option.value}
                className={`dropdown__option ${currentValue === option.value ? 'dropdown__option--selected' : ''}`}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      {showDescription && <p className="dropdown__description">{description}</p>}
    </div>
  )
}
