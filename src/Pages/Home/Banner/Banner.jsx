import React from "react";
import svg2 from "../../../assets/Image/SVG2.svg";

import "./Banner.css";
import waveBackground from "../../../assets/Image/Vector.svg";
import wave2 from "../../../assets/Image/wave2.svg";

const Banner = () => {
  return (
    <div
      className="hero  z-0 "
      style={{
        backgroundImage: `url(${wave2})`,
      }}
    >
      <div className="w-full ">
        <svg
          className=" mt-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          height="750"
          preserveAspectRatio="none"
          viewBox="0 0 1440 550"
        >
          <g mask='url("#SvgjsMask1058")' fill="none">
            {/* <path
              d="M388.427,305.033C421.257,304.565,450.79,286.397,467.437,258.097C484.333,229.373,488.987,192.852,470.868,164.883C453.908,138.703,419.498,133.376,388.427,136.136C362.344,138.453,342.516,155.801,327.971,177.576C310.935,203.079,292.272,232.696,305.416,260.407C319.846,290.829,354.759,305.513,388.427,305.033"
              fill="rgba(168, 178, 255, 1)"
              class="triangle-float1 "
            ></path> */}
            <path
              d="M1250.152,327.855C1301.067,327.66,1357.725,323.773,1384.572,280.511C1412.451,235.585,1396.964,179.191,1370.983,133.142C1344.44,86.097,1304.167,42.026,1250.152,42.261C1196.424,42.495,1157.709,87.492,1131.128,134.185C1104.906,180.249,1086.183,236.39,1113.936,281.548C1140.849,325.339,1198.752,328.052,1250.152,327.855"
              fill="rgba(0, 10, 255, 0.37)"
              class="triangle-float2"
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1058">
              <rect width="1440" height="550" fill="#ffffff"></rect>
            </mask>
            <style></style>
          </defs>
        </svg>
      </div>
      {/* <svg
        className="mt-80 "
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.dev/svgjs"
        width="full"
        height="350"
        preserveAspectRatio="none"
        viewBox="0 0 1440 351"
      >
        <g mask='url("#SvgjsMask1245")' fill="none">
          <path
            d="M 0,10 C 99,21.4 297,67.6 495,67 C 693,66.4 792.4,-1.8 990,7 C 1187.6,15.8 1384.4,90.2 1483,111L1483 366L0 366z"
            fill="#4DB4FF"
          ></path>
          <path
            d="M 0,232 C 96,213.8 288,147.4 480,141 C 672,134.6 768,196.4 960,200 C 1152,203.6 1344,167.2 1440,159L1440 351L0 351z"
            fill=" #8CFFBAA6"
          ></path>
          <path
            d="M 0,289 C 96,294.2 288,315 480,315 C 672,315 768,289.2 960,289 C 1152,288.8 1344,309 1440,314L1440 351L0 351z"
            fill="#6879FF"
          ></path>
        </g>
        <defs>
          <mask id="SvgjsMask1245">
            <rect width="1440" height="351" fill="#ffffff"></rect>
          </mask>
        </defs>
      </svg> */}

      <div className=" bg-opacity-60"></div>
      <div className="flex flex-col backdrop px-20 lg:flex-row justify-around gap-10  text-neutral-content">
        <div className=" mt-16 w-1/2 ">
          <div className="">
            <h1 className="   text typing-demo min-w-fit mb-5 text-black text-7xl font-bold">
              WE <span className="text-primary ">{"</DESIGN>"}</span> FOR HUMAN,
              <span className="text-primary">NOT</span> ALIEN
            </h1>
            <p className="w-2/3 mb-5 text-2xl font-medium text-gray-900">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exerci tationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>

          <button class="custom-btn btn-6">
            <span>Read More</span>
          </button>
        </div>
        {/* for Banner svg */}
        <div className="1/2">
          <img className="w-max" src={svg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
