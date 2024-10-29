import { useState } from 'react';
import State from './state';
import './App.css';
import Todo from './todo';
import Effect from './effects';

function App() {
  return (
    <>
      <div className="App">
        <State />
        <hr />
        <Todo />
        <hr />
        <Effect />
        <hr />
      </div>
    </>
  );
}

export default App;
