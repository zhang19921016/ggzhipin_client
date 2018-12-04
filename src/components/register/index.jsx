/*
 用户注册的路由组件
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {NavBar,List,InputItem,WingBlank,WhiteSpace, Radio,Button} from 'antd-mobile'
import Logo from '../logo'
//引入api
const Item = List.Item;

export default class Register extends Component {
  static propTypes = {
    register:PropTypes.func.isRequired
  }
  state = {
    boss:true,
    username:'',
    password:'',
    rePassword:''
  }
  handleChange = (type,val) => {
    this.setState({
      [type]:val
    })
  }
  register = async () => {
    const {boss,username,password,rePassword} = this.state;
    console.log(rePassword);
    await this.props.register({type:boss?'laoban':'dashen',username,password,rePassword})
  }
  replace = () => {
    this.props.history.replace('/login')
  }
  render() {
    const {boss} = this.state;
    const {msgErr} = this.props.user;
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <p className="msgErr">{msgErr}</p>
        <WingBlank>
          <List>
            <WhiteSpace/>
            <InputItem onChange = {val => this.handleChange('username',val)}>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem onChange = {val => this.handleChange('password',val)} type="password">密&nbsp;&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace/>
            <InputItem onChange = {val => this.handleChange('rePassword',val)} type="password">确认密码:</InputItem>
            <WhiteSpace/>
            <Item>用户类型:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={!boss} onChange = {() => this.handleChange('boss',false)}>大神</Radio>&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={boss} onChange = {() => this.handleChange('boss',true)}>老板</Radio>
            </Item>
            <WhiteSpace/>
            <Button type="primary" onClick={this.register}>注&nbsp;&nbsp;册</Button>
            <WhiteSpace/>
            <Button onClick={this.replace}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}