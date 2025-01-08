import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets.js";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { motion } from "motion/react";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin, backendUrl, setToken, setUser } =
    useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    try {
      if (state === "Login") {
        const { data } = await axios.post(backendUrl + "/api/user/login",{
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token)
          setShowLogin(false)
        }
        else{
          console.log("hi")
          toast.error(data.message)
        }
      }
      else if (state=== "Sign Up"){
        const { data } = await axios.post(`${backendUrl}/api/user/register` ,{
          name,
          email,
          password,
        });
        if (data.success) {
          console.log(backendUrl+"/api/user/register")
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token)
          setShowLogin(false)
        }
        else{
          console.log("i am the issue")
          toast.error(data.message)
        }
        
      }
    } catch (error) {
      console.log("i am act the issue")
      toast.error(error.message)

    }
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form
        onSubmit={submitHandler}
        initial={{ opacity: 0.2, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="relative bg-white p-10 rounded-xl text-slate-500"
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state}
        </h1>
        <p>Welcome back! Please sign in to continue</p>

        {state !== "Login" && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <img width={20} src={assets.profile_icon} alt="" />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="outline-none text-sm"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
        )}

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img width={20} src={assets.email_icon} alt="" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="outline-none text-sm"
            type="email"
            placeholder="Email ID"
            required
          />
        </div>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img width={20} src={assets.lock_icon} alt="" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="outline-none text-sm"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <p className="text-sm text-blue-600 my-4 cursor-pointer">
          Forgot password
        </p>
        <button className="bg-blue-600 w-full text-white py-2 rounded-full">
          {state === "Login" ? "login" : "create account"}{" "}
        </button>

        {state === "Login" ? (
          <p onClick={() => setState("Sign Up")} className="mt-5 text-center">
            Don't have an account ?{" "}
            <span className="text-blue-600 cursor-pointer">Sign Up</span>{" "}
          </p>
        ) : (
          <p onClick={() => setState("Login")} className="mt-5 text-center">
            Already have an account ?{" "}
            <span className="text-blue-600 cursor-pointer">Login</span>{" "}
          </p>
        )}

        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          className="absolute top-5 cursor-pointer right-5"
          alt=""
        />
      </motion.form>
    </div>
  );
};

export default Login;
