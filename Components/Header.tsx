import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link';
import { Social } from '../typings';

type Props = {
  socials: Social[],
}

function Header({socials}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between  max-w-7x1 mx-auto z-20 xl:items-center p-5'>
        <motion.div className='flex flex-row items-center'
         initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
           }}
          animate={{
            x: 0,
            opacity: 1,
             scale: 1,
           }}
           transition={{
            duration: 1.5,
          }}    
         >
            {/*My social Media*/}
            {socials.map((social)=>(
              <SocialIcon key={social._id} url={social.url}
              fgColor='gray'
              bgColor='transparent'/>
            ))}
        </motion.div>

        <motion.div className='flex flex-row items-center text-gray-300 cursor-pointer'
        initial={{
          x:500,
          opacity:0,
          scale:0.5,
        }}
        animate={{
          x:0,
          opacity:1,
          scale:1,
        }}
        transition={{duration:1.5}}
        >
           <SocialIcon
              className="cursor-pointer"
               network="email"
                fgColor="gray"
                bgColor="transparent"
            />
           <Link href="#contact">
              <p className=" uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
            </Link>
        </motion.div>
    </header>
  )
}

export default Header