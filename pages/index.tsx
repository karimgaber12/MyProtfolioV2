import { GetServerSideProps, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../Components/About'
import ContactMe from '../Components/ContactMe'
import Experiences from '../Components/Experience'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchExperience } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProject } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocial } from '../utils/fetchSocials'

type Props ={
  pageInfo: PageInfo;
  experiences: Experience[];
   skills: Skill[];
  projects: Project[];
   socials: Social[];
}

export default function Home({pageInfo,experiences,skills,projects,socials}: Props) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
      <Head>
        <title>{pageInfo?.name} - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
    
    <Header socials={socials}/>

    <section id='hero' className='snap-start'>
      <Hero pageInfo={pageInfo}/>
    </section>

    <section id='About' className='snap-center'>
      <About pageInfo={pageInfo}/>
    </section>

    <section id='Experience' className='snap-center'>
      <Experiences experiences={experiences}/>
    </section>

    <section id='Skills' className='snap-start'>
      <Skills skills={skills}/>
    </section>

    <section id='Projects' className='snap-start'>
      <Projects projects={projects}/>
    </section>

    <section id='contact' className='snap-start'>
      <ContactMe />
    </section>

    <Link href="#hero">
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' src="https://cdn.sanity.io/images/x16kspjz/production/c54f64ccf23be1708f4c4ec8f87539a97fbcd75f-612x612.png" alt="" />
        </div>
      </footer>    
    </Link>
    
    </div>
  )
};


export const getStaticProps: GetStaticProps<Props> = async () => {
  
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProject();
  const socials: Social[] = await fetchSocial();
  
  return {
    props:{
      pageInfo,
     experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
