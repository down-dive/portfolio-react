import React from 'react';

export default function Nav(props) {
  const {
    categories = [],
    contactSelected,
    setContactSelected
  } = props;

  return (
    <div classNameName="navigation">
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle"></input>

      <label for="navi-toggle" class="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item"><a href="#about" className="navigation__link" onClick={() => setContactSelected(false)}>
            About me
          </a></li>
          <li className="navigation__item"><a href="#" className="navigation__link"><span>02</span>Contact</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>Portfolio</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link"><span>04</span>Resume</a></li>
        </ul>
      </nav>

    </div>

  );
}
