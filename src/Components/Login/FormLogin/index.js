import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";


import './styles.css';

export default function FormLogin() {

    const [email,  setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const history = useHistory();

    function login(){
        if(email !== "teste@teste.com" || senha !== "1234"){
            alert("login incorreto");
        }else{
            history.push('/produtos');
        }
    }


    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={4}>
                    <Form onSubmit={login} className="form-login">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" onChange={e => setEmail(e.target.value)} placeholder="E-mail" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" onChange={e => setSenha(e.target.value)} placeholder="Senha" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Deixe me logado" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login   
                    </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}