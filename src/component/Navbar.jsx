import React from 'react';
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import '../index.css'
const Navbar = () => {
    const cartLength = useSelector((state) => state.cart.length);


    return (
        <div >
            <span style={{marginTop:'20px'}}>REDUX STORE</span>
            <div style={{display:'flex',justifyContent:'end'}}>
                <Link className='navLink' to='/'>Home</Link>
                <Link className='navLink' to='/cart'>Cart</Link>
                <span className='cartCount'>Cart Items : {cartLength}</span>
            </div>

        </div>
    )
}

export default Navbar
