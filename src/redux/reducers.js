/*
* 通过之前的状态和action生成新的对象
* */
import {combineReducers} from 'redux'
import {AUTH_ERROR,
  AUTH_SUCCESS,
  UPDATE_USER_INFO,
  RESET_USER_INFO,
  UPDATE_USER_LIST,
  RESET_USER_LIST,
  GET_CHAT_MESSAGES,
  RESET_CHAT_MESSAGES,
  UPDATE_CHAT_MESSAGES} from './action-types'

const userInitState = {
  username:'',
  type:'',
  _id:'',
  msgErr:'',
  RedirectTo:'',
  header:'',
  post:'',
  company:'',
  salary:'',
  info:''
};
function user (previousState = userInitState,action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {...action.data,RedirectTo:getRedirect(action.data.type,action.data.header)};
    case AUTH_ERROR:
      return {...userInitState,...action.data};
    case UPDATE_USER_INFO:
      return {...action.data,RedirectTo:getRedirect(action.data.type,action.data.header)};
    case RESET_USER_INFO:
      return {...userInitState,...action.data};
    default:
      return previousState;
  }
}
const userListInitState = [];
function userList (previousState =userListInitState,action) {
  switch (action.type) {
    case UPDATE_USER_LIST:
      return action.data;
    case RESET_USER_LIST:
      return [];
    default:
      return previousState;
  }
}
const chatMessagesInitState = {
  users:{},
  chatMsgs:[]
};
function chatMessages(previousState =chatMessagesInitState,action) {
  switch (action.type) {
    case GET_CHAT_MESSAGES:
      return action.data;
    case RESET_CHAT_MESSAGES:
      return chatMessagesInitState;
    case UPDATE_CHAT_MESSAGES:
      return {
        users:previousState.users,
        chatMsgs:[...previousState.chatMsgs,action.data]
      };
    default:
      return previousState;
  }
}

function getRedirect (type,header) {
  let path ='';
  if (type === 'laoban') {
    path = '/laoban';
  }else if (type === 'dashen') {
    path = '/dashen'
  }
  if (!header) {
    path = path + 'info';
  }
  return path;
}
export default combineReducers({
  user,
  userList,
  chatMessages
})