import { useMemo, useState } from 'react'
import PageHeader from './components/ui/PageHeader/PageHeader'
import SearchInput from './components/ui/SearchInput/SearchInput'
import Avatar from './components/ui/Avatar/Avatar'
import ContactRow from './components/banking/ContactRow'
import './components/banking/ContactRow.css'
import Chip from './components/ui/Chip/Chip'
import TextInput from './components/ui/TextInput/TextInput'
import Textarea from './components/ui/Textarea/Textarea'
import Dropdown from './components/ui/Dropdown/Dropdown'
import TileCallout from './components/ui/TileCallout/TileCallout'
import Button from './components/ui/Button/Button'
import IconButton from './components/ui/IconButton/IconButton'
import BottomSheet from './components/ui/BottomSheet/BottomSheet'
import Toast from './components/ui/Toast/Toast'
import BankTabBar from './components/BankTabBar'
import { recipients, accounts, accountOptions, getAccount } from './data/banking'
import './Bank.css'
import './BankTransfer.css'

const quickAmounts = ['25', '50', '100', '250']

export default function BankTransfer() {
  const [step, setStep] = useState('recipient')
  const [query, setQuery] = useState('')
  const [selectedRecipient, setSelectedRecipient] = useState(null)
  const [amount, setAmount] = useState('')
  const [fromAccount, setFromAccount] = useState(accounts[0].id)
  const [memo, setMemo] = useState('')
  const [showReview, setShowReview] = useState(false)
  const [sent, setSent] = useState(false)

  const filteredRecipients = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return recipients
    return recipients.filter(
      (r) => r.name.toLowerCase().includes(q) || r.handle.toLowerCase().includes(q),
    )
  }, [query])

  const fromAccountData = getAccount(fromAccount)
  const canReview = selectedRecipient && Number(amount) > 0

  function chooseRecipient(recipient) {
    setSelectedRecipient(recipient)
    setStep('amount')
  }

  function resetFlow() {
    setStep('recipient')
    setSelectedRecipient(null)
    setAmount('')
    setMemo('')
    setShowReview(false)
  }

  function confirmTransfer() {
    setShowReview(false)
    setSent(true)
    window.setTimeout(() => {
      setSent(false)
      resetFlow()
    }, 2400)
  }

  return (
    <div className="bank bank-transfer">
      <div className="bank__frame" data-parity-frame>
        <div className="bank__content" data-parity-content>
          {step === 'recipient' ? (
            <>
              <PageHeader title="Send Money" showShareButton={false} />

              <SearchInput
                placeholder="Search people or @handle"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />

              <section className="bank__section">
                <p className="bank__eyebrow" data-mono-caption>Recent</p>
                <div className="bank-transfer__recent">
                  {recipients.slice(0, 5).map((recipient) => (
                    <button
                      key={recipient.id}
                      type="button"
                      className="bank-transfer__recent-btn"
                      aria-label={`Send to ${recipient.name}`}
                      onClick={() => chooseRecipient(recipient)}
                    >
                      <Avatar src={recipient.avatar} alt={recipient.name} size={40} />
                    </button>
                  ))}
                </div>
              </section>

              <section className="bank__section" data-parity-section="contacts">
                <p className="bank__section-heading">All contacts</p>
                <ul className="bank-transfer__list">
                  {filteredRecipients.map((recipient) => (
                    <li key={recipient.id}>
                      <ContactRow
                        name={recipient.name}
                        handle={recipient.handle}
                        avatar={recipient.avatar}
                        onClick={() => chooseRecipient(recipient)}
                      />
                    </li>
                  ))}
                </ul>
              </section>
            </>
          ) : (
            <>
              <div className="bank__topbar">
                <IconButton
                  glyph="arrow-back"
                  variant="neutral"
                  aria-label="Back to recipients"
                  onClick={() => setStep('recipient')}
                />
                <span className="bank__topbar-title">Enter amount</span>
                <span className="bank-transfer__topbar-spacer" />
              </div>

              {selectedRecipient && (
                <section className="bank-transfer__recipient-chip">
                  <Avatar src={selectedRecipient.avatar} alt={selectedRecipient.name} size={40} />
                  <div className="contact-row__text">
                    <p className="contact-row__name">{selectedRecipient.name}</p>
                    <p className="contact-row__handle">{selectedRecipient.handle}</p>
                  </div>
                </section>
              )}

              <section className="bank__section bank-transfer__amount-section">
                <TextInput
                  className="bank-transfer__amount"
                  label="Amount (USD)"
                  showDescription={false}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ''))}
                  placeholder="0.00"
                />
                <div className="bank-transfer__quick">
                  {quickAmounts.map((value) => (
                    <span
                      key={value}
                      className="bank-transfer__quick-item"
                      onClick={() => setAmount(value)}
                    >
                      <Chip label={`$${value}`} active={amount === value} />
                    </span>
                  ))}
                </div>
              </section>

              <section className="bank__section">
                <Dropdown
                  label="From account"
                  showDescription={false}
                  options={accountOptions}
                  value={fromAccount}
                  onChange={setFromAccount}
                />
                <TileCallout
                  label="AVAILABLE BALANCE"
                  value={fromAccountData ? fromAccountData.balance : '—'}
                />
              </section>

              <section className="bank__section">
                <Textarea
                  label="Note"
                  hasDescription={false}
                  value={memo}
                  onChange={(e) => setMemo(e.target.value)}
                  placeholder="What's this for?"
                />
              </section>

              <Button
                label="Review transfer"
                colour={canReview ? 'brand' : 'transparent-white'}
                size="large"
                onClick={() => canReview && setShowReview(true)}
              />
            </>
          )}

          <div className="bank__nav-clearance" aria-hidden="true" />
        </div>

        {showReview && selectedRecipient && (
          <div className="bank-transfer__overlay">
            <BottomSheet size="Tall" className="bank-transfer__sheet">
              <p className="bank-transfer__sheet-title">Review transfer</p>
              <div className="bank-transfer__summary">
                <TileCallout label="TO" value={selectedRecipient.name} />
                <TileCallout variant="Highlight" label="AMOUNT" value={`$${amount || '0.00'}`} />
                <TileCallout
                  label="FROM"
                  value={fromAccountData ? fromAccountData.name : '—'}
                />
                <TileCallout label="NOTE" value={memo || 'No note added'} />
              </div>
              <div className="bank-transfer__sheet-actions">
                <Button label="Confirm transfer" colour="brand" size="large" onClick={confirmTransfer} />
                <Button
                  label="Cancel"
                  colour="transparent-white"
                  size="large"
                  onClick={() => setShowReview(false)}
                />
              </div>
            </BottomSheet>
          </div>
        )}

        {sent && (
          <div className="bank-transfer__toast">
            <Toast message={`Transfer sent to ${selectedRecipient ? selectedRecipient.name : ''}`} />
          </div>
        )}

        <BankTabBar active="Transfer" />
      </div>
    </div>
  )
}
