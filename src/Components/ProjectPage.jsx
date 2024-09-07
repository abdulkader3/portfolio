import React from "react";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center min-h-screen bg-black p-4">
        <div className="max-w-[1000px] w-full grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project card one */}
          <div className="card bg-gray-800 p-6 rounded-lg shadow-md text-white">
            <div className="card__content">
              <Link to="https://e-commerce-gamma-nine-10.vercel.app/">
                <p className="card__title font-bold text-xl mb-2">
                  Transform Your Online Business with Our Cutting-Edge eCommerce
                  Platform
                </p>
                <p className="card__description">
                  Boost your online business with our eCommerce platform. Enjoy
                  seamless integration, stunning design, and powerful analytics.
                  With secure payments and personalized experiences, turn your
                  store into a conversion powerhouse.
                </p>
              </Link>
            </div>
          </div>
          {/* Project card two */}
          <div className="card2 bg-gray-800 p-6 rounded-lg shadow-md text-white">
            <div className="card2__content">
              <p className="card2__title font-bold text-xl mb-2">Card Title</p>
              <p className="card2__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
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
