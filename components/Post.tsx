import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faCalendar } from "@fortawesome/free-solid-svg-icons"

type Props = {
    title: string,
    imgUrl: string,
    slug: string,
    date: string,
    author: string,
}

export default function Post({ title, imgUrl, slug, date, author }: Props) {
  return (
    
    <div className="w-full md:w-3/5 bg-white flex flex-col mb-6 shadow-sm">
        <a href={`blog/${slug}`} className='w-full h-64'>
            <img src={imgUrl} alt={title} className="w-full h-full object-cover" />
        </a>
        <div className='p-8 text-left'>
            <h4 className='tracking-wide uppercase text-sm text-[#a7a7a4] flex flex-row gap-3'>
                <FontAwesomeIcon icon={faUser} className="h-5"/> {author}
                <FontAwesomeIcon icon={faCalendar} className="h-5" /> {date}
            </h4>
            <h1 className='font-primary text-dark text-3xl py-3'>{title}</h1>
            <a className='text-outlive-blue underline font-semibold decoration-[#230d6d] underline-offset-2' href={`blog/${slug}`}>Read more</a>
        </div>
    </div>
    
  )
}