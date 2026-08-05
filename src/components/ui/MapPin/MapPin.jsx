import './MapPin.css'

export default function MapPin({ className = '' }) {
  const classes = ['map-pin', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <svg
        className="map-pin__icon"
        width="20"
        height="37"
        viewBox="0 0 20.001 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.001 0C15.5236 0.000263878 20.001 4.47732 20.001 10C20.001 12.4223 19.1396 14.6434 17.7065 16.3738C14.7425 19.9526 10.501 23.6373 10.501 28.2841V36.5C10.501 36.7761 10.2771 37 10.001 37C9.72483 37 9.50098 36.7761 9.50098 36.5V28.2845C9.50098 23.6376 5.25915 19.9529 2.29486 16.3742C0.861519 14.6438 0 12.4225 0 10C0 4.47715 4.47813 0 10.001 0Z"
          fill="var(--otds-orange-400, #FF932E)"
        />
        <circle
          cx="10"
          cy="10"
          r="5.4545"
          fill="var(--otds-orange-600, #EFE5CD)"
        />
      </svg>
    </div>
  )
}
