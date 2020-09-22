import React, {useEffect, useState} from 'react';

import Header from '../Components/Admin/Header';
import List from '../Components/Admin/List';

import api from '../../../services/api';

import { Container } from 'react-bootstrap';
import './styles.css';

export default function Produtos() {

    const [listProdutos, setListProdutos] = useState([]);

    useEffect(() => {
        api.get('produto', {
    
        }).then(response => {
            setListProdutos(response.data)
        })
    }, [])

    return (
        <div className="produtos-container">
            <Header />
            <Container>
                <h1>Produtos</h1>
                {listProdutos.length > 0 && (
                    <List listProdutos={listProdutos} />
                )}
            </Container>
        </div>
    );
}