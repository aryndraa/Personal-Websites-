import "./components.css";
const Card1 = (props) => {
  const { backgroundImage, title } = props;

  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div>
      <div className="card-content" style={cardStyle}>
        <div className="card-title">
          <h3>{title}</h3>
          <a href="#">
            <i data-feather="play"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card1;
