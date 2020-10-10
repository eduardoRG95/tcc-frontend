import React, { useEffect, useState } from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
import { FiBox } from 'react-icons/fi';

import api from '../../services/api';

import List from '../../Components/Clientes/List';
import Modal from '../../Components/Clientes/Criar';
import Header from '../../Components/Admin/Header';

import './styles.css'; 

export default function Clientes() {

    const [modalShow, setModalShow] = useState(false);
    const [listClientes, setListClientes] = useState([]);

    useEffect(() => {
        api.get('Usuario', {

        }).then(response => {
            setListClientes(response.data)
        })
    }, []);

    return (
        <div className="usuarios-container">
            <Header />
            <Container>
                <h1>Clientes</h1>
                {listClientes.length > 0 && (
                    <List listClientes={listClientes} />
                )}
                 <Row className="justify-content-md-center">
                    <Col md={10}>
                        <Button variant="info" size="lg" block onClick={() => setModalShow(true)}>
                            <FiBox /> Inserir novo cliente
                        </Button>

                        <Modal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}