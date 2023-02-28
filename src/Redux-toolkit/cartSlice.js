import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    cart:[],
    quantity:0,
    cartTotal :0
}
const cartSystem = createSlice({
    name:'carts',
    initialState,
    reducers:{
        AddCart:(state,action)=>{
            const find = state.cart.findIndex(item=>item._id===action.payload._id)
            if(find>=0){
                state.cart[find].quantity+=1
            }else{
                const total = {...action.payload,quantity:1}
                state.cart.push(total)
            }
        },
        remove:(state,action)=>{
        // return state.filter((item) => item._id !== action.payload)
        const nextcart = state.cart.filter((item)=> item._id !== action.payload._id)
        state.cart = nextcart

        },
        decrement:(state,action)=>{
            const itemIndex = state.cart.findIndex((item)=> item._id === action.payload._id)
            if(state.cart[itemIndex].quantity > 1){
                state.cart[itemIndex].quantity -=1 ;
            }
            else if (state.cart[itemIndex].quantity === 1){
                const nextcart = state.cart.filter((item)=> item._id !== action.payload._id)
                state.cart = nextcart
            }
        },
        getTotal:(state,action)=>{
           let {total,quantity}=state.cart.reduce((cartTotal,cartItem)=>{
            const {price,quantity}=cartItem
            const itemTotal = price * quantity
            cartTotal.total += itemTotal
            cartTotal.quantity += quantity
            return cartTotal
           },
           {
            total:0,
            quantity:0
           }
           )
           state.quantity = quantity
           state.cartTotal=total
        }

    }
})
export const {AddCart,remove,decrement,getTotal} = cartSystem.actions
export default cartSystem.reducer
