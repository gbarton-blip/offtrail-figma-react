import './Facepile.css'

export default function Facepile({ children, className = '' }) {
  const classes = ['facepile', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {children}
    </div>
  )
}
