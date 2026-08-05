// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=788-4288

import figma from "figma"

const children = figma.properties.children(["Slot"])

export default {
  id: "Facepile",
  imports: ["import Facepile from '@/components/ui/Facepile'"],
  example: figma.code`<Facepile>
        ${figma.helpers.react.renderChildren(children)}
      </Facepile>`,
  metadata: { nestable: true },
}
