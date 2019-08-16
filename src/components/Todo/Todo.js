import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Todo.css';

const Todo = ({ todo, updateTodo, deleteTodo }) => {
  return (
    <div
      className="todo"
      style={{
        textDecoration: todo.done_status ? 'line-through' : '',
        fontSize: '12px'
      }}
    >
      {todo.title}

      <div>
        <button
          onClick={() => updateTodo(todo._id, !todo.status)}
          className="todo-btn"
        >
          {todo.status ? (
            <FontAwesomeIcon icon="check-square" color="#ffffff" size="1x" />
          ) : (
            <FontAwesomeIcon icon="square" color="#ffffff" size="1x" />
          )}
        </button>
        <button onClick={() => deleteTodo(todo._id)} className="todo-btn">
          <FontAwesomeIcon icon="trash-alt" color="#ffffff" size="1x" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
