import React from 'react';
import {Link} from 'react-router-dom';
import './Allfiles.css';

 function Navbar() {
  return (
    <div className='navbar'>
     <Link to="/home" className='link'>
     <h2>Home </h2>
     </Link>

     <Link to="/student" className='link'>
     <h2>Students</h2> 
     </Link>

     <Link to="/contact" className='link'>
     <h2>Contact Us</h2>      
     </Link>
    </div>
    
  )
}
export default Navbar;