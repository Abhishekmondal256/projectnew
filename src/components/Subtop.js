import React from 'react';

function Subtop(props){
    return(
        <div className='box'>
            <img src={props.img} alt="" />
            <h4>{props.name}</h4>
            <a href={props.course}><button>EXPLORE</button></a>
        </div>
    )
}

export default Subtop;