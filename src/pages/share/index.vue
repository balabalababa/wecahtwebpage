<template>
  <!-- 海报html元素 -->
  <div id="posterHtml" :style="{backgroundImage: 'url('+posterHtmlBg+')'}" v-show="false">
    <!-- 二维码 -->
    <div class="qrcode">
      <div id="qrcodeImg"></div>
    </div>
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
      posterImg: "" // 最终生成的海报图片
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
      html2canvas(domObj, {
        useCORS: true,
        allowTaint: false,
        logging: false,
        letterRendering: true,
        onclone(doc) {
          let e = doc.querySelector("#posterHtml");
          e.style.display = "block";
        }
      }).then(function(canvas) {
        // 在微信里,可长按保存或转发
        console.log(canvas.toDataURL("image/png"));
        vm.posterImg = canvas.toDataURL("image/png");
      });
    }
  }
};
</script>