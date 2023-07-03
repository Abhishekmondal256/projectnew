import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
const Dsa=()=>{
    const data=[ { id: 1, name: 'DSA', channelname:'Code With Harry',videos:'92',duration:"12 hr 23 mins",img:'image1.jpg',link: "https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi"},
    {  id: 2, name: 'Java + DSA', channelname:'Kunal Kushwaha',videos:'49',duration:"9 hr 23 mins",img:'image2.jpg',link:"https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"},
    {  id: 3, name: 'C++ + DSA', channelname:'Codehelp',videos:'149',duration:"16 hr 23 mins",img:'image3.jpg',link:"https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA"},];

 

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
export default Dsa;