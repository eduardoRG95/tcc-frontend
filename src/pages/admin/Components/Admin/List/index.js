import React from 'react';
import './styles.css';
import { Row, Col, ListGroup } from 'react-bootstrap';

export default function List(props) {
    console.log(props.listProdutos);
    return (
        <Row className="justify-content-md-center">
            <Col md={10}>
                <ListGroup variant="flush"  className="list-usuarios">
                    <ListGroup.Item action  className="item-list-usuarios">Cras justo odio</ListGroup.Item>
                    <ListGroup.Item action  className="item-list-usuarios">Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item action  className="item-list-usuarios">Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item action  className="item-list-usuarios">Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    );
}