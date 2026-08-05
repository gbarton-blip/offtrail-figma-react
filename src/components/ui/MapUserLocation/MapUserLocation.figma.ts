// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=871-2767

import figma from "figma"

export default {
  id: "MapUserLocation",
  imports: [
    "import MapUserLocation from '@/components/ui/MapUserLocation/MapUserLocation'",
  ],
  example: figma.code`<MapUserLocation size="large"/>`,
  codeProperties: {
    "size": {
      "type": "string",
      "label": "Size",
      "defaultValue": "large",
      "control": "select",
      "options": [
        {
          "value": "large",
          "label": "Large"
        },
        {
          "value": "small",
          "label": "Small"
        }
      ]
    }
  },
}
