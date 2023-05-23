import "./Card.css";

const Card = ({ name,Age,image }) => {
  return (
    <div className="card-bg">
        <img src={image} alt="" />
        <div><h2>{name}</h2></div>
        <div><h2>Age : {Age}</h2></div>
        <div><h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, doloremque.</h5></div>
    </div>
  );
};

export default Card;
