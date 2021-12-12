import React, { useEffect, useRef } from 'react';
import "./intro.scss"
import { init } from 'ityped'

const Intro = () => {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, { showCursor: false, backDelay:1500, backSpeed:60, showCursor:true, strings: ['Developer', 'Designer','Content Creator' ] })
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="images/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Jahidul Islam Heaven</h1>
                    <h3>Frelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="images/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro
