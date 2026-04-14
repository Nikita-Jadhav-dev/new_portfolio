import React from "react"
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Nikita Jadhav | Java Full Stack Developer',
  description: 'Portfolio of Nikita Jadhav- Java Full Stack Developer specializing in Spring Boot, Microservices, and scalable backend systems.',
  keywords: ['Java Developer', 'Spring Boot', 'Microservices', 'Full Stack Developer', 'Backend Engineer'],
  authors: [{ name: 'Nikita Jadhav' }],
  icons: {
    icon: [
      {
        url: '/favicon-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon-32x32.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/favicon-32x32.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
