/** @format */

import CampaignCard from "@/components/CampaignCard"
import Image from "next/image"
import React from "react"

function page() {
  return (
    <div>
      <div className='flex flex-col gap-1 justify-center items-center mx-4'>
        <h1 className='font-semibold text-3xl text-center '>
          Welcome back to your marketing campaigns
        </h1>
        <h3 className='font-semibold text-sm text-gray-600 text-center'>
          Here you can see, modify or delete the marketing campaigns of this
          client
        </h3>
      </div>
      <div className='mt-8 mb-10 flex flex-wrap gap-10 justify-center items-center'>
        <CampaignCard
          title='Social Medias'
          link='social-medias'
          description='Here you can access your campaigns regarding social medias.'
          img='https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/12/99871876.jpg?auto=format&q=60&w=1280&h=960&fit=crop&crop=faces'
        />
        <CampaignCard
          title='Paid ads'
          link='paid-ads'
          description='Here you can acces your campaigns regarding paid ads.'
          img='https://brilliant.digital/wp-content/uploads/2023/04/A-Beginners-Guide-To-Paid-Advertising-in-2023-1024x683.jpg'
        />
        <CampaignCard
          title='Website Creation'
          link='website-creation'
          description='Here you can acces your website, see the stats about it and how to get it more famous'
          img='https://i0.wp.com/interactivesolutions.pk/wp-content/uploads/2022/05/Web-Development.jpg'
        />
        <CampaignCard
          title='Cold Outreach'
          link='cold-outreach'
          description='Here you can acces your campaigns regarding outreach.'
          img='https://woorise.com/wp-content/uploads/2020/08/boost-social-selling-with-cold-outreach.png'
        />
      </div>
    </div>
  )
}

export default page
