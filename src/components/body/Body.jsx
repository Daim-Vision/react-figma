import React from "react";
import './Body.css';

const Body = () => {
    return (
        <div className='main'>
            <span className="number">140</span>
            <div className="buttons">
                <button className="btn1">Увеличить</button>
                <button className="btn2">Уменьшить</button>
                <button className="btn3">Сбросить</button>
            </div>
            <div className="empty"></div>
        </div>
    )
};

export default Body;