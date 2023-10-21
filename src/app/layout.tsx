/** @format */

import Navbar from "@/components/Navbar"
import "./globals.css"
import Sidebar from "@/components/Sidebar"

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-neutral-100'>
        <Navbar />
        <div className='flex'>
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  )
}
