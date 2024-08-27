import React, { useState } from 'react'
import style from './Footer.module.css'
import logoFooter1 from '../../assets/images/download.png'
import logoFooter2 from '../../assets/images/foo1.png'
import logoFooter3 from '../../assets/images/foo2.png'
import logoFooter4 from '../../assets/images/foo3.png'
import logoFooter5 from '../../assets/images/foo4.png'
import logoFooter6 from '../../assets/images/foo5.png'





export default function Footer() {



    
  return <>
  <div className='bg-[#b6c7aa] rounded-tr-2xl rounded-tl-2xl'>
    <h3 className=' font-medium text-xl py-5'>
    Get the FreshCart App

    </h3>
    <p className='text-slate-600'>
    We will send you a link, open it on your phone to download the app


    </p>
    <div className="sm:col-span-4">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-600">Email address</label>
          <div className="mt-2 md:flex">
            <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 md:w-3/4"/>
            <button className=' w-1/4 bg-[#3f582d] rounded-lg text-white'>Share App</button>
          </div>
        </div>
        <hr className='bg-slate-200 h-1 font-light my-4 w-full m-auto '/>
       <div className='md:flex '>
       <div className='md:flex  items-center w-1/2'>
        <p className='m-2 text-slate-600'>Payment Partners

        </p>
        <img src={logoFooter1} alt="" />
        <img src={logoFooter2} alt="" />

        <img src={logoFooter3} alt="" />
        <img src={logoFooter4} alt="" />

        </div>
        <div className='md:flex  items-center justify-end w-1/2'>
        <p className='m-2 text-slate-600'>Get deliveries with FreshCart



        </p>
        <img src={logoFooter5} alt="" className='w-20'/>
        <img src={logoFooter6} alt="" className='w-20'/>

        </div>
       </div>
       <hr className='bg-slate-200 h-1 font-light my-4 w-full m-auto '/>
       <p className='text-center'>All Copyright Reicive 2024

</p>

  


  </div>
    
  
  </>
}
