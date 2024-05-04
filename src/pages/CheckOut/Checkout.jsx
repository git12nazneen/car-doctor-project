import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Checkout = () => {
  const service = useLoaderData();
  const {user} = useContext(AuthContext)
  const {title, _id, price, img} = service;
  console.log(service);

  const handelCheck = e =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking ={
      customerName: name,
      email,
      date,
      img,
      service:title,
      service_id:_id,
      price:price

    }
    console.log(booking);

    fetch('http://localhost:5000/bookings',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if(data.insertedId){
        alert('Service book success')
      }
    })

  }

  return (
      <div className="bg-gray-100 p-24">
        <h2 className="text-center font-bold my-5 text-3xl">Car service : {title}</h2>
          <form onSubmit={handelCheck} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" defaultValue={user?.displayName} name="name" placeholder="Name" className="input border border-black w-full" />
              <input type="date" name="date" className="input border border-black w-full" />
              <input type="text" defaultValue={user?.email} name="email" placeholder="email" className="input border border-black w-full" />
              <input type="text" defaultValue={price+'$'} placeholder="Due amount" className="input border border-black w-full" />
              <textarea name="" id="" cols="30" rows="10" className="border col-span-2 border-black"></textarea>
              <input className="bg-orange-500 btn-block btn my-3 " type="submit" value="Confirm" />
          </form>
      </div>
  );
};

export default Checkout;