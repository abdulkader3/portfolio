import React from "react";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center min-h-screen bg-black p-4">
        <div className="md:w-full project md:flex md:flex-wrap md:gap-12 md:pt-10 md:pl-[140px] md:justify-center md:pr-[140px] ">
          {/* Project card one */}
          <div className="card bg-gray-800 p-6 rounded-lg shadow-md text-white">
            <div className="card__content">
              <Link to="https://e-commerce-gamma-nine-10.vercel.app/">
                <p className="card__title font-bold text-xl mb-2">
                  Stay Informed and Inspired with NewsPro
                </p>
                <p className="card__description">
                  Your go-to platform for the latest in fashion, technology,
                  travel, and lifestyle. Dive into trending stories, expert
                  insights, and global updates, all in one place!
                </p>
              </Link>
            </div>
          </div>
          {/* Project card two */}
          <div className="card2 bg-gray-800 p-6 rounded-lg shadow-md text-white">
            <div className="card2__content">
              <p className="card2__title font-bold text-xl mb-2">
                Premium Web Hosting for Your Website
              </p>
              <p className="card2__description">
                Unlock the Power of the Web with Our Premium Hosting Solutions.
                Fast, reliable, and secure hosting tailored for businesses of
                all sizes. Get 24/7 support, seamless domain registration, and
                top-tier SEO tools to elevate your online presence. Start
                building your website today!
              </p>
              <Link to=""></Link>
            </div>
          </div>
          {/* Project card three */}
          <div className="card3 bg-gray-800 p-6 rounded-lg shadow-md text-white">
            <div className="card3__content">
              <p className="card3__title font-bold text-xl mb-2">Card Title</p>
              <p className="card3__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <Link to=""></Link>
            </div>
          </div>
          {/* Project card four */}
          <div className="card4 bg-gray-800 p-6 rounded-lg shadow-md text-white">
            <div className="card4__content">
              <p className="card4__title font-bold text-xl mb-2">Card Title</p>
              <p className="card4__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <Link to=""></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
