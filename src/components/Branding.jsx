const LOGO_LEFT =
  "https://www.figma.com/api/mcp/asset/a804209f-7c76-4866-92bc-b991b5b427bf";
const LOGO_RIGHT =
  "https://www.figma.com/api/mcp/asset/64ee3047-4bff-4c69-87b4-e77e195d0e08";
const WORDMARK =
  "https://www.figma.com/api/mcp/asset/7b5ca06b-bbb2-4a93-89e4-3110199e12bb";

export function Logo() {
  return (
    <div className="ot-logo">
      <img src={LOGO_LEFT} alt="" aria-hidden="true" />
      <img src={LOGO_RIGHT} alt="" aria-hidden="true" />
    </div>
  );
}

export function Wordmark() {
  return <img src={WORDMARK} alt="Offtrail" className="ot-wordmark" />;
}
