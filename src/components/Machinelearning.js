import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
const Machinelearning=()=>{
    const data=[ { id: 1, name: 'Machine Learning Tutorials For Beginners Using Python', channelname:'Code With Harry',videos:'23',duration:"7 hr 27 mins",img:'https://i.ytimg.com/vi/_u-PaJCpwiU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBtbcOczuLXEgZEvcCOQ-Ib4qnoYw',link: "https://www.youtube.com/playlist?list=PLu0W_9lII9ai6fAMHp-acBmJONT7Y4BSG"},
    {  id: 2, name: 'Complete Machine Learning playlist', channelname:'Krish Naik',videos:'153',duration:"19 hr 23 mins",img:'https://i.ytimg.com/vi/bPrmA1SEN2k/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBtNCa1c_IhNq4w36GPW_ludzZDag',link:"https://www.youtube.com/playlist?list=PLZoTAELRMXVPBTrWtJkn3wWQxZkmTXGwe"},
    {  id: 3, name: 'Machine Learning', channelname:'5 Minutes Engineering',videos:'87',duration:"13 hr 23 mins",img:'https://i.ytimg.com/vi/Y4qO9unerGs/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAUsFchk1gRCi9sZW-R5roCAzFmwA',link:"https://www.youtube.com/playlist?list=PLYwpaL_SFmcBhOEPwf5cFwqo5B-cP9G4P"},];

 

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
export default Machinelearning;