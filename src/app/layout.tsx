import NavBar from '@/components/nav/NavBar'
import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className="antialiased min-h-screen">
                <NavBar />

                <div className="m-auto p-4">{children}</div>
            </body>
        </html>
    )
}
