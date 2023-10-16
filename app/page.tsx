import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Meba | Home",
  description: "Welcome to Meba!"
}


export default function Home() {
  return (
    <main className='text-6xl flex justify-center'>
      <h1>Meba Admin Dash</h1>
    </main>
  )
}
