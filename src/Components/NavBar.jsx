import React from 'react'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const { cart } = useSelector(state => state.cart)
    return (
        <>

            <nav className=" navbar navbar-expand-lg bg-body-white sticky-top ">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src="https://bestwebcreator.com/shopwise/demo/assets/images/logo_dark.png"
                            alt="" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home Page</NavLink>
                            </li>
                            {localStorage.getItem("userToken") ? (<li className="nav-item">
                                <NavLink className="nav-link" to="products">Products Page</NavLink>
                            </li>)
                                : ""}

                            {localStorage.getItem("userToken") ? "" : <li className="nav-item">
                                <NavLink className="nav-link" to="login">Login Page</NavLink>
                            </li>}

                        </ul>
                        <form className="d-flex justify-content-between" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search"
                                aria-label="Search" />
                            <button className="btn btn-outline-danger" type="submit">Search</button>
                            <NavLink to={"cart"} style={{ marginLeft: "10px" }}
                                className="btn btn-primary d-flex justify-content-end align-items-center" type="submit">
                                <FaShoppingCart /> <span>{cart}</span></NavLink>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavBar
