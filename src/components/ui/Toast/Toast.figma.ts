// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=2010-559

import figma from "figma"

const message = figma.selectedInstance.getString("Message")

export default {
  id: "Toast",
  imports: ["import Toast from '@/components/ui/Toast/Toast'"],
  example: figma.code`<Toast${figma.helpers.react.renderProp(
    "message",
    message,
  )}/>`,
  codeProperties: {
    "message": {
      "type": "string",
      "label": "Message",
      "defaultValue": "Notification message"
    }
  },
  metadata: { nestable: true },
}
