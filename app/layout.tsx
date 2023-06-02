import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WassiMovie',
  description: 'Have a Wassi good time!!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="m-0 p-0">
      <body className={`m-0 p-0 ${inter.className}`}>
        <div className="menu-bar">
          <a href='/'>
            <img style={{height: '30px', width: 'auto'}} src={process.env.logoURL}/>
          </a>
          <a href='/search'>
            Search
          </a>
          <a href='/user'>
            Account
          </a>
        </div>
        {children}
      </body>
    </html>
  )
}
