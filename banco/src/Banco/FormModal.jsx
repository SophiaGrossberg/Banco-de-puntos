import React from 'react';
import "../styles/modal.css";

const FormModal = ({isOpen, onClose}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" 
      // onClick={(e) => e.stopPropagation()}
      >
        <h3>¿Por qué aumentó en uno?</h3>
        <form>
          <input type="text" placeholder="Escribe aquí..." autoFocus />
          <div className="modal-actions">
            <button type="button" onClick={onClose}>Cerrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal