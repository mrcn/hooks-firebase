import React, { Component, useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(42);
  const [location, setLocation] = useState('park ridge');
  const [todo, setTodo] = useState([{ text: 'sports training app ux'}]);
  
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

    <p> {setTodo} </p>
      
    </div>
  );
}

export default App;
