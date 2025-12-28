import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'MovieRoom Premium APK Download - Free Android Movie App | Official Site',
  description: 'Download MovieRoom Premium APK v2.5.1 - Free Android movie streaming app with 4K quality, offline downloads, and 10M+ happy users. Safe, virus-free, no registration required. Latest version 85MB.',
  keywords: 'MovieRoom, MovieRoom APK, download MovieRoom, free movie app, Android streaming, movie download, watch movies online, MovieRoom premium, MovieRoom latest version, APK download',
  authors: [{ name: 'MovieRoom Official' }],
  creator: 'MovieRoom Official Team',
  publisher: 'MovieRoom',
  formatDetection: { 
    email: false, 
    address: false, 
    telephone: false 
  },
  metadataBase: new URL('https://movieroom-portal.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://movieroom-portal.vercel.app',
    title: 'MovieRoom Premium APK - Free Android Movie Streaming App',
    description: 'Download MovieRoom Premium APK v2.5.1 - Stream thousands of movies in 4K quality. Safe, free, no registration required.',
    siteName: 'MovieRoom Official',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MovieRoom Premium App - Free Movie Streaming',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MovieRoom Premium APK - Free Android Movie App',
    description: 'Download MovieRoom v2.5.1 - Stream movies in 4K quality. Safe, free, no registration required.',
    images: ['/twitter-image.jpg'],
    creator: '@MovieRoomApp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0F0F0F" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="font-sans">
        {children}
        
        {/* Background elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        </div>
      </body>
    </html>
  )
}