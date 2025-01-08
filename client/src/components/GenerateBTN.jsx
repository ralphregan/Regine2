import React, { useContext } from "react";
import { assets } from "../assets/assets.js";
import { motion } from "motion/react"
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";
const GenerateBTN = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();
  function onclickHandler() {
    if (user) navigate("/result");
    else {
      setShowLogin(true);
    }
  }
  return (
    <motion.div
    initial={{opacity:0.2, y:100}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      transition={{ duration: 1}}
    className="pb-16 text-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16">
        See the <span className="text-orange-600">MAGIC</span>. try now
      </h1>
      <motion.button 
      onClick={onclickHandler}
      className="inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500">
        Generate
        <img src={assets.star_group} className="h-6" alt="" />
      </motion.button>
    </motion.div>
  );
};

export default GenerateBTN;
