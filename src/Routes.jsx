import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound'
import Cadastro from './Components/Cadastro';

export default function Routes(){
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cadastro/:id?' component={Cadastro} />
            <Route exact path='*' component={NotFound} />
        </Switch>
    )
}