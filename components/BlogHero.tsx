import React from 'react'
import { Cabin } from 'next/font/google'
const cabin = Cabin({subsets: ['latin'], weight: 'variable'})

type Props = {
    page: string,
}

export default function SubpageHero({ page }: Props) {
  return (
    <div className={cabin.className + ' h-80 bg-outlive-blue text-cream flex flex-col gap-3 justify-end px-8 py-12 md:px-32'}>
        <img src="/bg.jpg" className='h-80 w-full object-cover opacity-30 absolute top-0 left-0 z-10' />
        <p className='z-20 font-semibold text-lg'>Home &gt; Blog &gt; {page}</p>
        <h1 className='z-20 font-primary text-6xl'>{page}</h1>
    </div>
  )
}