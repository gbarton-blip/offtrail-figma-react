// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=2031-594

import figma from "figma"

const label = figma.selectedInstance.getString("Label")
const colour = figma.selectedInstance.getEnum("Colour", {
  Brand: "brand",
  "Transparent White": "transparent-white",
  "Transparent Black": "transparent-black",
})
const size = figma.selectedInstance.getEnum("Size", {
  Large: "large",
  Medium: "medium",
})
const icon = figma.selectedInstance.getBoolean("Icon")

export default {
  id: "Button",
  imports: ["import Button from '@/components/ui/Button'"],
  example: figma.code`<Button${figma.helpers.react.renderProp(
    "label",
    label,
  )}${figma.helpers.react.renderProp(
    "colour",
    colour,
  )}${figma.helpers.react.renderProp(
    "size",
    size,
  )}${figma.helpers.react.renderProp("icon", icon)}/>`,
  codeProperties: {
    "label": {
      "type": "string",
      "label": "Label",
      "defaultValue": "Button"
    },
    "colour": {
      "type": "string",
      "label": "Colour",
      "defaultValue": "brand",
      "control": "select",
      "options": [
        {
          "value": "brand",
          "label": "Brand"
        },
        {
          "value": "transparent-white",
          "label": "Transparent White"
        },
        {
          "value": "transparent-black",
          "label": "Transparent Black"
        }
      ]
    },
    "size": {
      "type": "string",
      "label": "Size",
      "defaultValue": "large",
      "control": "select",
      "options": [
        {
          "value": "large",
          "label": "Large"
        },
        {
          "value": "medium",
          "label": "Medium"
        }
      ]
    },
    "icon": {
      "type": "boolean",
      "label": "Icon",
      "defaultValue": false
    }
  },
  metadata: { nestable: true },
}
