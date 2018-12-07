/*
* 负责发送请求
* */

//引入ajax
import ajax from './ajax'

const prefix = '';
export const reqRegister = data => ajax(`${prefix}/register`,data,'POST');
export const reqLogin = data => ajax(`${prefix}/login`,data,'POST');
export const reqUpdate = data => ajax(`${prefix}/update`,data,'POST');
export const reqGetUserInfo = () => ajax(`${prefix}/user`);
export const reqGetUserList = type => ajax(`${prefix}/userlist`,{type});
export const reqGetChatList = () => ajax(`${prefix}/msglist`);