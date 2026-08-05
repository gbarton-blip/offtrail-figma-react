// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=4130-5933

import figma from "figma"

const label = figma.selectedInstance.getString("Label")
const placeholder = figma.selectedInstance.getString("Value")
const showLabel = figma.selectedInstance.getBoolean("Show Label")
const description = figma.selectedInstance.getString("Description")
const showDescription = figma.selectedInstance.getBoolean("Show Description")

export default {
  id: "Dropdown",
  imports: ["import Dropdown from '@/components/ui/Dropdown/Dropdown'"],
  example: figma.code`<Dropdown${figma.helpers.react.renderProp(
    "label",
    label,
  )}${figma.helpers.react.renderProp(
    "placeholder",
    placeholder,
  )}${figma.helpers.react.renderProp(
    "showLabel",
    showLabel,
  )}${figma.helpers.react.renderProp(
    "description",
    description,
  )}${figma.helpers.react.renderProp(
    "showDescription",
    showDescription,
  )} options={[
        { value: 'one', label: 'Option One' },
        { value: 'two', label: 'Option Two' },
    ]}/>`,
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
    "showDescription": {
      "type": "boolean",
      "label": "Show Description",
      "defaultValue": true
    },
    "placeholder": {
      "type": "string",
      "label": "Placeholder",
      "defaultValue": "Select an option"
    }
  },
  metadata: { nestable: true },
}
