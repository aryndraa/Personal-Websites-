import React, { useEffect } from "react";
import "./pages.css";

import homeicon from "./img/home/WhatsApp Image 2023-12-31 at 15.33.43.jpeg";
import seruput from "./img//home/WhatsApp Image 2023-12-31 at 18.55.51.jpeg";
const Home = () => {
  useEffect(() => {
    feather.replace(); // Replace the <i> elements with Feather icons
  }, []);

  return (
    <div>
      <section className="home">
        <div className="content">
          <h2>Is Me</h2>
          <h1>
            Arya<span className="title">ndra</span>
          </h1>
          <h3>
            <span className="title">Front End</span> & Ui Design
          </h3>
          <div className="sosmed">
            <a href="https://www.instagram.com/aryandrxx/">
              <i data-feather="instagram"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100094456982384">
              <i data-feather="facebook"></i>
            </a>
            <a href="https://github.com/aryndraa">
              <i data-feather="github"></i>
            </a>
          </div>
          <div className="link">
            <a href="/my-portofolio">Portofolio</a>
          </div>
        </div>
      </section>
      <section className="home2">
        <div className="img">
          <img src={homeicon} alt="" />
        </div>
        <div className="content">
          <h2>
            Call Me <span className="title">Arya</span>
          </h2>
          <h3>Software Engineering Major</h3>
          <p>I am Stupid Student Trying To Be Smart </p>
          <div className="link">
            <a href="/about">More About Me</a>
            <a href="/skill">My Skill</a>
          </div>
        </div>
      </section>
      <section className="home3">
        <div className="content">
          <h3>
            My <span className="title">Business</span>
          </h3>
          <h2>Seruput Web Studio</h2>
          <p>Website Creation Service</p>
          <a href="https://www.instagram.com/seruputwebstudio/">
            Visit Sosial Media
          </a>
        </div>
        <div className="imag">
          <img src={seruput} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
