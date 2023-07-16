import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

const Cart = () => {
    const { arrOfProducts } = useSelector(state => state.cart)
    return (
        <>
            <h1>  <span style={{ position: "absolute", left: "50%", transform: "translate(-50%)" }}
                className="badge bg-secondary  ">Cart</span></h1>
            {/* <h1 className=''>Cart Products </h1> */}
            {arrOfProducts.length != 0 ? <div className="container ">
                <div className="row">
                    {arrOfProducts.map((product) => <Card key={product.id} product={product} />)}
                </div>
            </div>
                :
                (<h1 style={{ position: "absolute", top: "200px" }}>No Products To Be Shown</h1>)}

        </>
    )
}

export default Cart
