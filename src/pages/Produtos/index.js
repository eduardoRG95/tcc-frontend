import React, { useEffect, useState } from 'react';

import Header from '../../Components/Admin/Header';

import List from '../../Components/Produtos/List';
import Modal from '../../Components/Produtos/Modal';

import api from '../../services/api';

import { Container, Row, Button, Col, MyVerticallyCenteredModal } from 'react-bootstrap';
import { FiBox } from 'react-icons/fi';
import './styles.css';

export default function Produtos() {

    const [modalShow, setModalShow] = useState(false);
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
                        <Button variant="info" size="lg" block onClick={() => setModalShow(true)}>
                            <FiBox /> Inserir novo produto
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