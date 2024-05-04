import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/Services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="mt-20">
        <h1 className="font-bold tracking-tight text-center sm:text-xl text-orange-500">Service</h1>
        <h2 className=" font-bold tracking-tight text-center sm:text-5xl ">
        Our Service Area
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">
        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
      </div>
      <div className="grid lg:gap-8 lg:grid-cols-3 grid-cols-1 md:grid-cols-2 lg:items-center my-20">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
