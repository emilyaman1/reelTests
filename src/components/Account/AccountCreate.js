import React, { useState } from 'react';
import { addData } from '../../services/database';

function AccountCreate() {
  // State variables to store form data
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  // Function to handle form submission
  async function handleSubmit(event) {
    event.preventDefault();

    // Create new user object
    const newUser = {
      username: username,
      email: email
    };

    try {
      // Call addData function to add new user to database
      const response = await addData(newUser);
      console.log('User added successfully:', response);

      // Clear form fields after successful submission
      setUsername('');
      setEmail('');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  }

  return (
    <div>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={function(event) { setUsername(event.target.value) }} 
            required 
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={function(event) { setEmail(event.target.value) }} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AccountCreate;
