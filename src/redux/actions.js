/*
* 负责创建action的actionCreators
* */
import {reqRegister,reqLogin} from '../api'
import {AUTH_ERROR,AUTH_SUCCESS} from './action-types'


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