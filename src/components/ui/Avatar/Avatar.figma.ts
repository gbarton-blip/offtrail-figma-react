// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=397-9939

import figma from "figma"

const size = figma.selectedInstance.getEnum("Size", {
  "32": 32,
  "40": 40,
  "56": 56,
  "80": 80,
})

export default {
  id: "Avatar",
  imports: ["import Avatar from '@/components/ui/Avatar'"],
  example: figma.code`<Avatar src="/path/to/avatar.jpg"${figma.helpers.react.renderProp(
    "size",
    size,
  )}/>`,
  codeProperties: {
    "src": {
      "type": "string",
      "label": "Source"
    },
    "alt": {
      "type": "string",
      "label": "Alt Text",
      "defaultValue": ""
    },
    "size": {
      "type": "number",
      "label": "Size",
      "defaultValue": 80,
      "control": "select",
      "options": [
        {
          "value": 80,
          "label": "80"
        },
        {
          "value": 56,
          "label": "56"
        },
        {
          "value": 40,
          "label": "40"
        },
        {
          "value": 32,
          "label": "32"
        }
      ]
    }
  },
  metadata: { nestable: true },
}
