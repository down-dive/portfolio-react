import React from 'react';

export default function Nav() {
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle"></input>

      <label for="navi-toggle" class="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item"><a href="#about" className="navigation__link"><span>01</span>About me</a></li>
          <li className="navigation__item"><a href="#contact" className="navigation__link"><span>02</span>Contact</a></li>
          <li className="navigation__item"><a href="#projects" className="navigation__link"><span>03</span>Projects</a></li>
          <li className="navigation__item"><a href="#resume" className="navigation__link"><span>04</span>Resume</a></li>
        </ul>
      </nav>
    </div>
  );
}
