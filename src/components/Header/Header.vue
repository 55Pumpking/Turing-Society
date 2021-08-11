<template>
  <div class="container">
    <div class="search">
      <i class="iocn-search"></i
      ><input class="input" placeholder="输入关键词" />
    </div>
    <div class="icon-button">
      <button class="push icon-button">投稿</button>
      <router-link class="login icon-button" to="/login">登录图灵</router-link>
      <span class="iconfont icon-ling icon-button"></span>
      <span class="iconfont icon-gouwu icon-button"></span>
    </div>
  </div>
  <!-- <div><el-input placeholder="输入关键词" class="input"></el-input></div> -->
</template>

<script>
export default {
  name: "Header",
};
</script>
<style scoped>
.container {
  width: 1000px;
  margin: 12px 50px 10px 50px;
  display: flex;
  background-color: #fff;
  /* z-index: 2; */
  justify-content: space-between;
}

.input {
  /* position: relative; */
  /* width: 300px; */
  height: 30px;
  min-width: 400px;
  border-radius: 20px;
  background: #ecf3fc;
  padding: 0 12px;
  border: none;
  color: #a1adc5;
  line-height: 30px;
  padding-left: 36px;
}
.iocn-search {
  position: absolute;
  left: 230px;
  margin-top: 8px;
  background-image: url(./searchLogn.svg); /*引入图片图片*/
  background-repeat: no-repeat; /*设置图片不重复*/
  background-position: 0px 0px; /*图片显示的位置*/
  width: 40px; /*设置图片显示的宽*/
  height: 35px; /*图片显示的高*/
}
input:focus {
  outline: 0;
  border-color: #fff;
}
input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #a1adc5;
}
button {
  background: #4684e2;
  font-size: 14px;
  color: #fff;
  border-radius: 32px;
  border: none;
  text-align: center;
  width: 88px;
  height: 32px;
  line-height: 32px;
  vertical-align: middle;
}
span {
  font-size: 24px;
}
.icon-button {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
