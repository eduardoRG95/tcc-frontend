import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Admin/Login";
import Usuarios from "./pages/Admin/Usuarios";
import Produtos from "./pages/Admin/Produtos";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/admin" component={Login} />
                <Route path="/produtos-admin" component={Produtos} />
                <Route path="/usuarios-admin" component={Usuarios} />

            </Switch>
        </BrowserRouter>
    );
}