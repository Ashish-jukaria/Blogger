import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./Hooks/useAuth";
import "./Styling/navbar.css";
import { delay, easeInOut, motion } from "motion/react";

export default function Navbar() {
  const auth = useAuth();
  const [login, setLogin] = useState(true);
  function handleLogin(e) {
    setLogin(!login);
  }
  const variant={
    hidden:{
        opacity:0,
        pathLength:0
        
    },
    visible:{
        opacity:1,
        pathLength:1,
        transition:{
            duration:3,
            ease:'easeInOut',
            delay:2
        }

        
    }
  }
  return (
    <div id="main">
      <div className="heading">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="50"
          height="100"
          xml:space="preserve"
        >
          <g fill-rule="evenodd" clip-rule="evenodd">
            <motion.path 
            variants={variant}
            initial="hidden"
              animate="visible"
              fill="#1E62D6"
              d="M128 352c53.023 0 96-42.977 96-96h32c0 70.688-57.309 128-128 128S0 326.688 0 256c0-70.691 57.309-128 128-128 31.398 0 60.141 11.344 82.406 30.117l-.039.059c3.414 2.93 5.625 7.215 5.625 12.082 0 8.824-7.156 16-16 16-3.859 0-7.371-1.434-10.145-3.723l-.039.059C173.109 168.516 151.562 160 128 160c-53.023 0-96 42.977-96 96s42.977 96 96 96z"
            />
            <motion.path
            variants={variant}
            initial="hidden"
            animate="visible"
            fill="#FF0083"
              d="M352 384c-8.844 0-16-7.156-16-16s7.156-16 16-16c53.023 0 96-42.977 96-96s-42.977-96-96-96-96 42.977-96 96h-32c0-70.691 57.312-128 128-128s128 57.309 128 128c0 70.688-57.312 128-128 128zm-64-48c8.844 0 16 7.156 16 16s-7.156 16-16 16-16-7.156-16-16 7.156-16 16-16z"
            />
          </g>
        </svg>
      </div>

      <div className="div2">
        <div className="homelink">
          {localStorage.getItem("token") == auth.token &&
          window.location.pathname === "/" ? (
            <Link to="/dashboard">Dashboard</Link>
          ) : (
            <Link to="/">Home</Link>
          )}
        </div>

        <div className="auth">
          {localStorage.getItem("token") == auth.token ? (
            <Link
              onClick={() => {
                auth.Logout();
              }}
            >
              Logout
            </Link>
          ) : window.location.pathname != "/login" ? (
            <Link to="/login" onClick={handleLogin}>
              Login
            </Link>
          ) : (
            <Link to="/signup" onClick={handleLogin}>
              Signup
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
