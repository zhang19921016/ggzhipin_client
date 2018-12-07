/*
* 负责创建action的actionCreators
* */
import {reqRegister,reqLogin,reqUpdate,reqGetUserInfo,reqGetUserList,reqGetChatList} from '../api'
import io from 'socket.io-client';
import {AUTH_ERROR,
  AUTH_SUCCESS,
  UPDATE_USER_INFO,
  RESET_USER_INFO,
  UPDATE_USER_LIST,
  RESET_USER_LIST,
  GET_CHAT_MESSAGES,
  RESET_CHAT_MESSAGES,
  UPDATE_CHAT_MESSAGES} from './action-types'


export const authSuccess = data => {
  return {
    type:AUTH_SUCCESS,
    data
  }
}
export const authError = data => {
  return {
    type:AUTH_ERROR,
    data
  }
}
export const updateUserInfo = data => {
  return {
    type:UPDATE_USER_INFO,
    data
  }
}
export const resetUserInfo = data => {
  return {
    type:RESET_USER_INFO,
    data
  }
}
export const updateUserList = data => ({type: UPDATE_USER_LIST, data});
export const resetUserList = () => ({type: RESET_USER_LIST});
export const getChatMessages = data => ({type: GET_CHAT_MESSAGES, data});
export const resetChatMessages = () => ({type: RESET_CHAT_MESSAGES});
export const updateChatMessages = data => ({type: UPDATE_CHAT_MESSAGES, data});
//注册
export const register = ({username, password, rePassword, type}) => {
  if (!username) {
    return authError({msgErr:'用户名不能为空'})
  }else if (!password) {
    return authError({msgErr:'密码不能为空'})
  }else if (password !== rePassword) {
    console.log(password,rePassword);
    return authError({msgErr:'密码输入不一致'})
  }
  return dispatch => {
    reqRegister({username, password,type})
      .then(({data}) => {
        if (data.code === 0) {
          //请求成功
          dispatch(authSuccess(data.data));
        }else{
          //请求失败
          dispatch(authError({msgErr:data.msg}))

        }
      })
      .catch(err => {
        dispatch(authError({msgErr:'网络错误'}))
      })

  }
}
//登陆
export const login = ({username, password}) => {
  if (!username) {
    return authError({msgErr:'用户名不能为空'})
  }else if (!password) {
    return authError({msgErr:'密码不能为空'})
  }
  return dispatch => {
    reqLogin({username, password})
      .then(({data}) => {
        if (data.code === 0) {
          //请求成功
          dispatch(authSuccess(data.data));
        }else{
          //请求失败
          dispatch(authError({msgErr:data.msg}))

        }
      })
      .catch(err => {
        dispatch(authError({msgErr:'网络错误'}))
      })

  }
}
//更新个人信息
export const update = ({header, post, company, salary,info,type}) => {
  if (!'header') {
    return authError({msgErr:'请选择头像'})
  }else if (!post) {
    return authError({msgErr:'请输入职位'})
  }else if (type === 'laoban' && !company) {
    return authError({msgErr:'请输入公司名称'})
  }else if (type === 'laoban' && !salary) {
    return authError({msgErr:'请输入薪资'})
  }else if (!info) {
    return authError({msgErr:type === 'laoban'?'请输入公司信息':'请输入个人信息'})
  }
  return dispatch => {
    reqUpdate({header, post, company, salary,info})
      .then(({data}) => {
        if (data.code === 0) {
          //请求成功
          dispatch(authSuccess(data.data));
        }else{
          //请求失败
          dispatch(authError({msgErr:data.msg}))

        }
      })
      .catch(err => {
        dispatch(authError({msgErr:'网络错误'}))
      })

  }
}
//获取个人信息
export const getUserInfo = () => {
  return dispatch => {
    reqGetUserInfo()
      .then(({data}) => {
        if (data.code === 0) {
          //请求成功
          dispatch(updateUserInfo(data.data));
        }else{
          //请求失败
          dispatch(resetUserInfo({msgErr:data.msg}))

        }
      })
      .catch(err => {
        dispatch(resetUserInfo({msgErr:'网络错误'}))
      })

  }
}
//获取个人列表
export const getUserList = type => {
  return dispatch => {
    reqGetUserList(type)
      .then(({data}) => {
        if (data.code === 0) {
          //请求成功
          dispatch(updateUserList(data.data));
        }else{
          //请求失败
          dispatch(resetUserList())

        }
      })
      .catch(err => {
        dispatch(resetUserList())
      })

  }
}
//保证和服务器的链接只连接一次
const socket = io('ws://localhost:5000');


export const sendMessage = ({message, from, to}) => {
  return dispatch => {
    //向服务器发送了一条消息
    socket.emit('sendMsg', {message, from, to})
    console.log('浏览器端向服务器发送消息:', {message, from, to})

    //保证只绑定一次
    if (!socket.isFirst) {
      socket.isFirst = true;
      socket.on('receiveMsg', function (data) {
        console.log('浏览器端接收到服务器发送的消息:', data);
        //只有拿到dispatch方法才能更新数据
        dispatch(updateChatMessages(data))
      })
    }
  }
}

export const getChatList = () => {
  return dispatch => {
    reqGetChatList()
      .then(({data}) => {
        if (data.code === 0) {
          dispatch(getChatMessages(data.data));
        } else {
          dispatch(resetChatMessages());
        }
      })
      .catch(err => {
        dispatch(resetChatMessages());
      })
  }
}