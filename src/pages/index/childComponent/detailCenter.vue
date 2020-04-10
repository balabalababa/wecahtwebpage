<template>
  <div class="detail_center">
    <div class="center_top">
      <mt-button type="default">default</mt-button>
      <mt-button type="default">default</mt-button>
    </div>
    <div class="center_bottom">
      <div class="bottom_code">
        <div class="bototm_title">扫码进群了解优惠</div>
        <div class="bottom_img">
          <img src alt />
        </div>
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
.detail_center {
  .center_top {
  }
  .center_bottom {
    display: flex;
    align-items: center;
    .bottom_code {
        width: 200px;
      .bottom_title {
        color: #000;
        margin-bottom: 20px;
      }
    }
  }
}
</style>