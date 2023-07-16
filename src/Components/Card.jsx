import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { decrement, increment } from "../Redux/Slices/cart";
import { Button } from "react-bootstrap";
import { FaCartArrowDown, FaCartPlus, FaPlus, FaShoppingCart, FaWindowMinimize } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { decrement, increment } from "../Redux/Slices/cartSlice";


const Card = ({ product }) => {

    const { image, category, title, price, id } = product;
    const navigate = useNavigate();
    const { cart, arrOfProducts } = useSelector(state => state.cart);
    const dipatch = useDispatch();
    // console.log(image);
    const [quantity, SetQuantitiy] = useState(0);
    const AddToCart = () => {
        SetQuantitiy(quantity + 1)
        // localStorage.setItem("quantity", quantity)
        dipatch(increment(product))
    }
    const RemoveFromCart = () => {
        SetQuantitiy(quantity - 1)
        // localStorage.setItem("quantity", quantity)
        dipatch(decrement(product))
    }


    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <h4>Cart : {cart}</h4>
                {/* <h4>quantity : {quantity}</h4> */}
                <img style={{ height: "300px", objectFit: "contain" }}
                    src={image} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 style={{ height: "3em" }} className="card-title">{category}</h5>
                    <p style={{ height: "72px", overflow: "hidden" }} className="card-text">{title}</p>
                    <a style={{ display: "block", marginBottom: "5px" }}
                        onClick={() => navigate(`${id}/${quantity}`)} className="btn btn-primary">Product Details</a>
                    <div className="d-flex">
                        <button style={{ width: "50%" }} onClick={AddToCart}
                            className="btn btn-success mx-1">Add <FaCartPlus /> </button>
                        {cart > 0 ?
                            (<button style={{ width: "50%" }} onClick={RemoveFromCart} className="btn btn-danger mx-1">Remove <FaCartArrowDown /></button>)
                            : ""}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;    
