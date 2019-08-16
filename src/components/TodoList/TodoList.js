import React, { useContext, useState, useLayoutEffect } from 'react';
import TodoApiService from '../../services/TodoApiService';
import { ThemeContext } from '../../contexts/ThemeContext';
import TodoForm from '../TodoForm/TodoForm';
import Todo from '../Todo/Todo';
import './TodoList.css';

const TodoList = ({ job_id }) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const [todos, setTodos] = useState([]);

  useLayoutEffect(() => {
    TodoApiService.getTodos(job_id).then(todos => setTodos(todos));
  }, [job_id]);

  const addTodo = (title, job_id, status = false) => {
    const data = {
      title,
      job_id,
      status
    };
    TodoApiService.postTodo(data).then(() => {
      TodoApiService.getTodos(job_id).then(todos => setTodos(todos));
    });
  };

  const updateTodo = (_id, status) => {
    const data = {
      _id,
      status
    };
    TodoApiService.updateTodo(data).then(() => {
      TodoApiService.getTodos(job_id).then(todos => {
        setTodos(todos);
      });
    });
  };

  const deleteTodo = id => {
    TodoApiService.deleteTodo(id).then(() => {
      TodoApiService.getTodos(job_id).then(todos => setTodos(todos));
    });
  };

  return (
    <div
      className="todo-list"
      style={{ background: theme.ui, color: theme.color }}
    >
      <h4>Todo List</h4>
      <div
        className="todos-container"
        style={{ background: theme.ui, color: theme.black }}
      >
        {todos.map((todo, idx) => (
          <Todo
            key={idx}
            idx={idx}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo} job_id={job_id} />
    </div>
  );
};

export default TodoList;
