import React from 'react'

export const Footer = (props) => {
  const { lang } = props
  return (
    <footer className='bg-slate-950 p-4 h-fit md:p-16 content-end grid'>
        <p className='text-slate-200/80  tracking-wide font-thin mb-4'>{lang === 'id'? 'Desain oleh':'Design By'} <span className='text-white'>RizalAlfadlil </span>{lang === 'id'?'(saya)':'(me)'}</p>
        <p className='text-blue-400/60 tracking-wide font-thin'>
        <span className='text-slate-200/50'>{lang==='id'?'menggunakan template dari':'using template from'}</span>   
        <a href="https://create-react-app.dev/" className=' font-medium hover:text-sky-300 me-2 ms-2'>create-react-app</a><br/>
        <span className='text-slate-200/50'>css framework</span>   
        <a href="https://tailwindcss.com/" className=' font-medium hover:text-sky-300 me-2'> tailwindcss</a> <br/>
        <span className='text-slate-200/50'>{lang==='id'?'ikon dari':'icons from'} </span>   
        <a href="https://mui.com/material-ui/material-icons/" className=' font-medium hover:text-sky-300 me-2'> material icon</a>
        <span className='text-slate-200/50'>{lang==='id'?'dan':'and'}</span>   
        <a href="https://icons8.com/icons" className=' font-medium hover:text-sky-300 me-2'> icons8</a> 
        </p>
      </footer>
  )
}
