import { StarBorder, StarRate } from "@mui/icons-material";

export const Skill = (props) => {
    const { lang, frame, title, level, hidden } = props;
    const renderStars = (level) => {
      const stars = [];
      const maxStars = 4;
      const filledStars = Math.min(level, maxStars);
      for (let i = 0; i < filledStars; i++) {
        stars.push(<StarRate key={i} fontSize='small' />);
      }
      for (let i = filledStars; i < maxStars; i++) {
        stars.push(<StarBorder key={i} fontSize='small'/>);
      }
  
      return stars;
    };
    const Basic =(<span className='align-bottom text-xs h-fit w-fill md:w-fit text-center ms-1 p-2 tracking-wide text-neutral-300 font-medium bg-neutral-500 bg-opacity-20 rounded'>Basic</span>)
    const Beginner =(<span className='align-bottom text-xs h-fit w-fill md:w-fit text-center ms-1 p-2 tracking-wide text-blue-300 font-medium bg-blue-500 bg-opacity-20 rounded'>Beginner</span>)
    const Advanced =(<span className='align-bottom text-xs h-fit w-fill md:w-fit text-center ms-1 p-2 tracking-wide text-indigo-300 font-medium bg-indigo-500 bg-opacity-20 rounded'>Advanced</span>)
    const Mastered = (<span className='align-bottom text-xs h-fit w-fill md:w-fit text-center ms-1 p-2 tracking-wide text-yellow-300 font-medium bg-yellow-500 bg-opacity-20 rounded'>Mastered</span>)
  
    const SkillLevel = () =>{
      if(level === 1)return Basic
      else if (level === 2)return Beginner
      else if (level === 3) return Advanced
      else if (level === 4) return Mastered
      else return null
    }
    if(!hidden){
      return (
        <div className='rounded-xl shadow-xl p-4 bg-slate-600 hover:bg-opacity-50 bg-opacity-20 grid md:h-80 w-full'>
          <img width="32" height="32" src={lang} alt="Language Icon" className="bg-blue-300 bg-opacity-20 p-1 rounded-lg" />
          <img width="96" height="96" className='justify-self-center h-fit' src={frame} alt="Frame Icon" />
          <div className='mt-3 mb-3 grid w-full items-center md:grid-cols-2 text-yellow-200 '>
            <span className="hidden md:block">{renderStars(level)}</span>
            <SkillLevel/>
          </div>
          <p className='font-medium hidden md:block tracking-wide text-blue-200'>{title}</p>
        </div>
      );
    }else return null
  };