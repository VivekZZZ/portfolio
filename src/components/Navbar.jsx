import React, { useState } from "react";
import style from "./style.module.css";
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const toogleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const handleHover = () => {
    setExpanded(true);
  };

  const handleLeave = () => {
    setExpanded(false);
  };
  const { pathname } = useLocation();

  // Define a function to check if the current path matches a specific endpoint
  const isPathMatch = (path) => pathname === path;

  return (
    <>
      <div id={style.navbar}>
        <div className={style.navContent}>
          <p onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            {isExpanded ? "Vivek kumar" : "V.k"}
          </p>
        </div>
        <div className={style.navContent}>
          {isMenuOpen ? (
            <RxCross2 className={style.cross} onClick={toogleMenu} />
          ) : (
            <CgMenuRightAlt className={style.menu} onClick={toogleMenu} />
          )}
        </div>
      </div>
      <div
        className={style.navPage}
        style={{ display: isMenuOpen ? "block" : "none" }}
      >
        <div className={style.navPageContent}>
          <div className={style.col_1}>
            <ol>
              <li >
                <Link to="/"><span className={isPathMatch("/") ? style.strikethrough : ""}>Home</span></Link>
              </li>
              <li >
                <Link to="/about"><span className={isPathMatch("/about") ? style.strikethrough : ""}>About</span></Link>
              </li>
              <li>
                <Link to="/project"><span className={isPathMatch("/project") ? style.strikethrough : ""}>Project</span></Link>
              </li>
              <li    >
                <Link to="/contact"><span className={isPathMatch("/contact") ? style.strikethrough : ""}>Contact</span></Link>
              </li>
            </ol>
          </div>
          <div className={style.col_2}>
            <h1>
              Lets find solutions <br />
              together?
            </h1>
            <p>
              Use my contacts below if you need any help <br /> and let's work
              together... <br />
              <p className={style.email}>vivekkumar3198@gmail.com</p>
            </p>

            <Link to="/contact" className={style.contactBtn}>
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
