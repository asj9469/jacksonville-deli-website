import React from "react";
import Navbar from "@/components/Navbar/Navbar.jsx"
import Image from 'next/image'
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/types/supabase";
import MenuList from "@/components/Menu/menu"

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });
  
  const {data: menuList, error} = await supabase
    .from('menu')
    .select()

  const {data: types} = await supabase
    .from("types")
    .select()

  const {data: extras} = await supabase
    .from("extras")
    .select()

  if(error){
    console.log("Error: There was an error fetching the data from Supabase")
  }

  return (
    <main className="h-screen overflow-y-scroll">
      <Navbar/>
      <div className='h-screen relative'>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-5xl font-serif z-10 md:text-6xl lg:text-7xl">
          Jacksonville Deli
          <p className="mt-5 text-3xl lg:text-4xl">(609) 261-5060</p>
        </div>
        <div className='flex justify-center overflow-hidden z-0'>
          <Image src={"/images/deli-no-text (1).jpg"} alt="" fill style={{objectFit:"cover"}}></Image>
        </div>
      </div>

      <section id="about">
       
      </section>

      <section id="menu" className="h-[85%]">
        <h1 className="text-5xl font-serif text-center mt-20 mb-8">Menu</h1>
        <MenuList types={types} extras={extras} menuList={menuList} />
      </section>
    </main>
    
  )
}
