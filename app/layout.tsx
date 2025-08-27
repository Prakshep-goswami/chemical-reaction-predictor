import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chemical Reaction Predictor',
  description: 'DO GOOD WORK',
  generator: 'ppy enterprise',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        {children}

        {/* Footer */}
        <footer className="bg-orange-600 text-white text-center p-4 mt-8">
          <p>
            © 2025 Designed and Developed by{" "}
            <a
              href="mailto:ppyenterprises@gmail.com"
              className="underline hover:text-orange-200"
            >
              ppyenterprises@gmail.com
            </a>
          </p>
          <div className="mt-3">
            <a
              href="https://linktr.ee/prakshep"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-100 transition"
            >
              Contact Us
            </a>
          </div>
        </footer>
      </body>
    </html>
  )
}
