import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../index.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/cartSlice'
//import { STATUSES, fetchProducts } from '../Redux/productSlice'


const Products = () => {

   const [product, setProducts] = useState([])
  const dispatch = useDispatch();


     // const {data:product,status} = useSelector((state)=>state.product)

// useEffect(()=>{

// dispatch(fetchProducts())

// },[])


  useEffect(() => {

    const fetchProducts = async ()=>{
      const res = await fetch("https://fakestoreapi.com/products")
      const data =await res.json()
      console.log(data)
    }

    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data)
      })


      .catch((err) => console.log(err))

  }, [])

  const handleAddToProduct = (productDetails) => {
    dispatch(addToCart(productDetails))
    // if(status===STATUSES.Loading){
    //   return <h2 style={{fontWeight:'bolder'}}>Loading...</h2>
    // }
    
  }


  return (
    <div>
      <div>Products</div>

      <div className='productsWrapper'>
        {
          product.map((products) => {
            return <div className='card' key={products.id}>
              <img src={products.image} />
              <h4>{products.title}</h4>
              <h5>{products.price}</h5>
              <button className='btn' onClick={() => handleAddToProduct(products)}>Add to cart</button>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Products
