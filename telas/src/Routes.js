import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import EditarEmail from "./EditarEmail"
import EditarTelefone from "./EditarTelefone"
import AlterarSenha from "./AlterarSenha"

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = { Home }  path="/" exact />
            <Route component = { EditarEmail }  path="/editar-email" exact />
            <Route component = {EditarTelefone} path= "/editar-telefone" exact/>
            <Route component = {AlterarSenha} path= "/alterar-senha" exact/>
        </BrowserRouter>
    )
 }
 
 export default Routes;