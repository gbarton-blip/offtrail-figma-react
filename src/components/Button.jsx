const ARROW_ICON =
  "https://www.figma.com/api/mcp/asset/80be94f4-01f7-4c33-a8ab-f44aef8a39d1";

export function Button({
  label = "Button",
  colour = "brand",
  size = "large",
  icon = false,
}) {
  const className = [
    "ot-button",
    `ot-button--${colour}`,
    `ot-button--${size}`,
    icon ? "ot-button--with-icon" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type="button" className={className}>
      <span>{label}</span>
      {icon && <img src={ARROW_ICON} alt="" aria-hidden="true" className="ot-button__icon" />}
    </button>
  );
}
