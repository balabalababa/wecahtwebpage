<template>
  <div class="topBanner">
    <img src alt />
    <div class="banner_main">
      <div class="countdown">
        <div>倒计时</div>
        <div>
          <mt-badge size="small" color="#000">{{this.$store.state.home.time.D}}天</mt-badge>
          <mt-badge size="small" color="#000">{{this.$store.state.home.time.h}}时</mt-badge>
          <mt-badge size="small" color="#000">{{this.$store.state.home.time.m}}分</mt-badge>
          <mt-badge size="small" color="#000">{{this.$store.state.home.time.s}}秒</mt-badge>
        </div>
        <button size="mini" @click="enroll">预约报名</button>
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
    <mt-popup v-model="enrollshow">
      <Enroll @enrollFlag="enrollFlag" />
    </mt-popup>
  </div>
</template>
<script>
import Enroll from "@/components/enroll";
export default {
  components: {
    Enroll
  },
  data() {
    return {
      isEnd: false, //倒计时是否结束
      enrollshow: false
    };
  },
  mounted() {
    let that = this;
    this.$store.dispatch('aEdit')
  },
  methods: {
    enroll() {
      this.enrollshow = true;
    },
    enrollFlag(data){
      console.log(data)
      this.enrollshow=data
    }
  }
};
</script>
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.topBanner {
  position: relative;
  .banner_main {
    .countdown {
      display: flex;
      background-color: #ccc;
      color: #fff;
      padding: 10px 0;
      justify-content: space-around;
      button {
        border-radius: 5px;
        border: none;
        background-color: orange;
        color: red;
        font-weight: bold;
      }
    }
    .bannerCount {
      display: flex;
      background-color: #f5f5f5;
      padding: 15px 0;
      .count_item {
        flex: 1;
      }
    }
  }
  /deep/.mint-popup{
    border-radius:10px;
  }
}
</style>