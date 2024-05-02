import React from 'react'

export const About = (props) => {
  const { lang } = props
  const date = new Date()
  const year = date.getFullYear()
   const enTitle = (<p className='text-blue-300 text-2xl lg:text-5xl font-bold mt-3'>About <span className='text-white'>Me</span></p>) 
   const idTitle = (<p className='text-blue-300 text-2xl lg:text-5xl font-bold mt-3'>Tentang <span className='text-white'>Saya</span></p>) 

   const d = lang === 'id'?'Seorang Siswa SMK kelas 12 jurusan rekayasa perangkat lunak yang suka membuat game menggunakan unity dan membuat halaman web front-end menggunakan react.js'
   :'A 3rd grade vocational school student majoring in software engineering who likes making games using Unity and creating front-end web pages using React.js'
  return (
    <section className='lg:h-auto mb-20 bg-slate-900 grid lg:grid-cols-2 lg:p-8'>
      <div className='flex justify-center items-center content-center pb-4 h-full'>
        <div className='w-4/5 xl:w-3/5 z-30 shadow-xl rounded-xl h-36 lg:h-4/5 h-600 bg-no-repeat bg-center bg-cover' style={{ backgroundImage: "url('https://raw.githubusercontent.com/rizalalfadlil/page/master/public/bg.webp')" }}></div>
      </div>
      <div className='h-fit lg:h-full grid'>
        <div className='justify-center justify-self-center self-end grid content-center w-4/5 lg:w-2/3'>
          {lang === 'id'? idTitle:enTitle}
          <p className='font-bold tracking-widest uppercase lg:mt-3 text-slate-500 text-xs my-2 lg:my-0 lg:text-md'>Hafidz Rizal Al-Fadlil</p>
          <p className='lg:my-2'>
          <span className='tracking-wide p-0.5 lg:p-1 text-xs lg:text-sm font-semibold rounded bg-sky-200/60 w-fit'>{year - 2005} {lang==='id'?'Tahun':'Years Old'}</span>
          <span className='tracking-wide p-0.5 lg:p-1 text-xs lg:text-sm font-semibold rounded bg-sky-200/60 ms-2 w-fit'>{lang==='id'?'Laki-Laki':'Male'}</span>
          </p>
          <p className='text-blue-200 tracking-wide text-sm lg:text-lg my-4 lg:my-0'>{d}</p>
        </div>
        <div className='h-full grid mb-8 lg:mb-0'>
          <div className='justify-self-center self-start mt-5 lg:mt-20 grid w-4/5 lg:w-2/3'>
            <div className='text-sky-300 tracking-wide text-lg'>
              <a href='https://www.facebook.com/profile.php?id=100070801783722' className='w-full flex items-center rounded border-2 border-blue-200 border-opacity-10 shadow-xl rounded-xl p-2 bg-sky-400 mb-3 bg-opacity-10 hover:bg-opacity-20'>
                <img width="24" height="24" src="https://img.icons8.com/fluency/96/facebook-new.png" alt="facebook-new" />
                <p className='align-middle ms-4'>Rizal Wandahoy</p>
              </a>
              <a href='#' className='w-full flex items-center rounded border-2 border-red-200 border-opacity-10 shadow-xl rounded-xl p-2 bg-red-400 mb-3 bg-opacity-10 hover:bg-opacity-20'>
                <img width="24" height="24" src="https://img.icons8.com/color/48/gmail-new.png" alt="gmail-new" />
                <p className='align-middle ms-4 text-red-400'>rizalalfadlil@gmail.com</p>
              </a>
              <a href='https://github.com/rizalalfadlil' className='border w-full flex items-center rounded border-2 border-slate-200 border-opacity-10 shadow-xl rounded-xl p-2 mb-3 bg-slate-400 bg-opacity-10 hover:bg-opacity-20'>
                <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/000000/external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo.png" alt="external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo" />
                <p className='align-middle ms-4 text-slate-400'>RizalAlfadlil</p>
              </a>
              <a href='#' className='border w-full flex items-center rounded border-2 border-indigo-200 border-opacity-10 shadow-xl rounded-xl p-2 bg-indigo-400 bg-opacity-10 hover:bg-opacity-20'>
                <img width="24" height="24" src="https://img.icons8.com/color/48/discord--v2.png" />
                <p className='align-middle ms-4 text-slate-400'>is meaning smile</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
