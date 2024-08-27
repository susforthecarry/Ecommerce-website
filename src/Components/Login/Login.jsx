import React, { useContext, useState } from 'react'
import style from './Login.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup';  
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';


export default function Login() {
  // this const i made it to use it in html code down 
  let [errormessage, setErrormessage] = useState(null);
  // this to useNavigate hook for moving into another page 
  let navigate = useNavigate();
  // this const for loading icon 
  const [loading, setLoading] = useState(false)

let {setUserData} =   useContext(UserContext)



 async function login(x){
  // so i make try and catch to first make try to make user go to another page if he already signed up on the other hand catch to actually catch error and display error message 
  try{
    setLoading(true)

    let {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,x);
    localStorage.setItem('userToken' , data.token)
    navigate('/home');
    // to set user token in local storage to use it when i used logout 
    setUserData(data.token);


  } 
  catch(error){
    setLoading(false) 

    // this for message if i have error 
    errormessage = error.response.data.message;
    setErrormessage(errormessage);

    

  }
  
   
    
  }

  // this for yup validation 

let validationSchema = Yup.object().shape({

  email:Yup.string().email('Email invalid ').required('Email is required'),
  password:Yup.string().matches(/^[A-Z]\w{5,11}$/,'Password should be ex:(Ahmed1233)').required('Password is required ')

})

  

  let formik = useFormik({
    // to make initial values 
    initialValues:{
      email:'',
      password:''
    },
    // to go validation first 
    validationSchema:validationSchema
    // to finally submit 
    ,onSubmit:login
  })
  


  

 



  return <>
  
<div className='md:h-screen bg-[#e7d4b5b1]'>
  
<form className="md:w-1/2 mx-auto py-8" onSubmit={formik.handleSubmit}>
  <div className="relative z-0 w-full mb-5 group py-4">
      <input type="email" name="email" id="floating_email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-emerald-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-500 peer" placeholder=" "  />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  {/* for alert  */}
  {formik.errors.email && formik.touched.email && <div className="md:p-4 md:mb-4 p-0 m-0  text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    {formik.errors.email}
    </div>}
 


  <div className=" relative z-0 w-full mb-5 group py-4">
      <input type="password" name="password" id="floating_password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-emerald-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-500 peer" placeholder=" "  />
      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password </label>
  </div>
   {/* for alert  */}
   {formik.errors.password && formik.touched.password && <div className="md:p-4 md:mb-4 p-0 m-0  text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    {formik.errors.password}
    </div>}




{loading?<button className=' bg-[#5f8643] p-3 rounded-lg text-white my-3' type='button'>
    <i className="fa-solid fa-spinner fa-spin"></i>
    </button>:    <button className=' bg-[#5f8643] p-3 rounded-lg text-white my-3' type='submit'>Submit</button>
  }
  
    




  </form>
{errormessage &&   <div className="md:p-4 md:mb-4 p-0 m-0 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"   role="alert">
    {errormessage}
    </div>}
    

</div>



   

  </>
}
