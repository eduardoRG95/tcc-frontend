import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/admin/Login";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/admin" component={Login} />
            </Switch>
        </BrowserRouter>
    );
}