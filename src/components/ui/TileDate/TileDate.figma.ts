// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=424-1717

import figma from "figma"

const month = figma.selectedInstance.getString("Month")
const day = figma.selectedInstance.getString("Day")

export default {
  id: "TileDate",
  imports: ["import TileDate from '@/components/ui/TileDate/TileDate'"],
  example: figma.code`<TileDate${figma.helpers.react.renderProp(
    "month",
    month,
  )}${figma.helpers.react.renderProp("day", day)}/>`,
  codeProperties: {
    "day": {
      "type": "string",
      "label": "Day",
      "defaultValue": "28"
    },
    "month": {
      "type": "string",
      "label": "Month",
      "defaultValue": "Jun"
    }
  },
  metadata: { nestable: true },
}
