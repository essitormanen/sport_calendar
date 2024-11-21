import React, {useState, useContext } from 'react'
import '../stylingSheets/navBar.css'
import { Link } from 'react-router-dom';


export default function Navbar() {

    return (
    <>  
    <div className='dropdown'>
        <button className='dropbtn'> Menu </button>
        <div className='dropdown-content'>
            {/* <Link to="/"> Welcome </Link> */}
            <Link to="/addEvent/">Add New Events </Link>
            <Link to="/calendar"> Look Up Events </Link>
        </div>
    </div>
    </>
    )
};

