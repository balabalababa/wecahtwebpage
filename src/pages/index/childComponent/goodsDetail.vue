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
              <div class="info_brand">【回房间的卡萨】</div>
              <div class="info_name">60系列平开窗，窗纱一体</div>
            </div>
            <div class="info_price">
              <div class="price_before">
                <s>市场价：￥1800元/套</s>
              </div>
              <div class="info_buy">
                <div class="price_after">
                  ￥
                  <span>7800</span>
                </div>
                <mt-button type="default"  size="small">立即秒杀</mt-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
          产品详情恢复到健康双方都健康货到付款就很尴尬的放价狂欢更广泛的健康和规范的教科书官方还记得开个会防抖加kg和方式登记卡了回顾打发时间开个会
      </div>
    </div>
    <mt-popup v-model="popupVisible" popup-transition="popup-fade">
      <div class="itemdetail">211</div>
    </mt-popup>
  </div>
</template>
<script>
export default {
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