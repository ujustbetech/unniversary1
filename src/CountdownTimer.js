import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './hooks/useCountdown';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      
      <div className='eventdate'>
        <h4>26th February 2023</h4>
      </div>
      <a
        href="https://tapasadhikary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >

        <div className='eventday'>
          <DateTimeDisplay value={days} type={'DAYS'} isDanger={days <= 3} />
        </div>
        <div className='eventtime'>
          <DateTimeDisplay value={hours} type={'hour'} isDanger={false} />
          <p>|</p>
          <DateTimeDisplay value={minutes} type={'min'} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={seconds} type={'sec'} isDanger={false} />
        </div>
      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
