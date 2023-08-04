import React, { useState } from 'react';

const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [id, setid] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(-1); // -1 means no task is currently hovered

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>My Todos</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const item = {
                  string: inputValue,
                  id: id,
                };
                setTodos([...todos, item]);
                setInputValue('');
                setid((id) => id + 1);
              }
            }}
            placeholder="What do you need done?"
          />
        </li>

        {todos.map((item, index) => (
          <div key={item.id}>
            <ul>
              <li
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                <span>{item.string}</span>
                {hoveredIndex === index && (
                  <i className="fas fa-trash-alt" onClick={() => handleDeleteTodo(index)} />
                )}
              </li>
            </ul>
          </div>
        ))}
      </ul>
      <div> {todos.length} task </div>
    </div>
  );
};

export default TodoList;
