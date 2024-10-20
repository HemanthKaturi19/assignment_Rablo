import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SingleEmpDetails from './components/SingleEmpDetails';
const App = () => {
  return (
    <div>
       <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/SingleEmpDetails/:id" element={<SingleEmpDetails />} />
        </Routes>
      </Router> 
    </div>
  )
}

export default App
