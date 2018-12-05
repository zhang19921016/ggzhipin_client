/*
 应用主界面的路由组件
 */
import React, {Component} from 'react'
import Cookies from 'js-cookie'
import {Route,Redirect} from 'react-router-dom'
import {NavBar} from 'antd-mobile'
import DashenInfo from '../../containers/dashenInfo'
import LaobanInfo from '../../containers/laobanInfo'
import Laoban from '../laoban'
import Dashen from '../dashen'
import Message from '../message'
import Personal from '../personal'
import Footer from '../footer'


export default class Main extends Component {
  navList = [
    {path: '/laoban', title: '大神列表', icon: 'laoban', text: '大神'},
    {path: '/dashen', title: '老板列表', icon: 'dashen', text: '老板'},
    {path: '/message', title: '消息列表', icon: 'message', text: '消息'},
    {path: '/personal', title: '个人中心', icon: 'personal', text: '个人'},
  ]
  render() {
    const userid = Cookies.get('userid')
    const {pathname} = this.props.location
    if (!userid) {
      return <Redirect to='/login'/>
    }
    const currList = this.navList.find(item => item.path === pathname)
    return (
      <div>
        <NavBar>{currList.title}</NavBar>
        <Route path='/laobaninfo' component={LaobanInfo}/>
        <Route path='/dasheninfo' component={DashenInfo}/>
        <Route path='/laoban' component={Laoban}/>
        <Route path='/dashen' component={Dashen}/>
        <Route path='/message' component={Message}/>
        <Route path='/personal' component={Personal}/>
        <Footer navList={this.navList}/>
      </div>
    )
  }
}