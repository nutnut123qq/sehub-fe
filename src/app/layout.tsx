import type { ReactNode } from 'react'
import { Roboto } from 'next/font/google'
import '@/styles/globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="min-h-dvh bg-white text-foreground antialiased font-roboto">
        {children}
      </body>
    </html>
  )
}
