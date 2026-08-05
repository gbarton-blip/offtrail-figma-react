// url=https://figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=435-505
// component=PageHeader

import figma from "figma"

export default {
  id: "PageHeader",
  imports: ["import PageHeader from '@/{{relativePath}}';"],
  example: figma.code`<PageHeader title="Explore Trails" showShareButton={true}/>`,
  codeProperties: {
    "title": {
      "type": "string",
      "label": "Title",
      "defaultValue": "Heading"
    },
    "showShareButton": {
      "type": "boolean",
      "label": "Show Share Button",
      "defaultValue": true
    }
  },
}
