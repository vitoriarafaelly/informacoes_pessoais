import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import EditarEmail from "./EditarEmail"

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = { Home }  path="/" exact />
            <Route component = { EditarEmail }  path="/editar-email" exact />
        </BrowserRouter>
    )
 }
 
 export default Routes;