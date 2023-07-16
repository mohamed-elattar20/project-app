import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

const ProductDescPage = () => {
    const [productData, setProuductData] = useState()
    const { id, quantity } = useParams()
    const { products } = useSelector((state => state.products))
    // useEffect(() => {
    //     fetch(`https://fakestoreapi.com/products/${id}`)
    //         .then(res => res.json())
    //         .then(data => setProuduct(data))
    //     // console.log(products);
    // }, [])
    useEffect(() => {
        products.map((product) => {
            if (product.id == id) {
                setProuductData(product)
            }
            // console.log(products);
        })
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img style={{ height: "300px", objectFit: "contain" }} src={productData?.image} alt="img" />
                        <h4> Description : {productData?.description}</h4>
                        <h5> price : {productData?.price}</h5>
                        <h5> quantity : {quantity}</h5>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDescPage
