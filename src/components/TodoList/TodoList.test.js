import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import ThemeContextProvider from '../../contexts/ThemeContext';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeContextProvider>
      <TodoList />
    </ThemeContextProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
