import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
const Appdevelopment=()=>{
    const data=[ { id: 1, name: 'Android 📱App Development Course', channelname:'WsCube Tech',videos:'139',duration:"12 hr 23 mins",img:'image1.jpg',link: "https://www.youtube.com/playlist?list=PLjVLYmrlmjGdDps6HAwOOVoAtBPAgIOXL"},
    {  id: 2, name: 'Android Development Tutorials in Hindi', channelname:'Code with Harry',videos:'34',duration:"9 hr 23 mins",img:'image2.jpg',link:"https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd"},
    {  id: 3, name: 'The Complete Android App Developer Course', channelname:'Master Coding',videos:'149',duration:"16 hr 23 mins",img:'image3.webp',link:"https://www.youtube.com/playlist?list=PL6Q9UqV2Sf1gHCHOKYLDofElSvxtRRXOR"},];

 

return(
<>
<Menu/>

<div className="maincontainer">
{data.map((item)=>(
<div key={item.id} className="boxy">



<div className="imgcont">
<img src={item.img} width="280rem"alt="image"/>

</div>
<div className="maindeta">
<div className="details">
<p className="detname">{item.name}</p>
<p className="channame">{item.channelname}</p>
<div className="viddesc">
<p className="novideo">{item.videos} Videos</p>
<p className="totduration">{item.duration}</p>
</div>

</div>
<div className="tn">
<a href={ item.link} target="_blank">
<button name="signup" id="signup" className="btnsig" >Open</button>
</a>
</div>
</div>
</div>
))}



</div>

</>

)


}
export default Appdevelopment;