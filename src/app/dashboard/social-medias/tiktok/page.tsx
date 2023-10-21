/** @format */

"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"
import Link from "next/link"
import {Line} from "react-chartjs-2"
import {BsFillPeopleFill, BsPersonFillAdd} from "react-icons/bs"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const
    },
    title: {
      display: true,
      text: "Chart.js Line Chart"
    }
  }
}

const labels = ["January", "February", "March", "April", "May", "June", "July"]

export const data = {
  labels,
  datasets: [
    {
      label: "followers",
      data: [0, 20, 50, 54, 57, 74, 93],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    }
  ]
}

export default function App() {
  return (
    <div className='flex flex-col gap-4 mx-4 justify-center items-center'>
      <img
        className='h-20 mb-6'
        src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/2560px-TikTok_logo.svg.png'
      />
      <div className='flex justify-center items-center flex-col sm:flex-row gap-6'>
        <div className='flex flex-col gap-4 justify-center items-center'>
          {/*<Line options={options} data={data} />*/}
          <div className='flex justify-between bg-white items-center mx-12 gap-4 shadow-lg p-4 rounded-xl'>
            <BsFillPeopleFill className='h-8 w-8' />
            <div className='flex flex-col'>
              <h4 className='text-sm font-semibold text-gray-600'>
                FOLLOWERS COUNT
              </h4>
              <div className='flex justify-center items-center gap-2'>
                <h2 className='font-bold text-lg'>93</h2>
                <h3 className='font-semibold'>Followers</h3>
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center mx-12 gap-4 shadow-lg bg-white p-4 rounded-xl'>
            <BsPersonFillAdd className='h-8 w-8' />
            <div className='flex flex-col'>
              <h4 className='text-sm font-semibold text-gray-600'>
                FOLLOWERD PEOPLE
              </h4>
              <div className='flex justify-center items-center gap-2'>
                <h2 className='font-bold text-lg'>24</h2>
                <h3 className='font-semibold'>Followed</h3>
              </div>
            </div>
          </div>
          <div>{/*Chart going in here*/}</div>
        </div>
        <div>
          <div className='flex justify-center items-center flex-col gap-4'>
            <img
              className='rounded-full h-32'
              src='https://i.pinimg.com/736x/59/37/5f/59375f2046d3b594d59039e8ffbf485a.jpg'
            />
            <h1 className='text-semibold text-3xl'>Leonardo Davinci</h1>
          </div>
        </div>
      </div>
      <Link
        href='https://instagram.com'
        className='bg-gray-400 text-white p-4 rounded-3xl hover:bg-gray-600 hover:text-gray-300'>
        Go now to their page
      </Link>
    </div>
  )
}
