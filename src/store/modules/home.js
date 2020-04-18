/**
 * home.js
 * 用于home模块的状态管理
 */
/* eslint-disable */
import * as types from '../mutation-type'  // 引入定义的方法
const home = {
  state: {
    number: 1,
    token:'32_zwjGdge6Inm0lGThwMuAze8AwPm01uuiL-O4uQxhxL8SE4YYr8dHRwph1o38hoVSz72iRk8QgRAFBOhxMgIyIQ',
    openid:'ootQNwGUGX7fwn1M-XM6zHGY0fqs',
    cuntdown:'2020-4-20 10:00:00',
    time:{ D: "0", h: "0", m: "0", s: "0" }
  },
  mutations: {
    [types.SET_NUM](state, num) {   // 修改state 可通过mapMutations调用
      state.number = num
    },
    start(state,timer){//处理数据的变化
     state.time=timer
  }
  },
  actions: {},
  getters: {            // 定义getters，可以通过mapGetters拓展函数调用
  },
  actions:{
    aEdit(context){  
        let time={ D: "0", h: "0", m: "0", s: "0" }
        var interval = setInterval(function timestampToTime() {
          var date = new Date(context.state.cuntdown) - new Date(); //计算剩余的毫秒数
          if (date <= 0) {
            time.D=0;time.h=0; time.m=0; time.s=0;
            return context.commit('start',time);
            clearInterval(interval);
          } else {
            time.D = parseInt(date / 1000 / 60 / 60 / 24, 10);
            time.h = parseInt((date / 1000 / 60 / 60) % 24, 10);
            if (time.h < 10) {
              time.h = "0" + time.h;
            }
            time.m = parseInt((date / 1000 / 60) % 60, 10); //计算剩余的分钟
            if (time.m < 10) {
              time.m = "0" + time.m;
            }
            time.s = parseInt((date / 1000) % 60, 10); //计算剩余的秒数
            if (time.s < 10) {
              time.s = "0" + time.s;
            }
            return context.commit('start',time);
          }
         
        }, 1000);
    }
}
}
export default home    // 输出home模块
