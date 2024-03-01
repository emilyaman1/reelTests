import React, { useState } from 'react';
import { fetchData} from '../../services/database';

function UserSearch() {
  // State variables to store form data and search results
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      // Call fetchData function to retrieve user data
      const users = await fetchData();

      // Find user by username
      const user = users.find(user => user.username === username);

      if (user) {
        // If user found, update email state with user's email
        setEmail(user.email);
        setError('');
      } else {
        // If user not found, display error message
        setEmail('');
        setError('User not found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
    }
  }

  return (
    <div>
      <h2>User Search</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={event => setUsername(event.target.value)} 
            required 
          />
        </div>
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      {email && <p>Email: {email}</p>}
    </div>
  );
}

export default UserSearch;
