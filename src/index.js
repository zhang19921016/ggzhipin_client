import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
//引入store
import store from './redux/store'
import Login from './containers/login'
import Register from './containers/register'
import Main from './containers/main'
import './assets/less/msg-err.less'

ReactDOM.render((
<Provider store={store}>
  <HashRouter>
    <Switch>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      <Route path='/' component={Main}/>
    </Switch>
  </HashRouter>
</Provider>
  ),
  document.getElementById('app')
)