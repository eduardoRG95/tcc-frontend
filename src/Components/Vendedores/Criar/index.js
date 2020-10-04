import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import api from '../../../services/api';

import './styles.css';

export default function ModalInsert(props) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            nome,
            email,
            cidade,
            uf
        }
        const response = await api.put('/vendedor', data);
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Criar novo Produto
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleRegister}>
                    <Form.Group controlId="formGroupNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="Nome"
                            onChange={e => setNome(e.target.value)}
                            placeholder="Nome" />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            type="Email"
                            onChange={e => setEmail(e.target.value)}
                            placeholder="E-mail" />
                    </Form.Group>
                    <Form.Group controlId="formGroupCidade">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control
                            type="Cidade"
                            onChange={e => setCidade(e.target.value)}
                            placeholder="Cidade" />
                    </Form.Group>
                    <Form.Group controlId="formGroupCidade">
                        <Form.Label>Uf</Form.Label>
                        <Form.Control
                            type="Uf"
                            onChange={e => setUf(e.target.value)}
                            placeholder="Uf" />
                    </Form.Group>
                    <Button type="submit">Sa    lvar</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}