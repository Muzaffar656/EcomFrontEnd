import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { remove,decrement,AddCart, getTotal  } from '../Redux-toolkit/cartSlice'
import './App.css'
function Cart() {



    const dispatch = useDispatch()
    const handel = (productId)=>{
        dispatch(remove(productId))
}
const dec = (productId)=>{
    dispatch(decrement(productId))
}
const incre = (productId)=>{
    dispatch(AddCart(productId))
}
    const item = useSelector((state)=>state.carts.cart)
    const total = useSelector((state)=>state.carts.quantity)
    const rs = useSelector((state)=>state.carts.cartTotal)



    useEffect(()=>{
        dispatch(getTotal())
    },[item,dispatch])
    const render = item.map((value)=>{
        const {_id,name,price,brand,image  } = value    

        
        return(
  
            <div key={_id} style={{width:'90%',margin:'0 auto'}}>
            <h3>Cart</h3>
            <div className="cartWrapper">
                <div className="cartCard">
                    <img style={{margin:'auto 0'}} src={'http://localhost:5000/uploads/'+image} alt="" />
                    <div>
                    <h4>Catagory</h4>
                    <h5>{name}</h5> 
                    </div>
                    <div>
                        <h4>Price</h4>
                    <h5>$ {price}</h5>
                    </div>
                    <div>
                    <h4>Brand</h4>
                    <h5>{brand}</h5>
                    </div>
                    <div>
                        <h4>Quantity</h4>
                        <h5> <button onClick={()=>{incre(value)}} >+</button> {value.quantity} <button onClick={()=>dec(value)}>-</button></h5>
                    </div>
                    <button onClick={()=>handel(value)}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
 
     
        )        
    })

      return <div style={{width:'90%',margin:'0 auto'}}>
      {render}
      
      <div   className='total'>

            <h5 style={{fontSize:"1.2rem"}}>Subtotal({total}) : ${rs} </h5>
            <button className='btn-buy'>Check out</button>
      </div>
      </div>
 
  
}

export default Cart

