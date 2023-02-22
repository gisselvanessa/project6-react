import { configureStore } from "@reduxjs/toolkit";
import products from './slices/products.slice'
const store=configureStore({
    reducer:{
        products
    }
})

export default store