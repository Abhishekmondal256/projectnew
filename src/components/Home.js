import React from 'react';
import Menu from './Menu.js';
import Subtop from './Subtop';
import Subbottom from './Subbottom';
import Subbottom2 from './Subbttom2';
import list from './List';
import item from './Item';
import rest from './Rest';

function Home(){
    return (
        <>
        <Menu />
        <div className='courses'>
        <div className='Subtop'>
        {list.map((val)=>{
                return(
                    <Subtop 
                        img={val.img}
                        name={val.name}
                        course={val.course}
                    />
                );
            })}
        </div>  
        <div className='Subbottom'>
        {item.map((val)=>{
                return(
                    <Subbottom 
                        img={val.img}
                        name={val.name} 
                        course={val.course}
                    />
                );
            })}
        </div>  
        <div className='Subbottom2'>
        {rest.map((val)=>{
                return(
                    <Subbottom2 
                        img={val.img}
                        name={val.name}
                        course={val.course}
                    />
                );
            })}
        </div>  
        </div>
       
        </>
        
    );
}

export default Home;