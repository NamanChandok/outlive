import React from 'react'
import { Cabin } from 'next/font/google'

const cabin = Cabin({subsets: ['latin'], weight: 'variable'})

type Props = {}

export default function About({}: Props) {
  return (
    <div className={cabin.className + ' w-screen bg-cream px-8 py-12 md:py-24 text-center md:px-48'}>
        <h1 className='font-primary text-dark text-5xl md:text-6xl'>Our Team</h1>
        <hr className="w-16 border-outlive-blue border-2 mt-4 mx-auto" />
        <div className='grid md:grid-cols-4 justify-center gap-12 pt-16'>
          <div>
            <img src="team-st.jpg" className='aspect-square object-cover rounded-full w-52 mx-auto' alt="Sarthak Tyagi" />
            <h3 className='text-3xl font-primary pt-4'>Sarthak Tyagi</h3>
            <p className='text-outlive-blue'>President</p>
          </div>
          <div>
            <img src="team-ac.jpg" className='aspect-square object-cover rounded-full w-52 mx-auto' alt="Aditya Choithani" />
            <h3 className='text-3xl font-primary pt-4'>Aditya Choithani</h3>
            <p className='text-outlive-blue'>Vice President</p>
          </div>
          <div>
            <img src="team-mm.jpg" className='aspect-square object-cover rounded-full w-52 mx-auto' alt="Monal Mannan" />
            <h3 className='text-3xl font-primary pt-4'>Monal Mannan</h3>
            <p className='text-outlive-blue'>Creative Head</p>
          </div>
          <div>
            <img src="team-ach.jpg" className='aspect-square object-cover rounded-full w-52 mx-auto' alt="Amayra Channa" />
            <h3 className='text-3xl font-primary pt-4'>Amayra Chanana</h3>
            <p className='text-outlive-blue'>Head of Social Outreach</p>
          </div>
        </div>
    </div>
  )
}