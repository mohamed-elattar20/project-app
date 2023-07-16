import React from 'react'
import "./Sec3.css"
import { FaShippingFast, FaHandHoldingUsd, FaCcVisa, FaTeamspeak } from 'react-icons/fa';

const Sec3 = () => {
    return (
        <>
            <div className='container'>
                <div className="part">
                    <div className="iconPart" >
                        <FaShippingFast />
                    </div>
                    <div className='textPart'>
                        <h6>Free Delivery</h6>
                        <span>Worldwide</span>
                    </div>
                </div>
                <div className="part">
                    <div className="iconPart" >
                        <FaHandHoldingUsd />
                    </div>
                    <div className='textPart'>
                        <h6>Free Delivery</h6>
                        <span>Worldwide</span>
                    </div>
                </div>
                <div className="part">
                    <div className="iconPart" >
                        <FaTeamspeak />
                    </div>
                    <div className='textPart'>
                        <h6>Free Delivery</h6>
                        <span>Worldwide</span>
                    </div>
                </div>
                <div className="part">
                    <div className="iconPart" >
                        <FaCcVisa />
                    </div>
                    <div className='textPart'>
                        <h6>Free Delivery</h6>
                        <span>Worldwide</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sec3
