import React, { useState } from 'react';
import './styles.css';
import { Row, Col, ListGroup } from 'react-bootstrap';
import { FiXCircle, FiEdit } from 'react-icons/fi';


export default function List(props) {

    const [modalDeleteShow, setDeleteModalShow] = useState(false);
    const [modalAlteracaoShow, setAlteracaoModalShow] = useState(false);
    const [Cliente, setCliente] = useState();
    const [idCliente, setIdCliente] = useState();

    const [listagem] = useState(props.listClientes);


    function DeletarCliente(id){
        setIdCliente(id);
        setDeleteModalShow(true);
    }    
    function EditarCliente(item){
        setCliente(item);
        setAlteracaoModalShow(true);
    }  
    
    const itens = listagem.map((item) =>
            <ListGroup.Item key={item.idUsuario} className="item-list-produtos">
                <span className="item-name"> {item.nomeUsuario}  </span> 
                <span className="item-name"> {item.emailUsuario}  </span> 
                <span className="item-edit"><FiEdit onClick={() => EditarCliente(item)} /></span>                                                
                <span className="item-delete"><FiXCircle onClick={() => DeletarCliente(item.idUsuario)} /></span>
            </ListGroup.Item>
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