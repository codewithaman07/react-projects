import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [showCompleted, setShowCompleted] = useState(false);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSaveTodo = () => {
    if (todo.trim() !== '') {
      if (editIndex === -1) {
        setTodos([...todos, todo.trim()]);
      } else {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = todo.trim();
        setTodos(updatedTodos);
        setEditIndex(-1);
      }
      setTodo('');
    }
  };

  const handleEditTodo = (index) => {
    setTodo(todos[index]);
    setEditIndex(index);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleMarkComplete = (index) => {
    const completedTask = todos[index];
    setCompletedTodos([...completedTodos, completedTask]);
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 min-h-screen p-6 text-white">
        <h1 className="font-bold text-4xl mb-8 shadow-lg p-4 bg-white text-black rounded-lg">
          TaskFlow - Manage your Tasks
        </h1>
        <div className="bg-white text-black rounded-lg shadow-lg p-6 w-full max-w-md">
          <h2 className="font-bold text-2xl mb-4">{editIndex === -1 ? 'Add a Todo' : 'Edit Todo'}</h2>
          <div className="flex items-center space-x-2">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              className="flex-grow rounded-lg border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your todo"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSaveTodo();
                }
              }}
            />
            <button
              onClick={handleSaveTodo}
              className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg px-4 py-2 font-medium shadow-md"
            >
              {editIndex === -1 ? 'Add' : 'Update'}
            </button>
          </div>
        </div>
        <div className="bg-white text-black rounded-lg shadow-lg p-6 w-full max-w-md mt-6">
          <h2 className="font-bold text-2xl mb-4">Your Todos:</h2>
          {todos.length > 0 ? (
            <ul className="space-y-3">
              {todos.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 rounded-lg px-4 py-2 shadow-sm"
                >
                  <span>{item}</span>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleMarkComplete(index)}
                      className="text-green-500 hover:text-green-600 font-bold"
                    >
                      Done
                    </button>
                    <button
                      onClick={() => handleEditTodo(index)}
                      className="text-blue-500 hover:text-blue-600 font-bold"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTodo(index)}
                      className="text-red-500 hover:text-red-600 font-bold"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No todos yet. Add some!</p>
          )}
        </div>
        <div className="bg-white text-black rounded-lg shadow-lg p-6 w-full max-w-md mt-6">
          <div className="flex items-center space-x-2 mb-4">
            <input
              type="checkbox"
              id="show-completed"
              className="w-5 h-5"
              checked={showCompleted}
              onChange={toggleShowCompleted}
            />
            <label htmlFor="show-completed" className="font-bold text-lg">
              Show Completed Tasks
            </label>
          </div>
          {showCompleted && completedTodos.length > 0 ? (
            <ul className="space-y-3">
              {completedTodos.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 rounded-lg px-4 py-2 shadow-sm"
                >
                  <span className="line-through text-gray-500">{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            showCompleted && <p className="text-gray-500">No completed tasks yet.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
