import { useState } from 'react'
import './Chip.css'

export default function Chip({
  label = 'Tag',
  active: activeProp,
  className = '',
  onClick,
}) {
  const [internalActive, setInternalActive] = useState(activeProp ?? false)
  const active = activeProp !== undefined ? activeProp : internalActive

  const classes = [
    'chip',
    active ? 'chip--active' : 'chip--inactive',
    className,
  ].filter(Boolean).join(' ')

  return (
    <button
      className={classes}
      type="button"
      onClick={() => {
        onClick?.()
        if (activeProp === undefined) setInternalActive((a) => !a)
      }}
    >
      {label}
    </button>
  )
}
