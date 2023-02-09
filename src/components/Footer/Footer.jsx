import React from "react";
import './Footer.css';


const Footer = () => {
    return (
        <div className="footer">
            <img src="Group2.png" alt="Image" className="logo"/>
            <div className="footer__a"><a href="#">Партнерам</a>
            <a href="#">Разработчикам</a>
            <a href="#" className="vacan">Вакансии</a></div>
            <div className="sns">ООО "интукод", 2020г.</div>
        </div>
    )
}



export default Footer;