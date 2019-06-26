import React, { useState } from "react";
import moment from "moment";
import logo from "./logo.svg";
import "./App.css";
import "./Modal.scss";
import PropTypes from "prop-types";
import TodoList from "./Todo.js";
import TodoModal from "./TodoModal.js";
import SeedData from "./TodoSeedData.js";
import Footer from "./Footer.js";

const App = props => {
  const [todoList, setTodoList] = useState(SeedData);
  const [todoModal, setTodoModal] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [finishedTodos, setFinishedTodos] = useState([]);

  const todaysTodos = todoList.filter(
    td => td.deadline === moment(Date.now()).format("YYYY-MM-DD")
  );

  const submitHandler = event => {
    event.preventDefault();
    var task = document.getElementById("todoInput").value;
    var deadline = document.getElementById("deadlineInput").value;
    setTodoList([...todoList, { task: task, deadline: deadline }]);
    document.getElementById("todoInput").value = "";
  };

  const finishTodo = todo => {
    var newFinishedTodos = finishedTodos.concat(todo);
    var newTodos = todoList.filter(t => t !== todo);
    console.log(newTodos);
    setFinishedTodos(newFinishedTodos);
    setTodoList(newTodos);
    setShowModal(false);
  };

  const resetTodo = todo => {
    var newFinishedTodos = finishedTodos.filter(t => t !== todo);
    setFinishedTodos(newFinishedTodos);
    setTodoList(todoList.concat(todo));
    setShowModal(false);
  };

  const isFinished = todo => {
    return finishedTodos.includes(todo);
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
          <input id="deadlineInput" type="date" className="DateInput" />
          <button
            type="submit"
            className="SubmitButton"
            onClick={event => submitHandler(event)}
          >
            Add #{todoList.length + 1}
          </button>
        </form>
      </div>
      <div className="Flex-space">
        <div style={{ minWidth: "50%" }}>
          <h2>Today</h2>
          {todaysTodos.length === 0 ? (
            <div>You don't have anything to do today.</div>
          ) : (
            <TodoList
              todos={todaysTodos}
              onClick={onClickHandler}
              onDeleteClick={onDeleteHandler}
              isFinished={isFinished}
            />
          )}
        </div>
        <div style={{ minWidth: "50%", marginLeft: "100px" }}>
          <h2>Done</h2>
          {finishedTodos.length === 0 ? (
            <div>You haven't done anything yet.</div>
          ) : (
            <TodoList
              todos={finishedTodos}
              onClick={onClickHandler}
              onDeleteClick={onDeleteHandler}
              isFinished={isFinished}
            />
          )}
        </div>
      </div>

      <h2>All</h2>
      {todoList.length === 0 ? (
        <div>You don't have anything to do.</div>
      ) : (
        <TodoList
          todos={todoList}
          onClick={onClickHandler}
          onDeleteClick={onDeleteHandler}
          isFinished={isFinished}
        />
      )}
      <TodoModal
        todo={todoModal}
        onFinishTodo={finishTodo}
        isFinished={() => isFinished(todoModal)}
        onResetTodo={resetTodo}
        showModal={showModal}
        onDismissModal={onDismissModal}
      />
      <Footer />
    </div>
  );
};

export default App;

TodoModal.propTypes = {
  onDismissModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired
};
