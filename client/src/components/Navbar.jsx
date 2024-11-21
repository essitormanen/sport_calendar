import React, {useState, useContext } from 'react'
import '../stylingSheets/navBar.css'
import { Link } from 'react-router-dom';


export default Navbar(){
    <>  
    <div className='dropdown'>
        <button className='dropbtn'> Menu </button>
        <div className='dropdown-content'>
            <Link to="/"> Welcome </Link>
            <Link to="/plants/newplant">Add New Events </Link>
            <Link to="/plants"> Look Up Events </Link>
        </div>
    </div>
    </>
}
