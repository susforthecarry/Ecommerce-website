import React, { useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Slider from "react-slick";


export default function ProductDetails() {
  const [NewProduct, setNewProduct] = useState({
    imageCover: '',
    title: '',
    description: '',
    category: { name: '' }
  })
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000,
    arrows:false,
  };

  let {id} = useParams();

  async function getProduct(id) {
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    setNewProduct(data.data);
    console.log(data.data);
 
    


    
    
  }
  useEffect(()=>{
    getProduct(id);
  },[])




    
  return <>      
  <div className='h-fit'>
    <div className='flex flex-wrap justify-center items-center '>
      <div className='w-1/4 mx-7'>
      <Slider {...settings}>
        {NewProduct.images && NewProduct.images.map((image , id )=>
                  <img src={image} key={id} alt="" className='w-full m-8 '  />
                )}
   
    </Slider>
      
      </div>
      <div className='w-1/4'>
      <h1 className='my-10 text-lg'>{NewProduct.title}</h1>
      
      <p className='my-10'>{NewProduct.description}</p>
      <p className='my-3 text-green-500'>{NewProduct.category.name}</p>
      <div className='flex justify-between'>
        <p className='text-gray-400'>{NewProduct.price} EGP</p>
        <div className='flex items-center'>
        <p className='text-gray-500 mx-1'>{NewProduct.ratingsAverage}</p>
        <i className="fa-solid fa-star text-yellow-300"></i>
        
        </div>
  

      </div>
      <button className='btn bg-green-500 rounded-lg w-full text-white py-3'> Add To Cart </button>

      </div>

    </div>

  </div>
 
  
  </>
}
