import React from "react";
import Bench from "../assets/benchgrowth.png";
import Blog from "../assets/blog.png";

const Works = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex-col justify-content w-full h-full">
        <div className="p-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6"> // Check out some of my recent work</p>
        </div>
        <div
          style={{ backgroundImage: `url(${Bench})` }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          <div className="shadow-lg shadow-[#040c16] group conatiner rounded-md flex justify-center mx-auto content-div">
            {/*Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-wider">
                BenchGrowth Investment Site
              </span>
              <div className="pt-8 text-center">
                <a href="#">
                  <button>Live</button>
                </a>
                <a href="#">
                  <button>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
