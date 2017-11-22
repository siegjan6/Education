import React, { Component } from 'react';
import './App.css';

import mirror, { actions, connect, render, Route,Redirect } from 'mirrorx'
import TabBar from './pages/tabbar/tabBarPage'
import Login from './pages/login/LoginPage'
import path from './data/routerpath'
import user from './data/auth'
const App = () => (
  <div>
    
    <Route exact path={path.login} component={Login} />
    <Route path={path.tabBar} component={TabBar} /> 
  </div>
)

export default App;
// render={()=>{
//   console.log('app');
//   if(user.hasLogin()) return <Redirect to={path.TabBar} >
// }}