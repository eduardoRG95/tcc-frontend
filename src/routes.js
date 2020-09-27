import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Admin/Login";
import Vendedores from "./pages/Admin/Vendedores";
import Produtos from "./pages/Admin/Produtos";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/produtos" component={Produtos} />
                <Route exact path="/vendedores" component={Vendedores} />

            </Switch>
        </BrowserRouter>
    );
}