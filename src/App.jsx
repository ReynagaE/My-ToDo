import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import './components/Drawer.css';
import 'animate.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/login' element={<h1>Login</h1>} />
        <Route path='/register' element={<h1>Register</h1>} />
        <Route path='/tasks' element={<h1>Tasks page</h1>} />
        <Route path='/add-task' element={<h1>New Task</h1>} />
        <Route path='/tasks/:id' element={<h1>Update Task</h1>} />
        <Route path='/profile' element={<h1>Profile</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;