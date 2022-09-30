import useClock from 'hooks/useClock';
import 'styles/clock.scss';

const Clock = () => {
  const { date, time } = useClock();
  return (
    <div id='clock'>
      <p className='date'>{date}</p>
      <p className='time'>{time}</p>
      <p className='text'>DIGITAL CLOCK with React</p>
    </div>
  );
};

export default Clock;
