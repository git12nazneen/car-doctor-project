import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
    const {title, img, description,_id, price} = service
  return (
    <div className="">
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description.slice(0, 100)}</p>
          <div className="card-actions justify-end">
          <button className="btn  bg-neutral-content">Price{price}</button>
          <Link to={`checkout/${_id}`}>
            <button className="btn bg-orange-400">Book now <FaArrowAltCircleRight /></button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
