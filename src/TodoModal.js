import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const TodoModal = props => {
  var classNames = require("classnames");
  var isFinished = props.isFinished(props.todo);
  var buttonClass = classNames({
    "finish-todo": true,
    "finished-icon": isFinished,
    "not-finished-icon": !isFinished
  });
  return props.showModal ? (
    <div id="modal" className="modal">
      <div className={`Flex-space modal-header`}>
        <h2>Todo</h2>
        <FontAwesomeIcon
          className={buttonClass}
          icon={faCheckCircle}
          onClick={() => {
            console.log(isFinished);
            isFinished
              ? props.onResetTodo(props.todo)
              : props.onFinishTodo(props.todo);
          }}
        />
      </div>
      <div className="content">{props.todo.task}</div>
      <div className="actions">
        <button className="toggle-button" onClick={props.onDismissModal}>
          Close
        </button>
      </div>
    </div>
  ) : null;
};

export default TodoModal;
