<template>
  <div class="content-box">
    <div class="page-content">
      {{url}}
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
        <topBanner />

        <ul>
          <li v-for="(item,index) in list" :key="index" class="goodItem">
            <GoodsItem />
          </li>
        </ul>
        <CouponItem />
      </mt-loadmore>
      <div class="footshow">
        <img>
        好友 <span>默默</span>邀请你参与现金活动
      </div>
      <mt-button @click="todetail">home</mt-button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapState } from "vuex";
// import * as homeApi from 'api/home-api'
// import { ERR_OK } from 'config/index'
import { getRequest } from "../../apiconfig";
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
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      url: ""
    };
  },
  created() {
    let url = window.location.href;
    let arr = url
      .substring(url.lastIndexOf("?") + 1)
      .split("&")[0]
      .split("=")[1];
    this.url = arr;
    let code = "071aaUz90RXXDA1b42y90sSEz90aaUzL";
    this.getdata();
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
      getRequest(
        "/index/sns/userinfo?access_token=32_zwjGdge6Inm0lGThwMuAze8AwPm01uuiL-O4uQxhxL8SE4YYr8dHRwph1o38hoVSz72iRk8QgRAFBOhxMgIyIQ&openid=ootQNwGUGX7fwn1M-XM6zHGY0fqs&lang=zh_CN"
      ).then(res => {
        console.log(res);
      });
    }
    // login() {
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
    })
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
  .footshow{
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    padding:10px 0;
    span{
      color:red;
    }
  }
}
</style>
