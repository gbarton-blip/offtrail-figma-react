import Avatar from '../ui/Avatar/Avatar'
import BrandIcon from '../ui/BrandIcon/BrandIcon'
import './ContactRow.css'

/** Single transfer contact row — Avatar + text stack + caret (DS-aligned). */
export default function ContactRow({ name, handle, avatar, avatarAlt, onClick }) {
  return (
    <button type="button" className="contact-row" onClick={onClick}>
      <Avatar src={avatar} alt={avatarAlt ?? name} size={40} />
      <div className="contact-row__text">
        <p className="contact-row__name">{name}</p>
        <p className="contact-row__handle">{handle}</p>
      </div>
      <BrandIcon glyph="arrow-right" className="contact-row__caret" />
    </button>
  )
}
