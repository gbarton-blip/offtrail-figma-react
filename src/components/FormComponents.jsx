const CARET_ICON =
  "https://www.figma.com/api/mcp/asset/c93e8964-3ad5-4f8f-a6e7-a5245ce233b3";
const CHECK_ICON =
  "https://www.figma.com/api/mcp/asset/ac4ba4a0-75cb-4c98-958b-5633a2fe1cb6";
const RADIO_ACTIVE =
  "https://www.figma.com/api/mcp/asset/220177d4-f58b-4e7e-9a70-8d018f07128a";
const SEARCH_ICON =
  "https://www.figma.com/api/mcp/asset/2d1f5d8b-647d-4cc1-a587-758602c64f4e";

export function Textarea({ label = "Label", value = "Value", description = "Description" }) {
  return (
    <label className="ot-input">
      <span className="ot-input__label">{label}</span>
      <span className="ot-textarea">{value}</span>
      <span className="ot-input__description">{description}</span>
    </label>
  );
}

export function Dropdown({ label = "Label", value = "Value", description = "Description" }) {
  return (
    <label className="ot-input">
      <span className="ot-input__label">{label}</span>
      <span className="ot-input__field">
        <span>{value}</span>
        <img src={CARET_ICON} alt="" aria-hidden="true" className="ot-input__caret" />
      </span>
      <span className="ot-input__description">{description}</span>
    </label>
  );
}

export function SwitchField({ label = "Label", description = "Description", active = false }) {
  return (
    <button type="button" className="ot-toggle-row">
      <span>
        <strong>{label}</strong>
        <small>{description}</small>
      </span>
      <span className={`ot-switch ${active ? "is-active" : ""}`} />
    </button>
  );
}

export function CheckboxField({ label = "Label", description = "Description", active = false }) {
  return (
    <button type="button" className="ot-choice-row">
      <span className={`ot-choice-box ${active ? "is-active" : ""}`}>
        {active && <img src={CHECK_ICON} alt="" aria-hidden="true" />}
      </span>
      <span>
        <strong>{label}</strong>
        <small>{description}</small>
      </span>
    </button>
  );
}

export function RadioField({ label = "Label", description = "Description", active = false }) {
  return (
    <button type="button" className="ot-choice-row">
      <span className={`ot-radio ${active ? "is-active" : ""}`}>
        {active && <img src={RADIO_ACTIVE} alt="" aria-hidden="true" />}
      </span>
      <span>
        <strong>{label}</strong>
        <small>{description}</small>
      </span>
    </button>
  );
}

export function SearchInput({ value = "Find things to do...", active = false }) {
  return (
    <label className="ot-search">
      <img src={SEARCH_ICON} alt="" aria-hidden="true" />
      <span className={active ? "" : "is-muted"}>{value}</span>
    </label>
  );
}
