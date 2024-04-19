import React, { useState, useEffect } from 'react';
import './App.css';
import Demo from './Demo';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  // Properly clean up when the component unmounts
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27) handleCloseModal(); // Close modal on ESC key
    };

    document.addEventListener('keydown', handleEscape);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []); // Empty dependency array means this effect runs only on mount and unmount

  return (
    <div className="App">
      <button style={{color: 'white', background: 'black'}} onClick={handleOpenModal}>
        Open Modal
      </button>
      {isOpen && (
        <>
          <div className="backdrop" onClick={handleCloseModal}></div>
          <div className="modal" style={{ width: '500px', height: '500px' }}>
            <Demo />
            <button className="alertbutton" onClick={() => { alert("Hi, I'm clicked"); }}>
              Click me
            </button>
            <button onClick={handleCloseModal} style={{ position: 'absolute', top: 10, right: 10 }}>
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
