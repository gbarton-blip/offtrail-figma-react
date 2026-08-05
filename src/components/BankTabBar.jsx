import { useNavigate } from 'react-router-dom'
import NavTab from './ui/NavTab/NavTab'
import './BankTabBar.css'

const tabs = [
  { key: 'Home', icon: 'home', label: 'Home', path: '/bank' },
  { key: 'Transfer', icon: 'arrow-up', label: 'Transfer', path: '/bank/transfer' },
  { key: 'Settings', icon: 'caret', label: 'Settings', path: '/bank/settings' },
]

export default function BankTabBar({ active = 'Home' }) {
  const navigate = useNavigate()

  return (
    <nav className="bank-tab-bar" data-parity-tab-bar aria-label="Bank navigation">
      <div className="bank-tab-bar__items">
        {tabs.map((tab) => (
          <div key={tab.key} className="bank-tab-bar__tab">
            {/* NavTab has no internal icon-swap or label prop — icon is fixed per instance,
                caption is this hand-built sibling span */}
            <NavTab
              icon={tab.icon}
              active={active === tab.key}
              onClick={() => navigate(tab.path)}
              aria-label={tab.label}
            />
            <span className="bank-tab-bar__label" data-mono-caption>{tab.label}</span>
          </div>
        ))}
      </div>
    </nav>
  )
}
