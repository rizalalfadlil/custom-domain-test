import { StarBorder, StarRate } from "@mui/icons-material";

export const Skill = (props) => {
    const { lang, icon, title, level, hidden } = props;
    const renderStars = (level) => {
      const stars = [];
      const maxStars = 4;
      const filledStars = Math.min(level, maxStars);
      for (let i = 0; i < filledStars; i++) {
        stars.push(<StarRate key={i} fontSize='small'/>);
      }
      for (let i = filledStars; i < maxStars; i++) {md:
        stars.push(<StarBorder key={i} fontSize='small'/>);
      }
  
      return stars;
    };
    const Basic =(<span className='align-bottom text-xs h-fit w-fill xl:w-fit text-center ms-1 p-2 tracking-wide text-neutral-300 font-medium bg-neutral-500 bg-opacity-20 rounded'>Basic</span>)
    const Beginner =(<span className='align-bottom text-xs h-fit w-fill xl:w-fit text-center ms-1 p-2 tracking-wide text-blue-300 font-medium bg-blue-500 bg-opacity-20 rounded'>Beginner</span>)
    const Advanced =(<span className='align-bottom text-xs h-fit w-fill xl:w-fit text-center ms-1 p-2 tracking-wide text-indigo-300 font-medium bg-indigo-500 bg-opacity-20 rounded'>Advanced</span>)
    const Mastered = (<span className='align-bottom text-xs h-fit w-fill xl:w-fit text-center ms-1 p-2 tracking-wide text-yellow-300 font-medium bg-yellow-500 bg-opacity-20 rounded'>Mastered</span>)
  
    const SkillLevel = () =>{
      if(level === 1)return Basic
      else if (level === 2)return Beginner
      else if (level === 3) return Advanced
      else if (level === 4) return Mastered
      else return null
    }
    if(!hidden){
      return (
        <div className='rounded-xl shadow-xl p-4 bg-slate-600 hover:bg-opacity-50 bg-opacity-20 w-full flex items-center gap-4'>
          <div><img src={icon} width={36} alt="" /></div>
          <span className=' xl:font-medium tracking-wide text-blue-200'>{title}</span>
        </div>
      );
    }else return null
  };