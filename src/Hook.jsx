import { useState, useEffect } from "react";

function Hooks() {
  const [BodyText, setBodyText] = useState("Users");

  useEffect(() => {
    console.log("Use effect is Working");
  })
 
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setBodyText("Users");
          }}
        >
          User
        </button>
        <button
          onClick={() => {
            setBodyText("Posts");
          }}
        >
          Post
        </button>
        <button
          onClick={() => {
            setBodyText("AboutUS");
          }}
        >
          About us
        </button>
      </div>
      <h1>{BodyText}</h1>
    </div>
  );
}

export default Hooks;
