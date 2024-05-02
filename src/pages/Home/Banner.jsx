import React from 'react';
import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg'
import img6 from '../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full rounded-2xl h-[600px]">
  <div id="slide1" className="carousel-item relative w-full ">
    <img src={img1} className="w-full" />
    <div className="absolute w-full flex items-center h-full  left-0 top-0 bg-gradient-to-tr from-[#151515] to-[rgba(21, 21, 21,0)]">
        <div className='space-y-4 pl-20'>
            <div className='w-96 space-y-4'  >
                <h1 className='text-white text-3xl font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus .</h1>
            </div>
            <div className='flex'>
            <button className="btn mr-5 btn-outline btn-secondary">Discover here</button>
            <button className="btn btn-active btn-secondary">Latest project</button>
            </div>
        </div>
        
    </div> 
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn bg-orange-500 opacity-60 btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn opacity-85 btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute w-full flex items-center h-full  left-0 top-0 bg-gradient-to-tr from-[#151515] to-[rgba(21, 21, 21,0)]">
        <div className='space-y-4 pl-20'>
            <div className='w-96 space-y-4'  >
                <h1 className='text-white text-3xl font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus .</h1>
            </div>
            <div className='flex'>
            <button className="btn mr-5 btn-outline btn-secondary">Discover here</button>
            <button className="btn btn-active btn-secondary">Latest project</button>
            </div>
        </div>
        
    </div> 
    <div className="absolute flex  justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn  bg-orange-500 opacity-60 btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn opacity-85  btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute w-full flex items-center h-full  left-0 top-0 bg-gradient-to-tr from-[#151515] to-[rgba(21, 21, 21,0)]">
        <div className='space-y-4 pl-20'>
            <div className='w-96 space-y-4'  >
                <h1 className='text-white text-3xl font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus .</h1>
            </div>
            <div className='flex'>
            <button className="btn mr-5 btn-outline btn-secondary">Discover here</button>
            <button className="btn btn-active btn-secondary">Latest project</button>
            </div>
        </div>
        
    </div> 
    <div className="absolute flex  justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn bg-orange-500 opacity-60 btn-circle mr-5">❮</a> 
      <a href="#slide4" className="btn opacity-85  btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full ">
    <img src={img4} className="w-full" />
    <div className="absolute w-full flex items-center h-full  left-0 top-0 bg-gradient-to-tr from-[#151515] to-[rgba(21, 21, 21,0)]">
        <div className='space-y-4 pl-20'>
            <div className='w-96 space-y-4'  >
                <h1 className='text-white text-3xl font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus .</h1>
            </div>
            <div className='flex'>
            <button className="btn mr-5 btn-outline btn-secondary">Discover here</button>
            <button className="btn btn-active btn-secondary">Latest project</button>
            </div>
        </div>
        
    </div> 
    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn  bg-orange-500 opacity-60 btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn opacity-85  btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;