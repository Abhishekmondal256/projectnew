import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
const Operating=()=>{
    const data=[ { id: 1, name: 'Operating System', channelname:'Gate Smashers',videos:'92',duration:"16 hr 23 mins",img:'image1.jpg',link: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p"},
    {  id: 2, name: 'Operating System Placement Course', channelname:'Codehelp',videos:'49',duration:"12 hr 23 mins",img:'image2.jpg',link:"https://www.youtube.com/playlist?list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG"},
    {  id: 3, name: 'Operating System', channelname:'Neso Academy',videos:'77',duration:"16 hr 23 mins",img:'image3.jpg',link:"https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O"},];

 

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
export default Operating