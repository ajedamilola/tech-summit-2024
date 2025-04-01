"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaBlog,
  FaClock,
  FaDiscord,
  FaFacebook,
  FaFacebookF,
  FaFacebookMessenger,
  FaHome,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTelegram,
  FaTelegramPlane,
  FaTwitter,
  FaUser,
} from "react-icons/fa";

const All = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const socials = [
    {
      sm: <FaFacebookF className="text-lg " />,
      name: "face",
    },
    {
      sm: <FaTwitter className="text-lg " />,
      name: "twit",
    },
    {
      sm: <FaInstagram className="text-lg " />,
      name: "insta",
    },
  ];
  return (
    <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10 pt-4">
      <div
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className="h-72  relative group  w-auto aspect-square cursor-pointer mx-auto">
          <Image
            width={500}
            height={500}
            className="shadow-md w-full object-cover aspect-square"
            src="/cyn.jpg"
            alt=""
          />

          <div className=" flex justify-center items-center text-center  group-hover:flex absolute  p-2  bg-red-500 w-full  text-[#fff] bg-opacity-75 bottom-0 text-xl">
          CYNTHIA BLOCK 
          </div>
        </div>
        <p className="text-[#fff] text-center py-3 font-thin">
           MAYOR OF SASKATOON
        </p>
        <div className="flex justify-center items-center  px-0 l py-2 gap-x-4">
          {/* <Link
            href={"https://www.instagram.com/charlieclarkyxe/"}
            className="text-[#fff]"
          >
            <FaInstagram className="text-lg " />
          </Link> */}
          {/* <Link
            href={""}
            className="text-[#fff]"
          >
            <FaLinkedinIn className="text-lg " />
          </Link> */}
        </div>
      </div>

      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className="h-72 mx-auto relative group cursor-pointer  w-auto aspect-square">
          <Image
            width={500}
            height={500}
            className="shadow-md h-72 w-full object-cover"
            src="/mla.jpg"
            alt=""
          />

          <div className=" flex justify-center items-center text-center  group-hover:flex absolute  p-2  bg-red-500 w-full  text-[#fff] bg-opacity-75 bottom-0 text-xl">
            MLA JAMIE MARTENS 
          </div>
        </div>
        <p className="text-[#fff] text-center py-3 font-thin">
          PROVINCIAL SECRETARY-GOVT OF SASKATCHEWAN
        </p>
        <div className="flex justify-center items-center  px-0 l py-2 gap-x-4">
          {/* <Link
            href={"https://www.instagram.com/owojorigbenga/"}
            className="text-[#fff]"
          >
            <FaInstagram className="text-lg " />
          </Link> */}
          <Link
            href={
              " "
            }
            className="text-[#fff]"
          >
            {/* <FaLinkedinIn className="text-lg " /> */}
          </Link>
          {/* <Link
            href={"https://x.com/DrJohnOwojori?s=20"}
            className="text-[#fff]"
          >
            <FaTwitter className="text-lg " />
          </Link>  */}
        </div>
      </div>

      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className="h-72 mx-auto relative group cursor-pointer  w-auto aspect-square">
          <Image
            width={500}
            height={500}
            className="shadow-md h-72 w-full object-cover"
            src="/mc.jpg"
            alt=""
          />

          <div className=" flex justify-center items-center text-center  group-hover:flex absolute  p-2  bg-red-500 w-full  text-[#fff] bg-opacity-75 bottom-0 text-xl">
            CAMERON McBRIDE
          </div>
        </div>
        <p className="text-[#fff] text-center py-3 font-thin">
           CHIEF OF POLICE-SASKATOON POLICE SERVICE
        </p>
        <div className="flex justify-center items-center  px-0 l py-2 gap-x-4">
          {/* <Link
            href={"https://www.instagram.com/owojorigbenga/"}
            className="text-[#fff]"
          >
            <FaInstagram className="text-lg " />
          </Link> */}
          <Link
            href={""}
            className="text-[#fff]"
          >
            {/* <FaLinkedinIn className="text-lg " /> */}
          </Link>
          {/* <Link
            href={"https://x.com/DrJohnOwojori?s=20"}
            className="text-[#fff]"
          >
            <FaTwitter className="text-lg " />
          </Link>  */}
        </div>
      </div>


      <div data-aos="zoom-out-up" data-aos-duration="1000">
        <div className="h-72 mx-auto  w-auto aspect-square relative group cursor-pointer ">
          <Image
            width={500}
            height={500}
            className="shadow-md w-full object-cover aspect-square"
            src="/speaker1.jpg"
            alt=""
          />
          <div className=" flex justify-center items-center text-center  group-hover:flex absolute  p-2  bg-red-500 w-full  text-[#fff] bg-opacity-75 bottom-0 text-xl">
            JASON AEBIG <br />
          </div>
        </div>
        <p className="text-[#fff] text-center py-3 font-thin">
          CEO, SASKATOON CHAMBER OF COMMERCE
        </p>
        <div className="flex justify-center items-center  px-0 l py-2 gap-x-4">
          {/* <Link
            href={"https://www.instagram.com/jasonaebig/"}
            className="text-[#fff]"
          >
            <FaInstagram className="text-lg " />
          </Link> */}
          {/* <Link
            href={"http://linkedin.com/in/jason-aebig-02b7681b"}
            className="text-[#fff]"
          >
            <FaLinkedinIn className="text-lg " />
          </Link> */}
          {/* <Link href={"https://x.com/JasonAebig?s=20"} className="text-[#fff]">
            <FaTwitter className="text-lg " />
          </Link> */}
        </div>
      </div>

            
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className="h-72 mx-auto relative group cursor-pointer  w-auto aspect-square">
          <Image
            width={500}
            height={500}
            className="shadow-md h-72 w-full object-cover"
            src="/now3.jpg"
            alt=""
          />

          <div className=" flex justify-center items-center text-center  group-hover:flex absolute  p-2  bg-red-500 w-full  text-[#fff] bg-opacity-75 bottom-0 text-xl">
             NOWSHAD ALI
          </div>
        </div>
        <p className="text-[#fff] text-center py-3 font-thin">
            CEO-ON PURPOSE LEADERSHIP INC
        </p>
        <div className="flex justify-center items-center  px-0 l py-2 gap-x-4">
          {/* <Link
            href={"https://www.instagram.com/owojorigbenga/"}
            className="text-[#fff]"
          >
            <FaInstagram className="text-lg " />
          </Link> */}
          <Link
            href={
              " "
            }
            className="text-[#fff]"
          >
            {/* <FaLinkedinIn className="text-lg " /> */}
          </Link>
          {/* <Link
            href={"https://x.com/DrJohnOwojori?s=20"}
            className="text-[#fff]"
          >
            <FaTwitter className="text-lg " />
          </Link>  */}
        </div>
      </div>

      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className="h-72 mx-auto relative group cursor-pointer  w-auto aspect-square">
          <Image
            width={500}
            height={500}
            className="shadow-md h-72 w-full object-cover"
            src="/fat.jpg"
            alt=""
          />

          <div className=" flex justify-center items-center text-center  group-hover:flex absolute  p-2  bg-red-500 w-full  text-[#fff] bg-opacity-75 bottom-0 text-xl">
            TOSIN FETUGA
          </div>
        </div>
        <p className="text-[#fff] text-center py-3 font-thin">
         PARTNER - NOBLELINKS CONSULTING
        </p>
        <div className="flex justify-center items-center  px-0 l py-2 gap-x-4">
          {/* <Link
            href={"https://www.instagram.com/owojorigbenga/"}
            className="text-[#fff]"
          >
            <FaInstagram className="text-lg " />
          </Link> */}
          <Link
            href={
              " "
            }
            className="text-[#fff]"
          >
            {/* <FaLinkedinIn className="text-lg " /> */}
          </Link>
          {/* <Link
            href={"https://x.com/DrJohnOwojori?s=20"}
            className="text-[#fff]"
          >
            <FaTwitter className="text-lg " />
          </Link>  */}
        </div>
      </div>
      
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className="h-72 mx-auto relative group cursor-pointer  w-auto aspect-square">
          <Image
            width={500}
            height={500}
            className="shadow-md h-72 w-full object-cover"
            src="/fat2.jpg"
            alt=""
          />

          <div className=" flex justify-center items-center text-center  group-hover:flex absolute  p-2  bg-red-500 w-full  text-[#fff] bg-opacity-75 bottom-0 text-xl">
            DR. JOHN OWOJORI 
          </div>
        </div>
        <p className="text-[#fff] text-center py-3 font-thin">
           PARTNER - NOBLELINKS CONSULTING
        </p>
        <div className="flex justify-center items-center  px-0 l py-2 gap-x-4">
          {/* <Link
            href={"https://www.instagram.com/owojorigbenga/"}
            className="text-[#fff]"
          >
            <FaInstagram className="text-lg " />
          </Link> */}
          <Link
            href={
              " "
            }
            className="text-[#fff]"
          >
            {/* <FaLinkedinIn className="text-lg " /> */}
          </Link>
          {/* <Link
            href={"https://x.com/DrJohnOwojori?s=20"}
            className="text-[#fff]"
          >
            <FaTwitter className="text-lg " />
          </Link>  */}
        </div>
      </div>



      {/* <div>
        <div className="h-72  relative group cursor-pointer ">
          <Image
            width={500}
            height={500}
            className="shadow-md w-full h-72 object-cover"
            src="/speaker-three.jpg"
            alt=""
          />

          <div className=" flex justify-center items-center text-center  group-hover:flex absolute  p-2  bg-red-500 w-full  text-[#fff] bg-opacity-75 bottom-0 text-xl">
            John Frank <br />
            ( Speaker)
          </div>
        </div>
        <p className="text-[#fff] text-center py-3 font-thin">
           He'll share with you
          his secret of success. Don't miss this!
        </p>
        <div className="flex justify-center items-center  px-0 l py-2 gap-x-4">
          {socials.map((social) => (
            <span
              key={social.url}
              onClick={() => {
                setIsActive(false);
                // openModal();
              }}
              className=" p-2 text-lg flex justify-center items-center "
            >
              <Link href={social.url} className="text-[#fff]">
                {social.sm}
              </Link>
            </span>
          ))}
        </div>
      </div> */}
      {/* <div>
        <div className="h-72  relative group cursor-pointer ">
          <Image
            width={500}
            height={500}
            className="shadow-md w-full h-72 object-cover"
            src="/speaker-two.jpg"
            alt=""
          />

          <div className=" flex justify-center items-center text-center  group-hover:flex absolute  p-2  bg-red-500 w-full  text-[#fff] bg-opacity-75 bottom-0 text-xl">
            John Doe 
          </div>
        </div>
        <p className="text-[#fff] text-center py-3 font-thin">
          Ben is one of the SEO & CO-founders of Samsung. He'll share with you
          his secret of success. Don't miss this!
        </p>
        <div className="flex justify-center items-center  px-0 l py-2 gap-x-4">
          {socials.map((social) => (
            <span
              key={social.url}
              onClick={() => {
                setIsActive(false);
                // openModal();
              }}
              className=" p-2 text-lg flex justify-center items-center "
            >
              <Link href={social.url} className="text-[#fff]">
                {social.sm}
              </Link>
            </span>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default All;
