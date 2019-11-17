import React from "react";
import logo from "../../assets/logo/logo-placeholder.png";
import { FaCog, FaQuestion } from "react-icons/fa";

const HomepageNav = () => {
  return (
    <header className="questionPageHeader">
      <nav>
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="navContent">
          <ul>
            <li>
              <a href="#">
                <FaCog />
              </a>
            </li>
            <li>
              <a href="#">
                <FaQuestion />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HomepageNav;
