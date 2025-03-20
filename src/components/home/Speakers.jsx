"use client";
import React, { useState } from "react";
import All from "../projects/All";


const Speakers = () => {
  const tabs = [
    {
      id: 1,
      name: "All",
      component: <All />,
    },
   

    // {
    //   id: 5,
    //   name: "Interior",
    //   component: <Interior />,
    // },

    // Add more tabs if needed
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section
      id="Speakers"
      className='mt-10 min-w-full  flex flex-col  py-10 lg:py-20 mb-12 bg-[#DD0042] bg-no-repeat'
    >
      <header className="section-head-parallax ">
        <h4 className="text-[#fff] text-center lg:text-5xl">
          Meet Our Special Guests
        </h4>
        <p className="mt-3 text-white sm:mt-5  text-center md:mt-5 font-thin  mx-auto text-lg">
        We are thrilled to introduce you to our special guest, a true luminary in their field, who will bring a unique perspective and invaluable insights to our event. This distinguished individual has made remarkable contributions to their industry, and their journey is nothing short of inspiring. Whether it's groundbreaking achievements, innovative thinking, or a compelling personal story, our special guest is sure to captivate and motivate you. Stay tuned as we reveal the name and details of this extraordinary individual—you won’t want to miss this opportunity to learn from the best! 
        </p>
      </header>
      {/* <ul className="lg:py-4 mx-4 lg:mx-0 px-4 flex  items-center flex-row justify-center lg:space-x-8 space-x-4  sticky top-0 w-full overflow-y-hidden z-10 lg:overflow-x-hidden overflow-x-scroll no-scrollbar">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`mr-2 cursor-pointer  ${
              activeTab.id === tab.id
                ? "font-bold bg-dreamBlue px-2 lg:px-6 py-2 text-dreamWhite"
                : "text-gray-400 font-normal"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.name}
          </li>
        ))}
      </ul> */}

      <div className="px-5 lg:px-10 overflow-hidden  text-clip">
        <All />
      </div>
    </section>
  );
};

export default Speakers;
