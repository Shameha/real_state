// import React from 'react';
import { GoStarFill } from "react-icons/go";

import { useLoaderData, useParams } from "react-router-dom";

const Card = () => {
    const land = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const lands = land.find(lands => lands.id === idInt);
    console.log(lands);
    return (
        <div>
            <h1 className="text-center font-semibold text-5xl text-green-950">{lands.segment_name}</h1>
            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={lands.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl font-bold text-green-900">{lands.estate_title}</h1>
            <p className="py-6">{lands.description}</p>
            <p><span className="font-bold">Details:</span>
            Discover a diverse selection of land estates tailored to your preferences and aspirations. Our offerings span across vineyards, ranches, farms, and forests, each presenting a unique opportunity for investment and lifestyle enhancement. Picture yourself amidst the lush vineyards of California's wine country, indulging in premium grape varieties and scenic views. Alternatively, immerse yourself in the rugged beauty of Colorado's Rocky Mountains with vast pastures and luxurious ranch amenities. For those seeking the tranquility of rural living, explore the charm of Iowa's rolling hills and fertile farmsteads. Lastly, embrace the serenity of Oregon's Pacific Northwest forests, complete with secluded cabins and picturesque hiking trails. Whether you dream of cultivating crops, raising livestock, or simply enjoying nature's beauty, our curated collection of land estates offers something for everyone.
            </p>
            <hr />
           <div className="flex gap-10 mt-4">
            <div className="flex gap-2">
            <GoStarFill />
           <p>{lands.status}</p>
            </div>
            <div>

           <p>{lands.area}</p>
            </div>
           <p>{lands.price}</p>

           </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Card;