import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
        <img src="Group.png" alt="image" className="logo"/>
        <a href="#" className="home">Главная</a>
        <a href="#">О нас</a>
        <a href="#">Контакты</a>
        </div>
  );
};

export default Header;
