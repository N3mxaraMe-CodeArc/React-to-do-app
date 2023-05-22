import "./Cricketde.css";

function Cricketdet({ Name, innScore, score, avePercent, image , altText }) {
  return (
    <div
      className="blockDiv"
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        marginLeft:'27rem'
      }}
    >
      <img
        style={{
          alignItems: "flex-start",
          paddingRight: "40px",
          height: "130px",
          width: "130px",
        }}
        src={image}
        alt={altText}
      />
      <div>
        <h2 style={{ fontFamily: "inter", textTransform: "uppercase" }}>
          <b>{Name}</b>{" "}
          <span style={{ fontSize: "12px", textTransform: "lowercase" }}>
            lhb
          </span>
        </h2>
        <h2 style={{ fontSize: "20px" }}>
          <i>
            <b>SCORE : {score}</b>
          </i>
        </h2>
        <div style={{ display: "flex" }}>
          <h5>Innings {innScore}</h5>
          <h5 style={{ marginLeft: "25px" }}>Average {avePercent}</h5>
        </div>
      </div>
    </div>
  );
} 

export default Cricketdet;
