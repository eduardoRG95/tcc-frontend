import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import api from '../../../services/api';

import './styles.css';

export default function ModalAlteracao(props) {
    const [id]                = useState(props.item.id)
    const [nome, setNome]     = useState(props.item.nome)
    const [email, setEmail]   = useState(props.item.email)
    const [cidade, setCidade] = useState(props.item.cidade)
    const [uf, setUf]         = useState(props.item.uf)

    async function handleRegister(e) {
        e.preventDefault();
        const data = {
            id,
            nome,
            email,
            cidade,
            uf
        }
        const response = await api.post('/vendedor', data);
    }

    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Editar Vendedor <strong>{nome}</strong>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleRegister}>
                    <Form.Group controlId="formGroupNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="Nome"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            placeholder="Nome" />
                    </Form.Group>
                    <Form.Group controlId="formGroupValor">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            type="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupQuantidade">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control
                            type="Cidade"
                            value={cidade}
                            onChange={e => setCidade(e.target.value)}
                            placeholder="Cidade" />
                    </Form.Group>
                    <Form.Group controlId="formGroupQuantidade">
                        <Form.Label>Uf</Form.Label>
                        <Form.Control
                            type="Uf"
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                            placeholder="Uf" />
                    </Form.Group>
                    <Button type="submit">Salvar</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}