import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import history from './history';
import App from './components/App';
import AlbumCrud from './components/Album/AlbumCrud';
import AlbumRead from './components/Album/AlbumRead';
import AlbumModify from './components/Album/AlbumModify';
import AlbumDelete from './components/Album/AlbumDelete';

ReactDOM.render(
    <Router history={history}>
        <Route path="/" exact={true} component={App} />
        <Route path="/album/" exact={true} component={AlbumCrud} />
        <Route path="/album/consultar/:id" exact={true} component={AlbumRead} />
        <Route path="/album/novo/" exact={true} component={AlbumModify} />
        <Route path="/album/alterar/:id" exact={true} component={AlbumModify} />
        <Route path="/album/deletar/:id" exact={true} component={AlbumDelete} />
    </Router>
    , document.querySelector("#root"));