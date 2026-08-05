// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=788-5366

import figma from "figma"

const variant = figma.selectedInstance.getEnum("Variant", {
  Subtle: "Subtle",
  Highlight: "Highlight",
})
const label = figma.selectedInstance.getString("Label")
const value = figma.selectedInstance.getString("Value")

export default {
  id: "TileCallout",
  imports: ["import TileCallout from '@/components/ui/TileCallout/TileCallout'"],
  example: figma.code`<TileCallout${figma.helpers.react.renderProp(
    "variant",
    variant,
  )}${figma.helpers.react.renderProp(
    "label",
    label,
  )}${figma.helpers.react.renderProp("value", value)}/>`,
  codeProperties: {
    "label": {
      "type": "string",
      "label": "Label",
      "defaultValue": "Label"
    },
    "value": {
      "type": "string",
      "label": "Value",
      "defaultValue": "Value"
    },
    "variant": {
      "type": "string",
      "label": "Variant",
      "defaultValue": "Subtle",
      "control": "select",
      "options": [
        {
          "value": "Subtle",
          "label": "Subtle"
        },
        {
          "value": "Highlight",
          "label": "Highlight"
        }
      ]
    }
  },
  metadata: { nestable: true },
}
