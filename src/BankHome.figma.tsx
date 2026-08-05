import React from "react"
import BankHome from "./BankHome"
import figma from "@figma/code-connect"

figma.connect(
  BankHome,
  "https://www.figma.com/design/PSVZBAMK08FWIqvchjq7ml/Offtrail--Banking?node-id=1042639-9803",
  {
    props: {},
    example: () => <BankHome />,
  },
)
