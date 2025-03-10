"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
 
const Deets = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="pricing-table-2 bg-[#fff] py-2">
        <div className=" mx-auto">
          <div className="flex justify-between flex-col lg:flex-row items-start lg:gap-x-">
            <div className=" mx-auto">
              <h1 className="text-4xl md:text-5xl text-center font-semibold text-black mb-4 md:mb-6">
                Objectives
              </h1>

              <p className="text-gray-500 text-center text-lg">
              The 2nd Saskatoon Black Business Expo aims to celebrate, empower, and elevate Black entrepreneurs and businesses by providing a platform to showcase their products and services, connect with potential clients and collaborators, and access vital resources for growth. The Expo fosters an inclusive environment where participants can gain knowledge, build networks, and explore opportunities to advance their business goals while strengthening the economic impact of Black-owned businesses within the community. 
              </p>
              {/* <button className="bg-netYellow lg:w-60 mt-5 flex justify-center p-2 font-semibold">
                Learn More
              </button> */}
            </div>
          </div>
          <div className="pricing-plans lg:flex lg:-mx-4 mt-6 md:mt-12">
          <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6 ">
              <div className='pricing-plan border-t-4 border-solid border-white  text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300 bg-blend-multiply bg-blue-500 bg-opacity-75 bg-cover bg- object-cover  bg-[url("/con-two.jpg")] bg-no-repeat '>
                <div className="p-6 md:py-8">
                  <h4 className="font-medium text-[#fff] leading-tight text-2xl mb-2">
                  Experience black owned businesses
                  </h4>
                </div>
                {/* <div className="pricing-amount bg-purple-200/50 text-[#fff] p-6 transition-colors duration-300">
                  <div className="">Fill our form</div>
                </div> */}
                <div className="p-6">
                  <ul className="leading-loose text-[#fff]">
                    {/* <li</li> */}
                    {/* <li>Show your brand</li>
                    <li>Find out more</li> */}
                  </ul>
                  <div className="mt-6 py-4 flex justify-center">
                    <Link
                      href="/attend"
                      className="text-white  flex justify-center items-center py-2 px-4 bg-orange-500 lg:w-auto lg:h-[40px] text-sm lg:text-lg"
                    >
                      Attend
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
               data-aos="fade-up"
               data-aos-easing="linear"
               data-aos-duration="1000"
              className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6 "
            >
              <div className='pricing-plan border-t-4 border-solid border-white  text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300 bg-blend-multiply bg-red-500 bg-opacity-75 bg-cover bg- object-cover  bg-[url("/conf.jpg")] bg-no-repeat '>
                <div className="p-6 md:py-8">
                  <h4 className="font-medium text-[#fff] leading-tight text-2xl mb-2">
                  Showcase your product
                  </h4>
                </div>
                {/* <div className="pricing-amount bg-purple-200/50 text-[#fff] p-6 transition-colors duration-300">
                  <div className="">Fill our form</div>
                </div> */}
                <div className="py-4"></div>

                <div className="p-6">
                  <ul className="leading-loose text-[#fff]">
                    {/* <li></li> */}
                    {/* <li>Exposure</li>
                    <li>Find out more</li> */}
                  </ul>
                  <div className="mt-6 py-4 flex justify-center">
                    <Link
                      href="/"
                      className="text-white  flex justify-center items-center py-2 px-4 bg-orange-500  lg:w-auto lg:h-[40px] text-sm lg:text-lg"
                    >
                      Exhibit
                    </Link>
                  </div>
                </div>
              </div>
            </div>

           

            <div
               data-aos="fade-down"
               data-aos-easing="linear"
               data-aos-duration="1000"
              className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6 "
            >
              <div className='pricing-plan border-t-4 border-solid border-white  text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300 bg-blend-multiply bg-green-500 bg-opacity-75 bg-cover bg- object-cover  bg-[url("/con-three.jpg")] bg-no-repeat '>
                <div className="p-6 md:py-8">
                  <h4 className="font-medium text-[#fff] leading-tight text-2xl mb-2">
                  Get involved here
                  </h4>
                </div>
                {/* <div className="pricing-amount bg-purple-200/50 text-[#fff] p-6 transition-colors duration-300">
                  <div className="">Fill our form</div>
                </div> */}
                <div className="py-4"></div>
                <div className="p-6">
                  <ul className="leading-loose text-[#fff]">
                    {/* <li>Get involved here </li> */}
                    {/* <li>Brand Exposure</li>
                    <li>Find out more</li> */}
                  </ul>
                  <div className="mt-6 py-4 flex justify-center">
                    <Link
                      href="/volunteer"
                      className="text-white  flex justify-center items-center py-2 px-4 bg-orange-500  lg:w-auto lg:h-[40px] text-sm lg:text-lg"
                    >
                      Volunteer
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deets;
