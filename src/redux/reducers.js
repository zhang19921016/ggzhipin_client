/*
* 通过之前的状态和action生成新的对象
* */
import {combineReducers} from 'redux'
const xxxInitState = 0;
function xxx (previousState = xxxInitState,action) {
  switch (action.type) {
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
  xxx,
  yyy
})