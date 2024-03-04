import React from 'react';
import iphone from '../../../../Asset/iphone 15 Pro.png';
import AppleStore from '../../../../Asset/App Store.png';
import PlayStore from '../../../../Asset/Play Store.png';
import { Link } from 'react-router-dom';

const Download = () => {
  return (
    <section className="download">
      <img src={iphone} alt="" />
      <div className="download-child">
        <h1 className="download-text1">Download SwifDrop</h1>
        <p className="download-text2">
          Enjoy swift deliveries on anything you order!
        </p>
        <div className="download-links">
          <Link>
            <img className="apple" src={AppleStore} alt="" />
          </Link>
          <Link>
            <img className="play-store" src={PlayStore} alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Download;
