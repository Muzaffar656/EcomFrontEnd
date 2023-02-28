import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import {useSelector} from 'react-redux'
function Navbar() {
    const item = useSelector((state)=>state.carts.cart)
   
  
  return (
    <div
    style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:'90%',
        margin:'35px auto'
    }}
>
    <span className="logo">FAKE STORE</span>
    <div>
        <Link className="navLink" to="/">
            Home
        </Link>
        <Link className="navLink" to="/cart">
            <span>Cart : {item.length}</span>
        </Link>
        <Link className="navLink" to="/addproduct">
            AddProduct
        </Link>
        

    </div>
</div>
  )
}

export default Navbar