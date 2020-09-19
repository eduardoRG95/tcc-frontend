import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css';

export default function Menu() {
    return ( 
       <div>
           <a href="/produtos" name="Produtos">Produtos</a>
           <a href="/usuarios" name="Produtos">Usuários</a>
       </div>
    );
}