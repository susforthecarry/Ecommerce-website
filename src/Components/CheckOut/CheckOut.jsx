import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'


import { CartContext } from '../../Context/CartContext';


export default function Checkout() {

    let{checkout} = useContext(CartContext)
  

  let formik = useFormik({
    // to make initial values 
    initialValues:{
      details:'',
      city:'',
      phone:''

    }
    // to finally submit 
    ,onSubmit:checkout
  })
  


  

 



  return <>
  
<div className='md:h-screen bg-[#e7d4b5b1]'>
  
<form className="md:w-1/2 mx-auto py-8" onSubmit={formik.handleSubmit}>
  <div className="relative z-0 w-full mb-5 group py-4">
      <input type="text" name="details" id="floating_details" value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-emerald-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-500 peer" placeholder=" "  />
      <label htmlFor="floating_details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Details</label>
  </div>



  <div className=" relative z-0 w-full mb-5 group py-4">
      <input type="text" name="city" id="floating_city" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-emerald-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-500 peer" placeholder=" "  />
      <label htmlFor="floating_city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City </label>
  </div>
  <div className=" relative z-0 w-full mb-5 group py-4">
      <input type="tel" name="phone" id="floating_phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-emerald-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-500 peer" placeholder=" "  />
      <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone </label>
  </div>



  <button className=' bg-[#5f8643] p-3 rounded-lg text-white my-3' type='submit'>Check Out</button>

  
    




  </form>

    

</div>



   

  </>
}
