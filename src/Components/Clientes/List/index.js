import React, { useState } from 'react';
import './styles.css';
import { Row, Col, ListGroup, Button, Modal, Form } from 'react-bootstrap';
import { FiXCircle, FiEdit } from 'react-icons/fi';

// Services
import Edition from '../../../services/serviceEdition';
import Delete from '../../../services/serviceDelete';

export default function List(props) {

    // Propriedades clientes
    const [idUsuario, setId] = useState();
    const [nomeUsuario, setNome] = useState();
    const [emailUsuario, setEmail] = useState();
    const [cidadeUsuario, setCidade] = useState();
    const [uf, setUf] = useState();

    // Modal de Excluir
    const [showDelete, setShowDelete] = useState(false);
    const handleDeleteClose = () => setShowDelete(false);
    const handleDeleteShow = () => setShowDelete(true);

    // Modal Alteração
    const [showAlter, setShowAlter] = useState(false);
    const handleAlterClose = () => setShowAlter(false);
    const handleAlterShow = () => setShowAlter(true);

    // Listagem
    const [listagem] = useState(props.listClientes);

    function ExcluirCliente(id) {
        setId(id);
        handleDeleteShow();
    }

    function EditarCliente(item) {
        setId(item.idUsuario);
        setNome(item.nomeUsuario);
        setEmail(item.emailUsuario);
        setCidade(item.cidadeUsuario);
        setUf(item.uf);
        handleAlterShow();
    }

    async function handleDeleteRegister() {
        try {
          const response = await Delete('/Usuario/', idUsuario);    
          if (response) {
                alert('Registros excluídos com sucesso');
                handleDeleteClose();
            }else {
                alert('Erro ao deletar dados');
                handleDeleteClose();
            }
        } catch(err) {
          alert('Erro ao deletar dados');
          handleDeleteClose();
        } 
    }

    async function handleAlterRegister(e) {
        e.preventDefault();
        try {
            const data = {
                idUsuario,
                nomeUsuario,
                emailUsuario,
                cidadeUsuario,
                uf,
            }        
            const response = await Edition('/Usuario', data);
            if (response) {
                alert('Dados Alterados com sucesso');
                handleAlterClose();
            }else {
                alert('Erro ao alterar dados');
                handleAlterClose();
            }
        } catch (err) {
            alert('Erro ao alterar dados');
        }
        
    }
    

    const itens = listagem.map((item) =>
        <ListGroup.Item key={item.idUsuario} className="item-list-produtos">
            <span className="item-name"> {item.nomeUsuario}  </span>
            <span className="item-name"> {item.emailUsuario} </span>
            <span className="item-edit"><FiEdit onClick={() => EditarCliente(item)} /></span>
            <span className="item-delete"><FiXCircle onClick={() => ExcluirCliente(item.idUsuario)} /></span>
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
            
            <Modal
                size="lg" show={showDelete} onHide={handleDeleteClose}  aria-labelledby="contained-modal-title-vcenter"
                centered >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Remover cliente  <strong className="id-produto">{idUsuario}</strong>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Você tem certeza que gostaria de excluir esse cliente?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-danger" onClick={handleDeleteClose}>Cancelar</Button>
                    <Button onClick={handleDeleteRegister}>Confirmar</Button>
                </Modal.Footer>
            </Modal>
        {nomeUsuario &&
            <Modal
            size="lg"
            show={showAlter} onHide={handleAlterClose}
            aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Editar Cliente <strong>{nomeUsuario}</strong>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleAlterRegister}>
                    <Form.Group controlId="formGroupNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="Nome"
                            value={nomeUsuario}
                            onChange={e => setNome(e.target.value)}
                            placeholder="Nome" />
                    </Form.Group>
                    <Form.Group controlId="formGroupValor">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            type="Email"
                            value={emailUsuario}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupQuantidade">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control
                            type="Cidade"
                            value={cidadeUsuario}
                            onChange={e => setCidade(e.target.value)}
                            placeholder="Cidade" />
                    </Form.Group>
                    <Form.Group controlId="formGroupQuantidade">
                        <Form.Label>Uf</Form.Label>
                        <Form.Control
                            type="Uf"
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                            placeholder="Uf" />
                    </Form.Group>
                    <Button type="submit">Salvar</Button>
                </Form>
            </Modal.Body>
        </Modal>}
        
        </div>
    );
}