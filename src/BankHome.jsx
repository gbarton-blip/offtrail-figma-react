import { useNavigate } from 'react-router-dom'
import Logo from './components/ui/Logo/Logo'
import IconButton from './components/ui/IconButton/IconButton'
import TileCallout from './components/ui/TileCallout/TileCallout'
import CardGuide from './components/ui/CardGuide/CardGuide'
import AccountsSection from './components/banking/AccountsSection'
import TransactionRow from './components/banking/TransactionRow'
import Chip from './components/ui/Chip/Chip'
import EmptyState from './components/ui/EmptyState/EmptyState'
import BankTabBar from './components/BankTabBar'
import { accounts, transactions, totalBalance, user } from './data/banking'
import './Bank.css'
import './BankHome.css'

const quickActions = [
  { id: 'send', glyph: 'arrow-up', label: 'Send', path: '/bank/transfer' },
  { id: 'request', glyph: 'arrow-down', label: 'Request', path: '/bank/transfer' },
  { id: 'save', glyph: 'save', label: 'Save', path: '/bank' },
  { id: 'more', glyph: 'caret', label: 'More', path: '/bank/settings' },
]

const filters = ['All', 'Income', 'Spending', 'Transfers']

export default function BankHome() {
  const navigate = useNavigate()

  return (
    <div className="bank bank-home">
      <div className="bank__frame" data-parity-frame>
        <div className="bank__content" data-parity-content>
          <div className="bank__topbar">
            <Logo className="bank-home__logo" />
            <IconButton
              glyph="user"
              variant="neutral"
              aria-label="Open settings"
              onClick={() => navigate('/bank/settings')}
            />
          </div>

          {/* Balance hero */}
          <section className="bank__section bank-home__balance-section" data-parity-section="balance">
            <p className="bank__eyebrow" data-mono-caption>Good afternoon, {user.name}</p>
            <TileCallout
              className="bank-home__balance"
              variant="Highlight"
              label="TOTAL BALANCE"
              value={totalBalance}
            />
            <div className="bank__stat-row">
              <TileCallout label="IN (JUL)" value="+$3,120" />
              <TileCallout label="OUT (JUL)" value="-$1,884" />
              <TileCallout label="PENDING" value="$142" />
            </div>
          </section>

          {/* Quick actions */}
          <section className="bank__section">
            <div className="bank-home__actions">
              {quickActions.map((action) => (
                <div key={action.id} className="bank-home__action">
                  {/* IconButton has no internal label prop — caption is this sibling span */}
                  <IconButton
                    glyph={action.glyph}
                    variant="primary"
                    aria-label={action.label}
                    onClick={() => navigate(action.path)}
                  />
                  <span className="bank-home__action-label">{action.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Accounts (CardGuide repurposed as card artwork) */}
          <section className="bank__section" data-parity-section="accounts">
            <AccountsSection title="Accounts" linkLabel="Manage">
              {accounts.map((account) => (
                <CardGuide
                  key={account.id}
                  src={account.src}
                  name={`${account.name} · ${account.balance}`}
                  category={`${account.category} ${account.number}`}
                />
              ))}
            </AccountsSection>
          </section>

          {/* Recent transactions */}
          <section className="bank__section" data-parity-section="transactions">
            <p className="bank__section-heading" style={{ fontSize: '18px' }}>Recent activity</p>
            <div className="bank-home__filters">
              {filters.map((filter, index) => (
                <Chip key={filter} label={filter} active={index === 0} />
              ))}
            </div>
            {transactions.length === 0 ? (
              <EmptyState message="No transactions yet" action="Your recent activity will appear here" />
            ) : (
              <ul className="bank-home__txns">
                {transactions.map((txn) => (
                  <TransactionRow
                    key={txn.id}
                    merchant={txn.merchant}
                    note={txn.note}
                    date={txn.date}
                    amount={txn.amount}
                    avatar={txn.avatar}
                  />
                ))}
              </ul>
            )}
          </section>

          <div className="bank__nav-clearance" aria-hidden="true" />
        </div>

        <BankTabBar active="Home" />
      </div>
    </div>
  )
}
