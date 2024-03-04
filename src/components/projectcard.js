import { Add, Book, BookOnline, CameraAltRounded, Circle, CircleRounded, GitHub, PlayArrowRounded, PlaylistPlay, WebAsset, WebAssetRounded } from '@mui/icons-material';
export const ProjectCard = (props) => {
    const plg = props.plg? props.plg : 'unknown';
    const fw = props.fw? props.fw : 'native';
    const pf = props.pf? props.pf : 'none';
    const {desc, image, repo, page, title} = props;
  
    return (
      <div className='rounded-xl bg-slate-800 bg-opacity-50 h-fit shadow-xl min-w-80 md:min-w-96'>
        <p className='text-blue-200 p-4 py-6 text-2xl font-medium rounded-t-xl border-slate-600'>{title}</p>
        <div style={{backgroundImage:`url(${image})`}} className='border-slate-600 bg-contain bg-no-repeat border border-slate-400/10 bg-center rounded-md h-64 mx-4'></div>
        <div className='p-4 uppercase tracking-wide'>
          <span className='text-white bg-sky-400 p-2 text-xs rounded me-2 bg-opacity-20'>{plg}</span>
          <span className='text-white bg-sky-400 p-2 text-xs rounded me-2 bg-opacity-20'>{fw}</span>
          <span className='text-white bg-sky-400 p-2 text-xs rounded me-2 bg-opacity-20'>{pf}</span>
        </div>
        <p className='p-4 text-blue-300 text-lg border-slate-600 bg-opacity-10 h-24 md:h-64 overflow-y-scroll'>{desc}</p>
        <div className='grid grid-cols-2 border-slate-600 rounded-b-xl w-full'>
          <a href={page} className='p-4 text-lg text-center font-medium text-blue-200 hover:bg-blue-500 hover:bg-opacity-10 hover:rounded-bl-xl border-slate-600'>
            {page?(<PlayArrowRounded />):(<Circle/>)}
          </a>
          <a href={repo}className='p-4 text-lg text-center font-medium hover:bg-blue-500 hover:bg-opacity-10 text-blue-200 hover:rounded-br-xl'>
            <Book/>
          </a>
        </div>
      </div>
    )
  }