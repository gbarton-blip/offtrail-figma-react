// url=https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=874-3762

import figma from "figma"

export default {
  id: "MapView_1",
  imports: ["import MapView from '@/components/ui/MapView/MapView'"],
  example: figma.code`<MapView variant="card" mode="Dark" interactive={false} latitude={34.07} longitude={-118.25} zoom={14}/>`,
}
