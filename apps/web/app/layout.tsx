import type { Metadata } from 'next'
import { Gabarito as FontSans } from 'next/font/google'

import '@repo/ui/globals.css'
import { cn } from '@repo/ui/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Aglabs Dev',
  description: 'An innovative labs.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          fontSans.variable,
          'font-sans antialiased',
          'bg-slate-900 text-slate-50',
        )}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
