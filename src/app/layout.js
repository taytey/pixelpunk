import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import localFont from "@next/font/local";
import {Pixelify_Sans, Silkscreen, VT323} from "@next/font/google";
import Footer from './layout/Footer';



export const metadata = {
  title: 'PixelPunk',
  description: 'Generated by create next app',
}

const pixelify = Pixelify_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-pixelifysans',
})
const silkscreen = Silkscreen({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-silkscreen'
})

const vt323 = VT323({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-vt323'
})


export default function RootLayout({ children }) {



  return (
      <ClerkProvider>
          <html lang="en" className={`${pixelify.variable} ${silkscreen.variable} ${vt323.variable}`}>
              <body>
                {children}
                <Footer/>
              </body>
          </html>
      </ClerkProvider>

  )
}


