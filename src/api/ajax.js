/*
* 定义一个发送ajax的方法
* */
//引入axios
import axios from 'axios';

export default async function (url,data,method = 'GET') {
  //对数据进行处理
  let rq = '';
  if (data) {
    const arr = Object.keys(data);
    arr.forEach(item => {
      rq += `${item}=${data[item]}&`
    })
    rq = rq.substring(0,rq.length-1);
  }
  //发送请求
  const type = method.toUpperCase();
  if (type === 'GET') {
    return axios.get(url + '?' + rq);
  }else if (type === 'POST') {
    return axios.post(url,rq,{
      'content-type': 'application/x-www-form-urlencoded'
    });
  }
}
