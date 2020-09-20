import React from 'react';

import Header from '../Components/Admin/Header';
import List from '../Components/Admin/List';

import { Container } from 'react-bootstrap';


import './styles.css';

export default function Produtos() {
    function ListarProdutos () {

    }
    return (
        <div className="produtos-container">
            <Header />
            <Container>
                <h1>Produtos</h1>
                <List />
            </Container>
        </div>
    );
}