// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=397-10151

import figma from "figma"

const variant = figma.selectedInstance.getEnum("Variant", {
  Primary: "primary",
  Outline: "outline",
  Neutral: "neutral",
})
const size = figma.selectedInstance.getEnum("Size", {
  Medium: "medium",
  Small: "small",
})
const disabled = figma.selectedInstance.getEnum("State", {
  Default: false,
  Disabled: true,
})

export default {
  id: "IconButton",
  imports: ["import IconButton from '@/components/ui/IconButton'"],
  example: figma.code`<IconButton glyph="caret"${figma.helpers.react.renderProp(
    "variant",
    variant,
  )}${figma.helpers.react.renderProp(
    "size",
    size,
  )}${figma.helpers.react.renderProp("disabled", disabled)}/>`,
  codeProperties: {
    "glyph": {
      "type": "string",
      "label": "Glyph",
      "defaultValue": "caret"
    },
    "variant": {
      "type": "string",
      "label": "Variant",
      "defaultValue": "primary",
      "control": "select",
      "options": [
        {
          "value": "primary",
          "label": "Primary"
        },
        {
          "value": "outline",
          "label": "Outline"
        },
        {
          "value": "neutral",
          "label": "Neutral"
        }
      ]
    },
    "size": {
      "type": "string",
      "label": "Size",
      "defaultValue": "medium",
      "control": "select",
      "options": [
        {
          "value": "medium",
          "label": "Medium"
        },
        {
          "value": "small",
          "label": "Small"
        }
      ]
    },
    "disabled": {
      "type": "boolean",
      "label": "Disabled",
      "defaultValue": false
    }
  },
  metadata: { nestable: true },
}
