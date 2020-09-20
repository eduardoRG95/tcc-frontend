import React from 'react';
import { FiUser,FiBox } from 'react-icons/fi';

import './styles.css';

export default function Menu() {
    return ( 
       <div className="menu">
           <a href="/produtos-admin" name="Produtos"> <FiBox /> <span>Produtos</span></a>
           <a href="/usuarios-admin" name="Produtos"> <FiUser /><span>Usuários</span></a>
       </div>
    );
}