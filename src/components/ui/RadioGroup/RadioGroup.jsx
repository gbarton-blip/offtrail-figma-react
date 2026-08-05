import { useState } from 'react'
import Radio from '../Radio/Radio'
import './RadioGroup.css'

export default function RadioGroup({
  options = [],
  value,
  defaultValue,
  showDescriptions = true,
  onChange,
  className = '',
}) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  function handleSelect(optionValue) {
    if (!isControlled) {
      setInternalValue(optionValue)
    }
    onChange?.(optionValue)
  }

  return (
    <div className={['radio-group', className].filter(Boolean).join(' ')}>
      {options.map((option) => (
        <Radio
          key={option.value}
          label={option.label}
          description={option.description}
          showDescription={showDescriptions}
          active={currentValue === option.value}
          onChange={() => handleSelect(option.value)}
        />
      ))}
    </div>
  )
}
