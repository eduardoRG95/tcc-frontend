import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import api from '../../../services/api';

import './styles.css';

export default function ModalInsert(props) {
    const [nome, setNome] = useState('')
    const [valor, setValor] = useState('')
    const [quantidade, setQuantidade] = useState('')

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            nome,
            valor,
            quantidade
        }
        const response = await api.put('/produto', data);
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Title id="contained-modal-title-vcenter">
                tese
                <Modal.Header closeButton></Modal.Header>
            </Modal.Title>
            <Modal.Body>
                <Form onSubmit={handleRegister}>
                    <Form.Group controlId="formGroupNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control 
                            type="Nome"
                            onChange={e => setNome(e.target.value)} 
                            placeholder="Nome" />
                    </Form.Group>
                    <Form.Group controlId="formGroupValor">
                        <Form.Label>Valor</Form.Label>
                        <Form.Control 
                            type="Valor" 
                            onChange={e => setValor(e.target.value)} 
                            placeholder="Valor" />
                    </Form.Group>
                    <Form.Group controlId="formGroupQuantidade">
                        <Form.Label>Quantidade</Form.Label>
                        <Form.Control 
                            type="Quantidade"
                            onChange={e => setQuantidade(e.target.value)} 
                            placeholder="Quantidade" />
                    </Form.Group>
                    <Button type="submit">Salvar</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}