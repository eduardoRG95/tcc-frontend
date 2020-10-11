import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import api from '../../../services/api';

import './styles.css';


export default function ModalDelete(props) {
    const { id } = props

    async function handleDeleteRegister() {
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
            Deletar produto  <strong className="id-produto">{id}</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Você tem certeza que gostaria de excluir esse produto?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-danger" onClick={props.onHide}>Cancelar</Button>
          <Button  onClick={props.onHide && handleDeleteRegister}>Confirmar</Button>
        </Modal.Footer>
      </Modal>
    );
}