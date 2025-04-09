import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Gerador de Senha',
  description: 'Uma aplicação que gera senhas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-slate-900 to-slate-700 w-screen h-screen">{children}</body>
    </html>
  )
}
