import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className='px-8 py-12 md:px-48 bg-cream flex flex-col items-start justify-center gap-6 text-dark'>
        <div className='flex flex-col md:flex-row justify-between w-full gap-4'>
            <div className='flex flex-col gap-2'>
                <h1 className='font-primary text-2xl pb-4'>Outlive Yourself</h1>
                    <a href='https://www.instagram.com/outliveyourself/'>Instagram</a>
                    <a href='https://www.youtube.com/@ProjectOutliveYourself'>YouTube</a>
                    <a href='https://www.linkedin.com/in/project-outlive-yourself-412941274/'>Linkedin</a>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-24">
                <ul className='flex flex-col gap-2'>
                    <h1 className='font-primary text-2xl pb-4'>Navigation</h1>
                    <a href='/'>Home</a>
                    <a href='/blog'>Blog</a>
                    <a href='/#team'>Team</a>
                </ul>
                <ul className='flex flex-col gap-2'>
                    <h1 className='font-primary text-2xl pb-4'>About Us</h1>
                    <a href='/about'>About Us</a>
                    <a href='/contact'>Contact</a>
                    <a href='/contact#map'>Address</a>
                </ul>
                <ul className='flex flex-col gap-2'>
                    <h1 className='font-primary text-2xl pb-4'>Help</h1>
                    <a href='/guide'>Donor Guide</a>
                    <a href='/resources'>Resources</a>
                    <a href='/updates'>Updates</a>
                </ul>
            </div>
        </div>
        <hr className='border-[#a7a7a4] border-2 w-full' />
        <p className='text-[#646461] text-sm'>Designed by <a className='underline decoration-outlive-blue underline-offset-2 underline-2 hover:text-dark transition duration-300 ease-in-out' href='https://namanchandok.github.io'>Naman Chandok</a> and Utkarsh Mishra</p>
    </div>
  )
}
