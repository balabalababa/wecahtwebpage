/* eslint-disable */
// import axios from 'axios'

/**
* 定义请求常量
* TIME_OUT、ERR_OK
*/
// export const TIME_OUT = 1000;    // 请求超时时间
// export const ERR_OK = true;      // 请求成功返回状态，字段和后台统一
// export const baseUrl = process.env.BASE_URL   // 引入全局url，定义在全局变量process.env中

// 请求超时时间
// axios.defaults.timeout = TIME_OUT

// 封装请求拦截
// axios.interceptors.request.use(
// 	config => {
// 		let token = localStorage.getItem('token')   // 获取token
// 		config.headers['Content-Type'] = 'application/json;charset=UTF-8'
// 		config.headers['Authorization'] = ''
// 		if(token != null){                          // 如果token不为null，否则传token给后台
// 			config.headers['Authorization'] = token
// 		}
// 		return config
// 	},
// 	error => {
// 		return Promise.reject(error)
// 	}
// )
// 封装响应拦截，判断token是否过期
// axios.interceptors.response.use(
//   response => {
//     let {data} = response
//     if (data.message === 'token failure!') {    // 如果后台返回的错误标识为token过期，则重新登录
//       localStorage.removeItem('token')          // token过期，移除token
//       // 进行重新登录操作
//     } else {
//       return Promise.resolve(response)
//     }
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )
// 封装post请求
// export function fetch(requestUrl, params = '') {
//   return axios({
//     url: requestUrl,
//     method: 'post',
//     data: {
//       'body': params
//     }
//   })
// }



import axios from 'axios'

axios.interceptors.request.use(config => {
  return config
}, err => {
  window.console.log({message: '请求超时!'})
  // return Promise.resolve(err);
})

axios.interceptors.response.use(data => {//{data:{status:200,msg"",obj:{}},status:200}
  if (data.status && data.status == 200 && data.data.status == 500) {
    //业务逻辑错误
    window.console.log({message: data.data.msg})
    return
  }
  if (data.data.msg) {
    // Message.success({message: data.data.msg})
  }
  return data.data
}, err => {
  if (err.response.status == 504 || err.response.status == 404) {
    window.console.log({message: '服务器被吃了⊙﹏⊙∥'})
  } else if (err.response.status == 403) {
    window.console.log({message: '权限不足,请联系管理员!'})
  } else if (err.response.status == 401) {
    window.console.log({message: err.response.data.msg})
  } else {
    if (err.response.data.msg) {
      window.console.log({message: err.response.data.msg})
    } else {
      window.console.log({message: '未知错误!'})
    }
  }
  // return Promise.resolve(err);
})
// let base = 'http://192.168.0.173:8001'
let base=""
export const postKeyValueRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
  })
}
export const uploadFileRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
export const putRequest = (url, params) => {
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
export const deleteRequest = (url) => {
  return axios({
    method: 'delete',
    url: `${base}${url}`
  })
}
export const getRequest = (url,params) => {
  return axios({
    method: 'get',
    url: `${base}${url}`
   
  })
   
}
