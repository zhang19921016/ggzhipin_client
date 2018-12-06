/*
 用户登陆的路由组件
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {NavBar,List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import Logo from '../logo'

export default class Login extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    login:PropTypes.func.isRequired
  }
  state = {
    username:'',
    password:''
  }
  handleChange = (type,val) => {
    this.setState({
      [type]:val,
    })
  }
  login = async () => {
    const {username,password} = this.state;
    await this.props.login({username,password});
  }
  push = () => {
    this.props.history.repalce('/register');
  }
  render() {
    const {msgErr,RedirectTo} = this.props.user;
    //路由跳转
    if (RedirectTo) {
      return <Redirect to={RedirectTo}/>
    }
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <p className="msgErr">{msgErr}</p>
        <WingBlank>
          <List>
            <WhiteSpace/>
            <InputItem onChange={val => this.handleChange('username',val)}>用户名</InputItem>
            <WhiteSpace/>
            <InputItem onChange={val => this.handleChange('password',val)} type="password">密 码</InputItem>
            <WhiteSpace/>
            <Button type="primary" onClick={this.login}>登&nbsp;&nbsp;陆</Button>
            <WhiteSpace/>
            <Button onClick={this.push}>还没有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}