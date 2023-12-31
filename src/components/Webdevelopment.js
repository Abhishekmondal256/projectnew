import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
const Webdevelopment=()=>{
    const data=[ { id: 1, name: 'Web Development Tutorials For Beginners', channelname:'Code With Harry',videos:'103',duration:"14 hr 23 mins",img:'https://i.ytimg.com/vi/6mbwJ2xhgzM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBvlMuWkLXMncxKtS-odl1tOp17Mw',link: "https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg"},
    {  id: 2, name: 'Web Development Course', channelname:'Apna College',videos:'58',duration:"9 hr 23 mins",img:'https://i.ytimg.com/vi/l1EssrLxt7E/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBeHsL0IAwmp4nDP4YTVkzvG9Z2OA',link:"https://www.youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"},
    {  id: 3, name: 'Complete Web Dev using MERN stack ', channelname:'Codehelp',videos:'18',duration:"16 hr 23 mins",img:'https://i.ytimg.com/vi/Vi9bxu-M-ag/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAuRKGTBkNUOEglcihlb91LN6XYOQ',link:"https://www.youtube.com/playlist?list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD"},];

 

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
export default Webdevelopment;