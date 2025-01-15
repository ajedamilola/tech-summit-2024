"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Volunteer = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    availability: 0,
    areas: [],
    specific: "",
    reason: "",
    previous: "",
  });
  function handleChange(e) {
    const former = JSON.parse(JSON.stringify(formData));
    former[e.target.name] = e.target.value;
    setFormData(former);
  }

  const areas = [
    "Event Setup",
    "Logistics",
    "Social Media Support",
    "Greeters",
    "Other (Please specify)",
  ];

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
        <h1>- Volunteer Registration Form</h1>
      </div>
      <form
        className="max-w-xl mx-auto"
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            setLoading(true);
            const { data, err } = await axios.post("/api/volunteer", formData);
            if (!err) {
              toast("Vulunteer Registration form sent successfully", {
                theme: "colored",
                type: "success",
              });
              setFormData({
                name: "",
                email: "",
                phone: "",
                availability: 0,
                areas: [],
                specific: "",
              });
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
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
            <label
              for="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full name
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <label
            for="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            id="phone"
            className="block appearance-none py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            name="phone"
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

        <div className="relative z-0 w-full mb-5 group">
          <label
            for="countries"
            className="peer-focus:font-medium  text-sm  text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Availability
          </label>
          <select
            name="availability"
            onChange={handleChange}
            value={formData.availability}
            id="countries"
            className="block py-2.5 px-0 w-full h-12 text-sm px-2 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          >
            <option className="hidden">Select an option</option>
            <option value={0}>Full Day </option>
            <option value={1}>Morning </option>
            <option value={2}>Afternoon</option>
          </select>
        </div>

        <div>
          <label className="text-gray-400 mb-4">
            Areas of Interest (Check all that apply):
          </label>

          {areas.map((i) => {
            return (
              <div className="flex items-center mt-3 mb-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  onChange={() => {
                    if (formData.areas.includes(areas.indexOf(i))) {
                      setFormData({
                        ...formData,
                        areas: formData.areas.filter(
                          (a) => a != areas.indexOf(i)
                        ),
                      });
                    } else {
                      setFormData({
                        ...formData,
                        areas: [...formData.areas, areas.indexOf(i)],
                      });
                    }
                  }}
                  value=""
                  checked={formData.areas.includes(areas.indexOf(i))}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checkbox-1"
                  className="ms-2 text-sm font-medium text-gray-900 "
                >
                  {i}
                </label>
              </div>
            );
          })}
        </div>
        {formData.areas.includes(3) && (
          <div className="relative z-0 w-full mb-5 group">
            <input
              name="specific"
              onChange={handleChange}
              value={formData.specific}
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Specify Reson
            </label>
          </div>
        )}
        <div className="relative z-0 w-full mb-5 group">
          <input
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            name="previous"
            onChange={handleChange}
            value={formData.previous}
          />
          <label
            for="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Previous Volunteer Experience (if any)
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            name="reason"
            onChange={handleChange}
            value={formData.reason}
          />
          <label
            for="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Why do you want to volunteer for the Black Business Expo?
          </label>
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
      </form>
    </div>
  );
};

export default Volunteer;
