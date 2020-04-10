<template>
  <div class="topBanner">
    <img src alt />
    <div class="banner_main">
      <div class="countdown">
        <div>倒计时</div>
        <div>
          <mt-badge size="small" color="#000">{{time.D}}天</mt-badge>
          <mt-badge size="small" color="#000">{{time.h}}时</mt-badge>
          <mt-badge size="small" color="#000">{{time.m}}分</mt-badge>
          <mt-badge size="small" color="#000">{{time.s}}秒</mt-badge>
        </div>
         <button size="mini">预约报名</button>
      </div>   
      <div class="bannerCount">
        <div class="count_item">
          <div class="itme_num">333</div>
          <div class="item_text">已报名户数</div>
        </div>
            <div class="count_item">
          <div class="itme_num">333</div>
          <div class="item_text">已分享人数</div>
        </div>
            <div class="count_item">
          <div class="itme_num">333</div>
          <div class="item_text">已浏览人次</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isEnd: false, //倒计时是否结束
      endTime: "2020-4-10 10:00:00", //应为接口获取到的结束时间
      time: { D: "", h: "", M: "", s: "" }
    };
  },
  mounted() {
    let that = this;
    that.setEndTime();
  },
  methods: {
    setEndTime() {
      var that = this;
      var interval = setInterval(function timestampToTime() {
        var date = new Date(that.endTime) - new Date(); //计算剩余的毫秒数
        if (date <= 0) {
          that.isEnd = true;
          clearInterval(interval);
        } else {
          that.time.D = parseInt(date / 1000 / 60 / 60 / 24, 10);
          that.time.h = parseInt((date / 1000 / 60 / 60) % 24, 10);
          if (that.time.h < 10) {
            that.time.h = "0" + that.time.h;
          }
          that.time.m = parseInt((date / 1000 / 60) % 60, 10); //计算剩余的分钟
          if (that.time.m < 10) {
            that.time.m = "0" + that.time.m;
          }
          that.time.s = parseInt((date / 1000) % 60, 10); //计算剩余的秒数
          if (that.time.s < 10) {
            that.time.s = "0" + that.time.s;
          }
          return that.time.D + that.time.h + that.time.m + that.time.s;
        }
      }, 1000);
    }
  }
};
</script>
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.topBanner{
  position:relative;
  .banner_main{
    .countdown{
      display: flex;
      background-color: #ccc;
      color:#fff;
      padding:10px 0;
      justify-content: space-around;
      button{
        border-radius:5px;
        border:none;
        background-color: orange;
        color: red;
        font-weight: bold;
      }
    }
    .bannerCount{
      display: flex;
      background-color: #f5f5f5;
      padding:15px 0;
      .count_item{
        flex:1;
      }
    }
  }
}
</style>