import React, { useContext, useEffect, useState } from 'react'
import style from './Home.module.css'
import axios from 'axios';
import QuantityLogo from '../../assets/images/boxes.png'
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider';
import MainSlider from '../MainSlider/MainSlider';
import { CartContext } from '../../Context/CartContext';
import { wishlistContext } from '../../Context/WishlistContext';

import { useQuery } from '@tanstack/react-query';

export default function Home() {
  let {AddProduct} =   useContext(CartContext)
  let {AddWishlist , setIsClicked , isClicked } =   useContext(wishlistContext)


  const [product, setProduct] = useState([]);
  let navigate = useNavigate();


  async  function getProducts() {
    try{
      let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
      setProduct(data.data)
      console.log(data.data);
      
    }
   catch(error){
    console.log(error);
    
  }


    
    
    
  }

useEffect(()=>{
  // for calling api 
  getProducts();
},[])

  // let response = useQuery[{
  //   queryKey: ['recent products'],
  //   queryFn:  getProducts
  // }]
  // console.log(response);
  


    
  return <>
  <MainSlider/>
  <CategoriesSlider/>
  <div className=''>
    {product.length? <div className='flex flex-wrap justify-center items-center'>
      {product.map((x)=><div className=' w-full sm:w-1/2  md:w-1/4 mx-auto product border-2 border-transparent relative hover:border-green-400 border-solid ' key={x.id}>
       <Link to={`/productDetails/${x.id}`}> 
       <div className='m-2  ' >
          <img src={x.imageCover} alt="" className='w-full rounded-2xl  ' />
          <h1 className='p-2 font-bold text-lg'>{x.title.split(' ').slice(0,3).join(' ')}</h1>
          <p className='text-green-600'>{x.category.name}</p>
          


          <p className='text-start text-red-400'> <i className="fa-solid fa-money-bill pr-4 ps-2 text-green-500" ></i> {x.price} EGP</p>
          <div className=' md:flex justify-between items-center'>
          <p className='text-start text-red-400 flex items-center'> <img src={QuantityLogo} alt="" className='w-11 ps-2 pr-4' /> {x.quantity}</p>
          <p><i className="fa-solid fa-star text-yellow-400">{x.ratingsAverage}</i></p>
          </div>
        
         
          

          
        </div>
        </Link>

       
        <div className='flex justify-center'>
          <button className='btn bg-green-500 cursor-pointer  rounded-lg w-1/2 text-white py-3' onClick={()=>{
            AddProduct(x.id);
          }}> Add To Cart </button>
          <i className="fa-regular fa-heart text-[25px] hover:text-red-600 absolute top-0 right-0" 
   onClick={(e) => {
      AddWishlist(x.id);
      e.target.classList.replace('fa-regular', 'fa-solid');
      e.target.classList.replace('fa-heart', 'fa-heart-circle-check');
      e.target.classList.add('text-red-200');
   }}>
</i>

          
          

          </div>
      </div>)}
    </div>


:
<Loading/>}


  

  </div>
    
  
  </>
}
