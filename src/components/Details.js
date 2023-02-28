import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './App.css'


function Details() {
  const [value, setValue] = useState([])
  const {productId} = useParams()
  const data = async () => {
    const host = 'http://localhost:5000'
    const response = await fetch(`${host}/api/product/${productId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    const note = await response.json()

    setValue(note)
  }
  useEffect(() => {
    data()
  })
  
 

    const {name,price,brand,image} = value
    return(

      <div className='detail-grid' style={{width:'90%',margin:'0 auto'}}>
      <img src={'http://localhost:5000/uploads/'+image} style={{height:'290px',borderRadius:'60px'}}  alt=''/>
      <div className='product-content'>
          <h2 style={{fontSize:'2.5rem'}}>{name}</h2>
          <h2 style={{marginTop:'-23px',fontSize:"20px"}}>$ {price}</h2>
          <h2 style={{marginTop:'-6px',fontSize:"20px"}}>{brand}</h2>
          <button style={{padding:'14px 180px'}} className='btn'> Buy Now</button>
      </div>
  </div>

    )
 


    

}

export default Details