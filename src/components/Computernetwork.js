import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
const Computernetwork=()=>{
    const data=[ { id: 1, name: 'Computer Networks', channelname:'Gate Smashers',videos:'99',duration:"12 hr 23 mins",img:'image1.jpg',link: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_"},
    {  id: 2, name: 'Computer Networks', channelname:'Neso Academy',videos:'135',duration:"9 hr 23 mins",img:'image2.jpg',link:"https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx"},
    {  id: 3, name: 'System Design', channelname:'Knowledge Gate',videos:'149',duration:"16 hr 23 mins",img:'image3.webp',link:"https://www.youtube.com/playlist?list=PLLhBy6YSIT0ANaihpjwDBSBju0qUZ82SK"},];

 

return(
<>
<Menu/>
<div className="maincontainer">
{data.map((item)=>(
<div key={item.id} className="box">



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
export default Computernetwork;