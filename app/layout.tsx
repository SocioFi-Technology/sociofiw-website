import type React from "react"
import type { Metadata } from "next"
import { Poppins, Roboto, Abril_Fatface } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ChatbotWrapper from "@/components/chatbot-wrapper"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
})

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-abril-fatface",
})

export const metadata: Metadata = {
  title: "SocioFi Technology | Bangladesh's First AI Agent Company",
  description:
    "Empowering Bangladesh with AI Innovation - Customized AI solutions for industries & a future-ready nation.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${roboto.variable} ${abrilFatface.variable} font-roboto`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} disableTransitionOnChange={false}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ChatbotWrapper />
        </ThemeProvider>
      </body>
    </html>
  )
}