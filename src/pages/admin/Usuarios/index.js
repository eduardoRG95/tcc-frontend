import React from 'react';
import './styles.css';
import { Container } from 'react-bootstrap';


import List from '../Components/Admin/List';
import Header from '../Components/Admin/Header';

export default function Usuarios() {
    return (
        <div className="usuarios-container">
            <Header />
            <Container>
                <h1>Usuários</h1>
                <List />
            </Container>
        </div>
    );
}