/*
 * @Description: 引入mock.js及配置文件
 * @Author: MrGao
 * @LastEditors: gaosong
 * @Date: 2019-03-12 10:35:08
 * @LastEditTime: 2019-03-12 15:57:56
 */

import Mock from 'mockjs'
import User from './user'
import home from './home'
// 此处会劫持/root/login/checkMemberLogin接口，并返回数据
// Mock.mock('/root/login/checkMemberLogin', 'post', () => {
//   // 返回模拟数据
//   return User.userInfo
// })

// Mock.mock('/root/home/getGoods','get',()=>{
//   return home.goods
// })

// 例1
Mock.mock('/api-infos/user/get-info', function () {
    // return Mock.mock({
    //     success: true,
    //     msg: '',
    //     obj: {
    //         "account_name": "@name",
    //         "gender|1": ["male", "female"],
    //         "birthday": Mock.Random.datetime('yyyy-MM-dd'),
    //         "address": "a b c d"
    //     }
    // })
    return User.userInfo
});

// 例2
Mock.mock('/getGoods', function () {
    return home.goods
});
Mock.mock('/coupons', function () {
    return home.coupons
});