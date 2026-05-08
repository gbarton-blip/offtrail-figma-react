const CARD_IMAGE_LARGE =
  "https://www.figma.com/api/mcp/asset/68db3b8d-fc7f-438f-b7b3-739c9feba872";
const CARD_IMAGE_SMALL =
  "https://www.figma.com/api/mcp/asset/ec3c7b73-750e-4ce7-8517-b7cb25a8db04";
const PEOPLE_ICON =
  "https://www.figma.com/api/mcp/asset/1b36deb9-f550-4ace-b27d-72cd221aa788";

export function CardEvent({
  size = "large",
  title = "Weekend Surf Session",
  location = "Ventura, CA",
  people = "12",
  time = "6:30AM - 1:00PM",
}) {
  const small = size === "small";
  return (
    <article className={`ot-event-card ${small ? "is-small" : ""}`}>
      <img
        src={small ? CARD_IMAGE_SMALL : CARD_IMAGE_LARGE}
        alt=""
        aria-hidden="true"
        className="ot-event-card__image"
      />
      <div className="ot-event-card__content">
        <h3>{title}</h3>
        <p className="ot-event-card__location">{location}</p>
        <p className="ot-event-card__meta">
          <img src={PEOPLE_ICON} alt="" aria-hidden="true" />
          {people} · {time}
        </p>
      </div>
      <aside className="ot-date-tile">
        <span>Jun</span>
        <strong>12</strong>
      </aside>
    </article>
  );
}
