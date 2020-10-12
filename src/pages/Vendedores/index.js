import React, { useEffect, useState } from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
import { FiUser } from 'react-icons/fi';

import api from '../../services/api';

import Modal from '../../Components/Vendedores/Criar';
import List from '../../Components/Vendedores/List';
import Header from '../../Components/Admin/Header';

import './styles.css'; 

export default function Vendedores() {

    const [modalShow, setModalShow] = useState(false);
    const [listVendedores, setListVendedores] = useState([]);

    useEffect(() => {
        api.get('vendedor', {

        }).then(response => {
            setListVendedores(response.data)
        })
    }, [])

    return (
        <div className="usuarios-container">
            <Header />
            <Container>
                <h1>Vendedores</h1>
                {listVendedores.length > 0 && (
                    <List listVendedores={listVendedores} />
                )}
                <Row className="justify-content-md-center">
                    <Col md={10}>                       
                        <Modal />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}