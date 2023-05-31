import { Metadata } from 'next';
import { NextFont } from 'next/dist/compiled/@next/font';
import { Roboto } from 'next/font/google'
import './styles.module.css'

const roboto: NextFont = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: 'Wassimovie - Login',
};

export default function LoginLayout({
  children
}: {
    children: React.ReactNode
}) {
  return (
      <main className="m-0 {roboto.className}"> 
        {children} 
      </main>
  )
}
