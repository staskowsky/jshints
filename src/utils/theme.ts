import { createTheme } from "@mui/material"

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#334756",
    },
    secondary: {
      main: "#2C394B",
    },
    error: {
      main: "#FF4C29",
    },
    text: { primary: "#ddd" },
  },
  typography: {},
  spacing: [4, 8, 16, 32, 64],
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 1200,
      xl: 1600,
    },
  },
})
