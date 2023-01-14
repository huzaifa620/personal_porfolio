import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';
import { Social } from '../typings';

type Props = {
  socials: Social[]
}

const Header = ({socials}: Props) => {

  const [isDark, setisDark] = useState(true)

  const toggleDark = () => {
    document.body.classList.toggle('dark')
    setisDark(!isDark)
  }

  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div initial={{ x: -500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration:1.5 }} className='flex flex-row items-center'>

        {socials.map((social) => (

          <SocialIcon key={social._id} url={social.url} fgColor='silver' bgColor='transparent' />

        ))}
        
      </motion.div>

      <motion.div initial={{ x: 500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration:1.5 }} className='flex flex-row items-center text-gray-300 cursor-pointer'>

        { isDark ? <SunIcon onClick={toggleDark} className='h-8' /> : <MoonIcon onClick={toggleDark} className='h-8' /> }

        <Link href="#contactMe">
          <SocialIcon className='cursor-pointer color-green' network='email' fgColor='silver' bgColor='transparent' href="#contactMe" type='link' />
          <p className='uppercase hidden md:inline-flex text-sm text-black dark:text-white'>
            Get In Touch
          </p>
        </Link>
      </motion.div>

    </header>
  )
}

export default Header