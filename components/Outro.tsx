import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

type Props = {}

export default function Outro({}: Props) {
  return (
    <div className="p-8 md:p-12 bg-outlive-red flex flex-col md:flex-row items-center justify-center gap-8 md:gap-72 text-cream">
        <h1 className="font-primary text-5xl">Become An Organ<br /> Donor Today</h1>
        <a className='uppercase px-6 py-4 bg-cream hover:bg-[#eae7dd] transition duration-300 ease-in-out font-semibold text-outlive-red flex items-center gap-2' href='https://goo.by/NbGPq'>Sign up <FontAwesomeIcon icon={faArrowRightLong} className="h-4" /></a>
    </div>
  )
}