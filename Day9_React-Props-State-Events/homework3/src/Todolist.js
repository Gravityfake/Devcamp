import React from "react";

const TodoList = (props) => {
  return (
    <div style={{ marginRight: "122px", display: "inline" }}>
      <p>{props.bodyTodo}</p>
      <p>Date: {props.dateTodo}</p>
    </div>
  );
};

export default TodoList;