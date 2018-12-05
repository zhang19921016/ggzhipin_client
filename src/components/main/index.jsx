/*
 应用主界面的路由组件
 */
import React, {Component} from 'react'
import Cookies from 'js-cookie'
import {Route,Redirect} from 'react-router-dom'
import DashenInfo from '../../containers/dashenInfo'
import LaobanInfo from '../../containers/laobanInfo'


export default class Main extends Component {
  render() {
    const userid = Cookies.get('userid')
    console.log(userid);
    if (!userid) {
      return <Redirect to='/login'/>
    }
    return (
      <div>
          <Route path='/laobaninfo' component={LaobanInfo}/>
          <Route path='/dasheninfo' component={DashenInfo}/>
      </div>
    )
  }
}