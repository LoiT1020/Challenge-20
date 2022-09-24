import React from "react";

function Nav() {
  return (
    <header>
      <h1>
        <a href="./index.html">My Profestional Profile</a>
      </h1>

      <nav>
        <ul>
          <li className="has-children">
            <a href="#my-performance">My Perfomance</a>
            <ul className="sub-nav">
              <li>
                <a href="#etc"> Resume</a>
              </li>
              <li>
                <a href="#Skill-Experience">Porfolio</a>
              </li>
            </ul>
          </li>
          <li>
            <a>About Me</a>
          </li>
          <li>
            <a><span>Contact</span></a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
