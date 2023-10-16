/** @format */

import Link from "next/link"
import React from "react"

function CampaignCard({
  img,
  title,
  description,
  link
}: {
  img: string
  title: string
  description: string
  link: string
}) {
  return (
    <div className='p-4 flex justify-center flex-col gap-3 rounded-xl w-52 shadow-lg bg-white'>
      <img className='rounded-3xl' alt='Example' src={img} />
      <h2 className='text-xl font-semibold'>{title}</h2>
      <p className=''>{description}</p>
      <Link
        href={link}
        className='text-gray-100 p-2 text-center text-lg text-semibold bg-gray-800 rounded-xl'>
        Go Now
      </Link>
    </div>
  )
}

export default CampaignCard
