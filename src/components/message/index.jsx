import React, {Component} from 'react';
import {List} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class Message extends Component {
  render () {
    return (
      <div>
        <List className="my-list">
          <Item
            arrow="horizontal"
            thumb={require('../../assets/img/头像1.png')}
            multipleLine
            onClick={() => {}}
          >
            前端真是太苦逼了...<Brief>张鑫</Brief>
          </Item>
          <Item
            arrow="horizontal"
            thumb={require('../../assets/img/头像2.png')}
            multipleLine
            onClick={() => {}}
          >
            可不是,说多了都是眼泪...<Brief>李涛</Brief>
          </Item>
        </List>
      </div>
    )
  }
}

export default Message;