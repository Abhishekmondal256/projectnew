import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
const Oops=()=>{
    const data=[ { id: 1, name: 'Object Oriented Programming in Java Course', channelname:'Kunal kushwaha',videos:'7',duration:"12 hr 23 mins",img:'https://i.ytimg.com/vi/BSVKUk58K6U/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAwj0YDBFHUS3wwkV0IAllDxixNpg',link: "https://www.youtube.com/playlist?list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk"},
    {  id: 2, name: 'C++ Object-Oriented Programming', channelname:'Code Beauty',videos:'13',duration:"9 hr 23 mins",img:'https://i.ytimg.com/vi/iVLQeWbgbXs/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDIxIDBx7GaUiH5SNZivJWTd1FSpw',link:"https://www.youtube.com/playlist?list=PL43pGnjiVwgTJg7uz8KUGdXRdGKE0W_jN"},
    {  id: 3, name: 'C++ Object-Oriented Programming', channelname:'Apna College',videos:'8',duration:"6 hr 23 mins",img:'https://i.ytimg.com/vi/yRpLlJmRo2w/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB953onHqGMzlmf8cMVs-n9pUaNRA',link:"https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ"},];

 

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
export default Oops;