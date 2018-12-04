/*
* 通过之前的状态和action生成新的对象
* */
import {combineReducers} from 'redux'
import {AUTH_ERROR,AUTH_SUCCESS} from './action-types'

const userInitState = {
  username:'',
  type:'',
  _id:'',
  msgErr:''
};
function user (previousState = userInitState,action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return action.data;
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

export default combineReducers({
  user,
})