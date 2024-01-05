import "./components.css";

const Card2 = (props) => {
  const { icon, title, sub } = props;

  return (
    <div>
      <div className="card2">
        <img src={icon} alt="" />
        <div className="content">
          <h3>{title}</h3>
          <p>{sub}</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
