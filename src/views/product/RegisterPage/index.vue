<template>
  <div class="container">
    <div class="wechat-login">
      <div class="wechat-login-title">
        微信登录
      </div>
      <div class="wechat-code">
        <img src="" alt="" />
      </div>
      <div class="wechat-text">
        <div>
          <span>请使用微信扫描二维码登录</span><br />
          <span>“图灵社区”</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  background-color: #333;
}

.container {
  margin: 0 auto;
  text-align: center;
}

.wechat-login-title {
  font-size: 20px;
  color: #fff;
  margin-top: 56px;
}

.wechat-code img {
  width: 280px;
  height: 280px;
  border: 1px solid #e2e2e2;
  margin: 15px 0;
}

.wechat-text {
  width: 280px;
  height: 56px;
  border-radius: 40px;
  background-color: #232323;
  color: #fff;
  margin: 0 auto;
}

.wechat-text > div {
  padding-top: 10px;
  display: inline-block;
  font-size: 13px;
}

.wechat-text span {
  display: inline-block;
}
</style>
