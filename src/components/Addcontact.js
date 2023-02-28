import React,{useState} from 'react'
import './Form.css'
import createUser from '../axioss/createUser'
import {useNavigate} from 'react-router-dom'
function AppForm() {
  const UseNavigate = useNavigate()
const [name, setName] = useState('')
const [price, setPrice] = useState('')
const [brand, setBrand] = useState('')
const [image, setImage] = useState('')
const [category, setCategory] = useState('')


// const onchange = (e)=>{
// setData({...data,[e.target.name]:e.target.value})}


const handleSubmit =async (e)=>{
  e.preventDefault()
  const formData = new FormData()
  formData.append('name',name)
  formData.append('price',price)
  formData.append('brand',brand)
  formData.append('category',category)
  formData.append('image',image)
  //   const host = 'http://localhost:5000'
  //   const response = await fetch(`${host}/api/createProduct`,{
  //     method:"POST",
  //     headers:{
  //       "Content-Type":"multipart/form-data",
  //     },
  //     // body:JSON.stringify({name:data.name,price:data.price,brand:data.brand})
  //     body:formData
  //   })
    
  //  const note = await response.json()
  //  setData(note)
 const response = await createUser.create(formData)
 console.log(response)
  UseNavigate('/')
  

}
  return (
    <div className='app'>
      
<form onSubmit={handleSubmit} id="adddata">  <div className='formInput'>
    <h1>Add Product</h1>
        <label>Product Name</label>
        <input onChange={(e)=>setName(e.target.value)} name='name' autoComplete='off'  type="text" placeholder='Enter Product Name' />
     
        <label>Price</label>
        <input onChange={(e)=>setPrice(e.target.value)} name='price' autoComplete='off' placeholder='Enter Price Here' />
       <select onChange={(e)=>setCategory(e.target.value)}>
        <option>TShirt</option>
        <option>Shirt</option>
        <option>Shoes</option>
        <option>Jeans</option>
       </select>
        <label>Brand</label>
        <input onChange={(e)=>{ if(e.target.value){
  setBrand(e.target.value)
        }else{
          setBrand('Jeans')
        }
        }} required name='brand' autoComplete='off' type="text" placeholder='Enter Brand Here' />
        <label>Image</label>
        <input onChange={(e)=>{setImage(e.target.files[0])}} name='image' autoComplete='off' id='file'  type="file" placeholder='Choose image' />

    </div>
        <button className='buttons'>Submit</button>
      </form> 
      
      
    </div>
  )
}

export default AppForm