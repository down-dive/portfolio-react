import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <footer className='footer'>
      <div className="row">
        <div className="col-1-of-2" >
          <div className="footer-text">
            <h3>2021 Yevgeniya Terlyuk</h3>
          </div>
        </div>
        <div className="col-1-of-2" >
          <div className='footer-links'>
            <div className="row">
              <div className="col-1-of-2" >
                <p className='footer-linkedin'>
                  <SocialIcon url="https://linkedin.com/in/yevgeniya-terluyk-034013179/" bgColor="#fff" fgColor="#040605" />
                </p>
              </div>
              <div className="col-1-of-2" >
                <p >
                  <SocialIcon url="https://github.com/down-dive" bgColor="#fff" fgColor="#040605" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;