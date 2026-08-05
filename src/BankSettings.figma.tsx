import React from "react"
import BankSettings from "./BankSettings"
import figma from "@figma/code-connect"

figma.connect(
  BankSettings,
  "https://www.figma.com/design/PSVZBAMK08FWIqvchjq7ml/Offtrail--Banking?node-id=1042639-9804",
  {
    props: {},
    example: () => <BankSettings />,
  },
)
