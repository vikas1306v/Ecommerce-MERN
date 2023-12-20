import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    cart:'',
    cartTotal:'',
    totalAfterDiscount:''
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart = action.payload.products;
            state.cartTotal = action.payload.cartTotal;
            state.totalAfterDiscount = action.payload.totalAfterDiscount;
            
        }
    }
})
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;