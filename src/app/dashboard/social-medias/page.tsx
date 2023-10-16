/** @format */

import CampaignCard from "@/components/CampaignCard"

function page() {
  return (
    <div>
      <div className='flex flex-col gap-1 justify-center items-center mx-4'>
        <h1 className='font-semibold text-3xl text-center '>
          Welcome back to your social medias
        </h1>
        <h3 className='font-semibold text-sm text-gray-600 text-center'>
          Here you can see, modify or delete the social medias of this client
        </h3>
      </div>
      <div className='mt-8 mb-10 flex flex-wrap gap-10 justify-center items-center'>
        <CampaignCard
          title='Instagram'
          link='social-medias/instagram'
          description='Here you can access your instagram profile, and see your progress.'
          img='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png'
        />
        <CampaignCard
          title='Tiktok'
          link='social-medias/tiktok'
          description='Here you can access your tiktok profile, and see your progress.'
          img='https://cdn.pixabay.com/photo/2021/06/15/12/28/tiktok-6338430_960_720.png'
        />
        <CampaignCard
          title='Facebook'
          link='social-medias/facebook'
          description='Here you can access your facebook profile, and see your progress.'
          img='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png'
        />
        <CampaignCard
          title='Youtube'
          link='social-medias/youtube'
          description='Here you can access your youtube channel, and see your progress.'
          img='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/2048px-YouTube_social_white_square_%282017%29.svg.png'
        />
        <CampaignCard
          title='Linkedin'
          link='social-medias/linkedin'
          description='Here you can access your linkedin profile, and see your progress.'
          img='https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png'
        />
      </div>
    </div>
  )
}

export default page
