import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './modulos/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Cadastro from './modulos/cadastrar';
import Lista from './modulos/listar';


ReactDOM.render(
    <Router>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/cadastrar" component={Cadastro} />
        <Route path="/listar" component={Lista} />
    </Switch>
    </ Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
