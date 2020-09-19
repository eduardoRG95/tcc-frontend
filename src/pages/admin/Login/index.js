import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Header';
import InputsLogin from '../Components/FormLogin';

import './styles.css';

export default function Login() {
    return (
        <div>
            <Header />   
            <InputsLogin />      
        </div>
    );
}