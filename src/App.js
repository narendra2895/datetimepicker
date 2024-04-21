import React, { useState, useRef } from 'react';
import './App.css';
import Demo from './Demo';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  // Open modal function simplifies state management
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  // Close modal function handles both dialog reference and state
  const handleCloseModal = () => {
    
    setIsOpen(false);
  };

  return (
    <div className="App">
      <button style={{ color: 'white', background: 'black' }} onClick={handleOpenModal}>
        Open Modal
      </button>
      {/* Backdrop controlled by isOpen state, closes modal on click */}
      {isOpen && <div className="backdrop" onClick={handleCloseModal}></div>}
      {/* Dialog managed by useRef and controlled by isOpen state */}
      <dialog  className="" style={{ width: '500px', height: '500px' }} open={isOpen}>
        <Demo />
        <button className="alertbutton" onClick={() => alert("Hi, I'm clicked")}>
          Click me
        </button>
        <button onClick={handleCloseModal} style={{ position: 'absolute', top: 10, right: 10 }}>
          Close
        </button>
      </dialog>
    </div>
  );
}

export default App;
