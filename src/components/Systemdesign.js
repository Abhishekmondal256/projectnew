import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
const Systemdesign=()=>{
    const data=[ { id: 1, name: 'System Design Primer Course', channelname:'sudoCODE',videos:'29',duration:"12 hr 23 mins",img:'https://i.ytimg.com/vi/FSR1s2b-l_I/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBcJcuaOrhw5PJkQG_hyOdOI2j67w',link: "https://www.youtube.com/playlist?list=PLTCrU9sGyburBw9wNOHebv9SjlE4Elv5a"},
    {  id: 2, name: 'System Design', channelname:'Gaurav Sen',videos:'38',duration:"9 hr 23 mins",img:'https://i.ytimg.com/vi/SqcXvc3ZmRU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDhrUBAWchj9fO55l6pppWlfgG0Ow',link:"https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX"},
    {  id: 3, name: 'System Design', channelname:'SCALER',videos:'149',duration:"16 hr 23 mins",img:'https://i.ytimg.com/vi/8UryASGBiR4/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDW4ZQPOUPKuuWiVsP8bqUfTtT83g',link:"https://www.youtube.com/playlist?list=PLLhBy6YSIT0ANaihpjwDBSBju0qUZ82SK"},];

 

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
export default Systemdesign;