"use client";
import React, { useState, useEffect, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import { AiFillMail, AiOutlineClose, AiOutlineLogout } from "react-icons/ai";

import styles from "../../styles/Navigation.module.css";
import {
  FaBlog,
  FaClock,
  FaDiscord,
  FaFacebook,
  FaFacebookF,
  FaFacebookMessenger,
  FaHome,
  FaInstagram,
  FaPhoneAlt,
  FaTelegram,
  FaTelegramPlane,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { BiDonateHeart, BiUserVoice } from "react-icons/bi";
import { BsFillDoorClosedFill, BsFillQuestionCircleFill } from "react-icons/bs";

const links = [
  { href: "/", label: "Home", id: 1 },

  { href: "/attend", label: "Attend", id: 4 },

  { href: "/exhibitor", label: "Exhibit", id: 3 },

  { href: "/volunteer", label: "Volunteer ", id: 5 },

  { href: "/", label: "Pitch"},
  
  { href: "/feedback", label: "Feedback", id: 2 },

  { href: "/contact", label: "Contact", id: 3 },
 
];

const socials = [
  {
    sm: <FaFacebookF className="text-lg " />,
    url: "https://facebook.com/Saskblackbusiness",
  },
  {
    sm: <FaTwitter className="text-lg " />,
    url: "https://twitter.com/Saskblackbusiness",
  },
  {
    sm: <FaInstagram className="text-lg " />,
    url: "https://instagram.com/Saskblackbusiness",
  },
  // { sm: <FaDiscord className="text-lg " />, url: "Services" },
  // { sm: <FaTelegramPlane className="text-lg " />, url: "Contact Us" },
];

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [nav, setNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  const handleScroll = (id) => {
    const yOffset = -80; // Adjust this value as per your need
    const element = document.getElementById(id);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    setNav(true); // Set nav to true initially to make the navbar white
  }, []);

  const handleHamburger = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      //access to window
      const changeBackground = () => {
        if (window.scrollY >= 95) {
          setNav(true);
        } else {
          setNav(false);
        }
      };

      window.addEventListener("scroll", changeBackground);
    }
  }, []);

  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/not-found") return null;

  return (
    <nav
      className={
        nav
          ? `${styles.nav}  ${styles.fixedTop} top-0  z-[1000] shadow-[0_3px_10px_rgb(0,0,0,0.2)]  backdrop-blur-sm bg-[#fff]`
          : `${styles.nav} ${styles.fixedTop} top-0  z-[1000] shadow-[0_3px_10px_rgb(0,0,0,0.2)]   backdrop-blur-sm bg-[#fff] `
      }
    >
      <div className="lg:max-w-[1440px] w-full px-4 py-6 mx-auto ">
        {/* {!nav && (
          <div className="p-2 hidden lg:flex flex-col lg:flex-row lg:justify-between gap-2 items-center lg:w-full">
            <div className="flex  items-center   gap-x-2">
              {socials.map((social) => (
                <span
                  key={social.url}
                
                  className=" text-lg flex justify-center items-center "
                >
                  <Link href={social.url} className="text-dreamWhite">
                    {social.sm}
                  </Link>
                </span>
              ))}
            </div>
            <div className="flex lg:flex-row flex-col justify-between gap-x-4 items-center text-white text-sm">
              <span className="flex gap-x-2 items-center ">
                <AiFillMail className="text-white" />
                <p>dreamcarescltd@gmail.com</p>
              </span>
              <span className="flex gap-x-2 items-center">
                <FaPhoneAlt className="text-white" />
                <a
                  href="tel:12368857226"
                  className="  text-netWhite text-lg lg:text-left text-center"
                >
                  1-236-788-2169
                </a>
              </span>
              <span className="flex gap-x-2 items-center">
                <FaClock className="text-white" />
                <p>Mon-Fri 9:00 - 17:00</p>
              </span>
            </div>
          </div>
        )} */}
        <div className="flex justify-between">
          <div className="flex lg:justify-between lg:items-center lg:w-full">
            <div className="flex justify-start">
              <Link href={"/"}>
                <Image
                  className="w-20 h-10  object-cover"
                  src="/logo1.png"
                  width={100}
                  height={50}
                  alt="SASK Logo"
                />
                {/* <p className="font-black text-lg">Sask Black Business</p> */}
              </Link>
            </div>

            {/* <div className="p-2 hidden lg:flex flex-col lg:flex-row justify-center w-20 gap-2 items-center ">
              <div className="flex  items-center   gap-x-4">
                {socials.map((social) => (
                  <span
                    key={social.url}
                    className=" text-lg flex justify-center items-center "
                  >
                    <Link
                      href={social.url}
                      target="_blank"
                      className="text-dreamWhite"
                    >
                      {social.sm}
                    </Link>
                  </span>
                ))}
              </div>
            </div> */}

            <div className="hidden lg:flex justify-end   lg:px-7">
              {" "}
              {/* lg:px-48 */}
              <ul className="text-black cursor-pointer lg:flex lg:justify-center items-center">
                {links.map((link) => (
                  <li key={link.id} className="lg:text-lg  font-smibold">
                    <Link
                      href={link.href}
                      className="block text-lg px-5 font-semibold   duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <div className="grow"></div>
                {/* {user ? (
                  <button
                    onClick={() => logout()}
                    className="px-5 py-1 rounded-lg bg-netBlue text-netWhite border-netBlue border-[2px] hover:text-white hover:bg-netBlue duration-150"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="px-5 py-1 rounded-lg bg-netBlue   text-netWhite hover:bg-netBlue duration-150"
                  >
                    Login
                  </Link>
                )} */}
              </ul>
            </div>
          </div>

          {/* mobile */}
          <div className="flex items-center pr-3  ">
            <div
              className="flex gap-x-2 items-center justify-end flex-end"

              // }}
            >
              {/*Toggle locations */}

              <span onClick={handleHamburger} className="lg:hidden ">
                <svg
                  className="w-10"
                  width="55"
                  height="34"
                  viewBox="0 0 55 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.93457"
                    y="0.115662"
                    width="53.7037"
                    height="7.76871"
                    rx="3.88435"
                    fill="black"
                  />
                  <rect
                    x="0.93457"
                    y="25.338"
                    width="53.7037"
                    height="7.76871"
                    rx="3.88435"
                    fill="black"
                  />
                  <rect
                    x="0.93457"
                    y="12.7268"
                    width="35.4283"
                    height="7.76871"
                    rx="3.88435"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- mobile menu --> */}
      {isActive && (
        <aside
          id="sidebar"
          className={`bg-[#fff]  text-red md:w-64 w-4/5 bg-dreamWhite space-y-6 h-screen pt-6 px-0 flex-col absolute inset-y-0 left-0 transform lg:relative lg:translate-x-0 transition   flex lg:flex-col lg:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation z-[2000]  ease-in-out duration-300 lg:hidden ${
            isActive ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <div
            className="flex flex-col"
            data-dev-hint="optional div for having an extra footer navigation"
          >
            <div className="flex justify-between items-center pb-10 px-2">
              <Link href="/">
              <Image
                  className="w-20 h-10  object-cover"
                  src="/logo.png"
                  width={100}
                  height={50}
                  alt="SASK Logo"
                />
              </Link>
              <span
                onClick={() => {
                  setIsActive(false);
                }}
              >
                <AiOutlineClose className="text-[#4B64E1]  text-xl" />
              </span>
            </div>

            <nav className="flex flex-col ">
              {links.map((link) => (
                <Link
                  href={link.href}
                  onClick={() => {
                    setIsActive(false);
                  }}
                  className=" transition border-t border-gray-300 py-6 block text-sm w-20 px-2 w-full  duration-300"
                >
                  <p className="text-xl text-black font-medium">{link.label}</p>
                </Link>
              ))}
              {/* {user ? (
                <button
                  onClick={logout()}
                  className="px-5 py-1 flex justify-center rounded-lg bg-netBlue text-netWhite border-netBlue border-[2px] hover:text-white hover:bg-netBlue duration-150"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  className="px-5 py-1 flex justify-center rounded-lg bg-netBlue text-netWhite border-[2px] hover:text-white hover:bg-netBlue duration-150"
                >
                  Login
                </Link>
              )} */}
            </nav>
          </div>

          <div className="flex  items-center  px-0 l py-2 gap-x-4">
            {socials.map((social) => (
              <span
                key={social.url}
                onClick={() => {
                  setIsActive(false);
                  // openModal();
                }}
                className="border-gray-400 border p-2 text-lg flex justify-center items-center "
              >
                <Link href={social.url} className="text-dreamBlue">
                  {social.sm}
                </Link>
              </span>
            ))}
          </div>
        </aside>
      )}
    </nav>
  );
};

export default Header;
