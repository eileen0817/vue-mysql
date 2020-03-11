<template>
<div class="login-container">
 <div class="main-box">
   <view class="title">
     ye blog 登陆
   </view>
</div>
</div>
</template>

<script>
  export default {
  
  }
</script>

<style lang="scss">
.login-container{
  height: 100%;
  width: 100%;
  background: url(/static/images/bg.png) center center no-repeat;
  background-size: 100% 100%;
  .main-box{
   width: 36.8%;
    border-radius: 20px;
    margin: 0 auto;
    height: 100px;
    background-color: #fff;
    position: absolute; 
    left: 31.7%;
    bottom: 28%;
    .title{
      height: 80px;
      line-height: 80px;
      color:  #444;
      font-size: 24px;
      border-bottom:1px dashed #eee;
    }
  }
}
</style>
