import React, {useState } from "react";
import sarthakLogo from "./images/Sarthak Kamra.svg";
import sarthakCardImg from "./images/Sarthak_Card_Img.svg"
import SarahWest from "./images/SarahWest.png"
import SarahCardImg from "./images/SarahCardImg.png"
import RonalJones from "./images/RonalJones.png"
import RonalCardImg from "./images/RonalCardImg.png"
import JosephGray from "./images/JosephGray.png"
import dots3 from "./images/3dots.svg" 
import viewImg from "./images/visibility_24px.svg"
import shareImg from "./images/share24px.svg"

const apiInstance=[{
    cardAvtar:sarthakCardImg,
    name:"Sarthak Kamra",
    avtar: sarthakLogo,
    tilte:"✍️ Article",
    heading:"What if famous brands had regular fonts? Meet RegulaBrands!",
    desc:"I've worked in UX for the better part of a decade. From now on, I plan to rei…",
    views:1.4,
    isClicked:false,
},{
    cardAvtar:SarahCardImg,
    name:"Sarah West",
    avtar: SarahWest,
    tilte:"🔬️ Education",
    heading:"Tax Benefits for Investment under National Pension Scheme launched by Government",
    desc:"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    views:1.4,
    isClicked:false,
},{
    cardAvtar:RonalCardImg,
    name:"Ronal Jones",
    avtar: RonalJones,
    tilte:"🗓️ Meetup",
    heading:"Finance & Investment Elite Social Mixer @Lujiazui",
    date:"Fri, 12 Oct, 2018",
    location:"Ahmedabad, India",
    views:1.4,
    isClicked:false,
},{
    cardAvtar:"",
    name:"Joseph Gray",
    avtar: JosephGray,
    tilte:"💼️ Job",
    heading:"Software Developer",
    company:"💼️ Innovaccer Analytics Private Ltd.",
    date:"Fri, 12 Oct, 2018",
    location:"🛣️ Noida, India",
    views:1.4,
    is3DClick:false,
}]

function Component43Dot(props){
    return(<>
        <div className="component43Dot" style={{visibility:`${props.isClick?"visible":"hidden"}`}}>
            <p>Edit</p>
            <p>Report</p>
            <p>Option 3</p>
        </div>
    </>)
} 

export default function APIinstanceofCard(){
    const [isClick, setisClick] = useState(true);

    return (<div style={{marginBottom:"6%"}}>
        {apiInstance.map((obj,i)=>{
            return(
                <div className="card" key={i}>
                    {obj.cardAvtar!==""?
                        <div className="cardAvtar">
                            <img src={obj.cardAvtar} alt="cardAvtar" />
                        </div>
                    :""}
                    
                    <p>{obj.tilte}</p>
                    <div className="heading">
                        <h3>{obj.heading} </h3>
                        <span onClick={()=>{
                            setisClick(obj.is3DClick?false:true);
                            obj.is3DClick=isClick
                        }}>
                            <img src={dots3} alt="3dots"/>
                        </span>
                        <Component43Dot isClick={obj.is3DClick}/>
                    </div>
                    <p>{obj.desc} </p>
                    <div className="userDetail">
                        <div className="userImgName">
                            <div className="avtarImg">
                                <img src={obj.avtar} alt="logo"/>
                            </div>
                            <h4>{obj.name}</h4>
                        </div>
                        <div className="viewsShares">
                            <div className="views">
                                <img src={viewImg} alt="views"/>
                            </div>
                            <span>{obj.views}k views </span>
                            <div className="share">
                                <img src={shareImg} alt="share"/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            )
        })}
        
    </div>)
}