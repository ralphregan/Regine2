import React from "react";
import { assets } from "../assets/assets.js";
import { motion } from "motion/react"

const Description = () => {
  return (
    <motion.div
    initial={{opacity:0.2, y:100}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      transition={{ duration: 1}}
    className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Create AI Images
      </h1>
      <p className="text-gray-500 mb-8 ">TUrn your iamgination into visual</p>
      <div  className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img src={assets.ele} alt="" className="w-80 xl:w-96 rounded-lg " />
        <div className="">
          <h2 className="text-3xl font-medium max-w-lg mb-4 ">Introducing the AI_Powered Text to Image Generator</h2>
          <p className="text-gray-600 mb-4">
            Easily bring your ideas to life with our free AI image generator.
            Whether you need stunning visuals or unique imagery, our tool
            transforms your text into eye-catching images with just a fe clicks.
            Imagine it, describe i, and watch it come to life
          </p>
          <p className="text-gray-600">
            SImply type in a text prompt, and our cutting-edge AI will generate
            high-quality images in seconds. From product visuals to character
            designs and portraits, even concepts that don't yet exist can be
            visualized effortlessly. Powered by advanced AI technolgy, the
            creative possibilities are limitless
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
