import React from "react";
import { Link } from "react-router-dom";
import "./Heder.css"

function Heder() {
  return (
    <div className='header'>
      <h2>Твоё образование</h2>
      <h5>Дополнительное образование и курсы обучения онлайн</h5>
        <ul>
        <li>
        <Link to='/'>Home</Link>
        </li>
        <li>
        <Link to='/about'>About</Link>
        </li>
        <li>
        <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to="/service">Servis</Link>
        </li>
        <li>
          <Link to="/figma">Figma</Link>
        </li>
        <li>
        <Link to="/main">Main</Link>
        </li>
        <li>
        <Link to="/Create">Create</Link>
        </li>
      </ul>
      <div className="imput">

      <input type="text" placeholder="Whaat are you looking for?" />
      <div>
      </div>
      <img className="a1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR25zDW0id2FNYKfjhMJA-YEnA0cXCIR8f6zQ&s" alt="" />
      <img className="a2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBw68V-oFdRrCHJcqascqNSbyg5-pKowV1uQ&s" alt="" />
      </div>
        
      </div>
  )
}

export default Heder;
