import React, { useEffect, useState } from 'react';

import Header from '../../Components/Admin/Header';

import List from '../../Components/Produtos/List';
import ModalInsert from '../../Components/Produtos/Criar';

import api from '../../services/api';

import { Container, Row,Col } from 'react-bootstrap';

import './styles.css';

export default function Produtos() {

  
    const [listProdutos, setListProdutos] = useState([]);

    useEffect(() => {
        api.get('produto', {

        }).then(response => {
            setListProdutos(response.data)
        })
    }, [])

    return (
        <div className="produtos-container">
            <Header />
            <Container>
                <h1>Produtos</h1>
                {listProdutos.length > 0 && (
                    <List listProdutos={listProdutos} />
                )}
                <Row className="justify-content-md-center">
                    <Col md={10}>
                        <ModalInsert  />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}