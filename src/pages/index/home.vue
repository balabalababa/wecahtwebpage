<template>
  <div class="content-box">
    <div class="page-content">
      {{url}}
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
        <topBanner />
        <ul>
          <li v-for="(item,index) in list" :key="index" class="goodItem">
            <GoodsItem :goodItem="item" />
          </li>
        </ul>
        <ul>
          <li v-for="(item,index) in coupons" :key="index" class="goodItem">
            <CouponItem :couponItem="item" />
          </li>
        </ul>
      </mt-loadmore>
      <div class="footshow">
        <div class="text-container">
          <transition class="inner-container2" name="slide" mode="out-in">
            <p class="text2" :key="text.id">{{text.val}}</p>
          </transition>
        </div>
      </div>
      <mt-button @click="todetail">home</mt-button>
    </div>
  </div>
</template>

<script>
const totalDuration = 2000;
import { mapMutations, mapGetters, mapState } from "vuex";
import wxJs from "../../webconfig";
import qs from "qs";
// import * as homeApi from 'api/home-api'
import wx from "../../webconfig";
import { getRequest, postRequest } from "../../apiconfig";
import GoodsItem from "./childComponent/goodItem";
import CouponItem from "./childComponent/couponItem";
import topBanner from "./childComponent/topBanner";
export default {
  components: {
    GoodsItem,
    CouponItem,
    topBanner
  },
  data() {
    return {
      num: 0,
      list: "",
      url: "",
      coupons: "",
      arr: [
        "1 不是被郭德纲发现的，也不是一开始就收为徒弟。",
        "2 现在雅阁这个状态像极了新A4L上市那段日子。",
        "3 低配太寒碜，各种需要加装，中配定价过高，又没啥特色",
        "4 然后各种机油门、经销商造反什么的幺蛾子。",
        "5 看五月销量，建议参考A4，打8折吧。",
        "1 不是被郭德纲发现的，也不是一开始就收为徒弟。"
      ],
      arr2: [],
      number: 0
    };
  },
  created() {
    let url = window.location.href;
    // let url="http://mall.qszhuang.com/static/webpage/dist/index.html?code=071bPrPR1pwph21hJCPR1gZuPR1bPrPi&state=STATE#/home";
    let arr = url
      .substring(url.lastIndexOf("?") + 1)
      .split("&")[0]
      .split("=")[1];
  
    postRequest("http://192.168.0.173:8001/fission/f/Authorize/getAccessToken",qs.stringify({code:arr})).then(res=>{
      console.log(res.data)
    })
    this.getdata();
    this.getCoupon();
    const self = this;
    wxJs.init(["getLocation", "chooseWXPay","checkJsApi"]).then((wx, res) => {
      wx.checkJsApi({
        jsApiList: ["chooseWXPay"], // 需要检测的JS接口列表，所有JS接口列表见附录2,
        success: function(res) {
          console.log(res)
          // 以键值对的形式返回，可用的api值true，不可用为false
          // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
        }
      });
      postRequest(
        "http://192.168.0.173:8001/fission/f/Order/wxpay",
        qs.stringify({
          userId: 8,
          itemId: 1,
          goodsNum: 1,
          orderRemarks: "bb",
          startDate: "2020-05-13",
          voucherId: 1,
          stopDate: "2020-05-13"
        })
      ).then(eq => {
        let data = eq.data;
        alert(data.appId)
        wx.chooseWXPay({
          appId:data.appId,
          timeStamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
          nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
          package: data.prepayId, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
          signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
          paySign: data.sign, // 支付签名
          success: function(res) {
            // 支付成功后的回调函数
            alert(res);
          }
        });
      });
    });
  },
  mounted() {
    this.startMove();
  },
  methods: {
    ...mapMutations({
      setNum: "SET_NUM"
    }),
    todetail() {
      this.$router.togo("/Home/Detail");
    },
    loadTop(id) {
      this.$broadcast("onTopLoaded", id);
    },
    getdata() {
      getRequest("/getGoods").then(res => {
        this.list = res.Data;
      });
    },
    getCoupon() {
      getRequest("/coupons").then(res => {
        this.coupons = res.coupons;
      });
    },
    startMove() {
      let timer = setTimeout(() => {
        if (this.number === 5) {
          this.number = 0;
        } else {
          this.number += 1;
        }
        this.startMove();
      }, totalDuration);
    }

    //   let params = {
    //     password: 'gs123456',
    //     storeNo: '',
    //     userName: '17326015487'
    //   }
    //   homeApi.loginUserNo(params).then((res) => {
    //     let {data} = res
    //     if (data.success === ERR_OK) {
    //       alert(data.value.token)
    //     } else {
    //     }
    //   }).catch(() => {
    //   })
    // }
  },
  computed: {
    ...mapGetters(["number"]),
    ...mapState({
      number: state => state.home.number
    }),
    text() {
      return {
        id: this.number,
        val: this.arr[this.number]
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";

.page-content {
  .mb(98);
  .goodItem {
    border-bottom: 1px solid #ccc;
  }
  .goodItem:last-child {
    border: none;
  }
  .footshow {
    // background-color: #f5f5f5;
    // display: flex;
    // justify-content: center;
    // padding: 10px 0;
    // span {
    //   color: red;
    // }
  }
  .text-container {
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin: 10px 0;
    border: 1px solid cornflowerblue;
    overflow: hidden;
  }
  .text,
  .text2 {
    margin: 0;
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.5s linear;
  }
  .slide-leave-to {
    transform: translateY(-20px);
  }
  .slide-enter {
    transform: translateY(20px);
  }
}
</style>
