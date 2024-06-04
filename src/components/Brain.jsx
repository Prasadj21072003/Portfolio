import React from "react";
import { motion, useTransform } from "framer-motion";
import { Red_Rose } from "next/font/google";

const Brain = ({ scrollYProgress }) => {
  const rotateForward = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const moveforward = useTransform(scrollYProgress, [0, 1], [-90, 0]);
  const moveforward2 = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const moveforward3 = useTransform(scrollYProgress, [0, 1], [200, 0]);

  const movedown = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const moveup = useTransform(scrollYProgress, [0, 1], [100, 0]);

  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.6]);

  const scaleup = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <motion.div
      className="w-[45%] h-[98%] z-50 overflow-visible"
      style={{ opacity: opacity }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="#000000"
        version="1.1"
        id="Capa_1"
        width="800px"
        height="700px"
        viewBox="0 0 491.255 491.256"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <motion.path
              style={{ rotate: rotateForward }}
              id="first"
              d="M109.041,134.176l-40.443-24.312l59.576-0.8V56.226L41.051,90.077l-17.772,30.618l58.812,25.725c0,0-71.067,0-74.734,0    C3.672,146.419,0,207.677,0,207.677h71.049L109.041,134.176z"
            />
            <motion.polygon
              style={{ x: moveforward }}
              points="53.662,222.98 1.6,222.98 78.178,286.428 121.056,269.273   "
            />
            <motion.polygon points="400.594,275.043 428.784,288.529 388.357,283.625 403.059,245.651 491.255,239.533 454.497,177.054     385.881,227.271 320.968,207.677 256.043,245.651 182.542,243.199 178.858,276.28 227.861,295.268 222.968,314.266     184.995,302.005 123.736,276.28 99.232,289.756 99.232,331.408 137.211,357.133 254.818,357.133 276.864,308.136 251.758,276.748     322.195,279.959 290.807,309.816 327.099,311.195 373.656,293.434 406.562,321.763 479.322,321.33 485.534,252.833     406.737,255.448   " />
            <motion.path
              style={{ x: moveforward2 }}
              d="M219.167,379.18l66.326,69.221l36.759-17.142l-56.528-63.103C265.724,368.156,227.739,379.18,219.167,379.18z"
            />
            <motion.polygon
              style={{ y: moveup }}
              points="275.031,356.678 311.779,389.746 394.616,371.215 394.616,323.596 288.04,323.596   "
            />
            <motion.polygon
              style={{ y: movedown }}
              points="302.904,131.963 300.148,186.845 321.003,194.617 352.847,146.834 356.502,55.77 295.244,45.879 249.3,115.183       "
            />
            <motion.polygon
              style={{ y: movedown, x: moveforward3 }}
              points="356.502,168.466 356.502,201.541 390.809,201.541 452.043,150.086 390.809,85.173 373.656,101.41 376.096,143.36       "
            />
            <motion.polygon
              style={{ scale: scaleup }}
              points="130.013,143.36 118.832,164.799 135.057,177.054 129.855,195.417 99.232,185.018 77.792,222.98 128.173,259.127     165.383,244.507 179.291,201.541 193.565,207.677 193.565,221.153 269.519,216.249 281.768,181.953 281.768,144.002     222.968,125.587 242.568,97.737 266.459,60.05 229.233,43.515 150.232,42.855 149.297,118.546 212.552,156.222 193.565,164.799       "
            />
          </g>
        </g>
      </svg>
    </motion.div>
  );
};

export default Brain;
