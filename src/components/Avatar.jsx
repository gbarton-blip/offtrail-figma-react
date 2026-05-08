const AVATAR_SOURCES = {
  80: "https://www.figma.com/api/mcp/asset/d7ff89ab-12a8-481a-90e8-eb81f3e57c4c",
  56: "https://www.figma.com/api/mcp/asset/65dfff33-01f5-45b0-9b7a-17095b56d6e3",
  40: "https://www.figma.com/api/mcp/asset/e0772956-9fb2-4e46-86c2-448c0295ea33",
  32: "https://www.figma.com/api/mcp/asset/2239462a-7b7f-4272-a9b9-e38b7a6e5b2a",
};

export function Avatar({ size = 80, alt = "User avatar" }) {
  const safeSize = AVATAR_SOURCES[size] ? size : 80;
  return (
    <img
      src={AVATAR_SOURCES[safeSize]}
      alt={alt}
      width={safeSize}
      height={safeSize}
      className="ot-avatar"
      style={{ width: safeSize, height: safeSize }}
    />
  );
}
