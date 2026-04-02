import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-barlow-condensed',
})

export const metadata: Metadata = {
  title: 'Budapest Sport Tickets – Jegyár-összehasonlítás',
  description:
    'Hasonlítsd össze a sportesemény-jegyek árait Magyarországon és Európában. Mi nem adunk el jegyeket – csak az árak összehasonlítását végezzük partnereink kínálata alapján.',
  keywords: ['sport jegyek', 'jegyár összehasonlítás', 'Budapest sport', 'focimeccs jegy', 'F1 jegy', 'tenisz jegy'],
  metadataBase: new URL('https://budapestsporttickets.com'),
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: 'https://budapestsporttickets.com',
    siteName: 'Budapest Sport Tickets',
    title: 'Budapest Sport Tickets – Jegyár-összehasonlítás',
    description: 'Hasonlítsd össze a sportesemény-jegyek árait Magyarországon és Európában.',
  },
}

export const viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
