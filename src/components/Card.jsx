import React from "react";
import style from "./style.module.css";
import { FaSquareGithub } from "react-icons/fa6";
import { CiRead } from "react-icons/ci";

const Card = (props) => {
  return (
    <div className={style.card}>
      <img src={props.data.img} alt={props.data.alternate} />
      <div className={style.card_content}>
        <h4>{props.data.heading}</h4>
        <p>{props.data.desc}</p>
        <div className={style.link}>
          <div className={style.read_more}>
            <FaSquareGithub style={{ marginRight: "5px" }} />
            <a href={props.data.code} target="_blank" rel="noopener noreferrer">
              <span>GITHUB REPO</span>
            </a>
          </div>
          <div className={style.read_more}>
            <CiRead style={{ marginRight: "5px" }} />
            <a href={props.data.live} target="_blank" rel="noopener noreferrer">
              <span>VIEW LIVE</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
