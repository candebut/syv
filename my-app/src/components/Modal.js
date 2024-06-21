import React from 'react';
const Modal = ({ setIsOpen, children }) => {
    return (
        <>
            <div className="modal-overlay" onClick={() => setIsOpen(false)}></div>
            <div className="modal">
                <button className="close-button" onClick={() => setIsOpen(false)}>
                    &times;
                </button>
                <div className="modal-content">{children}</div>
            </div>
        </>
    );
};

export default Modal;
