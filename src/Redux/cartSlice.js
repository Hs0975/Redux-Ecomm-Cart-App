import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (currentState, action) => { // currentState = [] initially
            currentState.push(action.payload); // action.payload will contain the product info as object
        },
        removeCart: (currentState, action) => {
         return   currentState.filter((item) => item.id !== action.payload);
        }
    }
});

const { addToCart, removeCart } = cartSlice.actions;
export { addToCart, removeCart };

export default cartSlice.reducer;

// payload = data to be passed to reducers

// addToCart({product: 'iphone'})