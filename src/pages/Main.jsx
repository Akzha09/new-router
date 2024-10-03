import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import "./Main.css"
import Create from './Create'
import { Link } from 'react-router-dom'
import apiClient from '../axios/apiClient'


function Main() {
    const [products, setProducts]= useState([])
    const [active, setActive] = useState(false)
    async function getProducts (){
        try{
            const res = await apiClient.get("/products")


            setProducts(res.data)
            console.log(res)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect (() => {
        getProducts()
    }, [active])

async function setDelete (id){
    try {
        const res = await apiClient.delete(`/products/${id}`)
        console.log(res);
        setActive(!active)
    } catch (error) {
        
    }
}
  return (
    <div className='box'>
        <Link to="/Create"><button >Create Products</button></Link>
        {
            products.map((box) => (
                <div key={box.id} >
                <img src={box.image} alt="" />
                <h1>{box.title}</h1>
                <button onClick={() => setDelete(box.id)}>Delete</button> 
                </div>
            ))
        }
      
    </div>
  )
}

export default Main
