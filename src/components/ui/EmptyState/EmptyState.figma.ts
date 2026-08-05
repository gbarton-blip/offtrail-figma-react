// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=2011-564

import figma from "figma"

const message = figma.selectedInstance.getString("Message")
const action = figma.selectedInstance.getString("Action")

export default {
  id: "EmptyState",
  imports: ["import EmptyState from '@/components/ui/EmptyState/EmptyState'"],
  example: figma.code`<EmptyState${figma.helpers.react.renderProp(
    "message",
    message,
  )}${figma.helpers.react.renderProp("action", action)}/>`,
  codeProperties: {
    "message": {
      "type": "string",
      "label": "Message",
      "defaultValue": "Something went wrong"
    },
    "action": {
      "type": "string",
      "label": "Action",
      "defaultValue": "Refresh or try again"
    }
  },
  metadata: { nestable: true },
}
