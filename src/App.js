import { Menu, MenuButton } from '@mui/base';
import { Facebook, FacebookRounded, GitHub, MenuBook, MenuBookRounded, MenuRounded } from '@mui/icons-material';
import React, { useEffect, useRef, useState } from 'react'
import { About } from './section/about';
import { Footer } from './section/footer';
import { Header } from './section/header';
import { Home } from './section/home';
import { Project } from './section/project';
import SkillPage from './section/skill';
function App() {
  const [lang, setLang] = useState('en')
  const homeSection = useRef(null)
  const projectSection = useRef(null)
  const skillSection = useRef(null)
  const aboutSection = useRef(null)
  const isMobile = window.innerWidth < 768;
  const [currentPage, setCurrentPage] = useState('home')
  const goHome = () => homeSection.current?.scrollIntoView({behavior:'smooth'})
  const goProject = () => projectSection.current?.scrollIntoView({behavior:'smooth'})
  const goSkill = () => skillSection.current?.scrollIntoView({behavior:'smooth'})
  const goAbout = () => aboutSection.current?.scrollIntoView({behavior:'smooth'})

  const h = (lang ==='id'?'Beranda':'Home')
  const p = (lang ==='id'?'Projek':'Projects')
  const s = (lang ==='id'?'Keahlian':'Skills')
  const a = (lang ==='id'?'Tentang Saya':'About Me')

  const switchLang = () =>{
    setLang(lang==='id'?'en':'id')
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Jika lebih dari 50% dari elemen muncul, fungsi akan dijalankan
    };
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Dapatkan referensi elemen yang terlihat
          const visibleSection = entry.target;
          // Cek setiap elemen dan jalankan sesuai kebutuhan
          if (visibleSection === homeSection.current) {
            setCurrentPage('home')
            // Lakukan sesuatu ketika user scroll ke bagian Home
          } else if (visibleSection === projectSection.current) {
            setCurrentPage('project')
            // Lakukan sesuatu ketika user scroll ke bagian Project
          } else if (visibleSection === skillSection.current) {
            setCurrentPage('skill')
            // Lakukan sesuatu ketika user scroll ke bagian Skill
          } else if (visibleSection === aboutSection.current) {
            setCurrentPage('about')
            // Lakukan sesuatu ketika user scroll ke bagian About
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    // Observasi setiap bagian yang diinginkan
    if (homeSection.current) {
      observer.observe(homeSection.current);
    }
    if (projectSection.current) {
      observer.observe(projectSection.current);
    }
    if (skillSection.current) {
      observer.observe(skillSection.current);
    }
    if (aboutSection.current) {
      observer.observe(aboutSection.current);
    }

    // Hentikan observasi saat komponen unmount
    return () => {
      if (homeSection.current) {
        observer.unobserve(homeSection.current);
      }
      if (projectSection.current) {
        observer.unobserve(projectSection.current);
      }
      if (skillSection.current) {
        observer.unobserve(skillSection.current);
      }
      if (aboutSection.current) {
        observer.unobserve(aboutSection.current);
      }
    };
  }, []);

  const [showHead, setShowHead] = useState(true)
  return (
    <div className="App bg-gradient-to-r from-blue-900 to-slate-800">
      <div className='pb-8 bg-slate-800/40'></div>
      <header className='sticky top-0 grid md:grid-cols-2 z-10 border-b border-blue-300/20 items-center backdrop-blur-md bg-slate-800/40'>
    <div className='text-start md:text-start p-4 uppercase tracking-wide h-fit text-md md:text-xl content-center font-medium md:font-semibold text-blue-200  '> {/* top left content */}
          <div className='hidden md:block'>
          <span href='#' onClick={goHome} className={`md:mx-3 p-2 hover:text-white cursor-pointer ${currentPage === 'home' && 'text-blue-400'}`}>{h}</span>
          <span href='#' onClick={goProject} className={`md:mx-3 p-2 hover:text-white cursor-pointer ${currentPage === 'project' && 'text-blue-400'}`}>{p}</span>
          <span href='#' onClick={goSkill} className={`md:mx-3 p-2 hover:text-white cursor-pointer ${currentPage === 'skill' && 'text-blue-400'}`}>{s}</span>
          <span href='#' onClick={goAbout} className={`md:mx-3 p-2 hover:text-white cursor-pointer ${currentPage === 'about' && 'text-blue-400'}`}>{a}</span>
          </div>
          <div className='block md:hidden'>
          <div className='flex justify-between'>
          <MenuRounded onClick={() =>setShowHead(!showHead)}/>
          <p className='text-end uppercase' onClick={switchLang}>{lang}</p>
          </div>
          {showHead && (<>
            <p href='#' onClick={goHome} className="md:mx-8 mt-4 p-2 hover:text-white cursor-pointer">{h}</p>
          <p href='#' onClick={goProject} className="md:mx-8 p-2 hover:text-white cursor-pointer">{p}</p>
          <p href='#' onClick={goSkill} className="md:mx-8 p-2 hover:text-white cursor-pointer">{s}</p>
          <p href='#' onClick={goAbout} className="md:mx-8 p-2 hover:text-white cursor-pointer">{a}</p>
          </>)}
          
          </div>
    </div>
    <div>
    <div className="text-end p-4 pe-8 hidden md:block">{/* top right content */}
    <span className='uppercase bg-blue-400/30 align-middle me-4 opacity-75 hover:opacity-100 p-1.5 rounded font-semibold text-slate-200' onClick={switchLang}>{lang}</span>
          <a href="https://github.com/rizalalfadlil" className="text-slate-200">
          <GitHub className="bg-blue-400/30 p-1 rounded scale-150 opacity-75 hover:opacity-100"/></a>
          
        </div>
    </div>
    </header>
        <div ref={homeSection}className='transition-all duration-700 bg-gradient-to-r from-blue-900 to-slate-800'><Home lang={lang}/></div>
        <div ref={projectSection} className='transition-all duration-700 bg-slate-900'><Project lang={lang}/></div>
        <div ref={skillSection} className='transition-all duration-700 bg-slate-900'><SkillPage lang={lang}/></div>
        <div ref={aboutSection} className='transition-all duration-700 bg-slate-900'><About lang={lang}/></div>
        <Footer lang={lang}/>
    </div>
  );
}
export default App;
