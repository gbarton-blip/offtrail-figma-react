// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=397-10212

import figma from "figma"

const label = figma.selectedInstance.getString("Label")
const defaultValue = figma.selectedInstance.getString("Value")
const placeholder = figma.selectedInstance.getString("Value")
const showLabel = figma.selectedInstance.getBoolean("Show Label")
const description = figma.selectedInstance.getString("Description")
const hasDescription = figma.selectedInstance.getBoolean("Has Description")

export default {
  id: "Textarea",
  imports: ["import Textarea from '@/components/ui/Textarea/Textarea'"],
  example: figma.code`<Textarea${figma.helpers.react.renderProp(
    "label",
    label,
  )}${figma.helpers.react.renderProp(
    "defaultValue",
    defaultValue,
  )}${figma.helpers.react.renderProp(
    "placeholder",
    placeholder,
  )}${figma.helpers.react.renderProp(
    "showLabel",
    showLabel,
  )}${figma.helpers.react.renderProp(
    "description",
    description,
  )}${figma.helpers.react.renderProp("hasDescription", hasDescription)}/>`,
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
    "showLabel": {
      "type": "boolean",
      "label": "Show Label",
      "defaultValue": true
    },
    "hasDescription": {
      "type": "boolean",
      "label": "Has Description",
      "defaultValue": true
    },
    "placeholder": {
      "type": "string",
      "label": "Placeholder",
      "defaultValue": "Value"
    },
    "defaultValue": {
      "type": "string",
      "label": "Default Value",
      "defaultValue": ""
    }
  },
  metadata: { nestable: true },
}
