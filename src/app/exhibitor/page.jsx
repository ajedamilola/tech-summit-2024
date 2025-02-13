"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Exhibt = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9", // Optional background color
        marginTop: "150px",
        marginBottom: "50px",
      }}
    >
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdJf4_ekGMgOi9jfcWOThYu1RtKVADI5gpkZEaxQmjxd7B2UQ/viewform?embedded=true"
        width="640"
        height="2284"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Exhibitor Form"
        style={{
          border: "1px solid #ccc", // Optional border
          borderRadius: "8px", // Optional rounded corners
        }}
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Exhibt;
