import type { Metadata } from 'next'
import { Gabarito as FontSans } from 'next/font/google'
import Script from 'next/script'

import '@repo/ui/globals.css'
import { cn } from '@repo/ui/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Aglabs Bot',
  description: 'A bot by Aglabs.',
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
          'border-border flex min-h-screen items-center border-4 font-sans antialiased',
          'bg-slate-50 bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:48px_48px]',
        )}
        suppressHydrationWarning
      >
        {children}
        {process.env.NODE_ENV === 'production' && (
          <Script
            async
            defer
            src="https://analytics.hendraaagil.dev/script.js"
            data-website-id="2513941b-6ff7-4a51-bb69-0126eeb4983e"
          />
        )}
      </body>
    </html>
  )
}
