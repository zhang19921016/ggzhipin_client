/*
 应用主界面的路由组件
 */
import React, {Component} from 'react'
import DashenInfo from '../dashen-info'
import LaobanInfo from '../laoban-info'
import {Route} from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Route path='/laobaninfo' component={LaobanInfo}/>
        <Route path='/dasheninfo' component={DashenInfo}/>
      </div>
    )
  }
}