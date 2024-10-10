import React , {useState} from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown =() => {
        setDropdownOpen(!dropdownOpen);
    }
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <div className='navbar-logo'>
                <img src="../assets/logo.jpeg" alt='college logo'/>
            </div>

            <ul className='nav-links'>
                <li><a href='#'>NOTIFICATION</a></li>
                <li><a href='#'>TASKS</a></li>
                <li><a href='#'>LEAVE STATUS</a></li>
                
                <li className='navbar-dropdown' onClick={toggleDropdown}>
                    <a href='#' className='dropdown-toggle'>ACCOUNT</a>
                    {dropdownOpen && (
                        <ul className='dropdown-menu'>
                            <li><a href='#'>PROFILE</a></li>
                            <li><a href='#'>SETTINGS</a></li>
                            <li><a href='#'>LOGOUT</a></li>
                        </ul>
                    )}
                </li>
            </ul>

      </div>
    </nav>
  );
};

export default NavBar;
