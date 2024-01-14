import React from 'react'
import "./Flight.css"
import { Link,NavLink } from 'react-router-dom'

function Flight() {
  return (
    <>
    <div id='a'>
    <h1 id='b' >Book Domestic and International Flight Tickets</h1>
    
    </div>
    <div id='c'>
    
      <div id='e' >
    <label  >
     
    <input style={{position:"absolute",marginTop:"5px",marginLeft:"4px"}}  type="radio" checked="checked" name='radio' /> 
      
      <span  style={{fontSize:"11px",fontWeight:"500",paddingLeft:"24px",position:"absolute",paddingTop:"3px" }}>One-Way</span>
    </label>
      </div>
        {/* here fourm text  */}
      <input id='f' type="text"  placeholder='Enter City & Airport' />
      
      <div id='g'>From</div>
      <input id='h' type="text"  placeholder='Enter City & Airport' />
      <div id='i'>To</div>

    </div>
    <button id='d'><b>SEARCH FLIGHTS</b></button>
    </>
  )
}

export default Flight