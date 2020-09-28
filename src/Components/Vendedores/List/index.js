import React, { useState } from 'react';
import './styles.css';
import { Row, Col, ListGroup } from 'react-bootstrap';
import { FiXCircle, FiEdit } from 'react-icons/fi';



export default function List(props) {

    const [listagem, setListagem] = useState(props.listVendedores);
    
    const itens = listagem.map((item) =>
            <ListGroup.Item key={item.id} className="item-list-vendedores">
                <span className="item-name"> {item.nome}  </span> 
                <span className="item-edit"><FiEdit /></span>   
                <span className="item-delete"><FiXCircle /></span>
            </ListGroup.Item>
        );
        
    return (
        <Row className="justify-content-md-center">
            <Col md={10}>
                <ListGroup variant="flush" className="list-vendedores">
                    {itens}
                </ListGroup>
            </Col>
        </Row>
    );
}