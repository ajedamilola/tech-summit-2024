"use client"
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Buttons = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return ( 
    <div className="lg:px-40 px-4 flex flex-col lg:flex-row justify-between items-center w-full gap-y-4 lg:gap-x-10 lg:my-10 my-5">
      <div className="w-full"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <Link
          href="/" //https://forms.gle/Q8e2Bn3SdWVrNfZw6
          className="rounded-lg flex justify-center items-center px-8 py-2 text-xl bg-[#1D3466] text-[#fff] hover:bg-blue-600 duration-300 w-full"
        >
          Exhibit
        </Link>
      </div>
      <div
      className="w-full"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
      >
        <Link
          href="/attend"
          className="rounded-lg flex justify-center items-center px-8 py-2 text-xl bg-[#1D3466] text-[#fff] hover:bg-blue-600 duration-300 w-full"
        >
          Attend
        </Link>
      </div>
      <div
      className="w-full"
      data-aos="fade-left"
      data-aos-easing="linear"
      data-aos-duration="1000"
      >
        <Link
          href="/sponsorship"
          className="rounded-lg flex justify-center items-center px-8 py-2 text-xl bg-[#1D3466] text-[#fff] hover:bg-blue-600 duration-300 w-full"
        >
        Sponsor
        </Link>
      </div>
      <div
      className="w-full"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
      >
        <Link
          href="/volunteer"
          className="rounded-lg flex justify-center items-center px-8 py-2 text-xl bg-[#1D3466] text-[#fff] hover:bg-blue-600 duration-300 w-full"
        >
          Get Involved
        </Link>
      </div>
    </div>
  );
};

export default Buttons;
