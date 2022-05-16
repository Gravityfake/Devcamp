import "./App.css";
import TodoList from "./Todolist";
import { useState } from "react";

function App() {
  let [todo, setTodo] = useState([]);

  let today = new Date();

  const enterComment = (e) => {
    if (e.keyCode === 13 && e.target.value === "") {
      alert("กรุณากรอกข้อมูล");
    } else if (e.keyCode === 13 && e.target.value !== "") {
      //console.log(todo);
      let listTodo = [...todo];
      listTodo.push({
        bodyTodo: e.target.value,
        dateTodo:
          today.getDate() +
          "-" +
          parseInt(today.getMonth() + 1) +
          "-" +
          today.getFullYear(),
      });
      setTodo(listTodo);
      e.target.value = "";
    }
  };

  function deleteTodo(x) {
    let del = todo.filter((y) => y.bodyTodo !== x.bodyTodo);
    setTodo(del);
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Todo List</h2>

      {todo.map((x) => (
        <>
          <TodoList bodyTodo={x.bodyTodo} dateTodo={x.dateTodo} />
          <button style={{ marginLeft: "80px" }} onClick={() => deleteTodo(x)}>
            Delete
          </button>
        </>
      ))}
      <br />
      <input
        style={{ marginLeft: "80px" }}
        type="text"
        onKeyUp={enterComment}
      />
    </div>
  );
}

export default App;