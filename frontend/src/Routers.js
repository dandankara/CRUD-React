import React from 'react';
import {Switch, Route} from 'react-router'

import App from './App'
import UserCrud from './components/User/UserCrud';

export default function Routers() {
  return (
    <Switch>
    <Route exact path="/" component={App} />
    <Route path="/users" component={UserCrud} />
  </Switch>
  )
}
