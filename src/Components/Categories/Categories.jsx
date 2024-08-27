import React, { useEffect, useState } from 'react'
import style from './Categories.module.css'
import axios from 'axios'
import Loading from '../Loading/Loading'

export default function Categories() {
  const [categ, setCateg] = useState([])
  async function getCateg() {
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    console.log(data.data);
    setCateg(data.data);
    
    
  }

useEffect(()=>{
  getCateg();
},[])

    
  return <>  

{categ.length?<div className="flex flex-wrap justify-between my-3">
  {categ.map((x, id) => (
    <div
      key={id}
      className="w-full sm:w-1/2 md:w-1/4  border-2 border-transparent hover:border-green-400 border-solid cursor-pointer mb-4"
    >
      <img src={x.image} alt="" className="w-full h-[300px]" />
      <h1 className='text-center'>{x.name}</h1>
    </div>
  ))}
</div>:<Loading/>}

  </>
}
