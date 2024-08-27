import React, { useEffect, useState } from 'react'
import style from './Brands.module.css'
import axios from 'axios'
import Loading from '../Loading/Loading'

export default function Brands() {
  const [brands, setBrands] = useState([])


  async function getBrands() {
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
    console.log(data.data);
    setBrands(data.data);
    
    
  }

useEffect(()=>{},[
  getBrands()
])

    
  return <>

  {brands.length?   <div className='flex flex-wrap justify-center my-3'>
   {brands.map((x,index)=>(
      <div key={index} className=' md:w-1/4 mx-auto  '>
      <img src={x.image} alt="" className='mx-auto  '/>
      <h1 className='text-center'>{x.name}</h1>
    </div>

    ))}
   </div>:<Loading/>}

  
  </>
}
