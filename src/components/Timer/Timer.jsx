import React, {useState} from "react";

import './Timer.scss';

const deadline = '04 november 2022'

const Timer = () => {
  const [days, setDays] = useState('0');
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');
  const [sec, setSec] = useState('0');

  function getTimeRemaining(){
    let dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      seconds = Math.floor(timeRemaining % 60),
      minutes = Math.floor((timeRemaining / 60) % 60),
      hours = Math.floor(timeRemaining / 60 / 60) % 24,
      day =  Math.floor(timeRemaining / 60 / 60 / 24);


    return{timeRemaining, hours, minutes, seconds, day};
  }

  const interval = setInterval(() => {
    let timer = getTimeRemaining();

    timer.day > 9 ? setDays(timer.day) : setDays(`0${timer.day}`);
    timer.hours > 9 ? setHours(timer.hours) : setHours(`0${timer.hours}`);
    timer.minutes > 9 ? setMinutes(timer.minutes) : setMinutes(`0${timer.minutes}`);
    timer.seconds > 9 ? setSec(timer.seconds) : setSec(`0${timer.seconds}`);

    if(timer.timeRemaining < 0){
      clearInterval(interval);

    }
  }, 1000);

  return (
    <div className='timer'>
      <div className='timer__wrapper'>
        <p>{days}</p>
        <p>дней</p>
      </div>
      <div className='timer__wrapper'>
        <p>{hours}</p>
        <p>часов</p>
      </div>
      <div className='timer__wrapper'>
        <p>{minutes}</p>
        <p>минут</p>
      </div>
      <div className='timer__wrapper'>
        <p>{sec}</p>
        <p>секунд</p>
      </div>
    </div>
  )
};

export default Timer;