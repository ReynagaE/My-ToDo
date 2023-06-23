import './Drawer.css'
import React from 'react';
import 'animate.css'
function Drawer ({ isOpen }) {
  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
          <ul>
            <p>Settings</p>
            <p>Help</p>
            <p>Sign Out</p>
          </ul>
    </div>
  );
};

export default Drawer;