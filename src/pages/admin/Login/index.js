import React from 'react';

import Header from '../Components/Admin/Header';
import InputsLogin from '../Components/Admin/FormLogin';

import './styles.css';

export default function Login() {
    return (
        <div>
            <Header />   
            <InputsLogin />      
        </div>
    );
}