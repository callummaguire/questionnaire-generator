import React from "react";
import { FaCog } from "react-icons/fa";

const Nav = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">Q</div>
        <div className="setting">
          <ul>
            <li>
              <span>
                <FaCog></FaCog>
              </span>
            </li>
            <li></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
