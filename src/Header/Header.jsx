import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faPlaneDeparture,faHotel,faTrain,faTaxi,faBus,faSnowman,faRightToBracket,faBitcoinSign,faTruckMedical,faBox } from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css";
import Flight from './Flight';

function Header() {
  return (
    <>

    <div  className='border-b-2'  >
      
     <div style={{height:"50px",width:"104px"}}> <NavLink  to="" className='' ><img className='h-13 w-24'  src="https://jsak.goibibo.com/pwa_v3/pwa_growth/images/og-goibibo.aba291ed.png" alt="" /></NavLink> </div>
     <NavLink to="/flight" style={{position:"absolute",marginTop:"-40px",fontSize:"14px",color:"gray"}} className={({isActive}) => `ml-32 mb-10  ${isActive ? "text-orange-700" : "text-gray-700"} `}> <FontAwesomeIcon className='pr-1' icon={faPlaneDeparture} /> Flights </NavLink>
     <NavLink to="" style={{position:"absolute",marginTop:"-40px",marginLeft:"210px",fontSize:"13px",color:"gray"}} className=""> <FontAwesomeIcon icon={faHotel} />  Hotels   </NavLink>
     <NavLink to="" style={{position:"absolute",marginTop:"-40px",marginLeft:"285px",fontSize:"13px",color:"gray"}} className=""> <FontAwesomeIcon className='pr-1' icon={faTrain} />  Trains  </NavLink>
     <NavLink to="" style={{position:"absolute",marginTop:"-40px",marginLeft:"355px",fontSize:"13px",color:"gray"}} className=""> <FontAwesomeIcon className='pr-1' icon={faTaxi} />  Cabs   </NavLink>
     <NavLink to="" style={{position:"absolute",marginTop:"-40px",marginLeft:"420px",fontSize:"13px",color:"gray"}} className=""> <FontAwesomeIcon className='pr-1' icon={faBus} />  Bus  </NavLink>
     <NavLink to="" style={{position:"absolute",marginTop:"-40px",marginLeft:"485px",fontSize:"13px",color:"gray"}} className=""> <FontAwesomeIcon className='pr-1' icon={faSnowman} />  Holiday  </NavLink>
     <NavLink to="" style={{position:"absolute",marginTop:"-40px",marginLeft:"575px",fontSize:"13px",color:"gray"}} className=""> <FontAwesomeIcon className='pr-1' icon={faBitcoinSign} />  forex  </NavLink>
     <NavLink to="" style={{position:"absolute",marginTop:"-40px",marginLeft:"645px",fontSize:"13px",color:"gray"}} className=""> <FontAwesomeIcon className='pr-1' icon={faTruckMedical} />   Insurance  </NavLink>
     <NavLink to="" style={{position:"absolute",marginTop:"-46px",marginLeft:"740px",fontSize:"10px",color:"gray"}}>              <FontAwesomeIcon className='fa-xl mt-2'  icon={faBox } />  </NavLink>
     <NavLink to="" style={{position:"absolute",marginTop:"-46px",marginLeft:"760px",fontSize:"10px",color:"gray"}} className=""> My trip <br /> <b><span style={{marginTop:"-10px"}}>   Manage Bookings</span></b> </NavLink>
   {/* <button  id='a'><FontAwesomeIcon style={{marginLeft:"-70px"}}   icon={faRightToBracket } /> 
   
   
 
   <div  class="wrapper">
    
    <ul class="dynamic-txts">
      <li><span>Login/SignUP</span></li>
      <li><span>Exclusive Offers</span></li>
      <li><span>Earn gocash</span></li>
      <li><span>Manage Trip</span></li>
      <li><span>Login/SignUP</span></li>
    </ul>
  </div> */}
   
   
   
  {/* </button> */}
   
       
      


     </div>


     </>
     
  

       
  
    
   
  )
  
}

export default Header

