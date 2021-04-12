import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../pages/Main'
import Projetos from '../pages/Projetos'
import Contato from '../pages/Contato'

export default function index() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/contato" component={Contato}/>
                <Route exact path="/projetos" component={Projetos}/>
            </Switch>
        </BrowserRouter>
    )
}