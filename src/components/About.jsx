import React from "react";
import style from "./style.module.css";
import pic_1 from "../assets/pic-1.jpg";
import Skill from "./Skill";
import htmlImg from "../assets/html.webp";
import cssImg from "../assets/css.webp";
import jsImg from "../assets/js.webp";
import reactImg from "../assets/react.png";
import tcsImg from "../assets/tcs.png";
import javaImg from "../assets/java.webp";
import javaCodeImg from "../assets/java.png";
import hibernateImg from "../assets/hibernate.jpg";
import springImg from "../assets/spring.png";
import springBoot from "../assets/spring boot.png";
import awsImg from "../assets/aws.png";
import mysqlImg from "../assets/mysql.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaDownload } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";
import { CiRead } from "react-icons/ci";
import { Link } from "react-router-dom";

const About = () => {
  const skill1 = {
    image: javaImg,
    alt: "Java Image",
    name: "JAVA",
  };
  const skill2 = {
    image: hibernateImg,
    alt: "Hibernate Image",
    name: "HIBERNATE",
  };
  const skill3 = {
    image: springImg,
    alt: "Spring Image",
    name: "SPRING",
  };
  const skill4 = {
    image: springBoot,
    alt: "Spring Boot Image",
    name: "SPRING BOOT",
  };
  const skill5 = {
    image: htmlImg,
    alt: "Html Image",
    name: "HTML",
  };
  const skill6 = {
    image: cssImg,
    alt: "Css Image",
    name: "CSS",
  };
  const skill7 = {
    image: jsImg,
    alt: "JavaScript Image",
    name: "JAVASCRIPT",
  };
  const skill8 = {
    image: reactImg,
    alt: "React Image",
    name: "REACT JS",
  };
  const skill9 = {
    image: awsImg,
    alt: "Aws Image",
    name: "AWS",
  };
  const skill10 = {
    image: mysqlImg,
    alt: "MySQL Image",
    name: "MySQL",
  };

  const tcsProj = {
    img: tcsImg,
    alternate: "Image Of TCS Homepage",
    heading: "TCS Clone",
    desc: "The TCS Clone is a replica or duplicate created using HTML and CSS, mirroring the visual structure and styling of an existing TCS (Tata Consultancy Services) website or application",
    live: "https://unique-alpaca-fbbf0e.netlify.app/",
    code: "https://github.com/VivekZZZ/TCS-Clone",
  };

  const batchstudentapi = {
    img: javaCodeImg,
    heading: "Batch-student api",
    desc: "Developed backend api for batch and student having many to many bi directional mapping using spring boot and mysql",
    live: "https://github.com/VivekZZZ/batch-student-MTM-Mapping",
    code: "https://github.com/VivekZZZ/batch-student-MTM-Mapping",
  };

  return (
    <>
      <Navbar />
      <div id={style.about}>
        <h1>
          {" "}
          <span className={style.pipe}>|</span> <span>About</span>
        </h1>
        <hr style={{ height: "5px", background: "#e0284c" }} />
        <div className={style.content}>
          <div className={style.col_1}>
            <img src={pic_1} alt="My Pic" />
          </div>
          <div className={style.col_2}>
            <h1>
              Hello, <br /> I'm <span>Vivek Kumar</span> <br /> Java FullStack
              Developer <br />{" "}
            </h1>
            <p>
              I'm having 1.2+ years of experience working as Java FullStack
              Developer in LTIMindtree and seeking for an opportunity to utilize
              my theoretical and practical knowledge and upgrade myself.
            </p>
            <div className={style.btn_sec}>
              <Link to="/contact" className={style.button}>
                {" "}
                <MdWork style={{ marginRight: "5px" }} />
                Hire Me
              </Link>
              <a
                href="https://drive.google.com/file/d/1g4kHvqdv1uj7fFRYBPM9iCduk85fbz-I/view?usp=sharing"
                download
              >
                <button id={style.my_cv} className={style.button}>
                  {" "}
                  <FaDownload style={{ marginRight: "5px" }} /> Download CV
                </button>
              </a>
            </div>
          </div>
        </div>

        <h1>
          {" "}
          <span className={style.pipe}>|</span> <span>Skills</span>
        </h1>
        <hr style={{ height: "5px", background: "#e0284c" }} />

        <div className={style.skills}>
          <Skill data={skill1} />
          <Skill data={skill2} />
          <Skill data={skill3} />
          <Skill data={skill4} />
          <Skill data={skill5} />
          <Skill data={skill6} />
          <Skill data={skill7} />
          <Skill data={skill8} />
          <Skill data={skill9} />
          <Skill data={skill10} />
        </div>
        <h1 id={style.viewall}>
          {" "}
          <div>
            <span className={style.pipe}>|</span> <span>Projects</span>
          </div>
          <Link to="/project">View All</Link>
        </h1>
        <hr style={{ height: "5px", background: "#e0284c" }} />
        <div className={style.work_list} style={{ paddingBottom: "30px" }}>
          <div className={style.card}>
            <img src={tcsProj.img} alt={tcsProj.alternate} />
            <div className={style.card_content}>
              <h4>{tcsProj.heading}</h4>
              <p>{tcsProj.desc}</p>
              <div className={style.link}>
                <div className={style.read_more}>
                  <FaSquareGithub style={{ marginRight: "5px" }} />
                  <a
                    href={tcsProj.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>GITHUB REPO</span>
                  </a>
                </div>
                <div className={style.read_more}>
                  <CiRead style={{ marginRight: "5px" }} />
                  <a
                    href={tcsProj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>VIEW LIVE</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={style.card}>
            <img src={batchstudentapi.img} alt={batchstudentapi.alternate} />
            <div className={style.card_content}>
              <h4>{batchstudentapi.heading}</h4>
              <p>{batchstudentapi.desc}</p>
              <div className={style.link}>
                <div className={style.read_more}>
                  <FaSquareGithub style={{ marginRight: "5px" }} />
                  <a
                    href={batchstudentapi.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>GITHUB REPO</span>
                  </a>
                </div>
                <div className={style.read_more}>
                  <CiRead style={{ marginRight: "5px" }} />
                  <a
                    href={batchstudentapi.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>VIEW CODE</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
