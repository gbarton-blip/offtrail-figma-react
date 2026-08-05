import React from "react"
import BankTransfer from "./BankTransfer"
import figma from "@figma/code-connect"

figma.connect(
  BankTransfer,
  "https://www.figma.com/design/PSVZBAMK08FWIqvchjq7ml/Offtrail--Banking?node-id=1042639-9805",
  {
    props: {},
    example: () => <BankTransfer />,
  },
)
