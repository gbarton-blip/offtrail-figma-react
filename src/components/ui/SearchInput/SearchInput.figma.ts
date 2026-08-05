// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=799-4917

import figma from "figma"

const defaultValue = figma.selectedInstance.getString("Text")
const placeholder = figma.selectedInstance.getString("Text")

export default {
  id: "SearchInput",
  imports: ["import SearchInput from '@/components/ui/SearchInput/SearchInput'"],
  example: figma.code`<SearchInput${figma.helpers.react.renderProp(
    "defaultValue",
    defaultValue,
  )}${figma.helpers.react.renderProp("placeholder", placeholder)}/>`,
  codeProperties: {
    "placeholder": {
      "type": "string",
      "label": "Placeholder",
      "defaultValue": "Find things to do..."
    },
    "defaultValue": {
      "type": "string",
      "label": "Default Value",
      "defaultValue": ""
    }
  },
  metadata: { nestable: true },
}
