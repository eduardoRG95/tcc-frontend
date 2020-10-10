import React, { useState } from 'react';
import './styles.css';
import { Row, Col, ListGroup } from 'react-bootstrap';
import { FiXCircle, FiEdit } from 'react-icons/fi';

import ModalDeletarVendedor from '../Deletar';
import ModalAlterarVendedor from '../Alterar';


export default function List(props) {

    const [modalDeleteShow, setDeleteModalShow] = useState(false);
    const [modalAlteracaoShow, setAlteracaoModalShow] = useState(false);
    const [Vendedor, setVendedor] = useState();
    const [idVendedor, setIdVendedor] = useState();
    const [listagem, setListagem] = useState(props.listVendedores);

    function DeletarVendedor(id){
        setIdVendedor(id);
        setDeleteModalShow(true);
    }  

    function EditarVendedor(item){
        setVendedor(item);
        setAlteracaoModalShow(true);
    }

    const itens = listagem.map((item) =>
        <ListGroup.Item key={item.id} className="item-list-vendedores">
            <span className="item-name"> {item.nome}  </span>
            <span className="item-name"> {item.email} </span>
            <span className="item-edit"><FiEdit onClick={() => EditarVendedor(item)} /></span>
            <span className="item-delete"><FiXCircle onClick={() => DeletarVendedor(item.id)} /></span>
        </ListGroup.Item>
    );

    return (
        <div>
            <Row className="justify-content-md-center">
                <Col md={10}>
                    <ListGroup variant="flush" className="list-vendedores">
                        {itens}
                    </ListGroup>
                </Col>
            </Row>

            <ModalDeletarVendedor
                show={modalDeleteShow}
                onHide={() => setDeleteModalShow(false)}
                id={idVendedor}
            />
             {Vendedor && (
                <ModalAlterarVendedor
                    show={modalAlteracaoShow}
                    onHide={() => setAlteracaoModalShow(false)}
                    item={Vendedor}  
                /> 
            )}
        </div>
    );
}