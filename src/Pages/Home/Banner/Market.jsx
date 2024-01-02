import React from "react";
import marketsvg from "../../../assets/Image/marketplace.svg";
import SVG1 from "../../../assets/Image/SVG1.svg";
import "../Banner/Market.css";

function Market() {
  return (
    <div
      className="flex my-component py-44  pl-0 pr-10   flex-col backdrop px-20 lg:flex-row justify-around gap-20 "
      // style={{
      //   backgroundRepeat: "no-repeat",

      //   backgroundPosition: "center",
      //   height: 700,
      //   zIndex: 1,
      //   backgroundImage: `url(${marketsvg})`,
      // }}
    >
      <div className=" whywe  p-28 h-96 w-1/3 bg-indigo-400">
        <h1 className="text-4xl font-normal">
          Why we are best in market place.
        </h1>
        <p>
          Beautiful, Intuitive Websites, and Web Apps That Resonate with Your
          Target Audience.
        </p>
      </div>

      <div className="flex text-center justify-between gap-14  ">
        <div className="hover-effect">
          <img className="w-24 " src={SVG1} alt="" />
          <p>
            Beautiful, Intuitive Websites, and Web Apps That Resonate with Your
            Target Audience.
          </p>
        </div>
        <div className="hover-effect mt-9">
          <img className="w-24" src={SVG1} alt="" />
          <p>
            Beautiful, Intuitive Websites, and Web Apps That Resonate with Your
            Target Audience.
          </p>
        </div>
        <div className="hover-effect ">
          <img className="w-24" src={SVG1} alt="" />
          <p>
            Beautiful, Intuitive Websites, and Web Apps That Resonate with Your
            Target Audience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Market;
