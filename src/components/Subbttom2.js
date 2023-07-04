import React from 'react';

function Subbottom2(props){
    return(
        <div className='box2'>
            <img src={props.img} alt="" />
            <h4>{props.name}</h4>
            <a href={props.course}><button>EXPLORE</button></a>
        </div>
    )
}

export default Subbottom2;