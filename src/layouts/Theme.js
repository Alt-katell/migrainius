import React from 'react'
import { ThemeProvider } from 'styled-components'

import 'typeface-roboto'
import 'typeface-montserrat'

const theme = {
  colors: {
    green: "#30CEB3",
    darkBlue: "#3D57E0",
    mediumBlue: "#4F69EF",
    orange: "#F68251",
    darkGrey: "#E8E7EE",
    lightGrey: "#F5F5F5",
  },
  fonts: {
    montserrat: "Montserrat",
    roboto: "Roboto",
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
