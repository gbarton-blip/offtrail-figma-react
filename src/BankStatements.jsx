import { useMemo, useState } from 'react'
import PageHeader from './components/ui/PageHeader/PageHeader'
import Dropdown from './components/ui/Dropdown/Dropdown'
import Chip from './components/ui/Chip/Chip'
import TileCallout from './components/ui/TileCallout/TileCallout'
import Button from './components/ui/Button/Button'
import BrandIcon from './components/ui/BrandIcon/BrandIcon'
import BankTabBar from './components/BankTabBar'
import {
  accountOptions,
  statementAccountOptions,
  statements,
  getAccount,
} from './data/banking'
import './Bank.css'
import './BankStatements.css'

const yearFilters = ['2026', '2025', 'All']

export default function BankStatements() {
  const [accountId, setAccountId] = useState('all')
  const [yearFilter, setYearFilter] = useState('2026')

  const filteredStatements = useMemo(() => {
    return statements.filter((statement) => {
      const accountMatch = accountId === 'all' || statement.accountId === accountId
      const yearMatch =
        yearFilter === 'All' || statement.period.startsWith(yearFilter)
      return accountMatch && yearMatch
    })
  }, [accountId, yearFilter])

  const latestStatement = filteredStatements[0]

  return (
    <div className="bank bank-statements">
      <div className="bank__frame" data-parity-frame>
        <div className="bank__content" data-parity-content>
          <PageHeader title="Statements" showShareButton={false} />

          <section className="bank__section bank-statements__filters">
            <Dropdown
              label="Account"
              showDescription={false}
              options={statementAccountOptions}
              value={accountId}
              onChange={setAccountId}
            />
            <div className="bank-statements__years">
              {yearFilters.map((year) => (
                <Chip
                  key={year}
                  label={year}
                  active={yearFilter === year}
                  onClick={() => setYearFilter(year)}
                />
              ))}
            </div>
          </section>

          <section className="bank__section">
            <TileCallout
              variant="Highlight"
              label="LATEST STATEMENT"
              value={latestStatement ? latestStatement.period : '—'}
            />
            <div className="bank__stat-row">
              <TileCallout
                label="STATEMENTS"
                value={String(filteredStatements.length)}
              />
              <TileCallout
                label="ENDING BALANCE"
                value={latestStatement ? latestStatement.endingBalance : '—'}
              />
            </div>
          </section>

          <section className="bank__section">
            <p className="bank__section-heading">Monthly statements</p>
            <ul className="bank-statements__list">
              {filteredStatements.map((statement) => {
                const account = getAccount(statement.accountId)
                return (
                  <li key={statement.id}>
                    <button type="button" className="bank-statements__row">
                      <div className="bank-statements__row-text">
                        <p className="bank-statements__period">{statement.period}</p>
                        <p className="bank-statements__meta">
                          {account ? account.name : statement.accountId} · {statement.dateRange}
                        </p>
                      </div>
                      <div className="bank-statements__row-end">
                        <p className="bank-statements__balance">{statement.endingBalance}</p>
                        <span className="bank-statements__format">{statement.format}</span>
                      </div>
                      <BrandIcon glyph="arrow-right" className="bank-statements__caret" />
                    </button>
                  </li>
                )
              })}
            </ul>
          </section>

          <Button label="Download all" colour="brand" size="large" />
          <div className="bank__nav-clearance" aria-hidden="true" />
        </div>

        <BankTabBar active="Home" />
      </div>
    </div>
  )
}
