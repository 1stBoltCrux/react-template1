import React from 'react';
import { Link } from 'react-router-dom';
import  reactLogo from '../assets/images/react.png'
function Header(){
  return (
    <div>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
      <img src={reactLogo}/>
    </div>
  );
}

export default Header;
