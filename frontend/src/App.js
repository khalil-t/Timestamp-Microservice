import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState(null); // renamed state to "task"

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then((res) => res.json())
      .then((json) => setTask(json)) // save the response in "task"
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="App">
      <h1>Timestamp Microservice</h1>
      <hr />

      <div>
        <h2>Example Output:</h2>
        {task ? (
          <ul>
            <li><strong>Unix:</strong> {task.unix}</li>
            <li><strong>UTC:</strong> {task.utc}</li>
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
