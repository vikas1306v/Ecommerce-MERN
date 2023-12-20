import {configureStore} from '@reduxjs/toolkit';
import userSlice from './Slices/Userslice';
import cartSlice from './Slices/Cartslice';
import productSlice from './Slices/Product';
import wishlistSlice from './Slices/wishlistSlice';

const store = configureStore({
    reducer: {
        user: userSlice,
        cart: cartSlice,
        product: productSlice,
        wishlist:wishlistSlice
    }
});
export default store;