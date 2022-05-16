import React from "react";

const TodoList = (props) => {
  return (
    <div>
      <p>{props.bodyTodo}</p>
      <p>Date: {props.dateTodo}</p>
    </div>
  );
};

export default TodoList;
