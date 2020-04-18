import wx from 'weixin-jsapi'
import qs from 'qs'
import {
  postRequest
} from '../apiconfig'
export default {
  init(apiList = [], url) { //需要使用的api列表
    console.log(apiList)
    const u = navigator.userAgent.toLowerCase(),
      isIOS = u.indexOf('iphone') > -1; //判断是否是ios微信
    url = window.location.href.split('#')[0]
    console.log(url)
    return new Promise((resolve, reject) => {
      postRequest('http://192.168.0.173:8001/fission/f/Order/getJsSdk', qs.stringify({ //从后台获取签名相关的接口
          // url: url || (isIOS ? baseData.jsUrl : window.location.href)  //配置签名的URL
          url: url
        }))
        .then(res => {
          console.log(res.data)
          if (res.data.appId) {
            wx.config({
              debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              appId: res.data.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
              timestamp:""+res.data.timestamp, // 必填，生成签名的时间戳
              nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
              signature: res.data.signature, // 必填，签名，见附录1
              jsApiList: apiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
            wx.ready(respon => { // 微信SDK准备就绪后执行的回调。
              resolve(wx, respon);
           
            });
          } else {
            reject(res.data);
          }
        })
    })
  }
};
