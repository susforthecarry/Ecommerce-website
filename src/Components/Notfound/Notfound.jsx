import React, { useState } from 'react'
import style from './Notfound.module.css'
import notfound from '../../assets/images/error.svg'

export default function Notfound() {



    
  return <>
  <div className='md:h-screen bg-[#e7d4b5b1]'>
    <div className='flex justify-center  translate-y-1/2'>
      <img src={notfound} alt="" />
    </div>

  </div>
    
  
  </>
}
