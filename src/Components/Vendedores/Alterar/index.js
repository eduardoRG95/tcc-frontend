import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import api from '../../../services/api';

import './styles.css';

export default function ModalAlteracao(props) {
    const [id, setId] = useState(props.item.id)
    const [nome, setNome] = useState(props.item.nome)
    const [valor, setValor] = useState(props.item.valor)
    const [quantidade, setQuantidade] = useState(props.item.quantidade)

    async function handleRegister(e) {
        e.preventDefault();
        const data = {
            id,
            nome,
            valor,
            quantidade
        }
        const response = await api.post('/produto', data);
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Editar Produto <strong>{id}</strong>
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
                        <Form.Label>Valor</Form.Label>
                        <Form.Control
                            type="Valor"
                            value={valor}
                            onChange={e => setValor(e.target.value)}
                            placeholder="Valor" />
                    </Form.Group>
                    <Form.Group controlId="formGroupQuantidade">
                        <Form.Label>Quantidade</Form.Label>
                        <Form.Control
                            type="Quantidade"
                            value={quantidade}
                            onChange={e => setQuantidade(e.target.value)}
                            placeholder="Quantidade" />
                    </Form.Group>
                    <Button type="submit">Salvar</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}