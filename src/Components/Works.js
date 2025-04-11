import React from "react";
import { Link } from "react-router";

const Works = () => {
  return (
    <div className="container-work max-md:py-7 max-md:mx-10 max-lg:py-10 max-lg:mx-12 max-xl:py-10 max-xl:mx-20 ">
      <div className="mb-10">
        Hello! I'm Dulmi Chamathka. Here, I showcase the case studies of my
        projects.{" "}
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="video-container col-span-6 border  min-h-[300px] max-sm:min-h-[225px] max-md:min-h-[250px] max-lg:min-h-[275px]  rounded-3xl shadow-xl ">
          <Link to="/Xream-vue-app">
            <img
              className="w-full h-full max-sm:object-cover max-sm:object-center rounded-3xl"
              src="Xream-vue/xream-vue.png"
              alt=""
            />
          </Link>
        </div>

        {/* <div className="col-span-6 border  min-h-[300px] rounded-3xl shadow-xl "></div> */}
      </div>
    </div>
  );
};

export default Works;
