import React from "react";


function Nav(props) {
  const { contactSelected, setContactSelected } = props;
  return (
    <header>
      <h1>
        <a href="./index.html">My Profestional Profile</a>
      </h1>

      <nav>
        <ul>
          <li className="has-children">
            <a href="#my-performance" onClick={() => setContactSelected(false)}>My Perfomance</a>
            <ul className="sub-nav">
              <li>
                <a href="#etc" onClick={() => setContactSelected(false)}> Resume</a>
              </li>
              <li>
                <a href="#Skill-Experience" onClick={() => setContactSelected(false)} >Porfolio</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#education" onClick={() => setContactSelected(false)}>Education</a>
          </li>
          <li>
            <a href="#about" onClick={() => setContactSelected(false)}>About Me</a>
          </li>
          <li className={` ${contactSelected && 'navActive'}`}>
            <a><span onClick={() => setContactSelected(true)}>Contact</span></a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
