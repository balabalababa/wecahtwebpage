<template>
    <div class="detail_info">
      <div class="info_top">
        <div class="info_img">
          <img src alt />
          <div class="img_text">以及功能抢购</div>
        </div>
        <div class="info_brand">
          <div class="brand_text">
            <div class="brand_title">志华恢复到健康三</div>
            <div class="brand_price">
              <span>￥99.00</span> 
              <s>原价：889.00</s>
            </div>
          </div>
          <div class="brand_img">
            <img src alt />
          </div>
        </div>
      </div>
      <div class="info_bottom">
        <ul>
          <li>品牌：</li>
          <li>规格：</li>
          <li>描述：</li>
          <li>型号：</li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.detail_info{
   .info_top{
       display: flex;
       .info_img{
           position: relative;
           width: 100px;
           height: 100px;
           img{
               width: 100%;
               height: 100%;
           }
           .img_text{
               position: absolute;
               bottom:0;
           }
       }
       .info_brand{
           display: flex;
           flex-direction:column;
           justify-content: space-between;
           .brand_text{

           }
           .brand_img{

           }
       }
   } 
   .info_botom{
       ul{
           color:#000;
       }
   }
}
</style>