import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'

import { Link } from 'react-router-dom';
import createUser from '../axioss/createUser';

// import img from "../images/img.jpg"
import { AddCart } from '../Redux-toolkit/cartSlice';

import './App.css'
const Home = () => {
const dispatch = useDispatch()
const [value, setValue] = useState([])
const data = async()=>{
const response = await createUser.getUsers()
setValue(response.data)

// const data = response.data
// const vl = data.filter((item)=>{
// return item.category === 'Jeans'
// })
}
useEffect(() => {
  data()
})

const renderList = value.map((item,index) => {
    const { _id, name, price, brand,image } = item;
    return (
<div className="cards" key={_id} >
  <Link style={{textDecoration:"none",color:"black"}} to={`/product/${_id}`}>
    <div className="img">
        <img src={'http://localhost:5000/uploads/'+ image} alt="img" height={"120px"} width={'100px'} />
    </div>
      <div className="content">
          <h2 style={{  fontSize:'20px',marginTop:'4px'}}>{name}</h2>
          <h6 style={{  fontSize:'11px',marginTop:'-8px'}} className="price">{brand}</h6>
          <h6 style={{  fontSize:'11px',marginTop:'-18px'}}className="price">$ {price}</h6>   
        </div>
  </Link>        
          <div>
            <button onClick={()=>dispatch(AddCart(item))} className="btn-buy">Add To Cart</button>
            </div>
</div>
)
})
 

  return <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}}>{renderList}</div>
};

export default Home;
