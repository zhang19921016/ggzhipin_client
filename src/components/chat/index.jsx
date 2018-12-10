/*
 对话聊天的路由组件
 */

import React, {Component} from 'react'
import {NavBar, List, InputItem , Icon ,Grid} from 'antd-mobile'
import PropTypes from 'prop-types';
import Cookies from 'js-cookie'
import './index.less'

const Item = List.Item

export default class Chat extends Component {
  static propTypes = {
    sendMessage:PropTypes.func.isRequired,
    chatMessages:PropTypes.object.isRequired
  }
  state = {
    message:'',
    isShow:false
  }
  componentWillMount () {
    const emojis = ['😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀'
      ,'😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣'
      ,'😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣'
      ,'😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣', '🙉'];
    this.emojis = emojis.map((item) => ({
      text: item,
    }));
  }
  componentDidMount() {
    // 初始显示列表
    window.scrollTo(0, document.body.offsetHeight)
  }

  componentDidUpdate () {
    // 更新显示列表
    window.scrollTo(0, document.body.offsetHeight)
  }
  goBack = () => {
    this.props.history.goBack();
  }
  sendMessage = () => {
    //获取用户输入的内容
    const {message} = this.state;
    //获取发送消息的用户的id
    const from = Cookies.get('userid');
    //获取接受消息的用户的id
    const to = this.props.match.params.id;
    //将消息发送到服务器
    this.props.sendMessage({message, from, to});
    //清空message的装态
    this.setState({
      message:''
    })
  }

  change = val => {
    this.setState({
      message:val
    })
  }
  emojisShow = () =>{
    this.setState({
      isShow:!this.state.isShow
    })
    if (!this.state.isShow) {
      setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
      }, 0)
    }
  }
  render() {
    const {users,chatMsgs} = this.props.chatMessages;
    //获取发送消息的用户的id
    const from = Cookies.get('userid');
    //获取接受消息的用户的id
    const to = this.props.match.params.id;

    const others = users[to];
    //处理首次渲染没有数据的情况
    if (!others) {
      return null;
    }
    const from_to = [from,to].sort().join('-');
    const currMsgs = chatMsgs.filter(item => item.from_to === from_to);
    //消息按照时间顺序排序
    currMsgs.sort(function (a, b) {
      return Date.parse(a.createTime) - Date.parse(b.createTime)
    })
    //消息按照时间顺序排序
    currMsgs.sort(function (a, b) {
      return Date.parse(a.createTime) - Date.parse(b.createTime)
    })
    return (
      <div id='chat-page'>
        <NavBar icon={<Icon type="left" onClick={this.goBack} />} style={{position:'fixed',left:0,top:0,width:'100%',zIndex:50}}>{others.username}</NavBar>
        <List className="listNodes">
          {currMsgs.map((item,index) =>{
            if (item.from === from) {
              return (
                <Item key={index}
                  className='chat-me'
                  extra='我'
                >
                  {item.message}
                </Item>
                )
            }else{
              return (
                <Item key={index}
                  thumb={require(`../../assets/img/头像${+others.header+1}.png`)}
                >
                  {item.message}
                </Item>
                )
            }
          })}

        </List>
        <div height={this.state.isShow?'180px':0}></div>
        <div style={{position:'fixed',left:0,bottom:0,width:'100%',zIndex:50}}>
          <InputItem
            value={this.state.message}
            placeholder="请输入"
            onChange={this.change}
            extra={
              <div>
                <span onClick={this.emojisShow}>😀</span>&nbsp;&nbsp;
                <span onClick={this.sendMessage}>发送</span>
              </div>
            }
          />
          {
            this.state.isShow?
              <Grid
                data={this.emojis}
                isCarousel
                columnNum={8}
                carouselMaxRow={4}
                onClick={el => {this.setState({message: this.state.message + el.text})}}
              />:
              null
          }
        </div>

      </div>
    )
  }
}