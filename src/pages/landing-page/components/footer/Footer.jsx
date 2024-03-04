import React from 'react';
import { Link } from 'react-router-dom';
import swiftlogo from '../../../../Asset/swiftlogo.png';
import Facebook from '../../../../Asset/Facebook.png';
import Twitter from '../../../../Asset/Twitter.png';
import Instagram from '../../../../Asset/Instagram.png';
import Telegram from '../../../../Asset/Telegram.png';

const Footer = () => {
  return (
    <section className="footer">
      <div>
        <div className="footer-logo">
          <img className="footer-logimg" src={swiftlogo} alt="" />
          <p className="swift-logotext">SwifDrop</p>
        </div>
        <p className="footer-text">
          SwifDrop gives you the best of food in a flash
        </p>
        <div className="social-media">
          <div className="social-image">
            <Link>
              <img src={Facebook} alt="" />
            </Link>
            <Link>
              <img src={Twitter} alt="" />
            </Link>
            <Link>
              <img src={Instagram} alt="" />
            </Link>
            <Link>
              <img src={Telegram} alt="" />
            </Link>
          </div>
          <p className="copyright">
            <span></span>Copyright 2024, All Rights Reserved by SwifDrop
          </p>
        </div>
      </div>
      <div>
        <p className="underline">LINKS</p>
        <div className="footer-links1">
          <Link className="footer-links">About Us</Link>
          <Link className="footer-links">FAQ</Link>
          <Link className="footer-links">Contact Us</Link>
          <Link className="footer-links">Career</Link>
        </div>
      </div>
      <div>
        <p className="underline">POLICY</p>
        <div className="footer-links2">
          <Link className="footer-links">Security</Link>
          <Link className="footer-links">Privacy</Link>
          <Link className="footer-links">Terms of use</Link>
          <Link className="footer-links">Return privacy</Link>
        </div>
      </div>
      <div>
        <p className="underline">Help</p>
        <div className="footer-links3">
          <Link className="footer-links">Membership</Link>
          <Link className="footer-links">Payments</Link>
          <Link className="footer-links">Account</Link>
          <Link className="footer-links">Shipping</Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
