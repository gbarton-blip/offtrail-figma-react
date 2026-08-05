// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=4143-7035

import figma from "figma"

const location = figma.selectedInstance.getString("Location")
const mode = figma.selectedInstance.getEnum("Mode", {
  Light: "Light",
  Dark: "Dark",
})

export default {
  id: "TileLocation",
  imports: [
    "import TileLocation from '@/components/ui/TileLocation/TileLocation'",
  ],
  example: figma.code`<TileLocation${figma.helpers.react.renderProp(
    "location",
    location,
  )}${figma.helpers.react.renderProp(
    "mode",
    mode,
  )} latitude={34.27} longitude={-119.23}/>`,
  codeProperties: {
    "location": {
      "type": "string",
      "label": "Location",
      "defaultValue": "Location"
    },
    "mode": {
      "type": "string",
      "label": "Mode",
      "defaultValue": "Dark",
      "control": "select",
      "options": [
        {
          "value": "Light",
          "label": "Light"
        },
        {
          "value": "Dark",
          "label": "Dark"
        }
      ]
    },
    "latitude": {
      "type": "number",
      "label": "Latitude",
      "defaultValue": 34.07
    },
    "longitude": {
      "type": "number",
      "label": "Longitude",
      "defaultValue": -118.25
    }
  },
  metadata: { nestable: true },
}
