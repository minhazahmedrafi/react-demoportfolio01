import React from 'react';
import "./menu.scss"

const Menu = ({menu,setMenu}) => {
    return (
        <div className={"menu " + (menu && "active")}>
            <ul>
                <li onClick={()=>{setMenu(false)}}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>{setMenu(false)}}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>{setMenu(false)}}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={()=>{setMenu(false)}}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={()=>{setMenu(false)}}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
