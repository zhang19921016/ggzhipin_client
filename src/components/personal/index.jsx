import React, {Component} from 'react';
import {Result,List,Button,WhiteSpace, Modal} from 'antd-mobile';
import Cookies from 'js-cookie'

const Item = List.Item;
const Brief = Item.Brief;
const alert = Modal.alert;


class Personal extends Component {
  logout = () =>
    alert('退出', '你确定要退出吗?', [
      { text: '取消',onPress: () => {} },
      { text: '确认', onPress: () => {
        Cookies.remove('userid');
        //跳转至登陆
        this.props.history.replace('/login');
      } },
    ])
  render () {
    return (
      <div>
        <Result
          img={<img src={require('../../assets/img/头像6.png')}/>}
          title="张冬冬"
          message={<div>中国银行</div>}
        />
        <List renderHeader={() => '相关信息'} className="my-list">
          <Item multipleLine onClick={() => {}}>
            <Brief>职位:前端工程师</Brief>
            <Brief>简介:Jquery/react全家桶/vue</Brief>
            <Brief>薪资:10k</Brief>
          </Item>
        </List>
        <WhiteSpace/>
        <Button type="warning" onClick={this.logout}>退出</Button>
      </div>
    )
  }
}

export default Personal;