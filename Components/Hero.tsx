import Link from 'next/link'
import React from 'react'
import { Cursor ,useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'
import BackgroundCircle from './BackgroundCircle'

type Props = {
  pageInfo:PageInfo,
}

function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi, The Name Is ${pageInfo?.name}`,
            "Guy who loves coding",
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircle />
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src={urlFor(pageInfo?.heroImage).url()} alt='My Picture'/>
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#f7ab0a' />
        </h1>
        <div className='pt-5'>

            <Link href="#About">
              <button className='heroButton'>About</button>
            </Link>
            <Link href="#Experience">
              <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#Skills">
              <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#Projects">
              <button className='heroButton'>Projects</button>
            </Link>
        </div>
        </div>
    </div>
  )
}


export default Hero