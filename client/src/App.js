import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState([])
  const handleClick = () => {
    fetch('/users/about')
      .then(res => res.json())
      .then(users => setData(users))
  }
    return (
      <div className="App">
        <h1>Users</h1>
        {data.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
        <button
          onClick={handleClick}
        >
          button
        </button>
      </div>
    );
}

export default App;