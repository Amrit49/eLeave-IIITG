import React , {useState} from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import { FaBell, FaTasks, FaCalendarCheck, FaUser,FaSignOutAlt } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown =() => {
        setDropdownOpen(!dropdownOpen);
    }

    const handleProfileClick = () =>{
        navigate('/account');
    };
    const handleLogoutClick =()=>{
        navigate('/');
    }
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <div className='navbar-logo'>
                <img src={logo} alt='college logo'/>
            </div>

            <ul className='nav-links'>
                <li>
                    <a href='#' title='Notifications'>
                        <FaBell />
                    </a>
                </li>

                <li>
                    <a href='#' title='Tasks'>
                        <FaTasks />
                    </a>
                </li>

                <li>
                    <a href='#' title='Leave Staus'>
                    <FaCalendarCheck />
                    </a>
                </li>
                
                <li className='navbar-dropdown' onClick={toggleDropdown}>
                    <a href='#' className='dropdown-toggle' title='Account'>
                        <FaUser />
                    </a>
                    {dropdownOpen && (
                        <div className='dropdown-menu'>
                            <div className='upper-triangle'></div>
                                <ul className='dropdown-list'>
                                    <li onClick={handleProfileClick}>
                                        <FaUser className="dropdown-list-icon" />
                                        <span>PROFILE</span>
                                    </li>
                                    <li onClick={handleLogoutClick}>
                                        <FaSignOutAlt className="dropdown-list-icon" />
                                        <span>LOGOUT</span>
                                    </li>
                                </ul>
                        </div>
                    )}
                </li>
            </ul>

      </div>
    </nav>
  );
};

export default NavBar;
