// import React from 'react';
import { ImLocation } from "react-icons/im";
import { MdPointOfSale } from "react-icons/md";
import { FaChartArea } from "react-icons/fa";
import { Link } from "react-router-dom";
const Cards = ({land}) => {
  const {estate_title,segment_name,description,price,status,area,location,facilities,image,id}=land; 


    return (
        <div className="card py-10 mt-5  w-96 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{estate_title}</h2>
    <h4 className="text-left text-green-900 font-bold">{segment_name}</h4>
   <div className="flex text-center gap-2">
   <ImLocation />
   <p className="text-left">{location}</p>
   </div>
  
    <p className="text-left text-sm">{description}</p>

<p><span className="font-bold">facilities:</span>{facilities.length}</p>
<ul className="text-center">
        {
           facilities.map((ing,idx) =><span className='flex items-center' key={idx}><a href="">{ing}</a></span> )
        }
    </ul>
    <hr />

<div className="flex gap-10 text-center">
  <div className="flex gap-2">
  <MdPointOfSale />
<p >{status}</p>
  </div>
  <div className="flex gap-2">
  <FaChartArea />
    <p>{area}</p>
  </div>
  <div>
    <p>{price}</p>
  </div>
</div>
    
    <div className="card-actions justify-center">
      <Link to={`/land/${id}`}>
      
      <button className="btn bg-green-800 text-white">View Property</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default Cards;