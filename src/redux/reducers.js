/*
* 通过之前的状态和action生成新的对象
* */
import {combineReducers} from 'redux'
import {AUTH_ERROR,AUTH_SUCCESS} from './action-types'

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
    default:
      return previousState;
  }
}
const yyyInitState = {};
function yyy (previousState = yyyInitState,action) {
  switch (action.type) {
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
  console.log(header);
  return path;
}

export default combineReducers({
  user,
})