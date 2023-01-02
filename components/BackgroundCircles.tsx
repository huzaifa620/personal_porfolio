import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
            scale: [1,2,2,3,1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            borderRadius: ["20%", "20%", "50%", "80%", "20%"]
        }}
        transition={{ duration: 2.5 }}  
        className='relative flex justify-center items-center'>

        <div className='absolute border border-emerald-600 rounded-full h-[300px] w-[300px] mt-64 animate-ping' />
        <div className='absolute border border-emerald-200 rounded-full h-[380px] w-[380px] mt-64 opacity-60' />
        <div className='absolute border border-emerald-200 rounded-full h-[500px] w-[500px] mt-64 opacity-50' />
        <div className='absolute border border-emerald-600 rounded-full h-[650px] w-[650px] mt-64 animate-pulse opacity-20' />
        <div className='absolute border border-emerald-200 rounded-full h-[800px] w-[800px] mt-64 opacity-0 lg:opacity-10' />

    </motion.div>
  )
}

export default BackgroundCircles