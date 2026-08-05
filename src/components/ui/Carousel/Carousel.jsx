import { useRef, useState, useEffect, useCallback } from 'react'
import './Carousel.css'

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Carousel({
  title,
  linkLabel = 'View all',
  children,
  className = '',
  showControls = false,
}) {
  const trackRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateScrollState = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }, [])

  useEffect(() => {
    if (!showControls) return
    const el = trackRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener('scroll', updateScrollState)
    const ro = new ResizeObserver(updateScrollState)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', updateScrollState)
      ro.disconnect()
    }
  }, [showControls, updateScrollState])

  const scroll = (direction) => {
    const el = trackRef.current
    if (!el) return
    const scrollAmount = el.clientWidth * 0.75
    el.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
  }

  const classes = [
    'carousel',
    showControls && 'carousel--has-controls',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {title && (
        <div className="carousel__header">
          <p className="carousel__title">{title}</p>
          {showControls ? (
            <div className="carousel__controls">
              <button
                className="carousel__control"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
              >
                <ChevronLeft />
              </button>
              <button
                className="carousel__control"
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll right"
              >
                <ChevronRight />
              </button>
            </div>
          ) : (
            <p className="carousel__link">{linkLabel}</p>
          )}
        </div>
      )}
      <div className="carousel__track" ref={showControls ? trackRef : undefined}>
        {children}
      </div>
    </div>
  )
}
