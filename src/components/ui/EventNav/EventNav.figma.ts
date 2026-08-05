// url=https://figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=677-4860
// component=EventNav

import figma from "figma"

export default {
  id: "EventNav",
  imports: ["import EventNav from '@/{{relativePath}}';"],
  example: figma.code`<EventNav price="Free" time="8:30PM–12:00AM" location="Los Angeles, CA" buttonLabel="REGISTER"/>`,
  codeProperties: {
    "price": {
      "type": "string",
      "label": "Price",
      "defaultValue": "Free"
    },
    "time": {
      "type": "string",
      "label": "Time",
      "defaultValue": "8:30PM–12:00AM"
    },
    "location": {
      "type": "string",
      "label": "Location",
      "defaultValue": "Los Angeles, CA"
    },
    "buttonLabel": {
      "type": "string",
      "label": "Button Label",
      "defaultValue": "REGISTER"
    }
  },
}
