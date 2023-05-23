import "./Card.css";

const Card = ({ number }) => {
  return (
    <div className="card-bg">
      <div className="card-num">{number}</div>
      <div className="card-info"></div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente enim
      optio asperiores architecto, cupiditate amet, molestias modi impedit
      labore qui accusamus, soluta minus dolorem iste nobis natus recusandae!
      Voluptate, excepturi?
    </div>
  );
};

export default Card;
