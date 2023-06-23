import './App.css';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from './components/Drawer';
import React, { useState } from 'react';
import './components/Drawer.css';
import { TaskList } from './components/TaskList';
import 'animate.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className='taskHeader'>
        <Bars3Icon className='drawer-button' onClick={handleMenuToggle} />
        <h1 className='header-text'>Task Manager</h1>
      </header>
      
      <div className='divEse'>
        <Drawer className='animate__animated animate__slideOutLeft' isOpen={menuOpen}/>
        <TaskList />
      </div>
    </>
  );
}

export default App;