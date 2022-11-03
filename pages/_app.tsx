import "../public/globals.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "@emotion/react"
import { darkTheme } from "../src/utils/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
