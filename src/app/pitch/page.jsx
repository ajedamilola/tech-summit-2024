"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Pitch = () => {
    return (
        <div className="pitch-page bg-gray-50 text-gray-800">
            <header className="pitch-header bg-green-800 text-white py-10 text-center">
                <Image
                    src="/pitch-banner.jpg"
                    alt="Pitch Banner"
                    width={400}
                    height={300}
                    className="mx-auto rounded-lg shadow-lg mt-10"
                />
                <h1 className="pitch-title text-4xl font-bold mt-6">
                    SBBN Entrepreneur Pitch Competition
                </h1>
                <p className="pitch-subtitle text-lg mt-2">
                    Unlock Your Business Potential
                </p>
            </header>
            <section className="pitch-content max-w-4xl mx-auto py-10 px-6">
                <p className="text-2xl leading-relaxed mb-6">
                    Are you a passionate entrepreneur with a groundbreaking idea? Do you
                    have what it takes to revolutionize your industry? We're looking for
                    innovative thinkers, game-changers, and trailblazers to participate
                    in the SBBN Entrepreneur Pitch Competition.
                </p>
                <h2 className="text-2xl font-semibold text-red-600 mb-4">
                    Competition Timeline:
                </h2>
                <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Application opens: March 31</li>
                    <li>Application closes: April 30</li>
                    <li>Top 10 finalists announced: May 31</li>
                    <li>Mentorship and support for finalists: May 31 - June 21</li>
                    <li>Final pitch competition: June 28</li>
                </ul>
                <h2 className="text-2xl font-semibold text-red-600 mb-4">
                    Judging Criteria:
                </h2>
                <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Innovation: How original and groundbreaking is your idea?</li>
                    <li>Scalability: What's the potential for your business to grow and scale?</li>
                    <li>Impact: What social, environmental, or economic impact will your business have?</li>
                    <li>Market Opportunity: Is there a sizable market for your product or service?</li>
                    <li>Team Strength: What's the experience and expertise of your founding team?</li>
                </ul>
                <h2 className="text-2xl font-semibold text-red-600 mb-4">
                    Application Requirements:
                </h2>
                <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Application Form: Complete our online application form.</li>
                    <li>
                        Video Pitch: Create a 2-5 minute video showcasing your business
                        idea, product or service, and team. Be creative and persuasive!
                    </li>
                </ul>
                <h2 className="text-2xl font-semibold text-red-600 mb-4">
                    What's Next:
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                    After submitting your application, our review committee will evaluate
                    your business idea based on the judging criteria. Selected finalists
                    will participate in a mentorship and support program, leading up to
                    the final pitch event.
                </p>
                <h2 className="text-2xl font-semibold text-red-600 mb-4">
                    Prizes and Recognition:
                </h2>
                <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Cash Prize: Win up to $5000</li>
                    <li>
                        Mentorship and Support: Receive guidance and support from industry
                        experts and mentors
                    </li>
                    <li>
                        Networking Opportunities: Connect with potential investors,
                        partners, and customers
                    </li>
                    <li>
                        Recognition: Gain recognition and visibility for your business
                        through our media and marketing channels
                    </li>
                </ul>
                {/* <h2 className="text-2xl font-semibold text-red-600 mb-4">
                    Apply Now:
                </h2> */}
                <a
                    href="https://forms.gle/a6tsZSeN471v7hua8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                    Apply Now
                </a>
                <h2 className="text-2xl font-semibold text-red-600 mb-4 mt-6">
                    Contact Us:
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                    For more information about the competition, please contact us at
                    info@saskblackbusiness.com or +1 (639) 998-2423.
                </p>
                <footer className="pitch-footer bg-green-600 text-white py-4 text-center rounded-lg shadow-md">
                    <p>
                        Proudly Sponsored by the Prairies Economic Development of Canada
                    </p>
                </footer>
            </section>
        </div>
    );
};

export default Pitch;
