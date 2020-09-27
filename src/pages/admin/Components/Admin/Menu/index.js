import React from 'react';
import { FiUser, FiBox } from 'react-icons/fi';

import { Dropdown } from 'react-bootstrap';

import './styles.css';

export default function Menu() {
    return (
        <div className="menu-content">
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                   Menu
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="/produtos">Produtos</Dropdown.Item>
                    <Dropdown.Item href="/vendedores">Vendedores</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div className="menu">
                <a href="/produtos" name="Produtos"> <FiBox /> <span>Produtos</span></a>
                <a href="/vendedores" name="Produtos"> <FiUser /><span>Vendedores</span></a>
            </div>
        </div>
    );
}