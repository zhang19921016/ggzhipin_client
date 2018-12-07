/*
 应用主界面的路由组件
 */
import React, {Component} from 'react'
import Cookies from 'js-cookie'
import {Route,Redirect} from 'react-router-dom'
import {NavBar,Icon} from 'antd-mobile'
import PropTypes from 'prop-types';

import DashenInfo from '../../containers/dashenInfo'
import LaobanInfo from '../../containers/laobanInfo'
import Laoban from '../../containers/laoban'
import Dashen from '../../containers/dashen'
import Message from '../../containers/message'
import Personal from '../../containers/personal'
import Footer from '../footer'
import Chat from '../../containers/chat'
import './index.less'


export default class Main extends Component {
  static propTypes = {
    user:PropTypes.object.isRequired,
    getUserInfo:PropTypes.func.isRequired,
    getChatList:PropTypes.func.isRequired
  }
  navList = [
    {path: '/laoban', title: '大神列表', icon: 'laoban', text: '大神'},
    {path: '/dashen', title: '老板列表', icon: 'dashen', text: '老板'},
    {path: '/message', title: '消息列表', icon: 'message', text: '消息'},
    {path: '/personal', title: '个人中心', icon: 'personal', text: '个人'},
  ]
  componentDidMount () {
    this.props.getChatList();
  }
  render() {
    const userid = Cookies.get('userid')
    //登陆时是否有cookie
    if (!userid) {
      return <Redirect to='/login'/>
    }
    //是否有redux状态
    if (!this.props.user._id) {
      this.props.getUserInfo();
      //当状态数据还未更新，不让加载后面的组件
      return <Icon className="loading" type="loading" size="lg"/>
    }
    const {pathname} = this.props.location;
    //当用户输入'/',重定向
    if (pathname === '/') {
      return <Redirect to={this.props.user.RedirectTo}/>
    }
    console.log(pathname );
    const currList = this.navList.find(item => item.path === pathname)
    return (
      <div>
        {currList ? <NavBar className="nav-bar">{currList.title}</NavBar> : null}
        <div className="main-content">
          <Route path='/laobaninfo' component={LaobanInfo}/>
          <Route path='/dasheninfo' component={DashenInfo}/>
          <Route path='/laoban' component={Laoban}/>
          <Route path='/dashen' component={Dashen}/>
          <Route path='/message' component={Message}/>
          <Route path='/personal' component={Personal}/>
          <Route path='/chat/:id' component={Chat}/>
        </div>
        {currList?<Footer navList={this.navList} type={this.props.user.type}/>:null}
      </div>
    )
  }
}