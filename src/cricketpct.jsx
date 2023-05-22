function CricketDemo({photo,name,Score,inningScore}) {
    return ( 
        <div>
            <img src={photo} alt="" />
            <h2>{name}</h2>
            <h3>Score : {Score}</h3>
            <h5>Innings : {inningScore}</h5>
        </div>
     );
}

export default CricketDemo;