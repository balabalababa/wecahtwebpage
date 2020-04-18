import Mock from 'mockjs'

let goods = Mock.mock({
  success: true,
  msg: '',
  'Data|5-10': [{
    "brandName": "@cname",
    "productName":"@cname",
    "total": 30,
    "sell": 13,
    "priceBefore":18000,
    "priceNow":7200,
    "danwei":"元/套",
    "detail":"规格：10，型号：大中小，描述：非常好发活动就卡萨和对方即可恢复到健康撒谎的健康和发动机咖啡喝登记卡"
  }]
})

let coupons=Mock.mock({
  success:true,
  msg:'',
  'coupons|5-10':[{
    "brandName": "@cname",
    "productName":"@cname",
    "price": 30,
    "condition":'满5000减200',
    "totalPrice":500

  }]
})
let home = {
  goods,
  coupons
}

export default home
