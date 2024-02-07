"use client"
import React from 'react'


export default function MenuList ({types, extras, menuList}:any) {

  return (
      <div>
        {types.sort((a: any, b: any) => a.id - b.id).map((type:any) => 
          <div key={type.id}>
            <h1 className="flex justify-center text-3xl text-center font-serif font-bold mb-2 mt-10 lg:px-8 text-[#e9b824]">{type.name}</h1>
            <p className="flex justify-center text-center text-sm mx-6 lg:text-lg font-serif lg:text-left mb-8 lg:ml-20 lg:px-8">{type.note}</p>
            <hr className='flex mx-auto mb-4 w-5/6 color-[#6e7072]'/>

           <div className='lg:flex lg:flex-row'> 
              <div className=" bg-black mt-4 mx-auto w-9/12 lg:w-7/12" id="menuList">
                {menuList.filter((menu: any) => menu.type == type.name).sort((a: any, b: any) => a.id - b.id).map((menu: any) => 
                  <div key={menu.id} className="flex lg:justify-center align-middle">
                    <div className="font-serif overflow-hidden shadow-lg hover:bg-[#212121] sm:rounded-md w-full lg:w-4/6">
                      <div className="flex pt-3 justify-between lg:p-2 lg:pl-0">
                          <p className="text-xs md:text-base lg:text-lg lg:pl-0 lg:pr-3">{menu.name}</p>
                          <span className='hidden lg:block'>⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅</span>
                          <span className='lg:hidden'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                          {menu.price_large != null
                          ? (<p className='text-xs md:text-base lg:text-lg lg:pl-3'>${menu.price_small} (S)&nbsp; ${menu.price_large} (L)</p>) 
                          : (<p className='text-xs md:text-base lg:text-lg lg:pl-3'> ${menu.price_small}</p>
                          )}

                          {menu.with_meat != null
                          ? (<p className='text-xs md:text-base lg:text-lg lg:pl-1'>(S) &nbsp; ${menu.with_meat} (w/ Meat)</p>)
                          : (null)}
                          
                      </div>
                      {menu.note
                        ? (
                          <p className='text-xs md:text-sm lg:text-base lg:pl-5 text-gray-400'>{menu.note}</p>
                        )
                        :(null)}
                    </div>
                  </div>
                  )}
              </div>
              
              
              {type.name != "Side Order" && type.name != "Special"
              ? (
                <div className="font-serif m-auto mt-5 lg:m-5 lg:mr-36 overflow-hidden shadow-lg border border-[#6e7072] rounded-lg w-5/6 md:w-1/2">
                  <div className='text-md ml-5 font-serif mt-4 lg:text-xl font-bold text-[#e9b824]'>Extras: </div>
                    <div className='mx-5 mt-6'>
                      {extras.filter((extra: any) => extra.type == type.name).sort((a: any, b: any) => a.id - b.id).map((extra: any) =>
                        <div key={extra.id} className='text-xs md:text-sm lg:text-base font-serif pb-3 text-[#ACADAF]'>{extra.name}: {extra.price_small} {extra.price_large}</div>
                      )}
                    </div>
                </div>
              ): (null
              )}
            </div>  
          </div>
        )}
        {/* <div className='bg-black h-[5rem]'/> */}
      </div>
  )
}
