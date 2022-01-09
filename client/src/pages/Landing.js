import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

import React from 'react';

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="job" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>Hello world</p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
      </div>
      <img src={main} alt="job hunt" className="img main-img" />
    </main>
  );
};

export default Landing;
