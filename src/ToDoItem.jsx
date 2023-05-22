import { Button } from "@chakra-ui/react";
import "./TODo.css";

function ToDoItem({ taskName, btnName, btnColor }) {
  return (
    <div style={{ margin: "50px" }}>
      <h3 style={{ marginBottom: "0" }}>
        <span> Task : </span>
        {taskName}
      </h3>
      <Button
        style={{ color: btnColor }}
        className="btn"
        size="md"
        height="48px"
        width="200px"
        borderWidth="2px"
        borderColor="green.500"
      >
        {btnName}
      </Button>
    </div>
  );
}

export default ToDoItem;
