import React from 'react';
import "./topbar.scss";
import {Person,Mail} from "@material-ui/icons";

const Topbar = ({menu,setMenu}) => {
    return (
        <div className={"topbar " + (menu && "active")} id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a className="logo" href="#intro">Jahid.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+0123456789</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>jahidulislamheaven@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenu(!menu)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
