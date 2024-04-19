// CustomModal.js
import React from 'react';

function CustomModal({ open, onClose, children }) {
    if (!open) return null; // Doesn't render if not open

    return (
        <dialog style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1050 // Ensure it's higher than other elements
        }}>
            <div style={{ background: 'white', padding: 20 ,width:'500px', height:'500px' }}>
                {children}
                <button onClick={onClose} style={{ position: 'absolute', top: 10, right: 10 }}>
                    Close
                </button>
            </div>
        </dialog>
    );
}

export default CustomModal;
