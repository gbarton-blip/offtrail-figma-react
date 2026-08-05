import { useState } from 'react'
import PageHeader from './components/ui/PageHeader/PageHeader'
import Avatar from './components/ui/Avatar/Avatar'
import Button from './components/ui/Button/Button'
import SwitchField from './components/ui/SwitchField/SwitchField'
import Dropdown from './components/ui/Dropdown/Dropdown'
import TextInput from './components/ui/TextInput/TextInput'
import RadioGroup from './components/ui/RadioGroup/RadioGroup'
import Toast from './components/ui/Toast/Toast'
import BankTabBar from './components/BankTabBar'
import { user } from './data/banking'
import './Bank.css'
import './BankSettings.css'
import './components/banking/ContactRow.css'

const languageOptions = [
  { value: 'en', label: 'English (US)' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' },
]

const currencyOptions = [
  { value: 'usd', label: 'USD — US Dollar' },
  { value: 'eur', label: 'EUR — Euro' },
  { value: 'gbp', label: 'GBP — British Pound' },
]

const autoLockOptions = [
  { value: 'immediately', label: 'Immediately', description: 'Lock as soon as the app closes' },
  { value: '1min', label: 'After 1 minute', description: 'Balance a little convenience with security' },
  { value: '5min', label: 'After 5 minutes', description: 'Stay signed in for quick check-ins' },
]

export default function BankSettings() {
  const [showToast, setShowToast] = useState(false)

  function handleSave() {
    setShowToast(true)
    window.clearTimeout(handleSave._timer)
    handleSave._timer = window.setTimeout(() => setShowToast(false), 2400)
  }

  return (
    <div className="bank bank-settings">
      <div className="bank__frame" data-parity-frame>
        <div className="bank__content" data-parity-content>
          <PageHeader title="Settings" showShareButton={false} />

          {/* Profile */}
          <section className="bank-settings__profile" data-parity-section="profile">
            <Avatar src={user.avatar} alt={user.name} size={56} />
            <div className="bank-settings__identity">
              <p className="contact-row__name">{user.name}</p>
              <p className="contact-row__handle">{user.email}</p>
            </div>
            <Button label="Edit" colour="transparent-white" size="medium" />
          </section>

          {/* Preferences */}
          <section className="bank__section">
            <p className="bank__eyebrow" data-mono-caption>Preferences</p>
            <div className="bank-settings__group">
              <SwitchField
                label="Face ID"
                description="Use biometrics to unlock the app"
                defaultActive
              />
              <SwitchField
                label="Push notifications"
                description="Payment alerts and security updates"
                defaultActive
              />
              <SwitchField
                label="Dark mode"
                description="Match the system appearance"
                defaultActive
              />
            </div>
          </section>

          {/* Account */}
          <section className="bank__section" data-parity-section="account-form">
            <p className="bank__eyebrow" data-mono-caption>Account</p>
            <div className="bank-settings__group">
              <TextInput
                label="Contact email"
                showDescription={false}
                defaultValue={user.email}
                placeholder="you@example.com"
              />
              <TextInput
                label="Phone number"
                showDescription={false}
                defaultValue={user.phone}
                placeholder="+1 (___) ___-____"
              />
              <Dropdown
                label="Language"
                showDescription={false}
                options={languageOptions}
                defaultValue="en"
              />
              <Dropdown
                label="Currency"
                showDescription={false}
                options={currencyOptions}
                defaultValue="usd"
              />
            </div>
          </section>

          {/* Security */}
          <section className="bank__section" data-parity-section="auto-lock">
            <p className="bank__eyebrow" data-mono-caption>Auto-lock</p>
            <RadioGroup options={autoLockOptions} defaultValue="1min" />
          </section>

          {/* Save + sign out */}
          <section className="bank-settings__footer">
            <Button label="Save changes" colour="brand" size="large" onClick={handleSave} />
            <Button label="Sign out" colour="transparent-black" size="large" />
          </section>

          <div className="bank__nav-clearance" aria-hidden="true" />
        </div>

        {showToast && (
          <div className="bank-settings__toast">
            <Toast message="Settings saved" />
          </div>
        )}

        <BankTabBar active="Settings" />
      </div>
    </div>
  )
}
