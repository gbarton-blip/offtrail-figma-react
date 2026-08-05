import Nav from '../Nav/Nav'
import './AppShell.css'

export default function AppShell({
  active,
  navVisibility = 'all',
  className = '',
  contentClassName = '',
  children,
}) {
  const shellClasses = [
    'app-shell',
    `app-shell--nav-${navVisibility}`,
    className,
  ].filter(Boolean).join(' ')

  const contentClasses = ['app-shell__main', contentClassName].filter(Boolean).join(' ')

  return (
    <div className={shellClasses}>
      <main className={contentClasses}>{children}</main>
      {navVisibility !== 'none' && (
        <Nav active={active} className="app-shell__nav" />
      )}
    </div>
  )
}

AppShell.navVisibility = ['all', 'desktop', 'none']
