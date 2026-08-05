import './BottomSheet.css'

const sizeClassMap = {
  Default: 'bottom-sheet--default',
  Tall: 'bottom-sheet--tall',
}

export default function BottomSheet({
  size = 'Default',
  children = null,
  className = '',
}) {
  const classes = ['bottom-sheet', sizeClassMap[size], className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <div className="bottom-sheet__handle-bar">
        <div className="bottom-sheet__handle" />
      </div>
      <div className="bottom-sheet__content">
        {children}
      </div>
    </div>
  )
}

BottomSheet.sizes = Object.keys(sizeClassMap)
