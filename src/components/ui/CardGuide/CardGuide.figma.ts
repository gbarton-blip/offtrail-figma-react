// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=424-1419

import figma from "figma"

const name = figma.selectedInstance.getString("Name")
const category = figma.selectedInstance.getString("Category")

export default {
  id: "CardGuide",
  imports: ["import CardGuide from '@/components/ui/CardGuide'"],
  example: figma.code`<CardGuide src="/path/to/portrait.jpg"${figma.helpers.react.renderProp(
    "name",
    name,
  )}${figma.helpers.react.renderProp("category", category)}/>`,
  codeProperties: {
    "src": {
      "type": "string",
      "label": "Image Source"
    },
    "name": {
      "type": "string",
      "label": "Name",
      "defaultValue": "Amelia B."
    },
    "category": {
      "type": "string",
      "label": "Category",
      "defaultValue": "SURFING"
    }
  },
  metadata: { nestable: true },
}
