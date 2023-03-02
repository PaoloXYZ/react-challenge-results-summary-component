import './ResultCard.css';

function Card() {
  return (
    <div className="Card bg-gradient-to-b from-light-slate-blue to-light-royal-blue 
      md:rounded-3xl rounded-b-3xl w-80 space-y-5 p-9">
      <p className='mt-2 font-bold text-personal-gray'>Your Result</p>
      <span className='rounded-full bg-gradient-to-b from-violet-blue to-persian-blue
        inline-flex p-14 text-center'>
        <pre><p className='text-6xl font-bold text-personal-white'>76</p>
          <p className='text-personal-gray text-sm'>of 100</p>
        </pre>
      </span>
      <p className='text-3xl font-bold text-personal-white'>Great</p>
      <p className='text-personal-gray'>You scored higher than 65% of the people who have taken these tests.</p>
   </div>
  );
}

export default Card;
