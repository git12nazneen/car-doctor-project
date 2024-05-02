import React from 'react';
import parts from '../../assets/images/about_us/parts.jpg'
import person from '../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className='my-10'>
            <div className="hero bg-white">
  <div className="hero-content flex-col lg:flex-row">
   <div className='lg:w-1/2 relative'>
   <img src={person} className="max-w-sm rounded-lg shadow-2xl" />
   <img src={parts} className="max-w-sm rounded-lg shadow-2xl border-8 border-white right-5 absolute top-1/2" />
   </div>
    <div className='lg:w-1/2 space-y-3'>
        <h3 className='text-orange-500 font-bold'>About us</h3>
      <h1 className="text-5xl font-bold">We are qualified <br /> & of experience in <br />this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn bg-orange-500">Get More info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;