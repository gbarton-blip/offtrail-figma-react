import './Icon.css'

const glyphs = {
  x: {
    path: (
      <>
        <path d="M12.5 8l-4 4m0-4l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  check: {
    path: (
      <>
        <path d="M5.5 8.5l2.5 2.5 4-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  },
  info: {
    path: (
      <>
        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.25" fill="none" />
        <path d="M8 7.5v3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="8" cy="5.5" r="0.75" fill="currentColor" />
      </>
    ),
  },
  warning: {
    path: (
      <>
        <path d="M8 2.5L1.5 13.5h13L8 2.5z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" fill="none" />
        <path d="M8 6.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="8" cy="11.5" r="0.75" fill="currentColor" />
      </>
    ),
  },
  plus: {
    path: (
      <>
        <path d="M8 4v8M4 8h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  out: {
    path: (
      <>
        <path d="M6 4H4v8h8v-2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M8 8l4-4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        <path d="M9.5 4H12v2.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  },
  'arrow-up-right': {
    path: (
      <>
        <path d="M4.5 11.5L11.5 4.5M7 4.5h4.5V9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  },
  question: {
    path: (
      <>
        <path d="M6 5.5a2 2 0 1 1 2.5 1.936V9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" fill="none" />
        <circle cx="8" cy="11.5" r="0.75" fill="currentColor" />
      </>
    ),
  },
  'caret-down': {
    path: (
      <>
        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  },
  'caret-up': {
    path: (
      <>
        <path d="M4 10l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  },
  person: {
    path: (
      <>
        <circle cx="8" cy="5" r="2.25" stroke="currentColor" strokeWidth="1.25" fill="none" />
        <path d="M3.5 13.5c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" fill="none" />
      </>
    ),
  },
}

export default function Icon({ glyph = 'x', className = '' }) {
  const icon = glyphs[glyph]
  if (!icon) return null

  return (
    <svg
      className={`icon-glyph ${className}`}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      {icon.path}
    </svg>
  )
}

Icon.glyphs = Object.keys(glyphs)
