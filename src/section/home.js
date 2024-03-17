import React from 'react'
import { ArrowDownward, ArrowDownwardRounded, FacebookRounded, GitHub, PlusOneOutlined } from "@mui/icons-material";
export const Home = (props) => {
  const { lang } = props

  const n = (lang ==='id'? 'Aku' : "I'm")
  const d = lang === 'id'? 'Siswa SMK jurusan Rekayasa Perangkat Lunak' : 'Vocational School student majoring in Software Engineering'
  return (
    <section className='md:h-screen md:p-8 grid md:grid-cols-2 top-0'>
        <div className='grid content-center h-fit md:h-full'>{/* half screen size div */}
          <div className='text-start justify-self-center text-lg md:text-2xl p-8 md:p-0 md:w-2/3'>
            <p className='text-blue-400 font-medium uppercase tracking-widest text-start md:text-start'>portofolio</p>
            <p className='text-slate-200 font-bold text-4xl lg:text-7xl mb-4'>{n} <span className="text-sky-300">RizalAlfadlil</span></p>
            <p className='text-blue-300 font-medium text-md lg:text-2xl mb-8'>{d}.</p>
            {/* <button className="transition shadow-md border-blue-400 bg-gradient-to-r from-sky-400 to-cyan-600 p-2 md:p-4 text-2xl mt-8 rounded-lg font-semibold text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-800 hover:text-white items-center">
              <span className="me-4">Scroll down to read more</span><ArrowDownwardRounded/></button> */}
          </div>
        </div>
        <div className='grid content-center'>
          <div className="self-start justify-self-center">
            <img src='./placeholder.png' style={{scale:'0.7'}}/>
          </div>
          <div/>
        </div>
      </section>
  )
}

<div className='text-start inline uppercase tracking-widest h-fit text-xl font-semibold text-sky-200 p-5'> {/* top left content */}
            <a href='#' className="me-8 ms-8 hover:text-white">Home</a>
            <a href='#' className="me-8 ms-8 hover:text-white">Projects</a>
            <a href='#' className="me-8 ms-8 hover:text-white">Skills</a>
            <a href='#' className="me-8 ms-8 hover:text-white">About Me</a>
          </div>