// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=670-1399

import figma from "figma"

const glyph = figma.selectedInstance.getEnum("Glyph", {
  Home: "home",
  Search: "search",
  User: "user",
  Clouds: "clouds",
  Rain: "rain",
  Sun: "sun",
  Lightning: "lightning",
  Bolt: "bolt",
  Wind: "wind",
  Calendar: "calendar",
  Compass: "compass",
  Map: "map",
  Location: "location",
  Close: "close",
  "Frame 2147239245": "settings",
  Share: "share",
  Save: "save",
  "Arrow Back": "arrow-back",
  Caret: "caret",
  "Arrow Down": "arrow-down",
  "Arrow Up": "arrow-up",
  "Arrow Left": "arrow-left",
  "Arrow Right": "arrow-right",
})

export default {
  id: "BrandIcon",
  imports: ["import BrandIcon from '@/components/ui/BrandIcon'"],
  example: figma.code`<BrandIcon${figma.helpers.react.renderProp(
    "glyph",
    glyph,
  )}/>`,
  codeProperties: {
    "glyph": {
      "type": "string",
      "label": "Glyph",
      "defaultValue": "home",
      "control": "select",
      "options": [
        {
          "value": "home",
          "label": "Home"
        },
        {
          "value": "search",
          "label": "Search"
        },
        {
          "value": "user",
          "label": "User"
        },
        {
          "value": "clouds",
          "label": "Clouds"
        },
        {
          "value": "rain",
          "label": "Rain"
        },
        {
          "value": "sun",
          "label": "Sun"
        },
        {
          "value": "lightning",
          "label": "Lightning"
        },
        {
          "value": "bolt",
          "label": "Bolt"
        },
        {
          "value": "wind",
          "label": "Wind"
        },
        {
          "value": "calendar",
          "label": "Calendar"
        },
        {
          "value": "compass",
          "label": "Compass"
        },
        {
          "value": "map",
          "label": "Map"
        },
        {
          "value": "location",
          "label": "Location"
        },
        {
          "value": "close",
          "label": "Close"
        },
        {
          "value": "settings",
          "label": "Settings"
        },
        {
          "value": "share",
          "label": "Share"
        },
        {
          "value": "save",
          "label": "Save"
        },
        {
          "value": "arrow-back",
          "label": "Arrow Back"
        },
        {
          "value": "caret",
          "label": "Caret"
        },
        {
          "value": "arrow-down",
          "label": "Arrow Down"
        },
        {
          "value": "arrow-up",
          "label": "Arrow Up"
        },
        {
          "value": "arrow-left",
          "label": "Arrow Left"
        },
        {
          "value": "arrow-right",
          "label": "Arrow Right"
        }
      ]
    }
  },
  metadata: { nestable: true },
}
