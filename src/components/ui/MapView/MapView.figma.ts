// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=4143-6986

import figma from "figma"

const mode = figma.selectedInstance.getEnum("Mode", {
  Light: "Light",
  Dark: "Dark",
})

export default {
  id: "MapView",
  imports: ["import MapView from '@/components/ui/MapView/MapView'"],
  example: figma.code`<MapView variant="full"${figma.helpers.react.renderProp(
    "mode",
    mode,
  )} latitude={34.07} longitude={-118.25} zoom={12} markers={[
        { id: '1', lng: -118.27, lat: 34.09 },
        { id: '2', lng: -118.22, lat: 34.06 },
    ]}/>`,
  codeProperties: {
    "longitude": {
      "type": "number",
      "label": "Longitude",
      "defaultValue": -118.25
    },
    "latitude": {
      "type": "number",
      "label": "Latitude",
      "defaultValue": 34.07
    },
    "zoom": {
      "type": "number",
      "label": "Zoom",
      "defaultValue": 12
    },
    "interactive": {
      "type": "boolean",
      "label": "Interactive",
      "defaultValue": true
    },
    "variant": {
      "type": "string",
      "label": "Variant",
      "defaultValue": "full",
      "control": "select",
      "options": [
        {
          "value": "full",
          "label": "Full"
        },
        {
          "value": "card",
          "label": "Card"
        }
      ]
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
    "labels": {
      "type": "boolean",
      "label": "Labels",
      "defaultValue": true
    },
    "showUserLocation": {
      "type": "boolean",
      "label": "Show User Location",
      "defaultValue": true
    }
  },
}
