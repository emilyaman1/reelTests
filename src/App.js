import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './components/Search/Search';
import Details from './components/Search/Details';
import AccountCreate from './components/Account/AccountCreate';
import UserSearch from './components/Account/UserSearch';
import Home from './components/Home/Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact 
            path="/"
            element={<Home />}
          />
          <Route
            exact
            path="/details/movieId/:id"
            element={<Details />}
            />
            <Route
            exact
            path="/search"
            element={<Search />}
            />
            <Route
            exact
            path="/user-search"
            element={<UserSearch />}
            />
            <Route
            exact
            path="/create-account"
            element={<AccountCreate />}
            />

        </Routes>
      </BrowserRouter>
    </>
  )
    
}

export default App;