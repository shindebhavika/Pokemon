import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Wishlist from './components/wishlist';
import ThemeToggle from './components/ThemeToggle';
import BackToTopButton from './components/BackToTopButton';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>

  <Navbar/>

      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/my-fav" element={<Wishlist></Wishlist>}></Route>
        </Routes>
      </Router>

      <BackToTopButton/>
    </div>
  )
}

export default App
