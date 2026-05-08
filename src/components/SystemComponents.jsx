const FOOTER_WORDMARK =
  "https://www.figma.com/api/mcp/asset/e37f508e-c347-43e8-b308-4b64eec70264";
const TILE_WEATHER_ICON =
  "https://www.figma.com/api/mcp/asset/c359cf0e-cda9-4846-b601-7d530b7c4dc2";
const TILE_COMMUNITY_ICON =
  "https://www.figma.com/api/mcp/asset/7c8abe44-c7e3-45a2-a23d-5a2bac3b3b41";
const MAP_PREVIEW_DARK =
  "https://www.figma.com/api/mcp/asset/9b6b0c32-e54f-436a-b924-04bdadbb0938";
const MAP_PREVIEW_LIGHT =
  "https://www.figma.com/api/mcp/asset/c7de0523-58ee-4577-aab6-9d7540dc9743";
const MAP_CANVAS =
  "https://www.figma.com/api/mcp/asset/3c127c2a-440c-4e8e-97a8-3e07f2580ad9";

export function AppNav({ active = "home" }) {
  const tabs = ["home", "map", "profile"];
  return (
    <nav className="ot-app-nav">
      {tabs.map((tab) => (
        <button key={tab} className={active === tab ? "is-active" : ""} type="button">
          {tab}
        </button>
      ))}
    </nav>
  );
}

export function WebNav({ translucent = false }) {
  return (
    <nav className={`ot-web-nav ${translucent ? "is-translucent" : ""}`}>
      <span>Offtrail</span>
      <div>
        <a>Explore</a>
        <a>Hosts</a>
        <a>Map</a>
      </div>
    </nav>
  );
}

export function Toast({ message = "Notification message" }) {
  return <div className="ot-toast">{message}</div>;
}

export function BottomSheet({ size = "default" }) {
  return (
    <section className={`ot-sheet ${size === "tall" ? "is-tall" : ""}`}>
      <span className="ot-sheet__handle" />
    </section>
  );
}

export function EmptyState({ message = "Something went wrong", action = "Refresh or try again" }) {
  return (
    <section className="ot-empty">
      <h3>{message}</h3>
      <p>{action}</p>
    </section>
  );
}

export function TileDate({ month = "Jun", day = "28" }) {
  return (
    <div className="ot-date-tile">
      <span>{month}</span>
      <strong>{day}</strong>
    </div>
  );
}

export function TileCommunity({ label = "Meditation", count = "64" }) {
  return (
    <div className="ot-stat-tile">
      <p>{label}</p>
      <small>
        <img src={TILE_COMMUNITY_ICON} alt="" aria-hidden="true" /> {count}
      </small>
    </div>
  );
}

export function TileWeather({ temp = "65F", time = "3:43PM", conditions = "Light Rain" }) {
  return (
    <div className="ot-weather-tile">
      <div>
        <strong>{time}</strong>
        <small>{conditions}</small>
        <p>{temp}</p>
      </div>
      <img src={TILE_WEATHER_ICON} alt="" aria-hidden="true" />
    </div>
  );
}

export function TileCallout({ label = "Difficulty", value = "Moderate", highlight = false }) {
  return (
    <div className={`ot-callout-tile ${highlight ? "is-highlight" : ""}`}>
      <small>{label}</small>
      <strong>{value}</strong>
    </div>
  );
}

export function TileLocation({ mode = "dark", location = "Laguna" }) {
  const src = mode === "dark" ? MAP_PREVIEW_DARK : MAP_PREVIEW_LIGHT;
  return (
    <div className="ot-location-tile">
      <img src={src} alt="" aria-hidden="true" />
      <div>
        <small>Events Nearby</small>
        <strong>{location}</strong>
      </div>
    </div>
  );
}

export function MapCanvas() {
  return (
    <div className="ot-map-canvas">
      <img src={MAP_CANVAS} alt="" aria-hidden="true" />
    </div>
  );
}

export function Footer({ compact = false }) {
  return (
    <footer className={`ot-footer ${compact ? "is-compact" : ""}`}>
      <img src={FOOTER_WORDMARK} alt="Offtrail" />
      <h3>Out there together</h3>
      <small>2026 Offtrail</small>
    </footer>
  );
}
