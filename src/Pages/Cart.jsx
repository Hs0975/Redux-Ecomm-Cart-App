import React from 'react'
import { removeCart } from '../Redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
const Cart = () => {

const cartItems = useSelector((state)=>state.cart)
const dispatch = useDispatch()
function removeProduct(product){
dispatch(removeCart(product))

}

  return (
    <div>
      <h2 style={{textAlign:'center'}}>Cart Items</h2>
<div >

{
  cartItems.map((product)=>{
    return (
      <div className='cartCard ' key={product.id}>
      
      <img src={product.image} />
      <h4>{product.title}</h4>
      <h5>{product.price}</h5>

<button className='btn2' onClick={() => removeProduct(product.id)}>Remove</button>
</div>
    ) 
     })
}

</div>

    </div>
  )
}

export default Cart
