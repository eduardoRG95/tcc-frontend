import React, { useState } from 'react';
import './styles.css';
import { Row, Col, ListGroup } from 'react-bootstrap';
import { FiUser } from 'react-icons/fi';


export default function List(props) {

    const [listagem, setListagem] = useState(props.listVendedores);
    
    const itens = listagem.map((item) =>
            <ListGroup.Item key={item.id} className="item-list-usuarios">{item.nome}</ListGroup.Item>
        );
        
    return (
        <Row className="justify-content-md-center">
            <Col md={10}>
                <ListGroup variant="flush" className="list-usuarios">
                    {itens}
                </ListGroup>
            </Col>
        </Row>
    );
}