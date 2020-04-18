/*
 * @Description: 返回数据模板
 * @Author: gaosong
 * @LastEditors: gaosong
 * @Date: 2019-03-12 10:35:23
 * @LastEditTime: 2019-03-12 15:56:32
 */
import Mock from 'mockjs'

let userInfo =Mock.mock({
  success: true,
  msg: '',
  obj: {
      "account_name": "@name",
      "gender|1": ["male", "female"],
      "birthday": Mock.Random.datetime('yyyy-MM-dd'),
      "address": "a b c d"
  }
})

let user = {
  userInfo
}

export default user
