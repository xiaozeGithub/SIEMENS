import React, { Component } from 'react'
import { Router, Route, Link, Redirect, hashHistory, browserHistory, IndexRoute } from 'react-router'

import Login from '../containers/login/Login'
import Home from '../containers/home/Home'
import Totaily from '../containers/totaily/Totaily'
import Individual from '../containers/individual/Individual'

export default class Routers extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        }
    }
    static contextTypes = {
        router: React.PropTypes.object
    }
    
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Individual}
                    onLeave={({ params }) => {
                        console.log('离开了登录页 我们去首页');
                    }}>
                </Route>
                <Route path='/home/:userId' component={Home}>
                    <IndexRoute   component={Totaily} >
                 
                    </IndexRoute>
                    <Route path='individual' component={Login}/>
                    </Route>
            </Router>
        )
    }
}