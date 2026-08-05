// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=795-2037

import figma from "figma"

export default {
  id: "WidgetCompass",
  imports: [
    "import WidgetCompass from '@/components/ui/WidgetCompass/WidgetCompass'",
  ],
  example: figma.code`<WidgetCompass live/>`,
  codeProperties: {
    "bearing": {
      "type": "number",
      "label": "Bearing",
      "defaultValue": 355
    },
    "live": {
      "type": "boolean",
      "label": "Live",
      "defaultValue": false
    }
  },
}
