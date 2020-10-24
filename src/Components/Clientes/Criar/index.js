import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import insert from '../../../services/serviceInsert';
import { FiBox } from 'react-icons/fi';

import './styles.css';

export default function ModalInsert(props) {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [nomeUsuario, setNome] = useState('')
    const [emailUsuario, setEmail] = useState('')
    const [cidadeUsuario, setCidade] = useState('')
    const [uf, setUf] = useState('')

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            nomeUsuario,
            emailUsuario,
            cidadeUsuario,
            uf
        }
        const response = await insert('/Usuario', data);
        if (response) {
            handleClose()
        }else{
            handleClose()
        }
    }

    return (
        <div>
            <Button variant="info" size="lg" block onClick={() => handleShow(true)}>
                <FiBox /> Inserir novo cliente
            </Button>
            <Modal
                {...props}
                size="lg"
                show={show}
                onHide={handleClose} 
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Inserir novo cliente
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
                        <Button type="submit">Salvar</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}