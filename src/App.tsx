import React from 'react';
import {BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

import AsyncComponent from './components/AsyncComponent';
// import Home from './pages/Home'

const AsyncHome = AsyncComponent(() => import("./pages/Home"));
const Hello = AsyncComponent(() => import("./pages/Hello"));

function App() {
  return (
    <Router>
      <div className='link-header'>
        <Link to="/">home</Link>
        <Link to="/hello">hello</Link>
      </div>
      <Routes>
        <Route path="/" element={<AsyncHome />} />
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </Router>
  );
}

export default App;
