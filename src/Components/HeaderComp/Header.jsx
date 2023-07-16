import React from 'react'
import "./Header.css"
import { TfiMobile } from "react-icons/bs";
import { FaHeart, FaNotEqual, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='secInfo'>
                    <div className="dropdown m-2">
                        <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <img className='countryIcon'
                                src="https://bestwebcreator.com/shopwise/demo/assets/images/eng.png"
                                alt="" /> English
                        </button>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item" type="button"><img className='countryIcon'
                                src="https://bestwebcreator.com/shopwise/demo/assets/images/eng.png"
                                alt="" />English </button></li>
                            <li><button className="dropdown-item" type="button"><img className='countryIcon'
                                src="https://bestwebcreator.com/shopwise/demo/assets/images/fn.png"
                                alt="" />France</button></li>
                            <li><button className="dropdown-item" type="button"><img className='countryIcon'
                                src="https://bestwebcreator.com/shopwise/demo/assets/images/us.png"
                                alt="" />United States</button></li>
                        </ul>
                    </div>
                    <div className="dropdown m-2">
                        <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            USD
                        </button>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item" type="button">USD</button></li>
                            <li><button className="dropdown-item" type="button">EUR</button></li>
                            <li><button className="dropdown-item" type="button">GBR</button></li>
                        </ul>
                    </div>
                    <span className='m-3'>  123-456-7890</span>
                </div>
                <div className='secLog'>
                    <span className='m-3'> <a className='anchor text-secondary' href="#"><FaNotEqual /> Compare</a> </span>
                    <span className='m-3'> <a className='anchor text-secondary' href="#"><FaHeart /> WishList</a>  </span>
                    <span className='m-3'> <NavLink className='anchor text-secondary' to="login"><FaUser /> Login</NavLink>  </span>
                </div>
            </div>

        </>
    )
}

export default Header
