import './AccountsSection.css'

/**
 * Static account card row — matches Figma code-to-canvas build layout
 * (section header + horizontal CardGuide row) without Carousel scroll bleed.
 */
export default function AccountsSection({
  title,
  linkLabel = 'Manage',
  children,
  className = '',
  titleStyle,
}) {
  return (
    <div className={`accounts-section ${className}`.trim()}>
      <div className="accounts-section__header">
        <p className="accounts-section__title" style={titleStyle}>{title}</p>
        <p className="accounts-section__link" data-mono-caption>{linkLabel}</p>
      </div>
      <div className="accounts-section__row">{children}</div>
    </div>
  )
}
