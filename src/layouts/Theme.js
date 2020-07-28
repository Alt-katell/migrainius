import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    green: "#30CEB3",
    darkBlue: "#3D57E0",
    mediumBlue: "#4F69EF",
    orange: "#F68251"
  },
  fonts: {
    montserrat: "'Montserrat', sans-serif",
    roboto: "'Roboto', sans-serif",
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
