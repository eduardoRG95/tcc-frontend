import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import api from '../../../services/api';

import './styles.css';

export default function ModalDelete(props) {
    const { id } = props
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  
      async function handleDeleteRegister() {
          try {
            const response = await api.delete(`/Vendedor/${id}`);
          } catch(err) {
            alert('Erro ao deletar dados');
          } 
          
      }
  
      return (
          <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Deletar Vendedor  <strong className="id-vendedor">{id}</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Você tem certeza que gostaria de deletar esse vendedor?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-danger" onClick={props.onHide}>Cancelar</Button>
            <Button  onClick={handleDeleteRegister}>Confirmar</Button>
          </Modal.Footer>
        </Modal>
      );
  }