/*
* 负责发送请求
* */

//引入ajax
import ajax from './ajax'

const prefix = '';
export const reqRegister = data => ajax(`${prefix}/register`,data,'POST');
export const reqLogin = data => ajax(`${prefix}/login`,data,'POST');
export const reqUpdate = data => ajax(`${prefix}/update`,data,'POST');