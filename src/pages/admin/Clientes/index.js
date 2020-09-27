import React, { useEffect, useState } from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
import { FiUser } from 'react-icons/fi';

import api from '../../../services/api';

import List from '../Components/Clientes/List';
import Modal from '../Components/Clientes/Modal';
import Header from '../Components/Admin/Header';

import './styles.css'; 

export default function Clientes() {
    const [listClientes, setListClientes] = useState([]);

    useEffect(() => {
        api.get('Clientes', {

        }).then(response => {
            setListClientes(response.data)
        })
    }, [])

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
                        <Button variant="info" size="lg" block>
                            <FiUser /> Inserir novo Cliente
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}