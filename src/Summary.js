import './Summary.css';
import Score from './Scores.js'
import iconMemory from './assets/images/icon-memory.svg';
import iconVerbal from './assets/images/icon-verbal.svg';
import iconVisual from './assets/images/icon-visual.svg';
import iconReaction from './assets/images/icon-reaction.svg';

function Summary() {
  return (
    <div className='px-8 my-9 w-80'>
      <p className='pb-8 text-left font-bold text-2xl'>Summary</p>
      <div className='grid grid-rows-4 gap-y-4'>
        <Score 
          bgcolor='bg-[#fff3eb]'
          text='Reaction'
          textColor='text-light-red'
          icon={iconReaction}
          score='80'
          />
        <Score 
          bgcolor='bg-[#fffbf2]'
          text='Memory'
          textColor='text-light-yellow'
          icon={iconMemory}
          score='92'
          />
        <Score 
          bgcolor='bg-[#f2fbfa]'
          text='Verbal'
          textColor='text-green-teal'
          icon={iconVerbal}
          score='61'
          />
        <Score 
          bgcolor='bg-[#f3f3fd]'
          text='Visual'
          textColor='text-cobalt-blue'
          icon={iconVisual}
          score='72'
          />
        </div>
      <a href='#'>
       <div className='bg-gradient-to-b from-light-slate-blue to-light-royal-blue
         rounded-3xl py-3 mt-8 font-bold text-center text-personal-white'>
           <p>Continue</p>
        </div>
      </a>
   </div>
  );
}

export default Summary;
