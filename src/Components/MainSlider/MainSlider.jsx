import React from 'react';
import Slider from "react-slick";
import Slider1 from '../../assets/images/Slider1.jpeg'
import Slider2 from '../../assets/images/Slider2.jpeg'
import Slider3 from '../../assets/images/Slider3.jpeg'
import Slider4 from '../../assets/images/Slider4.jpeg'
import Slider5 from '../../assets/images/S1.jpg'
import Slider6 from '../../assets/images/S5.webp'






export default function MainSlider() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:1000,

  };
  return <>
  <h1 className='text-3xl font-semibold m-3'>Main Slider</h1>
  <div className='flex flex-wrap'>
  <div className='w-3/4'>

<Slider {...settings}>
<img src={Slider1} alt="" className='w-50 h-[525px]' />
  <img src={Slider5} alt="" className='w-50 h-[525px]'/>
  <img src={Slider6} alt="" className='w-50 h-[525px]'/>



</Slider>
</div>
<div className='w-1/4'>
<div className='flex flex-wrap'>
<img src={Slider4} alt="" /></div>
<img src={Slider3} alt="" /></div>


  </div>



  
  
  
  </>
}
