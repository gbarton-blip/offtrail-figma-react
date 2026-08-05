// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=645-574

import figma from "figma"

const defaultActive = figma.selectedInstance.getEnum("Active", {
  True: true,
  False: false,
})
const label = figma.selectedInstance.getString("Label")
const description = figma.selectedInstance.getString("Description")
const showDescription = figma.selectedInstance.getBoolean("Show Description")

export default {
  id: "Checkbox",
  imports: ["import Checkbox from '@/components/ui/Checkbox/Checkbox'"],
  example: figma.code`<Checkbox${figma.helpers.react.renderProp(
    "defaultActive",
    defaultActive,
  )}${figma.helpers.react.renderProp(
    "label",
    label,
  )}${figma.helpers.react.renderProp(
    "description",
    description,
  )}${figma.helpers.react.renderProp("showDescription", showDescription)}/>`,
  codeProperties: {
    "label": {
      "type": "string",
      "label": "Label",
      "defaultValue": "Label"
    },
    "description": {
      "type": "string",
      "label": "Description",
      "defaultValue": "Description"
    },
    "active": {
      "type": "boolean",
      "label": "Active"
    },
    "defaultActive": {
      "type": "boolean",
      "label": "Default Active",
      "defaultValue": false
    },
    "showDescription": {
      "type": "boolean",
      "label": "Show Description",
      "defaultValue": true
    }
  },
  metadata: { nestable: true },
}
