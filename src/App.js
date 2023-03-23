import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import OneMovie from './Components/OneMovie';
import HomePage from './pages/HomePage';
import SingleMoviePage from './pages/SingleMoviePage';



function App() {
  return (
    <Router> 
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/:slug" element={<SingleMoviePage />} />
      </Routes>
    </Router>

  )
}

export default App