import React from "react";
import { useNavigate } from "react-router-dom";

import './Invited.scss';
import Underline from '../../assets/images/border1.png';
import {Timer} from "../../components";

const Invited = () => {
  const navigate = useNavigate();

  const redirectToAcceptPage = () => navigate('/accept');

  return (
    <div className={'invited'}>
      <h1>Максим и Наталья</h1>
      <img src={Underline} alt="line"/>
      <p className='time'>4 ноября 2022 в 17:00</p>
      <p className='invited__text'>
        Дорогие гости! <br/>
        4 ноября 2022 года в нашей жизни произойдет очень
        важное событие – наша свадьба! :) <br/>
        Мы верим и надеемся, что этот день станет красивым началом
        долгой и счастливой жизни 💙 <br/>
        Позвольте пригласить вас разделить с нами
        радость этого дня. Подарите свою поддержку и добрые пожелания,
        а мы в свою очередь поделимся частичкой нашего счастья 💙
      </p>
      <p className='invited__text'>До свадьбы осталось</p>

      <Timer />
      <p className='invited__text'>Подтвердите пожалуйста присутствие</p>
      <span className='redirect__button' onClick={redirectToAcceptPage}>Подтвердить</span>
    </div>
  )
};

export default Invited;