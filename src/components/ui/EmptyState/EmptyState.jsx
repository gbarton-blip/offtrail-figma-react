import './EmptyState.css'

export default function EmptyState({
  message = 'Something went wrong',
  action = 'Refresh or try again',
  className = '',
}) {
  const classes = ['empty-state', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <p className="empty-state__message">{message}</p>
      <p className="empty-state__action">{action}</p>
    </div>
  )
}
