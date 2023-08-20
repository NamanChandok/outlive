'use client';

import React from 'react'
import Image from 'next/image'
import { useState, useCallback, useEffect } from 'react';
import { Inter, Cabin } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const cabin = Cabin({ subsets: ['latin'], weight: 'variable' })

type Props = {}

export default function Header({}: Props) {

  function handleClick() {

    const navbar = document.getElementById("mobile-nav");
    const toggle = document.querySelector(".mobile-nav-toggle");

    const visibility = navbar!.getAttribute('data-visible');
    if(visibility === "false") {
        navbar!.setAttribute('data-visible', 'true');
        toggle!.setAttribute('aria-expanded', 'true');
    } else {
        navbar!.setAttribute('data-visible', 'false');
        toggle!.setAttribute('aria-expanded', 'false');
    }
  }

  const [clientWindowHeight, setClientWindowHeight] = useState(0);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);

  useEffect(() => {
    let backgroundTransparacyVar = Number(clientWindowHeight > 100);
    setBackgroundTransparacy(backgroundTransparacyVar);
  }, [clientWindowHeight]);

  return (
    <nav className='w-full fixed top-0 left-0 p-6 z-30 md:px-12 flex justify-between items-center transition duration-300 ease-in-out' style={{
      background: `rgba(23, 9, 71, ${backgroundTransparacy})`
    }}>
        <a className='text-outlive-red text-xl md:text-2xl uppercase font-extrabold tracking-tighter flex items-center gap-2' href='/'>
            <Image src='/logo.svg' alt='logo' width={40} height={40}/>
            <span className='font-primary tracking-tight'>Outlive Yourself</span>
        </a>
        
        <div className={cabin.className + ' hidden md:flex gap-6 underline underline-offset-2 decoration-transparent font-semibold items-center text-white tracking-tighter decoration-2'}>
          <a className='transition duration-300 ease-in-out hover:decoration-outlive-red' href='/'>Home</a>
          <a className='transition duration-300 ease-in-out hover:decoration-outlive-red' href='/about'>About Us</a>
          <a className='transition duration-300 ease-in-out hover:decoration-outlive-red' href='/guide'>Guide</a>
          <a className='transition duration-300 ease-in-out hover:decoration-outlive-red' href='/resources'>Resources</a>
          <a className='transition duration-300 ease-in-out hover:decoration-outlive-red' href='/blog'>Blog</a>
          <a className='transition duration-300 ease-in-out hover:decoration-outlive-red' href='/updates'>Updates</a>
          <a className='transition duration-300 ease-in-out bg-outlive-red/80 hover:bg-outlive-red px-4 py-1 rounded-2xl' href='https://goo.by/NbGPq'>BECOME A DONOR</a>
        </div>

        <button className="mobile-nav-toggle md:hidden transition duration-300 ease-in-out" aria-controls="mobile-nav" aria-expanded="false" onClick={handleClick}></button>

        <nav id="mobile-nav" data-visible="false"
          className="transition duration-300 ease-in-out md:hidden fixed inset-y-0 inset-x-28 right-0 py-24 px-8 bg-outlive-blue/60 flex flex-col translate-x-full z-20 text-xl text-white font-cabin gap-6 backdrop-blur-sm underline decoration-transparent underline-offset-4 decoration-2">
          <a className="transition duration-300 ease-in-out hover:decoration-outlive-red" href="/">HOME</a>
          <a className="transition duration-300 ease-in-out hover:decoration-outlive-red" href="/about">ABOUT US</a>
          <a className="transition duration-300 ease-in-out hover:decoration-outlive-red" href="/guide">GUIDE</a>
          <a className="transition duration-300 ease-in-out hover:decoration-outlive-red" href="/resources">RESOURCES</a>
          <a className="transition duration-300 ease-in-out hover:decoration-outlive-red" href="/blog">BLOG</a>
          <a className="transition duration-300 ease-in-out hover:decoration-outlive-red" href="/updates">UPDATE</a>
          <a className='transition duration-300 ease-in-out bg-outlive-red/80 hover:bg-outlive-red px-4 py-1 rounded-2xl w-max' href='https://goo.by/NbGPq'>BECOME A DONOR</a>
        </nav>

    </nav>
  )
}