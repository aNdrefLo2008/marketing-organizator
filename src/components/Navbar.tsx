/** @format */

import Link from "next/link"
import React from "react"

function Navbar() {
  return (
    <div className='text-center py-4 w-full flex justify-between px-14 items-center mb-4'>
      <div>Navbar</div>
      <div className='flex gap-10 items-center'>
        <Link
          href='/dashboard'
          className='text-black font-semibold hover:text-gray-600'>
          Dashboard
        </Link>
        <Link
          href='/settings'
          className='text-black font-semibold hover:text-gray-600'>
          Settings
        </Link>
      </div>
    </div>
  )
}

export default Navbar
