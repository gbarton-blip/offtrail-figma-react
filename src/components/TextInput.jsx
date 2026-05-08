const CARET_ICON =
  "https://www.figma.com/api/mcp/asset/a18e2524-6b6a-4e05-859e-7fd60abc2144";

export function TextInput({
  label = "Label",
  value = "Value",
  description = "Description",
  state = "default",
  dropdown = false,
}) {
  const empty = state === "empty";
  return (
    <label className="ot-input">
      <span className="ot-input__label">{label}</span>
      <span className={`ot-input__field ${empty ? "is-empty" : ""}`}>
        <span>{value}</span>
        {dropdown && <img src={CARET_ICON} alt="" aria-hidden="true" className="ot-input__caret" />}
      </span>
      <span className="ot-input__description">{description}</span>
    </label>
  );
}
