import React, { useEffect, useRef, useCallback } from 'react';

const Modal = ({ children, closeModal }) => {
  const refModal = useRef();

  const handleClick = useCallback(
    ({ target }) => {
      if (refModal.current !== target) {
        return;
      }
      closeModal();
    },
    [closeModal],
  );

  const closeModalKeydown = useCallback(
    e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    },
    [closeModal],
  );

  useEffect(() => {
    window.addEventListener('keydown', closeModalKeydown);
    document.body.style.overflow = 'hidden';

    return function cleanup() {
      window.removeEventListener('keydown', closeModalKeydown);
      document.body.style.overflow = 'auto';
    };
  }, [closeModalKeydown]);

  return (
    <div
      className="position-fixed d-flex justify-content-center align-items-center overlay w-100 h-100"
      ref={refModal}
      onClick={handleClick}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
