import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import api from '../../../services/api';

import './styles.css';


export default function ModalDeletar(props) {

    const id = props.id

    const [show, setShow] = useState(false);

    async function handleDeleteRegister() {
        try {
          const response = await api.delete(`/Usuario/${id}`);    
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
            Remover cliente  <strong className="id-produto">{ id }</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Você tem certeza que gostaria de excluir esse cliente?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-danger" onClick={props.onHide}>Cancelar</Button>
          <Button  onClick={handleDeleteRegister}>Confirmar</Button>
        </Modal.Footer>
      </Modal>
    );
}