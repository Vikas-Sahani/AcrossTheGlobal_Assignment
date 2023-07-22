import sarthakLogo from "./images/Sarthak Kamra.svg";
import sarthakCardImg from "./images/Sarthak_Card_Img.svg"
import SarahWest from "./images/SarahWest.png"
import SarahCardImg from "./images/SarahCardImg.png"
import RonalJones from "./images/RonalJones.png"
import RonalCardImg from "./images/RonalCardImg.png"
import JosephGray from "./images/JosephGray.png"

const apiInstance=[{
    cardAvtar:sarthakCardImg,
    name:"Sarthak Kamra",
    avtar: sarthakLogo,
    tilte:"✍️ Article",
    heading:"What if famous brands had regular fonts? Meet RegulaBrands!",
    desc:"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    views:1.4
},{
    cardAvtar:SarahCardImg,
    name:"Sarah West",
    avtar: SarahWest,
    tilte:"🔬️ Education",
    heading:"Tax Benefits for Investment under National Pension Scheme launched by Government",
    desc:"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    views:1.4
},{
    cardAvtar:RonalCardImg,
    name:"Ronal Jones",
    avtar: RonalJones,
    tilte:"🗓️ Meetup",
    heading:"Finance & Investment Elite Social Mixer @Lujiazui",
    date:"Fri, 12 Oct, 2018",
    location:"Ahmedabad, India",
    views:1.4
},{
    cardAvtar:"",
    name:"Joseph Gray",
    avtar: JosephGray,
    tilte:"💼️ Job",
    heading:"Software Developer",
    company:"💼️ Innovaccer Analytics Private Ltd.",
    date:"Fri, 12 Oct, 2018",
    location:"🛣️ Noida, India",
    views:1.4
}]

export default function NewApp(){
    return (<>
        {apiInstance.map((obj,i)=>{
            return(
                <div className="card" key={i}>
                    {obj.cardAvtar!==""?
                        <div className="cardImg">
                            <img src={obj.cardAvtar} alt="cardAvtar" />
                        </div>
                    :""}
                    
                    <p>{obj.tilte}</p>
                    <div>
                        <h3>{obj.heading} </h3>
                        <span>...</span>
                    </div>
                    <p>{obj.desc} </p>
                    <div style={{display:"flex",}}>
                        <div className="avtarImg">
                            <img src={obj.avtar} alt="logo"/>
                        </div>
                        <h4>{obj.name}</h4>
                    </div>
                </div>
            )
        })}
        <div>
            <img src={
// logo
                apiInstance[0].mainAvtar
                } alt="logo"/>
        </div>
    </>)
}