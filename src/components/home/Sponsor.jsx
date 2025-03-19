import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sponsor = () => {
  const sponsors = [
    { img: "/TDD", id: 1 },
    { img: "/BDC", id: 2 },
    { img: "/sponsor-three", id: 3, link:"https://saskatoonchamber.com" },
    { img: "/GOVT", id: 4 },
    { img: "/WESK", id: 5 },
  ];

  return (
    <section
      id="Speakers"
      className="mt-10 min-w-full lg:px-40 px-4 items-start lg:gap-x-8  flex flex-col lg:flex-row  h-auto py-10 lg:py-20 mb-12 bg-[#DD0042] "
    >
      <div className="mx-auto">
        <header className="flex flex-col justify-center items-center section-head-parallax">
          <h4 className="text-[#fff] lg:text-5xl font-thin border-b-4 pb-4 text-center lg:w-[400px] mx-auto">
            Our Sponsors
          </h4>
          <div>
            <p className="mt-3 text-[#fff] text-center sm:mt-5 text-lg md:mt-5 font-thin">
            The 2nd Saskatoon Black Business Expo is made possible by the support of our generous sponsors. These organizations share our vision of fostering entrepreneurship, diversity, and community empowerment. Their contributions enable us to create an impactful event that celebrates the achievements of Black businesses while driving opportunities for growth and collaboration.  
            </p>
            <div className="flex flex-col items-center justify-center lg:flex-row gap-x-4   ">
              {sponsors.map((sponsor) => (
                <a
                href={sponsor.link} target="_blank"
                  key={sponsor.id}
                  className={`${
                    sponsor.id == 1 || sponsor.id == 5
                      ? "w-[50%] lg:w-1/6"
                      : "w-full lg:w-1/3"
                  }  mb-4 lg:mb-0`}
                >
                  <Image
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                    src={sponsor.img + ".png"}
                    alt={`Sponsor ${sponsor.id}`}
                  />
                  {sponsor.id==3 && <div className="text-white text-center">Main Sponsor</div>}
                </a>
              ))}
            </div>
            <Link href="/contact" className="flex justify-center">
              <button className="bg-white mt-5 w-auto px-4 py-2 text-red-600 text-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Sponsor;
