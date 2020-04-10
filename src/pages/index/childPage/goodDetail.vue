<template>
  <div class="detail">
      <common-header :tittle="tittle" :showmore="true"></common-header>
      <detailTop/> 
      <detailCenter/>
      <detailRules/>
  </div>
</template>
<script>
import detailTop from '../childComponent/detailTop'
import detailCenter from '../childComponent/detailCenter'
import detailRules from '../childComponent/detailRules'
import commonHeader from 'common/common-header'
export default {
  data() {
    return {
      tittle: '详情',
      data: 0
    }
  },
    components:{
       detailTop,
       detailCenter,
       detailRules,
       commonHeader  
    }
};
</script>
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
</style>