import React, {Component} from 'react';
import {Result,List,Button,WhiteSpace, Modal} from 'antd-mobile';
import Cookies from 'js-cookie'
import PropTypes from 'prop-types';

const Item = List.Item;
const Brief = Item.Brief;
const alert = Modal.alert;


class Personal extends Component {
  static propTypes = {
    user:PropTypes.object.isRequired,
    resetUserInfo:PropTypes.func.isRequired,
    resetUserList:PropTypes.func.isRequired
  }
  logout = () =>
    alert('退出', '你确定要退出吗?', [
      { text: '取消',onPress: () => {} },
      { text: '确认', onPress: () => {
        Cookies.remove('userid');
        //清除状态
        this.props.resetUserInfo();
        this.props.resetUserList();
        //跳转至登陆
        this.props.history.replace('/login');
      } },
    ])
  render () {
    const {username,header,post,company,salary,info} = this.props.user;
    return (
      <div>
        <Result
          img={<img src={require(`../../assets/img/头像${+header+1}.png`)}/>}
          title={username}
          message={company !== 'undefined'?<div>{company}</div>:null}
        />
        <List renderHeader={() => '相关信息'} className="my-list">
          <Item multipleLine onClick={() => {}}>
            <Brief>职位:{post}</Brief>
            <Brief>简介:{info}</Brief>
            {salary !== 'undefined'?<Brief>薪资:{salary}</Brief>:null}
          </Item>
        </List>
        <WhiteSpace/>
        <Button type="warning" onClick={this.logout}>退出</Button>
      </div>
    )
  }
}

export default Personal;