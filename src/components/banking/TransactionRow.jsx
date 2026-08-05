import Avatar from '../ui/Avatar/Avatar'
import './TransactionRow.css'

/** Recent activity row — Avatar + merchant/note + amount (DS-aligned). */
export default function TransactionRow({ merchant, note, date, amount, avatar, avatarAlt }) {
  const isCredit = amount.trim().startsWith('+')

  return (
    <li className="transaction-row">
      <Avatar src={avatar} alt={avatarAlt ?? merchant} size={40} />
      <div className="transaction-row__text">
        <p className="transaction-row__merchant">{merchant}</p>
        <p className="transaction-row__note">
          {note} · {date}
        </p>
      </div>
      <p className={`transaction-row__amount ${isCredit ? 'transaction-row__amount--credit' : ''}`}>
        {amount}
      </p>
    </li>
  )
}
