import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Modal.scss";
import PropTypes from "prop-types";

const App = props => {
  const [todoList, setTodoList] = useState([
    "This is a task",
    "This is a task too",
    "This is a task as well"
  ]);

  const [todoModal, setTodoModal] = useState("");
  const [showModal, setShowModal] = useState(false);

  const submitHandler = event => {
    event.preventDefault();
    var todoValue = document.getElementById("todoInput").value;
    if (!todoList.includes(todoValue)) {
      setTodoList([...todoList, todoValue]);
    } else {
      alert(
        "This todo already exists. See #" + (todoList.indexOf(todoValue) + 1)
      );
    }
    document.getElementById("todoInput").value = "";
  };

  const onClickHandler = todo => {
    setTodoModal(todo);
    setShowModal(true);
  };

  const onDeleteHandler = (todo, event) => {
    event.preventDefault();
    console.log(todo);
    var remainingTodos = todoList.filter(todoToDelete => {
      return todo !== todoToDelete;
    });
    setTodoList(remainingTodos);
  };

  const onDismissModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <div>
        <h1>Todo</h1>
      </div>
      <div className="TodoForm">
        <form>
          <input
            id="todoInput"
            placeholder="What do you need to do?"
            className="TodoInput"
          />
          <button
            type="submit"
            className="SubmitButton"
            onClick={event => submitHandler(event)}
          >
            Add #{todoList.length + 1}
          </button>
        </form>
      </div>
      <TodoList
        todos={todoList}
        onClick={onClickHandler}
        onDeleteClick={onDeleteHandler}
      />
      <TodoModal
        todo={todoModal}
        showModal={showModal}
        onDismissModal={onDismissModal}
      />
      <Footer />
    </div>
  );
};

const TodoList = props => {
  return props.todos.map((todo, index) => {
    return (
      <Todo
        num={index + 1}
        task={todo}
        key={todo + index}
        onClick={props.onClick}
        onDeleteClick={props.onDeleteClick}
      />
    );
  });
};

const Todo = props => {
  var display = "#" + props.num + " " + props.task;

  return (
    <div className={`Todo Flex-space`} onClick={() => props.onClick(display)}>
      <div>{display}</div>
      <div
        className="Times"
        onClick={event => props.onDeleteClick(props.task, event)}
      >
        &times;
      </div>
    </div>
  );
};

export default App;

const TodoModal = props => {
  if (!props.showModal) {
    return null;
  }

  return (
    <div id="modal" className="modal">
      <h2>Todo</h2>
      <div className="content">{props.todo}</div>
      <div className="actions">
        <button className="toggle-button" onClick={props.onDismissModal}>
          OK
        </button>
      </div>
    </div>
  );
};

const Footer = props => {
  const [currentPicture, setCurrentPicture] = useState({});

  const getNewPicture = () => {
    var random = Math.floor(Math.random() * 1500) + 1;
    fetch("https://xkcd.now.sh/" + random)
      .then(response => response.json())
      .then(json =>
        setCurrentPicture({ url: json.img, title: json.title, alt: json.alt })
      );
  };

  const buttonStyle = {
    padding: "10px",
    backgroundColor: "slategray",
    color: "#fff"
  };

  return (
    <div>
      <h1>Comic of the day</h1>
      <button style={buttonStyle} onClick={getNewPicture}>
        Refresh
      </button>
      <br />
      <br />
      <img src={currentPicture.url} alt={currentPicture.alt} />
      <div>{currentPicture.title}</div>
    </div>
  );
};

TodoModal.propTypes = {
  onDismissModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired
};
