/**
 * home.js
 * 用于home模块的状态管理
 */
/* eslint-disable */
import * as types from '../mutation-type'  // 引入定义的方法
const my = {
  state: {
    number: 1,
    ueserInfo:{"openid":"ootQNwGUGX7fwn1M-XM6zHGY0fqs","nickname":"天道酬勤","sex":0,"language":"zh_CN","city":"","province":"北隆达","country":"安哥拉","headimgurl":"http:\/\/thirdwx.qlogo.cn\/mmopen\/vi_32\/xSNc6wVNtlY6z28PgU4tdMdjnsWSuianOkiaibGMMfIwhEt3hmibQpIyhXQKSPWQyDtia2RldiaBkZGKF4PIHBNmCWLg\/132","privilege":[]}
  },
  mutations: {

  },
  actions: {},
  getters: {            // 定义getters，可以通过mapGetters拓展函数调用
    number: state => {
      return state.number
    }
  }
}
export default my    // 输出home模块
