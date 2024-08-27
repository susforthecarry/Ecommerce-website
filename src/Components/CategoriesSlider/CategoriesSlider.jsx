import axios from 'axios';
import React, { useEffect ,useState } from 'react';
import Slider from "react-slick";
import Loading from '../Loading/Loading';



export default function CategoriesSlider() {

    const [categoriesSlider, setCategoriesSlider] = useState([]);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 2,
        arrows:false,
        autoplay:true,
        autoplaySpeed: 1000,
      };
  
    async function getCategory() {
        let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
        setCategoriesSlider(data.data);
        
        
    }
    useEffect(()=>{
        getCategory();
    },[])


  return <>
{categoriesSlider.length > 0 ? (
  <>
    <h1 className='text-3xl m-6 font-semibold'>Shop Popular Categories</h1>
    <Slider {...settings}>
      {categoriesSlider.map((x ,_id ) => (
        <div key={x._id}>
          <img src={x.image} alt="" className='h-40 w-full'/>
          <h1 className='text-center'>{x.name}</h1>
        </div>
      ))}
    </Slider>
  </>
) : (
<Loading/>)}
  </>
}