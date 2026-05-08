export function Chip({ label = "Label", active = true }) {
  return <button className={`ot-chip ${active ? "is-active" : ""}`}>{label}</button>;
}
