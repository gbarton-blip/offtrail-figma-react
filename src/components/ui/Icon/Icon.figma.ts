// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=397-10029

import figma from "figma"

const glyph = figma.selectedInstance.getEnum("Glpyh", {
  X: "x",
  Check: "check",
  Info: "info",
  Warning: "warning",
  Plus: "plus",
  out: "out",
  question: "question",
  "caret-down": "caret-down",
  "caret-up": "caret-up",
})

export default {
  id: "Icon",
  imports: ["import Icon from '@/components/ui/Icon'"],
  example: figma.code`<Icon${figma.helpers.react.renderProp("glyph", glyph)}/>`,
  codeProperties: {
    "glyph": {
      "type": "string",
      "label": "Glyph",
      "defaultValue": "x",
      "control": "select",
      "options": [
        {
          "value": "x",
          "label": "X"
        },
        {
          "value": "check",
          "label": "Check"
        },
        {
          "value": "info",
          "label": "Info"
        },
        {
          "value": "warning",
          "label": "Warning"
        },
        {
          "value": "plus",
          "label": "Plus"
        },
        {
          "value": "out",
          "label": "Out"
        },
        {
          "value": "question",
          "label": "Question"
        },
        {
          "value": "caret-down",
          "label": "Caret Down"
        },
        {
          "value": "caret-up",
          "label": "Caret Up"
        },
        {
          "value": "person",
          "label": "Person"
        }
      ]
    }
  },
  metadata: { nestable: true },
}
