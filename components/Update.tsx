import React from 'react'

type Props = {
    title: string,
    imgUrl: string,
    desc: string,
    url: string,
    date: string
}

export default function Update({ title, imgUrl, desc, url, date }: Props) {
  return (
    <div className="w-full md:w-3/4 bg-white flex flex-col md:flex-row mb-6 shadow-sm">
        <img src={imgUrl} alt={title} className="w-full md:w-1/2 h-80 object-cover" />
        <div className='p-8 text-left'>
            <h4 className='tracking-wide uppercase text-[#a7a7a4]'>{date}</h4>
            <h1 className='font-primary text-dark text-3xl py-3'>{title}</h1>
            <p className='text-outlive-blue'>{desc}</p>
            <a className='text-outlive-blue underline font-semibold decoration-[#230d6d] underline-offset-2' href={url}>View post on LinkedIn</a>
        </div>
    </div>
  )
}