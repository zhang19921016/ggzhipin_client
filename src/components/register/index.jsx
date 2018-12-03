/*
 用户注册的路由组件
 */
import React, {Component} from 'react'
import {NavBar,List,InputItem,WingBlank,WhiteSpace, Radio,Button} from 'antd-mobile'
import Logo from '../logo'
const Item = List.Item;

export default class Register extends Component {
  state = {
    boss:true,
    userName:'',
    passWord:'',
    rePaddWord:''
  }
/*  handleChecked = type => {
    if (type === 'laoban') {
      this.setState({
        boss:true
      })
    }else {
      this.setState({
        boss: false
      })
    }
  }*/
  handleChange = (type,val) => {
    this.setState({
      [type]:val
    })
  }
  register = () => {
    const {boss,userName,passWord,rePaddWord} = this.state;
    // console.log(boss,userName,passWord,rePaddWord);
  }
  replace = () => {
    this.props.history.replace('/login')
  }
  render() {
    const {boss} = this.state;
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <WhiteSpace/>
            <InputItem onChange = {val => this.handleChange('userName',val)}>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem onChange = {val => this.handleChange('passWord',val)}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace/>
            <InputItem onChange = {val => this.handleChange('rePaddWord',val)}>确认密码:</InputItem>
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