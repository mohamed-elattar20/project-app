import React from 'react'
import './Sec7.css'
import { FaCcAmex, FaCcDiscover, FaCcMastercard, FaCcPaypal, FaCcVisa, FaEnvelopeOpenText, FaFacebook, FaGooglePlusG, FaInstagram, FaInstagramSquare, FaMobileAlt, FaRegEnvelope, FaRegMap, FaTwitter, FaYoutube } from "react-icons/fa";
const Sec7 = () => {
    return (
        <>
            <div className="contAll">
                <div className="up">
                    <div className="left">
                        <h5>Contact Info</h5>
                        <h6> <FaRegMap /> 123 Street, Old Trafford, NewYork, USA</h6>
                        <h6><FaRegEnvelope /><a href="mailto: info@sitename.com">  info@sitename.com</a></h6>
                        <h6> <FaMobileAlt /> <a href="tel:457 789 789 65">+ 457 789 789 65</a></h6>
                        <div className="socialIcons">
                            <div className="icon"> <a href="#"> <FaFacebook style={{
                                color: "blue", backgroundColor: "white",
                                height: "35px", width: "35px", borderWidth: "100%"
                            }} /> </a> </div>
                            <div className="icon"> <a href="#"> <FaTwitter style={{
                                color: "white", backgroundColor: "lightskyblue",
                                height: "35px", width: "35px", borderWidth: "100%"
                            }} /> </a> </div>
                            <div className="icon"> <a href="#"> <FaGooglePlusG style={{
                                color: "white", backgroundColor: "rgba(255, 0, 0, 0.646)",
                                height: "35px", width: "35px", borderWidth: "100%"
                            }} /> </a> </div>
                            <div className="icon"> <a href="#"> <FaYoutube style={{
                                color: "white", backgroundColor: "red",
                                height: "35px", width: "35px", borderWidth: "100%"
                            }} /> </a> </div>
                            <div className="icon"> <a href="#"> <FaInstagram style={{
                                color: "white", backgroundColor: "darkcyan",
                                height: "35px", width: "35px", borderWidth: "100%"
                            }} /> </a> </div>
                        </div>
                    </div>
                    <div className="leftCenter">
                        <h5>Useful Links</h5>
                        <a href="#">About Us</a>
                        <a href="#">FAQ</a>
                        <a href="#">Location</a>
                        <a href="#">Affiliates</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="rightCenter">
                        <h5>My Account</h5>
                        <a href="#">My Account</a>
                        <a href="#">Discount</a>
                        <a href="#">Returns</a>
                        <a href="#">Orders History</a>
                        <a href="#">Order Tracking</a>
                    </div>
                    <div className="right">
                        <h5>Subscribe Our Newsletter</h5>
                        <p>If you want to get an email from us every time we have a new special offer,
                            then sign up here!</p>
                        <div className="input-group mb-3">
                            <input style={{ borderRadius: "40px" }}
                                type="text" className="form-control" placeholder="Enter Email Address"
                                aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button style={{ borderRadius: "40px" }}
                                className="btn btn-danger" type="button" id="button-addon2">
                                <FaEnvelopeOpenText style={{
                                    backgroundColor: "red", color: "white"
                                }} /> </button>
                        </div>
                    </div>
                </div>
                <div className="down">
                    <div className="rights">
                        <p>© 2020 All Rights Reserved by Bestwebcreator</p>
                    </div>
                    <div className="credits">
                        <a href="#"><FaCcVisa style={{ width: "40px", height: "40px", color: "white" }} /></a>
                        <a href="#"><FaCcDiscover style={{ width: "40px", height: "40px", color: "white" }} /></a>
                        <a href="#"><FaCcMastercard style={{ width: "40px", height: "40px", color: "white" }} /></a>
                        <a href="#"><FaCcPaypal style={{ width: "40px", height: "40px", color: "white" }} /></a>
                        <a href="#"><FaCcAmex style={{ width: "40px", height: "40px", color: "white" }} /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sec7
