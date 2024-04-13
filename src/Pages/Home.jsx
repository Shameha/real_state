// import React from 'react';

// import { useLoaderData } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import Banner from "./Shared/Banner/Banner";
import Cards from "./Cards/Cards";


const Home = () => {
    const land = useLoaderData();

// console.log(land);
    return (
        <div>
            <Banner></Banner>
           <div className="mt-10 py-10">
           <h1 className="text-center font-extrabold text-6xl">Frams & lands</h1>
           <p className="text-center text-2xl">Here you can find our frams and lans</p>
           <div className="grid py-5 lg:px-10 px-3 text-center lg:grid-cols-3 grid-cols-1 md:col-span-2">
        
          
           {
                land.map(lands => <Cards
                key={lands.id}
                land={lands}></Cards>)
            }
           </div>
           </div>
           
        </div>
    );
};

export default Home;