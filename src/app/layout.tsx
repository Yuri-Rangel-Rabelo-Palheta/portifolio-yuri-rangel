import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '../components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital Detective: Forensic Computing Portfolio',
  description: 'Explore the expertise of a Computer Engineer specializing in Forensic Computing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` bg-dark-blue text-light-gray`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}

