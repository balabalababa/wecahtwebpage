<template>
    <div>
        <div v-if="data"></div>
        <div v-else>目前没有订单</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            data:''
        }
    }
}
</script>
<style lang="less" scoped>
    
</style>