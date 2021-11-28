import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import TodoList from './components/Todo-List/TodoList';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    /* Doing this because the todo list has absolute positioning and so when it's longer than the screen height
    it overflows and the background is white and I couldn't figure out a way to make the main height responsive to the todo list */
    if (darkMode) {
      document.body.style.backgroundColor = 'hsl(235, 21%, 11%)';
    } else {
      document.body.style.backgroundColor = 'hsl(236, 33%, 92%)';
    }
  }, [darkMode])

  const handleThemeChange = () => {
    setDarkMode(darkMode => !darkMode);
  }

  return (
    <div className="App">
      <Header handleThemeChange={handleThemeChange} darkMode={darkMode} />
      <main className={darkMode === true ? '' : 'main-light'}>
        <div className="main-wrapper">
          <TodoList darkMode={darkMode} />
        </div>
      </main>
    </div>
  );
}

export default App;
