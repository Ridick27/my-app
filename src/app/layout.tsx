import './globals.css'

export const metadata = {
  title: "Fernando's Home Page",
  description: 'Generated with love by Vercel',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body >
          {children}
      </body>
    </html>
  )
}
