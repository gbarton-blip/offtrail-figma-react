// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=4121-2264

import figma from "figma"

const active = figma.selectedInstance.getEnum("Active", {
  True: true,
  False: false,
})

export default {
  id: "NavTab",
  imports: ["import NavTab from '@/components/ui/NavTab'"],
  example: figma.code`<NavTab icon="home"${figma.helpers.react.renderProp(
    "active",
    active,
  )}/>`,
  codeProperties: {
    "icon": {
      "type": "string",
      "label": "Icon",
      "defaultValue": "home"
    },
    "active": {
      "type": "boolean",
      "label": "Active",
      "defaultValue": false
    }
  },
  metadata: { nestable: true },
}
