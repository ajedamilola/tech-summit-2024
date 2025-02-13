"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Exhibitor = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    url: "",
    boothSize: null,
    description: "",
    additional: "",
  });
  function handleChange(e) {
    const former = JSON.parse(JSON.stringify(formData));
    former[e.target.name] = e.target.value;
    setFormData(former);
  }
  return (
    <div className="mt-32 lg:mt-40 lg:mb-20">
      <div className=" flex items-center justify-center gap-x-3 text-2xl md:text-3xl text-center font-semibold text-black mb-4 md:mb-6">
        <Image
          className="w-auto h-auto  object-cover"
          src="/logo.png"
          width={100}
          height={50}
          alt="SASK Logo"
        />{" "}
        <h1>- Exhibitor Registration Form</h1>
      </div>
      <form
        className="max-w-xl mx-auto"
        method="post"
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            setLoading(true);
            const { data, err } = await axios.post("/api/exhibitor", formData);
            if (!err) {
              toast(
                "Exhibitor Registration form sent successfully and will be reviewed",
                {
                  theme: "colored",
                  type: "success",
                }
              );
              setFormData({
                name: "",
                email: "",
                phone: "",
                organisation: "",
                hearingMethod: null,
                regType: null,
                notes: "",
              });
              window.location = "https://buy.stripe.com/5kA7tXc7h4H40bSfYY";
            } else {
              toast(err, {
                theme: "colored",
                type: "warning",
              });
            }
          } catch (error) {
            console.log(error);
            if (error.response && error.response.status != "404") {
              return toast(error.response?.data?.err, {
                theme: "colored",
                type: "error",
              });
            }
            toast(
              "Unable to connect to servers check your internet and try again",
              {
                theme: "colored",
                type: "error",
              }
            );
          } finally {
            setLoading(false);
          }
        }}
      >
        <div className="grid md:grid-cols-1 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="organization"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={handleChange}
              value={formData.organization}
            />
            <label
              for="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Company/Organization Name:
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-1 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={handleChange}
              value={formData.name}
            />
            <label
              for="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Contact Person:
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={handleChange}
            value={formData.email}
          />
          <label
            for="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="phone"
            id="phone"
            className="block appearance-none py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={handleChange}
            value={formData.phone}
          />
          <label
            for="phone"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone Number
          </label>
        </div>
        <div className="grid md:grid-cols-1 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="url"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={handleChange}
              value={formData.url}
            />
            <label
              for="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Website (if applicable):
            </label>
          </div>
          <div className="grid md:grid-cols-1 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <textarea
              type="text"
              name="notes"
              onChange={handleChange}
              value={formData.notes}
              id="optional"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              cols={3}
            />
            <label
              for="orgname"
              className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Social Media Handle
            </label>
          </div>
        </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label
            for="countries"
            className="peer-focus:font-medium  text-sm  text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product/Service Categories
          </label>
          <select
            id="countries"
            className="block py-2.5 h-12 w-full text-sm px-2 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            onChange={handleChange}
            value={formData.hearingMethod}
            name="hearingMethod"
          >
            <option className="hidden" value={""}>Select an option</option>
            <option value={"0"}>Food & Beverage   </option>
            <option value={"1"}>Health & Wellness  </option>
            <option value={"2"}>Fashion & Accessories   </option>
            <option value={"3"}>Beauty & Personal Care   </option>
            <option value={"4"}>Financial Services   </option>
            <option value={"5"}>Real Estate   </option>
            <option value={"6"}>Technology & IT Services   </option>
            <option value={"7"}>Education & Training   </option>
            <option value={"8"}>Arts & Entertainment   </option>
            <option value={"9"}>Home Goods & Décor   </option>
            <option value={"10"}>Automotive  </option>
            <option value={"11"}>Consulting & Professional Services   </option>
            <option value={"12"}>Nonprofit & Community Organizations   </option>
            <option value={"13"}>Others  </option>
          </select>
        </div>
        <div className="grid md:grid-cols-1 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="description"
              id="orgname"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={handleChange}
              value={formData.description}
            />
            <label
              for="orgname"
              className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Brief Description of Products/Services:
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label
            for="countries"
            className="peer-focus:font-medium  text-sm  text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Booth Size Preference:
          </label>
          <select
            id="countries"
            className="block h-12 py-2.5 px-0 w-full text-sm px-2 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            name="boothSize"
            onChange={handleChange}
            value={formData.boothSize}
          >
            <option value={""} className="hidden">
              Select an option
            </option>
            <option value={"1"}>Small 6'x 8' $100</option>
            <option value={"2"}>Medium 8'x 8' $$150</option>
            <option value={"3"}>Large 10'x 10' $200</option>
          </select>
        </div>
        <div className="grid md:grid-cols-1 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <textarea
              type="text"
              name="additional"
              id="optional"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              cols={3}
              onChange={handleChange}
              value={formData.additional}
            />
            <label
              for="orgname"
              className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Additional Comments or Special Requests
            </label>
          </div>
        </div>
        <button
          type="submit"
          className={`text-white ${
            loading ? "bg-blue-200" : "bg-blue-700 hover:bg-blue-800"
          } focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3`}
          disabled={loading}
        >
          {loading ? "Submitting" : "Submit"}
        </button>
        <ul className="list-disk">
          {/* <li>
            Regular price is <b>$100</b>
          </li> */}
          {/* <li>
          Early Bird Pricing ends February 10, 2025. Price will be $200 afterwards. All booths come with a table and two chairs.
          </li> */}
        </ul>
      </form>
    </div>
  );
};

export default Exhibitor;
