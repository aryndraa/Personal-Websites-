import "./pages.css";
import school from "./img/about/icon.png";
import Card1 from "../components/Card1";
import svg1 from "./img/about/cycling.png";
import svg3 from "./img/about/ux.png";
import svg2 from "./img/about/coding.png";
import svg4 from "./img/about/reading-book.png";
import aboutIcon from "./img/about/WhatsApp_Image_2024-01-06_at_23.56.08-removebg-preview.png";
import Card2 from "../components/Card2";
const About = () => {
  return (
    <div className="body">
      <section className="about">
        <div className="container">
          <div className="img">
            <img src={aboutIcon} alt="" />
          </div>
          <div className="content">
            <h2>I Putu Mahendra Arya Valentino</h2>
            <div className="person">
              <p>
                Hello everyone, you can call me Arya. The beginner Programmer
                student from Bali who dreams of becoming a Magister Computer
                Science
              </p>
              <div className="detail">
                <h3>
                  <span className="title">Personal</span> Details
                </h3>
                <div className="detail-list">
                  <ul>
                    <li>
                      <span className="title">Name</span>: Arya
                    </li>
                    <li>
                      <span className="title">Birthdate</span>: 11-02-2008
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <span className="title">Address</span>: Bali, Denpasar
                    </li>
                    <li>
                      <span className="title">Instagram</span>:
                      <a href="https://www.instagram.com/aryandrxx/">
                        @aryandrxx
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about3">
        <h2>Leisure Time</h2>
        <div className="list">
          <Card2
            title="Cycling"
            icon={svg1}
            sub="Cycling makes me feel fitter and i can travel in Bali"
          />
          <Card2
            title="Coding"
            icon={svg2}
            sub="Is there realy a way to spend time other than coding?"
          />
          <Card2
            title="Design"
            icon={svg3}
            sub="Design websites i prefer to do rather than drawing"
          />
          <Card2
            title="Reading"
            icon={svg4}
            sub="Sometimes reading books is quite interesting, for example books like Comics"
          />
        </div>
      </section>
      <section className="about2">
        <div className="content">
          <h4>My School</h4>
          <h3>
            <span className="title">Vocational</span> School
          </h3>
          <h2>SMK TI BALI GLOBAL DENPASAR</h2>
          <a href="https://smkti-baliglobal.sch.id/">Visit</a>
        </div>
        <div className="img">
          <img src={school} alt="" />
        </div>
      </section>
    </div>
  );
};

export default About;
