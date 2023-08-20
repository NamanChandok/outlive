import React from 'react'
import { Cabin } from 'next/font/google'

const cabin = Cabin({subsets: ['latin'], weight: 'variable'})

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className={cabin.className + ' w-screen min-h-screen flex flex-col md:flex-row'}>
      <div className='bg-cream text-dark w-full md:w-1/2 min-h-1/2 flex flex-col justify-center items-start pt-24 pb-20 px-8 md:py-8 md:px-24 gap-8'>
        <h1 className='text-5xl md:text-6xl font-primary font-extrabold'>
        Be a Hero <br />
        Be an Organ Donor
        </h1>
        <p className='text-outlive-blue max-w-md'>In association with National Organ and Tissue Transplant Organization (NOTTO) set up with the Ministry Of Health and Family Welfare by Tagore International School, Vasant Vihar.</p>
        <a className='uppercase px-6 py-4 bg-outlive-red hover:bg-[#d01915] transition duration-300 ease-in-out text-white' href='https://goo.by/NbGPq'>Become a Donor Today</a>
        <div className='flex justify-between w-full'>
          <a href='https://www.linkedin.com/in/project-outlive-yourself-412941274/'>Linkedin</a>
          <span className='text-outlive-blue'>&#x2022;</span>
          <a href='https://www.youtube.com/@ProjectOutliveYourself'>YouTube</a>
          <span className='text-outlive-blue'>&#x2022;</span>
          <a href='https://www.instagram.com/outliveyourself/'>Instagram</a>
        </div>
      </div>
      <div className='bg-outlive-blue w-full md:w-1/2 flex items-end justify-start'>
        <img className='h-full w-full md:w-[85%] md:h-[85vh] object-cover' src='/bg.jpg'/>
      </div>
    </div>
  )
}