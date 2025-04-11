import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="flex justify-between p-5 align-middle shadow-md ">
      <div className="flex text-2xl align-middle topic-font ">
        <div className="mt-1">
          Case <span className="text-blue-600"> Studies </span>
        </div>
        <img
          src="general/light-bulb.png"
          width={"35px"}
          height={"20px"}
          alt=""
          className="rotate-12"
        />
      </div>

      <div className="mt-1 mr-8 text-base font-semibold text-gray-500 topic-font">
        <ul className="flex gap-8 sub-titles ">
          <Link to="/">
            <li>Works</li>
          </Link>
          <li>Resume</li>
          <li>LinkedIn</li>
          <li>Git Hub</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
