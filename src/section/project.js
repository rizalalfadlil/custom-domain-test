import React from 'react'
import { ProjectCard } from '../components/projectcard'
import { motion, inView } from 'framer-motion'
export const Project = (props) => {
  const { lang } = props

  const enTitle = (<>
    <p className='text-blue-100 text-2xl md:text-5xl mb-3 font-bold uppercase'>My <span className='text-blue-400'>Projects</span></p>
    <p className='text-blue-300 text-lg md:text-2xl'>all the projects I have made so far including school assignments and internship assignments</p>
    </>)
    const idTitle = (<>
      <p className='text-blue-100 text-2xl md:text-5xl mb-3 font-bold uppercase'><span className='text-blue-400'>projek </span>saya</p>
      <p className='text-blue-300 text-lg md:text-2xl'>semua projek yang saya buat yang berisi dari tugas ketika sekolah, pkl dan pribadi</p>
      </>)
  return (
    <section className='h-auto md:p-8 pb-8 overflow-x-hidden'>
        <motion.div
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1}}
        className='p-8 pt-16 md:pt-8 h-1/5 grid content-center'>
          {lang === 'id'? idTitle : enTitle}
        </motion.div>
        <motion.div 
        initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1}}
        className='bg-opacity-30 relative h-3/4 sm:h-4/5 rounded-xl '>
          <div className='z-20 absolute h-full w-16 bg-gradient-to-r from-slate-900'></div>
          <div className='z-20 absolute h-full w-16 bg-gradient-to-l right-0 from-slate-900'></div>
           <div className='shadow-inner h-full flex gap-10 p-10 overflow-y-hidden overflow-x-scroll'>
           <ProjectCard 
            title='Undefeatable TicTacToe' 
            repo='https://github.com/rizalalfadlil/undefeatable-tictactoe/' 
            image='./ttt.png'
            plg='javascript'
            pf='web'
            page='https://rizalalfadlil.github.io/undefeatable-tictactoe/'
            desc='a simple tic tac toe game but the bot is undefeatable'/>
            <ProjectCard
            title='Tes Karbit'
            image='./bit.png'
            plg='javascript'
            pf='web'
            fw='react.js'
            repo='https://github.com/rizalalfadlil/bit'
            page='https://rizalalfadlil.github.io/bit/'
            desc='my personal project for fun'/>
            <ProjectCard
            title='Hotel Hebat'
            plg='javascript'
            pf='web'
            fw='react.js'
            image='./hotel.png'
            repo='https://github.com/rizalalfadlil/hotel-hebat'
            desc='school assignment, an application that I was assigned to make for pre-skill competency test practice'/>
            <ProjectCard
            title='Lelang Online'
            image='./lelang.png'
            repo='https://github.com/rizalalfadlil/lelang-online'
            plg='javascript'
            pf='web'
            fw='react.js'
            desc='one of my school assignment, online bid app created with react.js'/>
           </div>
        </motion.div>
      </section>
  )
}
