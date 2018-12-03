/*
 用户登陆的路由组件
 */
import React, {Component} from 'react'
import {NavBar,List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
import Logo from '../logo'

export default class Login extends Component {
  state = {
    userName:'',
    passWord:''
  }
  handleChange = (type,val) => {
    this.setState({
      [type]:val,
    })
  }
  login = () => {
    const {userName,passWord} = this.state;
    console.log(userName,passWord);
  }
  push = () => {
    this.props.history.push('/register');
  }
  render() {
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <WhiteSpace/>
            <InputItem onChange={vlu => this.handleChange('userName',vlu)}>用户名</InputItem>
            <WhiteSpace/>
            <InputItem onChange={vlu => this.handleChange('passWord',vlu)}>密 码</InputItem>
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