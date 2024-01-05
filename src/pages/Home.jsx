import React, { useEffect } from "react";
import "./pages.css";
import Card2 from "../components/Card2";
import homeicon from "./img/home/WhatsApp Image 2023-12-31 at 15.33.43.jpeg";
import seruput from "./img//home/logo.jpeg";
import terminalSVG from "./img/home/command-line.png";
import webSVG from "./img/home/mobile.png";
import dataSVG from "./img/home/analytics.png";
const Home = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="body">
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
        <div className="personal-img">
          <img src={homeicon} alt="" />
        </div>
        <div className="content">
          <h2>
            Call <span className="title">Me</span>
          </h2>
          <h1>
            <span className="title">Arya</span> Or Andra
          </h1>
          <p>Student majoring in software engineer</p>
          <a href="/about">More About Me</a>
        </div>
      </section>
      <section className="home3">
        <h2>
          My <span className="title">Generalist</span>
        </h2>
        <div className="list">
          <Card2
            icon={terminalSVG}
            title="Terminal Skill"
            sub="Can make simple terminal logic with c++, Python, and more"
          />
          <Card2
            icon={webSVG}
            title="WEB Skill"
            sub="Expert in Front End WEB Developer and able to create responsive website"
          />
          <Card2
            icon={dataSVG}
            title="Data Visual"
            sub="Can create data visualizations that are easy to read using Python matplotlip library"
          />
        </div>
        <div className="link">
          <a href="/skill">Check About My SKill</a>
        </div>
      </section>
      <section className="home4">
        <div className="content">
          <h3>My Business</h3>
          <h2>
            Seruput <span className="title">Web Studio</span>
          </h2>
          <p>
            Website creation services with elegant designs and prices under 1
            million Rupiah
          </p>
          <div className="link">
            <a href="https://www.instagram.com/seruputwebstudio/">
              <i data-feather="instagram"></i>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=6289528005812&text&type=phone_number&app_absent=0">
              <i data-feather="phone"></i>
            </a>
          </div>
        </div>
        <div className="img-slebew">
          <img src={seruput} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
