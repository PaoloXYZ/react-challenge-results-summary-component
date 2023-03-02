import './Summary.css';

function Score(props) {
  return (
      <div className={`flex py-3 rounded-lg border-personal-black ${props.bgcolor}`}>
        <div className='flex w-2/3'>
          <img className='mt-1 mx-3 w-5 h-5' src={props.icon} />
          <p className={`${props.textColor}`}>{props.text}</p>
        </div>
        <div className='flex content-'>
          <p>{props.score}</p>&nbsp;<p className='text-personal-gray'>/ 100</p>
        </div>
      </div>
  );
}

export default Score;
