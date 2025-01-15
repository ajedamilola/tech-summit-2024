"use client"
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Attend = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", organisation: "", hearingMethod: null, regType: null, notes: "" })
  function handleChange(e) {
    const former = JSON.parse(JSON.stringify(formData))
    former[e.target.name] = e.target.value
    setFormData(former)
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
        <h1>- Attendee Registration Form</h1>
      </div>
      <form className="max-w-xl mx-auto" method="post" onSubmit={async e => {
        e.preventDefault()
        try {
          setLoading(true)
          const { data, err } = await axios.post("/api/attendee", formData)
          if (!err) {
            toast("Attendance Request form sent successfully and will be reviewed", {
              theme: "colored",
              type: "success",
            })
            setFormData({ name: "", email: "", phone: "", organisation: "", hearingMethod: null, regType: null, notes: "" })
          } else {
            toast(err, {
              theme: "colored",
              type: "warning",
            })
          }
        } catch (error) {
          console.log(error)
          if (error.response && error.response.status != "404") {
            return toast(error.response?.data?.err, {
              theme: "colored",
              type: "error"
            })
          }
          toast("Unable to connect to servers check your internet and try again", {
            theme: "colored",
            type: "error"
          })
        } finally {
          setLoading(false)
        }
      }}>
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
              Full name
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
            Email address
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
              name="organisation"
              id="orgname"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={handleChange}
              value={formData.organisation}
            />
            <label
              for="orgname"
              className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Organization(If Applicable)
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label
            for="countries"
            className="peer-focus:font-medium  text-sm  text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            How did you hear about the event?
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
            <option value={"0"}>Social Media (Facebook, Instagram, Twitter, LinkedIn)  </option>
            <option value={"1"}>Word of Mouth</option>
            <option value={"2"}>Online Advertisement  </option>
            <option value={"3"}>Community Group or Organization  </option>
            <option value={"4"}>Flyer or Poster  </option>
            <option value={"5"}>Radio/TV  </option>
            <option value={"6"}>email Invitation  </option>
            <option value={"7"}>Previous Expo Attendance  </option>
            <option value={"8"}>Other Other  </option>
          </select>
        </div>

        <div>
  <label className="text-gray-400 mb-4">Registration Type:</label>

  <div className="flex items-center mt-3 mb-4">
    <input
      id="checkbox-1"
      type="radio"
      value="1"
      name="regType"
      required
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      checked={formData.regType == "1"}
      onChange={handleChange}
    />
    <label
      htmlFor="checkbox-1"
      className="ms-2 text-sm font-medium text-gray-900"
    >
      General Attendee
    </label>
  </div>
  
  <div className="flex items-center mt-3 mb-4">
    <input
      id="checkbox-3"
      type="radio"
      value="3"
      name="regType"
      required
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      checked={formData.regType == "3"}
      onChange={handleChange}
    />
    <label
      htmlFor="checkbox-3"
      className="ms-2 text-sm font-medium text-gray-900"
    >
      Investor
    </label>
  </div>

  <div className="flex items-center mb-4">
    <input
      id="checkbox-2"
      type="radio"
      name="regType"
      value="2"
      required
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      onChange={handleChange}
      checked={formData.regType == "2"}
    />
    <label
      htmlFor="checkbox-2"
      className="ms-2 text-sm font-medium text-gray-900"
    >
      Student Attendee (Please provide valid student ID at check-in)
    </label>
  </div>

  {/* File upload section that shows when "Student Attendee" is selected */}
  {formData.regType === "2" && (
    <div className="mt-4">
      <label
        htmlFor="student-id-upload"
        className="block text-sm font-medium text-gray-900"
      >
        Upload Your Student ID
      </label>
      <input
        id="student-id-upload"
        type="file"
        name="studentID"
        accept="image/*,application/pdf"
        className="w-full mt-2 text-sm text-gray-900 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
        // onChange={handleFileChange}
      />
    </div>
  )}
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
              Additional Comments or Special Requests
            </label>
          </div>
        </div>
        <button
          type="submit"
          className={`text-white ${loading ? "bg-blue-200" : "bg-blue-700 hover:bg-blue-800"} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3`}
          disabled={loading}
        >
          {loading ? "Submitting" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Attend;
