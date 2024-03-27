
// centraliased store -> stores all the data just like a warehouse.
// slices/reducer -> middleman for communication with store - containes logic of how data to be added from store.
// actions -> a name of the task you want to perform on store.

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product:productReducer,
    }
})

// jsx -> only when we need to use some html inside js