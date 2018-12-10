import React, {Component} from 'react';
import {List,Badge} from 'antd-mobile';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie'
const Item = List.Item;
const Brief = Item.Brief;

class Message extends Component {
  static propTypes = {
    chatMessages:PropTypes.object.isRequired
  }
  goChat = id => {
    this.props.history.push(`/chat/${id}`)
  }
  render () {
//获取当前用户的userid
    const userid = Cookies.get('userid');
    const {users, chatMsgs} = this.props.chatMessages;
    let users_id = {};
    chatMsgs.forEach(item => {
      //找到与当前用户不同的其他用户的id
      const othersId = item.from === userid ? item.to : item.from;
      //保证users_id对象中有且值保存一份其他用户id和对应的值
      // users_id[othersId] = users[othersId];
      if (!users_id[othersId]) {
        users_id[othersId]={}
      }
      for (let key in users[othersId]) {
        users_id[othersId][key] = users[othersId][key]
      }
      //为了方便后面取id值，在给这个对象添加一个id
      users_id[othersId].id = othersId;
      users_id[othersId].message = item.message;
      const time = Date.parse(item.createTime);
      if (users_id[othersId].time) {
        //说明之前添加过数据，将现在的数据和之前的数据进行比较
        if (users_id[othersId].time < time) {
          users_id[othersId].time = time;
          users_id[othersId].message = item.message;
        }
      } else {
        users_id[othersId].time = time;
        users_id[othersId].message = item.message;
      }
      //判断消息未读
      //form来自对方
      if (!users_id[othersId].unRead) {
        users_id[othersId].unRead = 0;
      }
      if (item.from === othersId && !item.read) {
        users_id[othersId].unRead++;
      }
      console.log(users_id[othersId].unRead);
    })
    //将对象变成数组
    const chatList = Object.values(users_id);

    return (
      <div>
        <List className="my-list">
          {chatList.map((item,index) => {
            return (
              <Item key={index}
                arrow="horizontal"
                thumb={require(`../../assets/img/头像${+item.header+1}.png`)}
                multipleLine
                onClick={this.goChat.bind(null,item.id)}
                extra={<Badge text={item.unRead}/>}
              >
                {item.message}<Brief>{item.username}</Brief>
              </Item>
            )
          })}
        </List>
      </div>
    )
  }
}

export default Message;