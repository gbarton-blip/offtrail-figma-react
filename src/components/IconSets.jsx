const ICON_SET = {
  x: "https://www.figma.com/api/mcp/asset/2f06f1fb-c188-4237-8abd-a57cc80ebef5",
  check: "https://www.figma.com/api/mcp/asset/ac4ba4a0-75cb-4c98-958b-5633a2fe1cb6",
  info: "https://www.figma.com/api/mcp/asset/739f6f2d-fc2b-4cc4-a8ee-1eb0d6d1ed95",
  warning: "https://www.figma.com/api/mcp/asset/e31f0740-262d-4e65-b009-92c5fcf70d20",
  plus: "https://www.figma.com/api/mcp/asset/ceea4a82-c4ee-47a8-b401-3328f9e4f058",
};

const BRAND_ICON_SET = {
  home: "https://www.figma.com/api/mcp/asset/9becd4e6-4dc2-456f-b769-9e8e9293fd6d",
  map: "https://www.figma.com/api/mcp/asset/fbabcf65-9f68-4c2f-b650-1172fe72a36e",
  user: "https://www.figma.com/api/mcp/asset/03babd94-5caa-4f31-8b6b-40d482a0dca2",
  search: "https://www.figma.com/api/mcp/asset/2d1f5d8b-647d-4cc1-a587-758602c64f4e",
  caret: "https://www.figma.com/api/mcp/asset/71dad8f2-6214-48bf-9239-23ce3818bc01",
};

export function Icon({ glyph = "x" }) {
  const src = ICON_SET[glyph] || ICON_SET.x;
  return <img src={src} alt="" aria-hidden="true" className="ot-glyph-icon" />;
}

export function BrandIcon({ glyph = "home" }) {
  const src = BRAND_ICON_SET[glyph] || BRAND_ICON_SET.home;
  return <img src={src} alt="" aria-hidden="true" className="ot-brand-icon" />;
}

export function NavTab({ active = false, glyph = "home", label = "home" }) {
  return (
    <button type="button" className={`ot-nav-tab ${active ? "is-active" : ""}`}>
      <BrandIcon glyph={glyph} />
      <span>{label}</span>
    </button>
  );
}
