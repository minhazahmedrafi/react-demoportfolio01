import React, { useState } from 'react';
import "./works.scss"

const Works = () => {
    const [curSlide, setCurSlide] = useState();

const data = [
{
id: "1",
icon: "images/mobile.png",
title: "Web Design",
desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
img:
"https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
},
{
id: "2",
icon: "images/globe.png",
title: "Mobile Application",
desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
},
{
id: "3",
icon: "images/writing.png",
title: "Branding",
desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
},
];


const handleClick =(way)=>{
    way === 'left' ? setCurSlide(curSlide > 0 ? curSlide - 1 : 2) : setCurSlide(curSlide < data.length - 1 ? curSlide + 1 : 0)
}
return (
<div className="works" id="works">
    <div className="slider" style={{transform:`translateX(-${curSlide * 100}vw)`}}>
        {data.map(d=>(
        <div className="container">
            <div className="item">
                <div className="left">
                    <div className="leftContainer">
                        <div className="imgContainer">
                            <img src={d.icon} alt="" />
                        </div>
                        <h2>{d.title}</h2>
                        <p>{d.desc}</p>
                        <span>Projects</span>
                    </div>
                </div>
                <div className="right">
                    <img src={d.img}
                        alt="" />
                </div>
            </div>
        </div>))}
    </div>
    <img className="arrow left" src="images/arrow.png" alt="" onClick={()=>{handleClick('left')}}/>
    <img className="arrow right" src="images/arrow.png" alt="" onClick={()=>{handleClick('')}}/>

</div>
)
}

export default Works