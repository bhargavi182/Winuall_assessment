import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Users</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id} className="user-item">
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
