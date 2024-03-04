import React, { useState } from 'react'
import { Check, CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material'
import { Skill } from '../components/skillcard'

const SkillPage = (props) => {
  const [showAll, setShowAll] = useState(false)
  const changeShow = () => setShowAll(!showAll)

  const { lang } = props

  const enTitle = (
    <>
    <p className='text-slate-200 font-bold text-2xl md:text-4xl xl:text-7xl mb-4'>My <span className="text-sky-300">Skills</span></p>
            <p className='text-blue-300  text-lg md:text-xl xl:text-2xl mb-8'>All of the programming language or other that I have learn or mastered.</p>
            </>
  )
  const idTitle = (
    <>
    <p className='text-slate-200 font-bold text-2xl md:text-4xl xl:text-7xl mb-4'><span className="text-sky-300">Keahlian </span>Saya</p>
            <p className='text-blue-300 text-lg md:text-xl xl:text-2xl mb-8'>Semua bahasa pemrograman yang sedang saya pelajari atau sudah saya kuasai</p>
            </>
  )
  return (
    <section className='h-lvh h-full bg-slate-900 grid md:grid-cols-2'>
        <div className='md:h-screen bg-slate-900 justify-items-center items-center grid'>
          <div className='w-4/5 xl:w-1/2'>
            {lang ==='id'? idTitle:enTitle}
          </div>
        </div>
        <div className='h-screen bg-slate-900 justify-items-center md:items-center grid'>
          <div className='md:w-3/4 w-5/6 h-5/6 md:h-2/3'>
            <p className='font-medium tracking-wide font-xl text-sky-200 rounded-lg p-3 bg-slate-600 bg-opacity-20'><span className='align-middle me-3'>{lang === 'id'? 'Tampilkan yang tidak relevan':'Show irrelevant'}</span>
            <span onClick={changeShow}>{showAll ? (<CheckBox/>) : (<CheckBoxOutlineBlank/>)}</span></p>
          <div className='relative h-3/4 md:h-1/3 lg:h-3/4 2xl:h-full'>
            <div className='absolute w-full h-16 bg-gradient-to-b from-slate-900 top-0'></div>
            <div className='absolute w-full h-16 bg-gradient-to-t from-slate-900 bottom-0'></div>
          <div className='rounded-xl  overflow-y-scroll h-full overflow-x-hidden bg-opacity-20 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 p-4 mt-8 gap-6 '>
            <Skill
            lang='https://img.icons8.com/fluency/48/javascript.png'
            frame='https://img.icons8.com/color/96/000000/react-native.png'
            title='React.js Front-End Development'
            level={3}
            />
            <Skill
            lang='https://img.icons8.com/fluency/48/javascript.png'
            frame='https://img.icons8.com/fluency/96/node-js.png'
            title='Node.js Back-End Development'
            level={2}
            />
            <Skill 
            lang='https://img.icons8.com/color/48/c-sharp-logo.png'
            frame='https://img.icons8.com/fluency/96/unity.png'
            title='Game Development with Unity'
            level={4}
            />
            <Skill 
            lang='https://img.icons8.com/color/96/kotlin.png'
            frame='https://img.icons8.com/color/96/android-studio--v2.png'
            title='Moblie Development with Android Studio & Kotlin'
            level={1}
            />
            <Skill 
            lang='https://img.icons8.com/officel/160/php-logo.png'
            frame='https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-codeigniter-is-an-open-source-software-rapid-development-web-framework-logo-shadow-tal-revivo.png'
            title='php & codeIgniter Web Development'
            level={2}
            />
            <Skill 
            hidden={!showAll}
            lang='https://img.icons8.com/color/96/html-5--v1.png'
            frame='https://img.icons8.com/color/96/html-5--v1.png'
            title='Basic Language (html & css)'
            level={4}
            />
          </div>
          </div>
          </div>
        </div>
      </section>
  )
}

export default SkillPage