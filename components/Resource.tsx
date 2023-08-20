import React from 'react'

type Props = {
    title: string,
    imgUrl: string,
    desc: string,
    url: string
}

export default function Resource({ title, imgUrl, desc, url }: Props) {
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
        <a href={url}>
            <img src={imgUrl} alt={title} className="w-full h-32 object-contain"/>
        </a>
        <div className='p-4 text-left'>
            <a className='font-primary text-dark text-2xl' href={url}>{title}</a>
            <p className='text-outlive-blue py-2'>{desc}</p>
        </div>
    </div>
  )
}