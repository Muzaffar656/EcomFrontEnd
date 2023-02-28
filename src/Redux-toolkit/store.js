import {configureStore} from '@reduxjs/toolkit'

import cartSystem from './cartSlice'
const store = configureStore({
    reducer:{
        carts:cartSystem
    }
})

export default store