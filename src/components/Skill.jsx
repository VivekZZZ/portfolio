import React from "react";
import style from "./style.module.css";

const Skill = (props) => {
  console.log(props);
  return (
    <div className={style.items}>
      <div className={style.item}>
        <div className={style.img_border_1}>
          <div className={style.img_border_2}>
            <img src={props.data.image} alt={props.data.alt} />
          </div>
        </div>
        <p>
          <span>{props.data.name}</span>
        </p>
      </div>
    </div>
  );
};

export default Skill;
