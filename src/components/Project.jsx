import React from "react";
import style from "./style.module.css";
import Card from "./Card";
import tcsImg from "../assets/tcs.png";
import slackImg from "../assets/slack.png";
import godaddyImg from "../assets/godaddy.png";
import passwordImg from "../assets/password.png";
import searchImg from "../assets/searchimg.png";
import playlistImg from "../assets/playlist.png";
import calculatorImg from "../assets/calculator.png";
import shoppingListImg from "../assets/shoppinglist.png";
import javaImg from "../assets/java.png";
import bookImg from "../assets/todo.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Project = () => {
  const tcsProj = {
    img: tcsImg,
    alternate: "Image Of TCS Homepage",
    heading: "TCS Clone",
    desc: "The TCS Clone is a replica or duplicate created using HTML and CSS, mirroring the visual structure and styling of an existing TCS (Tata Consultancy Services) website or application",
    live: "https://unique-alpaca-fbbf0e.netlify.app/",
    code: "https://github.com/VivekZZZ/TCS-Clone",
  };

  const slackProj = {
    img: slackImg,
    heading: "SLACK Clone",
    desc: "The SLACK Clone is a replica or duplicate created using HTML and CSS, mirroring the visual structure and styling of an existing SLACK website or application",
    live: "https://zesty-cactus-4e275c.netlify.app/",
    code: "https://github.com/VivekZZZ/Slack-Clone",
  };

  const netflixProj = {
    img: slackImg,
    heading: "NETFLIX Clone",
    desc: "The NETFLIX Clone is a replica or duplicate created using HTML and CSS, mirroring the visual structure and styling of an existing Netflix website or application",
    live: "https://stunning-croquembouche-900274.netlify.app/",
    code: "https://github.com/VivekZZZ/Netflix-Clone",
  };

  const godaddyProj = {
    img: godaddyImg,
    heading: "GoDaddy Clone",
    desc: "The GoDaddy Clone is a replica or duplicate created using HTML and CSS, mirroring the visual structure and styling of an existing GoDaddy website or application",
    live: "https://profound-sundae-e16899.netlify.app/",
    code: "https://github.com/VivekZZZ/GoDaddy-Clone",
  };
  const passwordProj = {
    img: passwordImg,
    heading: "Random Password Generator",
    desc: "This application is used to generate random password which can be further copied. It uses Html , css, js.",
    live: "https://friendly-pegasus-ede228.netlify.app/",
    code: "https://github.com/VivekZZZ/Random-Password-Generator",
  };
  const searchImageProj = {
    img: searchImg,
    heading: "Image search Application",
    desc: "This application is used to search the images from external web api and displayed it here. it uses html, css, js",
    live: "https://jade-maamoul-d2b0f7.netlify.app/",
    code: "https://github.com/VivekZZZ/SearchImage",
  };
  const playlistProj = {
    img: playlistImg,
    heading: "Playlist",
    desc: "This application is used to add random movie or music playlist from external web api. It uses html , css, js , react Js",
    live: "https://fluffy-bunny-340eb2.netlify.app/",
    code: "https://github.com/VivekZZZ/playlist",
  };
  const calculatorProj = {
    img: calculatorImg,
    heading: "Calculator",
    desc: "This application is used to for arithmetic calculation having dark as well light Theme.It uses html css, Js",
    live: "https://grand-empanada-5e46b4.netlify.app/",
    code: "https://github.com/VivekZZZ/Calculator",
  };
  const shoppingListProj = {
    img: shoppingListImg,
    heading: "Shopping List",
    desc: "This application is used to add the shopping list items and some more functionalities.it uses html, css, js,Local storage",
    live: "https://brilliant-meringue-a7a47a.netlify.app/",
    code: "https://github.com/VivekZZZ/shopping_list",
  };
  const bookProj = {
    img: bookImg,
    heading: "Todo Application",
    desc: "This is a todo application where we can add a note, edit, delete and this note takes a random image from external api",
    live: "https://regal-palmier-190bae.netlify.app/",
    code: "https://github.com/VivekZZZ/Book_Create",
  };
  const adminbusapi = {
    img: javaImg,
    heading: "Admin-Bus api",
    desc: "Developed backend api for admin and bus having one to many bi directional mapping using spring boot and mysql",
    live: "https://github.com/VivekZZZ/admin-bus-app",
    code: "https://github.com/VivekZZZ/admin-bus-app",
  };

  const batchstudentapi = {
    img: javaImg,
    heading: "Batch-student api",
    desc: "Developed backend api for batch and student having many to many bi directional mapping using spring boot and mysql",
    live: "https://github.com/VivekZZZ/batch-student-MTM-Mapping",
    code: "https://github.com/VivekZZZ/batch-student-MTM-Mapping",
  };

  return (
    <>
      <Navbar />
      <div id={style.project}>
        <h1>
          {" "}
          <span>|</span>Projects
        </h1>
        <div className={style.work_list}>
          <Card data={tcsProj} />
          <Card data={slackProj} />
          <Card data={adminbusapi} />
          <Card data={batchstudentapi} />
          <Card data={netflixProj} />
          <Card data={godaddyProj} />
          <Card data={passwordProj} />
          <Card data={searchImageProj} />
          <Card data={playlistProj} />
          <Card data={calculatorProj} />
          <Card data={shoppingListProj} />
          <Card data={bookProj} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;
