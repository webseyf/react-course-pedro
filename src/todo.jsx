import { useState } from 'react';
function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const add = () => {
    setTodos([...todos, input]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        placeholder="add todo"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={add}>Add task</button>

      <ul>
        {todos.map((todo) => {
          return (
            <div>
              <span>
                <li>{todo}</li>
                <button
                  onClick={() => {
                    setTodos(todos.filter((item) => item !== todo));
                  }}
                >
                  X
                </button>
              </span>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
export default Todo;
