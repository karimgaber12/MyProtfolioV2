import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'
type Props = {
  experiences:Experience[],
}

function Experiences({experiences}: Props) {
  return (
    <motion.div className='flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center h-screen'
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3> 
    
         <div className='h-3/4  flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
          {experiences?.map((experience)=>(
            <ExperienceCard key={experience?._id} experience={experience}/>
          ))}
         </div>
    </motion.div>
  )
}

export default Experiences