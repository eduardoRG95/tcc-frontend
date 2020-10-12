import React, { useState } from 'react';
import './styles.css';
import { Row, Col, ListGroup } from 'react-bootstrap';
import { FiXCircle, FiEdit } from 'react-icons/fi';

import ModalDeletarProduto from '../Deletar';
import ModalAlterarProduto from '../Alterar';


export default function List(props) {

    const [modalDeleteShow, setDeleteModalShow] = useState(false);
    const [modalAlteracaoShow, setAlteracaoModalShow] = useState(false);
    const [Produto, setProduto] = useState();
    const [idProduto, setIdProduto] = useState();

    const [listagem] = useState(props.listProdutos);

    function DeletarProduto(id){
        setIdProduto(id);
        setDeleteModalShow(true);
    }    
    function EditarProduto(item){
        setProduto(item);
        setAlteracaoModalShow(true);
    }  

    const itens = listagem.map((item) =>
            <ListGroup.Item key={item.id} className="item-list-produtos">
                <span className="item-name"> {item.nome}  </span> 
                <span className="item-valor"> R$ {item.valor} </span> 
                <span className="item-edit"><FiEdit onClick={() => EditarProduto(item)} /></span>                                                
                <span className="item-delete"><FiXCircle onClick={() => DeletarProduto(item.id)} /></span>
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

      <ModalDeletarProduto
        show={modalDeleteShow}
        onHide={() => setDeleteModalShow(modalDeleteShow)}
        id={idProduto}  
      />
      {Produto && (
        <ModalAlterarProduto
            show={modalAlteracaoShow}
            onHide={() => setAlteracaoModalShow(false)}
            item={Produto}  
        /> 
      )}
    </div>
    );
}