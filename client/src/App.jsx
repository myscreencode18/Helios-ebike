import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PreOrderList from './admin/PreOrderList';
import HomePage from './HomePAge';
import AdminAccess from './admin/AdminAccess';

const App = () => {
  return (
  <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
        path="/admin/preorders"
        
        element={
           <AdminAccess>
        <PreOrderList />
        </AdminAccess>
        } />
      </Routes>
    </Router>
 

  )
}

export default App