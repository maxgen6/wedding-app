import React, {useState} from "react";
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handlerOpenMenu = () => {
    setIsOpenMenu(true);
    document.body.style.overflow = 'hidden';
  };

  const handlerCloseMenu = () => {
    setIsOpenMenu(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className="header">
        <div className="burger__menu">
          <div className="menu" onClick={handlerOpenMenu}>
            <span />
          </div>
          <nav className={`menu__list ${isOpenMenu ? '_active' : ''}`}>
            <span className="menu__close" onClick={handlerCloseMenu} />
            <NavLink to="/invited" onClick={handlerCloseMenu}>приглашение</NavLink>
            <NavLink to="/ceremony" onClick={handlerCloseMenu}>церемония</NavLink>
            <NavLink to="/accept" onClick={handlerCloseMenu}>потвердить присутствие</NavLink>
          </nav>
        </div>
      <nav className="desktop__menu">
        <NavLink to="/invited">приглашение</NavLink>
        <NavLink to="/ceremony">церемония</NavLink>
        <NavLink to="/accept">потвердить присутствие</NavLink>
      </nav>
    </header>
  )
};

export default Header;