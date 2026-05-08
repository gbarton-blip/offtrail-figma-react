const ICON_PRIMARY =
  "https://www.figma.com/api/mcp/asset/f40d3116-19d2-4b77-bb16-6eb1dd8d3513";
const ICON_OUTLINE =
  "https://www.figma.com/api/mcp/asset/146692c7-5d31-40e1-bff2-ffac355d10d8";

export function IconButton({ variant = "primary", size = "medium", disabled = false }) {
  const className = [
    "ot-icon-button",
    `ot-icon-button--${variant}`,
    `ot-icon-button--${size}`,
    disabled ? "is-disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type="button" className={className} disabled={disabled}>
      <img
        src={variant === "primary" ? ICON_PRIMARY : ICON_OUTLINE}
        alt=""
        aria-hidden="true"
        className="ot-icon-button__glyph"
      />
    </button>
  );
}
