import './Toast.css'

export default function Toast({
  message = 'Notification message',
  className = '',
}) {
  const classes = ['toast', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <p className="toast__message">{message}</p>
    </div>
  )
}
