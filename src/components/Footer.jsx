import React from "react";
import style from "./style.module.css";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id={style.footer}>
      <div className={style.row_1}>
        <div className={style.col_1}>
          <h1>
            If You want to say something <br /> <span>contact  me :</span>{" "}
          </h1>

        <Link to="/contact" className={style.contactBtn}>Contact Me</Link>
        </div>
        <div className={style.col_2}>
          <h1>
            You can Find me on{" "}
            <span>
              social <br /> media :
            </span>{" "}
          </h1>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/vivek-kumar-808880219/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100011438388485"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.row_2}>
        <p>
          Built in React. <br /> Copyright {<FaRegCopyright />} 2023 Vivek Kumar.
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
