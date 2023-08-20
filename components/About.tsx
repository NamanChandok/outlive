import React from 'react'
import { Cabin } from 'next/font/google'

const cabin = Cabin({subsets: ['latin'], weight: 'variable'})

type Props = {}

export default function About({}: Props) {
  return (
    <div className={cabin.className + ' w-screen bg-cream px-8 py-12 md:py-24 md:px-48'}>
        <div className='w-full bg-white flex flex-col md:flex-row relative justify-end rounded-t-full md:rounded-tr-none md:mt-20 shadow-sm'>
          <img src='/about.jpg' className='w-full md:w-1/2 object-cover rounded-t-full h-80 md:h-[30rem] md:absolute bottom-0 left-0'></img>
          <div className="md:w-1/2 p-8 md:p-16">
            <h1 className='font-primary text-5xl md:text-6xl text-dark'>About Us</h1>
            <hr className="w-16 border-outlive-blue border-2 mt-4" />
            <p className='py-4'>In association with National Organ and Tissue Transplant Organization (NOTTO) set up with the Ministry Of Health and Family Welfare, the students of Tagore International School, Vasant Vihar are launching PROJECT OUTLIVE YOURSELF, to generate awareness about the profound significance of ORGAN DONATION.</p>
            <a className='text-outlive-blue underline font-semibold decoration-[#230d6d] underline-offset-2' href='/about'>Read more</a>
          </div>
      </div>
    </div>
  )
}