import { Metadata } from 'next'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ansul Khatana - Business Consultant',
  description: 'Portfolio of Ansul Khatana, a passionate business consultant specializing in growing profitable business with mordern technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

