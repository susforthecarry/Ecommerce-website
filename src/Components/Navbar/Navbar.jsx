import React, { useContext, useEffect } from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/images/freshcart-logo.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { counterContext } from '../../Context/CounterContext'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext'
import Cart from '../Cart/Cart'

export default function Navbar() {
let {userData , setUserData} =   useContext(UserContext);
let navigate = useNavigate()
let {cart} = useContext(CartContext)
function logOut (){
  localStorage.removeItem('userToken');
  setUserData(null);
  navigate('/login');


  
}
useEffect(()=>{
  if(localStorage.getItem('userToken')){
   setUserData(localStorage.getItem('userToken'));
  }
},[])

    
  return <>
    
    <nav className='bg-[#A0937D]  md:fixed top-0 inset-x-0 py-3 text-center capitalize z-50 rounded-br-xl rounded-bl-xl' >
      <div className="container flex flex-col md:flex-row justify-between items-center text-white">
        <div className='flex flex-col md:flex-row space-x-3'>
          <img src={logo} width={120} alt="" />
          {userData && <ul className='flex flex-col md:flex-row space-x-2'>
            <li><NavLink to="home">Home</NavLink></li>
            <li><NavLink to="cart">cart</NavLink></li>
            <li><NavLink to="products">products</NavLink></li>
            <li><NavLink to="categories">categories</NavLink></li>
            <li><NavLink to="brands">brands</NavLink></li>
            <li><NavLink to="wishlist">Wishlist</NavLink></li>

          </ul>}
        </div>
        <div className=''>
          <ul className='flex flex-col md:flex-row space-x-2'>
            <Link to='cart'>
            <i className="fa-solid fa-cart-shopping relative text-2xl text-black w-[20px] mx-3">
              <span className=' absolute top-0 left-0 -right-3 bottom-0 text-white font-semibold text-xs m-[1px] h-[2px]'>
              {cart && cart.numOfCartItems} 

              </span>

              </i>
            </Link>
            
       
              {userData?<li><span onClick={logOut} className=' cursor-pointer'>logout</span></li>:<>
            <li><NavLink to="login">Login</NavLink></li>
            <li><NavLink to="">Register</NavLink></li></>}
            <li className='space-x-2 text-black '>
            

              
         


              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-linkedin-in'></i>
              <i className='fab fa-youtube'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-instagram'></i>
            </li>

         
           
          
          </ul>
        </div>
      </div>
    </nav>
  
  </>
}
