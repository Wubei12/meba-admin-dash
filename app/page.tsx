import HomeNav from '@/components/HomeNav'
import HomeBody from '@/components/homeBody'
import { Metadata } from 'next'
import Image from 'next/image'


export const metadata: Metadata = {
  title: "Meba | Home",
  description: "Welcome to Meba!"
}


export default function Home() {
  return (
    <main className='m-0 w-full h-screen '>
      <div className='absolute w-full h-full bg-black/40' />
      <video src={`https://res.cloudinary.com/dtbufoojz/video/upload/v1697496423/Easter_Midnight_Mass_in_Lalibela-_Ethiopia_Dolce_Africa_Episode_Preview_online-video-cutter.com_dv7ocf.mp4`} autoPlay loop muted className='w-full h-full object-cover' />
      <HomeNav />
      <HomeBody />

    </main>
  )
}

