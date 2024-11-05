import 'reset-css'
import "@/styles/globals.css";
import { Montserrat } from 'next/font/google'
import type { AppProps } from "next/app";

const montserrat = Montserrat({
  weight: ['300','400','600','700'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
