<template>
  <!-- 海报html元素 -->
  <div>
    <div id="posterHtml" :style="{backgroundImage: 'url('+posterHtmlBg+')'}" ref="imageWrapper">
      <!-- 二维码 -->
      <div class="foot">
        <div class="foot_left">
          <div class="left_img">
            <img src alt />
          </div>
          <div class="left_text">
            <div class="left_text_name">一二三四</div>
            <div class="left_text_tip">邀请您参加活动</div>
          </div>
        </div>
        <div class="qrcode">
          <div id="qrcodeImg"></div>
        </div>
      </div>

      <!-- <img :src="posterImg" alt /> -->
    </div>
    <mt-popup v-model="popupVisible" popup-transition="popup-fade" >
      <img :src="posterImg" alt="">
    </mt-popup>
    <el-button @click="createPoster">dianji</el-button>
  </div>
</template>

<script>
/**
 * 这是邀请海报组件
 */
import QRCode from "qrcodejs2";
import html2canvas from "html2canvas";
export default {
  data() {
    return {
      posterContent:
        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2632f57487059856&redirect_uri=http%3a%2f%2fmall.qszhuang.com%2fstatic%2fwebpage%2fdist%2findex.html%23%2fhome&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect", // 文案内容
      posterHtmlBg: require("../../assets/imgs/1.jpg"), // 背景图
      posterImg: "", // 最终生成的海报图片
      popupVisible:false
    };
  },
  components: { QRCode },
  mounted() {
    this.$nextTick(function() {
      this.createQrcode();
    });
  },

  methods: {
    createQrcode() {
      // 生成二维码
      let that = this;
      let qrcode = new QRCode("qrcodeImg", {
        width: 124,
        height: 124, // 高度
        text: this.posterContent // 二维码内容
        // render: 'canvas' ,   // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
        // background: '#f0f',   // 背景色
        // foreground: '#ff0'    // 前景色
      });
    },
    createPoster() {
      // 生成海报
      const vm = this;
      const domObj = document.getElementById("posterHtml");
      html2canvas(this.$refs.imageWrapper).then(function(canvas) {
        // 在微信里,可长按保存或转发
        vm.posterImg = canvas.toDataURL("image/png");
        vm.popupVisible=true;
      });
    }
  }
};
</script>

<style lang="less" scoped>
  .foot{
    display: flex;
    align-items: center;padding:10px;
    justify-content: space-between;
    .foot_left{
      display: flex;
      flex:2;
      justify-content: space-around;
      .left_img{
        border-radius:50%;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .left_text{

      }
    }
  }
</style>