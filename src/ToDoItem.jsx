import { Button } from "@chakra-ui/react";
import "./TODo.css";

function ToDoItem() {

  const TaskName = 'To-Do Item 1'
  const BtnName = 'Btn Name'
  return (
    <div style={{margin:"50px"}}>
      <h3 style={{ marginBottom: "0" }}><span> Task : </span>{TaskName}</h3>
      <Button className="btn"
        size="md"
        height="48px"
        width="200px"
        borderWidth="2px" 
        borderColor="green.500"
      >
        {BtnName}
      </Button>
      <h3>Task 02</h3>
      <Button className="btn"
        size="md"
        height="48px"
        width="200px"
        borderWidth="2px" 
        borderColor="green.500"
      >
        ToDo
      </Button>
    </div>
  );
}

export default ToDoItem;
