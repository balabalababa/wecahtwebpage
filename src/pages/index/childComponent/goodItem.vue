<template>
  <div>
    <div class="goodsItem">
      <div class="item_left">
        <div class="left_img">
          <img src alt />
          <div class="goodcuntdown">
            <span class="cuntdownbefore">距结束</span>
            <span class="cuntdownafter">{{this.$store.state.home.time.D+'天'+this.$store.state.home.time.h+':'+this.$store.state.home.time.m+':'+this.$store.state.home.time.s}}</span>
          </div>
        </div>
        <div class="left_info">
          <div class="info_text">
            <div class="info_title">
              <div class="info_brand">【{{goodItem.brandName}}】</div>
              <div class="info_name">{{goodItem.productName}}</div>
            </div>
            <div class="info_num">
              <mt-progress :value="20" :bar-height="5"></mt-progress>
              <div class="num_text">
                <div class="num_before">
                  仅剩
                  <span>{{goodItem.total-goodItem.sell}}</span>件
                </div>
                <div class="num_after">
                  已抢
                  <span>{{goodItem.sell}}</span>件
                </div>
              </div>
            </div>
            <div class="info_price">
              <div class="price_before">
                <s>市场价：￥{{goodItem.priceBefore}}{{goodItem.danwei}}</s>
              </div>
              <div class="info_buy">
                <div class="price_after">
                  ￥
                  <span>{{goodItem.priceNow}}</span>
                </div>
                <mt-button type="default" @click="todetail" size="small">查看详情</mt-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <mt-popup v-model="popupVisible" popup-transition="popup-fade" position="right">
      <ItemDetail :detail="goodItem" />
    </mt-popup>
  </div>
</template>
<script>
import ItemDetail from './goodsDetail'
export default {
  props:["goodItem"],
  components:{
    ItemDetail
  },
  data() {
    return {
      popupVisible: false,
      time:""
    };
  },
  mounted(){
   
  },
  methods: {
    todetail() {
      console.log(1);
      // this.$router.togo("/Goods/Detail");
      this.popupVisible = true;
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
      flex:1;
      .goodcuntdown{
        position: absolute;
        background-color: red;
        bottom:0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        color:#fff;
        span{
          padding:5px 10px
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .left_info {
      display: flex;
      flex:1;
      padding:8px;
      flex-direction: column;
      justify-content: space-between;
      .info_text {
              text-align: left;
        .info_title {
          .item_brand{
            font-size:0.6rem;
          }
        }
        .info_num{
          .num_text{
            display: flex;
            justify-content: space-between;
          }
          /deep/ .mt-progress-progress{
            background-color: red ;
            border-radius: 5px;
          }
        }
        .info_price{
          .info_buy{
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