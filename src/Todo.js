import React from "react";

const Todo = props => {
  var task = props.todo.task;
  var isFinished = props.isFinished(props.todo);
  var classNames = require("classnames");
  var todoClass = classNames({
    Todo: true,
    "Flex-space": true,
    finished: isFinished,
    "not-finished": !isFinished
  });
  return (
    <div
      className={todoClass}
      onClick={() => {
        console.log(isFinished + todoClass);
        props.onClick(props.todo);
      }}
    >
      <div className="task-container">
        <strong>Task #{props.num}</strong>
        <br />
        {task}
      </div>
      <div className="deadline-container">
        <strong>Deadline</strong>
        <br />
        {props.todo.deadline}
      </div>
      <div
        className="Times"
        onClick={event => props.onDeleteClick(task, event)}
      >
        &times;
      </div>
    </div>
  );
};

const TodoList = props => {
  return props.todos.map((todo, index) => {
    return (
      <Todo
        num={index + 1}
        todo={todo}
        key={todo.task + index}
        onClick={props.onClick}
        onDeleteClick={props.onDeleteClick}
        isFinished={props.isFinished}
      />
    );
  });
};

export default TodoList;
