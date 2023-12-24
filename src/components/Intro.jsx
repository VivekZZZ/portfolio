import React from "react";
import style from "./style.module.css";
import logo from "../assets/logo.png";
import { MdContactPage } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

const Intro = () => {
  return (
    <div id={style.intro}>
      <div className={style.row_1}>
        <h1>HELLO & WELCOME</h1>
        <p>—— WISH TO KNOW MORE ABOUT ME ——</p>
      </div>
      <div className={style.row_2}>
        <div className={style.col}>
          <div className={style.content}>
            <div className={`${style.data} ${style.data1}`}>
              <h3>MY RESUME</h3>
              <p>
                You can find my resume here! If you wish to know about my
                academic status and all, Give a peek inside!.
              </p>
            </div>
            <div className={style.sm_logo}>
              <div className={style.small_rect}>
                <MdContactPage className={style.logo} />
              </div>
            </div>
          </div>
        </div>
        <div className={style.col}>
          <div className={style.bg_logo}>
            <div className={style.big_rect}>
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
        <div className={style.col}>
          <div className={style.content}>
            <div className={style.small_rect}>
              <BsFillPersonFill className={style.logo} />
            </div>
            <div className={style.data}>
              <h3>ABOUT ME</h3>
              <p>
                about <menu></menu>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
