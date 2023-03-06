// import { color } from '@mui/system';
import React from 'react'
import {NavLink} from 'react-router-dom'
import { MENU } from '../../Constants/menu'
import './menu.css';

function Menu() {
  return (
    <div className='navigation'>
    {
      
        MENU.map((item, index ) =>(
           <NavLink style={ ({isActive})=> ({color:isActive ? "red" : "#000"} )} key={index} to={item.path}> {item.label}</NavLink> 
        )
        
        
        ) 

    }
</div>
  )
}

export default Menu