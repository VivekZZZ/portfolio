import React from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import profileImg from "../assets/vivekImg.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Top = () => {
  return (
    <>
      <Navbar />
      <div id={style.top}>
        <h1>
          Hi, I am Vivek Kumar <br /> <span>Java Fullstack Developer</span>
        </h1>
        <div className={style.image_border_1}>
          <div className={style.image_border_2}>
            <div className={style.image_box}>
              <img src={profileImg} alt="Profile_Img" />
            </div>
          </div>
        </div>
        <span className={style.arrowDown}>
          <Link to="/about">
            <FontAwesomeIcon icon={faAnglesDown} beatFade />
            <p>Visit My Profile</p>
          </Link>
        </span>
      </div>
    </>
  );
};

export default Top;
