import React from "react";
import Navbar from "@/components/Navbar/Navbar.jsx"
import Image from 'next/image'
import MenuList from "@/components/menu"
import AboutPage from "@/components/about"
import Notice from "@/components/notice"

export default function Home() {
  
  
  
  return (
    <>
    <Notice/>
    <main className="h-screen">
      <Navbar/>
      <section id="main" className='h-screen relative'>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-5xl font-serif z-10 md:text-6xl lg:text-7xl">
          Jacksonville Deli
          <p className="mt-5 text-3xl lg:text-4xl">(609) 261-5060</p>
        </div>
        <div className='flex justify-center overflow-hidden z-0'>
          <Image src={"/images/deli-no-text (1).jpg"} alt="" fill style={{objectFit:"cover"}}></Image>
        </div>
      </section>


      <section id="menu">
        <h1 className="text-5xl font-serif text-center mt-20 mb-8">Menu</h1>
        <MenuList/>
      </section>

      <section id="about">
        <h1 className="text-5xl font-serif text-center mt-28 mb-8">About</h1>
       <AboutPage></AboutPage>
      </section>
      
    </main>
    </>
  )
}
