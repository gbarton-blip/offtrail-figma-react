import { useState } from 'react'
import BrandIcon from '../BrandIcon/BrandIcon'
import './SearchInput.css'

export default function SearchInput({
  value,
  defaultValue = '',
  placeholder = 'Find things to do...',
  onChange,
  className = '',
}) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue
  const isEmpty = currentValue === ''

  const classes = [
    'search-input',
    isEmpty ? 'search-input--placeholder' : 'search-input--active',
    className,
  ].filter(Boolean).join(' ')

  function handleChange(e) {
    if (!isControlled) {
      setInternalValue(e.target.value)
    }
    onChange?.(e)
  }

  return (
    <div className={classes}>
      <BrandIcon glyph="search" className="search-input__icon" />
      <input
        className="search-input__text"
        type="text"
        value={currentValue}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  )
}
