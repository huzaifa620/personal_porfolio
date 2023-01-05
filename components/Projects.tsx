import React, {useRef} from 'react'
import { motion } from 'framer-motion'
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid'

type Props = {}

const Projects = (props: Props) => {

    const contentWrapper = useRef(null);
    const projects = ['GOOGLE Clone',2,3,4,5]
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly items-center z-0' >

        <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'> Projects </h3>

        <div className='relative w-full scroll-smooth flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-teal-800/20 scrollbar-thumb-teal-700' ref={contentWrapper} id='ui1' >
            { projects.map((project, index) => (
                <div key={`project-${index}`} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>

                    <motion.img initial={{ y: -200, opacity:0 }} transition={{ duration: 1}} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} src='https://img.freepik.com/premium-vector/play-button-vector-flat-icon-social-media-icon_185417-371.jpg' alt='' className='mt-28 md:mt-0 h-32 w-32 md:h-64 md:w-96 xl:h-[350px] xl:w-[550px] object-cover'/>

                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            Project {index+1} of {projects.length}: <span className='underline decoration-green-900'>{project}</span> 
                        </h4>
                        <p className='text-sm md:text-lg text-center md:text-left justify-center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem libero possimus iusto obcaecati nihil? Repellat minima accusantium dignissimos! Incidunt omnis numquam quos culpa delectus cum vel laboriosam excepturi et odit.
                        </p>
                    </div>

                </div>
            )) }
        </div>

        <div className='absolute px-20 w-full hidden md:flex justify-between z-30'>
            <ArrowLeftCircleIcon className='h-12 animate-bounce' onClick={() => {contentWrapper.current.scrollLeft -= screen.width}} />
            <ArrowRightCircleIcon className='h-12 animate-bounce' onClick={() => {contentWrapper.current.scrollLeft += screen.width}} />
        </div>

        <div className='w-full absolute top-[28%] bg-teal-700/70  dark:bg-teal-500/10 left-0 h-[400px] md:h-[550px] -skew-y-[11deg]' />

    </motion.div>
  )
}

export default Projects