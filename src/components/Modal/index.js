import React from "react"
import {Container, ModalBody} from "./styled"

export default ({status, setStatus, children}) => {
  const handleModalClick = (e) => {
    if(e.target.classList.contains('modalBg')) {
      setStatus(false)

    }
  }
  return ( //Container vai englobar toda a tela como sombra preta
    <Container 
      className="modalBg"
      status={status} 
      onClick={handleModalClick}>
      <ModalBody>
        {children}
      </ModalBody>
    </Container>
  );
}