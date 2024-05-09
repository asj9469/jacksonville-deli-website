"use client";
import Link from "next/link"
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';


export default function Notice () {

    const [noticeClose, setNoticeClose] = useState(false);
    return (
        <>
        {!noticeClose ? (
            <div className="fixed mx-auto w-[100%] z-10 bg-[#ded9cf] bg-opacity-100">
            <div className="fixed bottom-0 w-[100%] z-10 bg-[#e9b824] bg-opacity-100">
            
            <div className="z-20 mt-3 mr-3 flex items-center font-extrabold text-[#000000] text-lg">
            <button
                onClick={() => setNoticeClose(true)}
                className="flex text-white hover:text-[#5c5c5c] ml-auto"
            >
                <CloseIcon style={{color:"black"}}/>
            </button>
            </div>
            
            <p className="mt-[-25px] font-extrabold text-center text-[#000000] text-lg">
                The following has been updated (5/9/24):
            </p>
            <p className="mb-3 mt-1 font-semibold text-center text-black text-lg">
                Hours of Operation - Saturday open time changed from 6:30 AM to 7:30 AM
            </p>
            {/* <p className="text-center text-[#000000] text-lg">
                [12/30/23 Update: Added work experience section]
            </p> */}

            </div>
            </div>
        ): <div/>
        }
        </>
    );
};