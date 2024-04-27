import React, { useState, useEffect } from 'react';

function Header() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={scroll > 0 ? "header scrolled" : "header"}>
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">
        <span className="bg-gradient-to-r from-black to-transparent text-transparent bg-clip-text">Web</span><br />
        <span className="bg-gradient-to-r from-black to-transparent text-transparent bg-clip-text">Development</span>
      </h1>
      <div className="btn-container">
        <button className="btn-dark flex items-center">Contact Me <i className="fa-solid fa-phone"></i></button>
        <button className="btn-light flex items-center">Portfolio <i className="fa-solid fa-arrow-right"></i></button>
      </div>
      <p className="max-w-md font-medium">Passionate Website Developer with 4+ Years of Experience</p>
      <img src="./assert/soft-girl-aesthetic-pastel-tones-removebg-preview.png" alt="photo" className="user-img" />
    </div>
  );
}

export default Header;
