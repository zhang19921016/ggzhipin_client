import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
//引入store
import store from './redux/store'
import Login from './components/login'
import Register from './components/register'
import Main from './components/main'

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