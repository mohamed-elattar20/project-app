import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Card from './Card'
import ProductsShow from './ProductsShow'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

const Form = () => {

    // userName : mor_2314
    //password : 83r5^_
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    })

    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate();

    const handleForm = (data) => {
        axios.post("https://fakestoreapi.com/auth/login", data)
            .then((res) => {
                console.log(res);
                localStorage.setItem("userToken", res.data.token)
            })
    }
    // const { localSlice } = useSelector(state => state.localSlice)

    // useEffect(() => {
    //     localStorage.getItem("userToken")
    // }, [])

    return (
        <>
            <h2> Sign In <span className="badge bg-secondary">To Show All Products</span></h2>
            <form noValidate onSubmit={handleSubmit(handleForm)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">UserName</label>
                    <input type="email" {...register(`username`, { required: { value: true, message: `Email Req` }, minLength: { value: 2, message: `Min is 2` }, })}
                        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {errors.username ?
                        (<h4 id="emailHelp" className="form-text">{errors.username.message}</h4>)
                        : ""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input {...register(`password`, { required: { value: true, message: `pass Req` } })}
                        type="password" className="form-control" id="exampleInputPassword1" />
                    {errors.password ?
                        (<h4 id="emailHelp" className="form-text">{errors.password.message}</h4>)
                        : ""}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {/* {localStorage.getItem("userToken") ? products.map((product) => <ProductsShow />) : ""} */}
            {localStorage.getItem("userToken") ? navigate("/products") : ""}

        </>
    )
}

export default Form
