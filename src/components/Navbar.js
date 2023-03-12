import React from "react";
import '../style/navbar.css';
function Navbar() {
    return(
    <>
        <nav className="navbar">
            <ul className="navbarList">
                <li>
                    <img id="logo" src="https://www.svgrepo.com/show/227762/sun.svg" />
                 
                </li>
                <li>
                <h4 id="logoName">Weather App</h4>
                </li>
            </ul>
        </nav>
    </>
    )
}

export default Navbar