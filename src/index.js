

import React from 'react'
import mirror, { actions, connect, render, Router } from 'mirrorx'
import registerServiceWorker from './registerServiceWorker';
import user from './data/auth'
 
import App from './App'

// mirror.defaults({
//     historyMode: 'hash'
// })

// 启动 app，render 方法是加强版的 ReactDOM.render
render(
    <Router basename='/' hashType='hashbang' >
        <App />
    </Router>, document.getElementById('root'))


registerServiceWorker();  //生产环境离线使用

