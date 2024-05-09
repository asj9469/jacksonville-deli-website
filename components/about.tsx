"use client"
import React, {useEffect} from 'react'
import {Loader} from "@googlemaps/js-api-loader"

export default function AboutPage () {
    useEffect(() => {
        (async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
            });
            const { Map } = await loader.importLibrary("maps");
    
            const map = new Map(document.getElementById("map") as HTMLElement, {
                center: { lat: 40.05004659684758, lng: -74.76340597054757 },
                zoom: 15,
            });
    
            // const marker = new google.maps.Marker({
            //     map: map, 
            //     position: { lat: 40.05004659684758, lng: -74.76340597054757 },
            // });
        })();
    },[]);

  return (
    <div className=''>
        <div className='flex flex-col items-center md:flex-row md:gap-20 lg:gap-32 md:mt-20'>
            <div className="border-8 border-[#deab12] rounded-xl shadow-lg m-auto mb-10 w-[85%] h-[20rem] md:m-0 md:ml-20 lg:ml-30 md:w-2/5 md:h-[25rem]" id="map"/>
            <div>
                <h1 className='font-serif text-2xl lg:text-3xl lg:mb-2 text-[#e9b824]'>Location:</h1>
                <p className='font-sans text-lg lg:text-xl mb-2'>1786 Jacksonville Jobstown Rd,</p>
                <p className='font-sans text-lg lg:text-xl'>Bordentown, NJ 08505</p>

                <h1 className='font-serif text-2xl lg:text-3xl mt-8 mb-2 text-[#e9b824]'>Hours of Operation:</h1>
                <p className='font-sans text-lg lg:text-xl mb-2'>Monday - Friday 6:30 AM – 6 PM</p>
                <p className='font-sans text-lg lg:text-xl mb-2'>Saturday 7:30 AM – 3:30 PM</p>
                <p className='font-sans text-lg lg:text-xl mb-2'>Sunday Closed</p>

                <h1 className='font-serif text-2xl lg:text-3xl mt-8 mb-2 text-[#e9b824]'>Phone:</h1>
                <p className='font-sans text-lg lg:text-xl mb-2'>(609) 261-5060</p>
            </div>
        </div>
        <div className='bg-black h-[5rem]'/>
    </div>
  )
}
