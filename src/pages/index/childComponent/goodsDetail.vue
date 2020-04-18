<template>
  <div>
    <div class="goodsItem">
      <div class="item_left">
        <div class="left_img">
          <img src alt />
          <div class="goodcuntdown">
            <span class="cuntdownbefore">距结束</span>
            <span class="cuntdownafter">00:00:00</span>
          </div>
        </div>
        <div class="left_info">
          <div class="info_text">
            <div class="info_title">
              <div class="info_brand">【{{detail.brandName}}】</div>
              <div class="info_name">{{detail.productName}}</div>
            </div>
            <div class="info_price">
              <div class="price_before">
                <s>市场价：￥{{detail.priceBefore+detail.danwei}}</s>
              </div>
              <div class="info_buy">
                <div class="price_after">
                  ￥
                  <span>{{detail.priceNow}}</span>
                </div>
                <mt-button type="default" size="small" @click="handleBuy">立即秒杀</mt-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>{{detail.detail}}</div>
    </div>
    <mt-popup v-model="popupVisible" popup-transition="popup-fade">
      <div class="itemdetail">211</div>
    </mt-popup>
  </div>
</template>
<script>
import qs from "qs";

import { postRequest } from "../../../apiconfig";
export default {
  props: ["detail"],
  data() {
    return {
      popupVisible: false
    };
  },
  methods: {
    todetail() {
      console.log(1);
      // this.$router.togo("/Goods/Detail");
      this.popupVisible = true;
    },
    handleBuy() {
      postRequest(
        "http://192.168.0.173:8001/fission/f/Order/wxpay",
        qs.stringify({
          userId: 8,
          itemId: 1,
          goodsNum: 1,
          orderRemarks: 1,
          startDate: 1,
          voucherId: 1,
          stopDate: "2020-05-13"
        })
      ).then(res => {
        let data = res.data;

        wx.chooseWXPay({
          timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
          nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
          package: data.prepayId, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
          signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
          paySign: data.sign, // 支付签名
          success: function(res) {
            console.log(res);
          }
        });
      });
    }
  }
};
</script>
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.goodsItem {
  padding: 10px;
  .item_left {
    display: flex;
    .left_img {
      position: relative;
      border-radius: 7px;
      border: 1px solid #ccc;
      flex: 1;
      .goodcuntdown {
        position: absolute;
        background-color: red;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        color: #fff;
        span {
          padding: 5px 10px;
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .left_info {
      display: flex;
      flex: 1;
      padding: 8px;
      flex-direction: column;
      justify-content: space-between;
      .info_text {
        text-align: left;
        .info_title {
          .item_brand {
            font-size: 0.6rem;
          }
        }
        .info_num {
          .num_text {
            display: flex;
            justify-content: space-between;
          }
        }
        .info_price {
          .info_buy {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>