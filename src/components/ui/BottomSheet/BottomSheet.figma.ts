// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=2012-577

import figma from "figma"

const size = figma.selectedInstance.getEnum("Size", {
  Default: "Default",
  Tall: "Tall",
})
const children = figma.properties.children(["Drawer Content"])

export default {
  id: "BottomSheet",
  imports: ["import BottomSheet from '@/components/ui/BottomSheet/BottomSheet'"],
  example: figma.code`<BottomSheet${figma.helpers.react.renderProp(
    "size",
    size,
  )}>${figma.helpers.react.renderChildren(children)}</BottomSheet>`,
  codeProperties: {
    "size": {
      "type": "string",
      "label": "Size",
      "defaultValue": "Default",
      "control": "select",
      "options": [
        {
          "value": "Default",
          "label": "Default"
        },
        {
          "value": "Tall",
          "label": "Tall"
        }
      ]
    }
  },
  metadata: { nestable: true },
}
