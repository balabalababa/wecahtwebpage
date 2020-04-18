<template>
  <div class="enroll">
    <h2>报名入口</h2>

    <mt-field label="用户名" placeholder="请输入用户名" v-model="enrollForm.name"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="enrollForm.phone"></mt-field>
    <mt-field label="验证码">
      <mt-button @click="getCode()" size="small" plain v-if="cutdownTime==60">获取验证码</mt-button>
      <mt-button disabled size="small" plain v-else>倒计时{{cutdownTime}}</mt-button>
    </mt-field>
    <mt-button type="danger" plain @click="handleEnroll">确定</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      enrollForm: {
        name: "",
        phone: "",
        code: ""
      },
      cutdownTime: 60
    };
  },
  methods: {
    handleEnroll() {
    //   console.log(this.enrollForm);
      this.$emit("enrollFlag",false)
    },
    getCode() {
        let timer=null;
        let that=this;
        timer=setInterval(function(){
            that.cutdownTime--
            if(that.cutdownTime<=0){
                clearInterval(timer)
                that.cutdownTime=60;
            }
        },1000)
    }
  }
};
</script>
<style lang="less" scoped>
@import "~styles/index.less";
@import "~styles/variable.less";
.enroll {
  width: 90vw;
  margin: 20px 0;
}
</style>
