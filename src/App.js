import React from 'react';
// import ToDo from './containers/ToDo.js';
import './App.css';
// import Mapping from './Mapping'
// import ToDoItem from './ToDoItem.jsx';
// import Cricketdet from './Cricketde';
// import pathum from './assets/pathum.png';
// import sanga from './assets/sanga.png';
// import mali from './assets/mali.png';
// import CricketDemo from './cricketpct';
// import Hooks from './Hook';
import Card from './Card';

function App() {
  return (
    <div>
      {/* <ToDoItem taskName='Task01' btnName='Done' btnColor='red' />
      <ToDoItem taskName='Task02' btnName='ToDo' btnColor='green' /> */}
      {/* <Cricketdet Name="Pathum Nissanka" innScore="29" score="768" avePercent="29.8" image={pathum} altText="Pathum Nissanka" /> */}
      {/* <Cricketdet Name="Lasith malinga" innScore="39" score="968" avePercent="49.8" image={mali} altText="Lasith Malinga" /> */}
      {/* <Cricketdet Name="Kumar Sangakkara" innScore="59" score="1768" avePercent="32.8" image={sanga} altText="Kumar Sangakkara" /> */}
      {/* <CricketDemo photo={pathum} name="Pathum Nissanka" Score="395" inningScore="27.8" />
      <CricketDemo photo={sanga} name="Kumar Sangakkara" Score="3700" inningScore="97.8" />
      <CricketDemo photo={mali} name="LAsith Malinga" Score="395" inningScore="27.8" /> */}

      {/* <Hooks /> */}
      <Card/>
    </div>
  );
}


export default App;
