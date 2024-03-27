// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const STATUSES = Object.freeze(
//     {
//         SUCCESS: 'sucess',
//         ERROR: 'error',
//         LOADING: 'loading'
//     }
// )
// const productSlice = createSlice({
//     name: 'productSlice',
//     initialState: {
//         data: [],
//         status: STATUSES.SUCCESS,
//     },
//     reducers:
//     {
//         setProducts(state, action) {
//             state.data = action.payload
//         },
//         setStatus(state, action) {
//             state.status = action.payload
//         }
//     }

// })

// export const { setProducts, setStatus } = productSlice.actions
// export default productSlice.reducer

// export function fetchProducts(){
// return async function fetchProductThunk(dispatch){
//     dispatch(setStatus(STATUSES.Loading))
// try{
//     axios.get('https://fakestoreapi.com/products')
//     .then((response) => {
//       console.log((response.data))
//       dispatch(setProducts(response.data))
//       dispatch(setStatus(STATUSES.SUCCESS))
//     })
   
// }
// catch(error){
// console.log(error)
// dispatch(setStatus(STATUSES.ERROR))
// }
// }

// }
