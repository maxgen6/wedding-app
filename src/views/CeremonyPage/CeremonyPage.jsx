import React from "react";

import './CeremonyPage.scss';
import Underline from '../../assets/images/border1.png';


const CeremonyPage = () => {

  return (
    <div className="ceremony">
      <h1>Церемония</h1>
      <img src={Underline} alt="line"/>

      <div className="wrapper">
        <h2>План мероприятия:</h2>
        <ul>
          <li>
            <p>1. ЗАГС</p>
            <span>04.11.2022 12:30</span>
            <span className={'small'}>г.п. Зельва, улица Советская 8</span>
          </li>
          <li>
            <p>2. ВЕНЧАНИЕ</p>
            <span>04.11.2022 14:00</span>
            <span className={'small'}>г.п. Зельва, Троецкая Церковь</span>
          </li>
          <li>
            <p>3. РЕСТОРАН</p>
            <span>04.11.2022 17:00</span>
            <span className={'small'}>г.п. Зельва, улица Шосейная 29</span>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default CeremonyPage;