import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import api from '../../../services/api';

import './styles.css';


export default function ModalDelete(props) {
  const { id } = props
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function handleDeleteRegister() {
      console.log(id)
        try {
          const response = await api.delete(`/Produto/${id}`);
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
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            teste
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={handleDeleteRegister}>confirma</Button>
        </Modal.Footer>
      </Modal>
    );
}