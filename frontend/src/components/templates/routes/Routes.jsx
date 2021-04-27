import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../home/Home';
import UserCrud from '../user/UserCrud';

const Routes= (props)  =>

    <Switch>

        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/' />

    </Switch>

export default Routes