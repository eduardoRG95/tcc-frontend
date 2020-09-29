import React, { useState } from 'react';
import './styles.css';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';
import { FiXCircle, FiEdit } from 'react-icons/fi';

import ModalDelete from '../Deletar';


export default function List(props) {

    const [modalShow, setModalShow] = useState(false);
    const [idProduto, setIdProduto] = useState();

    const [listagem, setListagem] = useState(props.listProdutos);

    function EnviaIdProduto(id){
        setIdProduto(id);
        setModalShow(true);
    }    
    
    const itens = listagem.map((item) =>
            <ListGroup.Item key={item.id} className="item-list-produtos">
                <span className="item-name"> {item.nome}  </span> 
                <span className="item-valor"> R$ {item.valor} </span> 
                <span className="item-edit"><FiEdit /></span>                                                
                <span className="item-delete" onClick={() => EnviaIdProduto(item.id)} ><FiXCircle /></span>
            </ListGroup.Item>
        );


        
    return (
        <div>
        <Row className="justify-content-md-center">
            <Col md={10}>
                <ListGroup variant="flush" className="list-usuarios">
                    {itens}
                </ListGroup>
            </Col>
        </Row>

      <ModalDelete
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={idProduto}  
      />
        </div>
    );
}