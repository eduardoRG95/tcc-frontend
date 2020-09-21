import React, {useState} from 'react';

import Header from '../Components/Admin/Header';
import List from '../Components/Admin/List';

import api from '../../../services/api';

import { Container } from 'react-bootstrap';


import './styles.css';

export default function Produtos() {

    ListarProdutos();

    async function ListarProdutos () {
        try {
            const response = await api.get('produto');
            console.log(response);
            return response;
        }catch(error){
            alert('Falha ao carregar produtos!')
        }
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