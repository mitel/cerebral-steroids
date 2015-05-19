/**
 * Created by mitel on 19/05/15.
 */


import React, {Component} from 'react';
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

import 'supersonic/css/supersonic.css';
import 'supersonic/supersonic.core.js';

var About = React.createClass({
    render: function () {
        return <h2>About</h2>;
    }
});

var Inbox = React.createClass({
    render: function () {
        return <h2>Inbox</h2>;
    }
});

var Home = React.createClass({
    render: function () {
        return <h2>Home</h2>;
    }
});

// declare our routes and their hierarchy
var routes = (
    <Route handler={TestS}>
        <Route path="about" handler={About}/>
        <Route path="inbox" handler={Inbox}/>
    </Route>
);

export default class TestS extends React.Component {
    render() {
        return (
            <div>
                <RouteHandler/>
            </div>
        )
    }
}

Router.run(routes, Router.HashLocation, (Root) => {
    React.render(<Root/>, document.body);
});

