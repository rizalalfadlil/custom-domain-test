import React from 'react'
import { Facebook, FacebookRounded, GitHub } from '@mui/icons-material';
export const Header = (props) => {
  const { lang } = props

  const h = (lang ==='id'?'Beranda':'Home')
  const p = (lang ==='id'?'Projek':'Projects')
  const s = (lang ==='id'?'Keahlian':'Skills')
  const a = (lang ==='id'?'Tentang Saya':'About Me')
  return (
    <header className='sticky top-0 grid md:grid-cols-2 z-30 border-b border-blue-300/20 items-center backdrop-blur-md bg-slate-800/40'>
    <div className='text-center sm:text-start p-4 uppercase tracking-wide h-fit text-md md:text-xl content-center font-medium md:font-semibold text-blue-200  '> {/* top left content */}
          <a href='#' className="md:mx-8 p-2 hover:text-white">{h}</a>
          <a href='#' className="md:mx-8 p-2 hover:text-white">{p}</a>
          <a href='#' className="md:mx-8 p-2 hover:text-white">{s}</a>
          <a href='#' className="md:mx-8 p-2 hover:text-white">{a}</a>
    </div>
    <div>
    <div className="text-end p-4 pe-8 hidden md:block">{/* top right content */}
          <a href="#" className="text-slate-200">
          <GitHub className="transition bg-blue-400/30 p-1 rounded-lg scale-150 opacity-75 hover:opacity-100"/></a>
        </div>
    </div>
    </header>
  )
}
