import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    wishlist: '',
}
const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addwishlist: (state, action) => {
            state.wishlist = action.payload
        },
    }

})

export const { addwishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
