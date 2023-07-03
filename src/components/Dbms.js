import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
const Dbms=()=>{
    const data=[ { id: 1, name: 'DBMS', channelname:'Gate Smashers',videos:'130',duration:"15 hr 23 mins",img:'image1.jpg',link: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y"},
    {  id: 2, name: 'DBMS Placement Series', channelname:'codehelp',videos:'22',duration:"9 hr 23 mins",img:'image2.jpg',link:"https://www.youtube.com/playlist?list=PLDzeHZWIZsTpukecmA2p5rhHM14bl2dHU"},
    {  id: 3, name: 'DBMS', channelname:'Jenny-Lectures',videos:'24',duration:"6 hr 23 mins",img:'image3.jpg',link:"https://www.youtube.com/playlist?list=PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc"},];

 

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
export default Dbms;