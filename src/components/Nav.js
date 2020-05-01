import React from "react";
import { NavLink } from 'react-router-dom';

// Naviation to the main links of the Project
const Nav = (props) => (

    <nav className="main-nav">
        <ul>
            <li>
                <NavLink to='/search/sunset'>Sunset</NavLink>
            </li>
            <li>
                <NavLink to='/search/waterfall'>Waterfall</NavLink>
            </li>
            <li>
                <NavLink to='/search/rainbows'>Rainbows</NavLink>
            </li>
          
        </ul>
    </nav>

);
// Export the Nav
export default Nav;