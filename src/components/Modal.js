import React, { useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';

const Modal = ({ children, closeModal }) => {
  const refModal = useRef();

  const handleClick = useCallback(
    ({ target }) => {
      if (refModal.current !== target) return;
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
    <ModalOverlay ref={refModal} onClick={handleClick}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">{children}</div>
      </div>
    </ModalOverlay>
  );
};

export default Modal;

const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(128, 128, 128, 0.65);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
