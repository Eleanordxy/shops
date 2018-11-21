/*
* 封装一个ajax函数，向外暴露，并且结合axios
* */
import axios from 'axios'
/*
* ajax请求需要三个参数
* url:请求路径
* data={}：返回数据
* type='GET': 请求方式  一般默认GET方式  GET方式用到的比较多
* 返回值：promise对象 （异步返回的数据是：response.data）
* */

//测试联调需要的域名

export default function ajax(url,data={},type='GET'){
  // 返回值 Promise对象 （异步返回的数据是response.data，而不是response）
  return new Promise(function (resolve, reject) {
    // （利用axios）异步执行ajax请求
    let promise // 这个内部的promise用来保存axios的返回值(promise对象)
    if (type === 'GET') {
      // 准备 url query 参数//const BASE_url = 'http://xxxxxx'
      // const BASE_URL = '/api'数据
      let dataStr = '' // 数据拼接字符串，将data连接到url
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送 get 请求
      promise = axios.get(url)
    } else {
      // 发送 post 请求
      promise = axios.post(url, data)
    }
    promise.then(response => {
      // 成功回调resolve()
      resolve(response.data)
    })
      .catch(error => {
        // 失败回调reject()
        reject(error)
      })
  })
}

