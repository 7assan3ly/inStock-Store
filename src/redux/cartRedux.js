import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        products : [],
        quantity : 0,
        total : 0
    },

    reducers:{
        addProduct:(state, action) => {
            state.quantity += 1;
            state.products.push(action.payload.product);
            state.total += action.payload.price;
        },
        delProduct:(state, action) => {
            const index = state.products.findIndex(product=> product.id === action.payload)
            console.log('i',index)
            state.quantity -= 1;
            state.total -= state.products[index].price;
            state.products.splice(index,1)
        },
    },
})

export const { addProduct, delProduct } = cartSlice.actions
export default cartSlice.reducer