// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=424-1729

import figma from "figma"

const title = figma.selectedInstance.getString("Title")
const location = figma.selectedInstance.getString("Location")
const people = figma.selectedInstance.getString("People")
const time = figma.selectedInstance.getString("Time")
const overlay = figma.selectedInstance.getString("Overlay")
const size = figma.selectedInstance.getEnum("Size", {
  Large: "large",
  Small: "small",
})

export default {
  id: "CardEvent",
  imports: ["import CardEvent from '@/components/ui/CardEvent'"],
  example: figma.code`<CardEvent src="/path/to/event.jpg"${figma.helpers.react.renderProp(
    "title",
    title,
  )}${figma.helpers.react.renderProp(
    "location",
    location,
  )}${figma.helpers.react.renderProp(
    "people",
    people,
  )}${figma.helpers.react.renderProp(
    "time",
    time,
  )}${figma.helpers.react.renderProp(
    "size",
    size,
  )}${figma.helpers.react.renderProp(
    "overlay",
    overlay,
  )} month="Jun" day="12"/>`,
  codeProperties: {
    "src": {
      "type": "string",
      "label": "Image Source"
    },
    "title": {
      "type": "string",
      "label": "Title",
      "defaultValue": "Weekend Surf Session"
    },
    "location": {
      "type": "string",
      "label": "Location",
      "defaultValue": "Ventura, CA"
    },
    "people": {
      "type": "string",
      "label": "People",
      "defaultValue": "12"
    },
    "time": {
      "type": "string",
      "label": "Time",
      "defaultValue": "6:30AM – 1:00PM"
    },
    "month": {
      "type": "string",
      "label": "Month",
      "defaultValue": "Jun"
    },
    "day": {
      "type": "string",
      "label": "Day",
      "defaultValue": "12"
    },
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
    },
    "overlay": {
      "type": "string",
      "label": "Overlay",
      "defaultValue": ""
    }
  },
  metadata: { nestable: true },
}
