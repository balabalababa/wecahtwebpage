<template>
  <div>
    <div class="coupon">
      <div class="coupon_top">
        <div class="top_left">
          <div class="top_left_img">
            <img src alt />
          </div>
          <div class="top_left_info">
            <div class="info_top">
              马可波罗
            </div>
            <div class="info_bottom">
              <span>￥<span>150</span></span> 满 <span>200</span>元可使用
            </div>
          </div>
        </div>
        <div class="top_right">
          <div class="eight_wrap">
            立即使用
          </div>
        </div>
      </div>
      <div class="coupon_bottom">
        <div class="bottom_text">*满5000减200</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.coupon {
  margin: 10px;
  box-shadow: 0 0 10px 10px #ccc;
  border-radius: 7px;
  .coupon_top {
    display: flex;
    justify-content: space-between;
    .top_left {
      display: flex;
        padding:10px;
      flex:5;
      .top_left_img {
        width: 100px;
        height: 100px;
        border-radius: 5px;
        border:1px solid #ccc;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .top_left_info {
        text-align: left;
        margin-left:10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
    .top_right {
      background-color: red;
      color:#fff;
     flex:1;
     display: flex;
     align-items: center;
    }
  }
  .coupon_bottom {
    text-align: left;
    background: #f5f5f5;
  }
}
</style>