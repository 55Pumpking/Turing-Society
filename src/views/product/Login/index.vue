<template>
  <div class="background">
    <!-- login 页面 -->
    <div class="login" style="display: none;">
      <div class="login-title">
        <!-- <router-link @click="toHome" to="/home/homeage">
          <img class="back-arrow" src="./images/back-white.svg" alt=""
        /></router-link> -->
        <img class="logo-new" src="./images/logo-new.png" alt="" />
      </div>
      <!-- login 内容页面+图片 -->
      <div class="login-container">
        <!-- login + 注册-->
        <div class="login-container-left">
          <div class="tab-selected">
            <div class="lonin-nopsd">免密登录</div>
            <div class="selected-line-nopsd" style="display: block;"></div>
            <div class="lonin-email">邮箱登录</div>
            <div class="selected-line-email" style="display: none;"></div>
          </div>
          <!-- input 框 + 滑块 + 登录 -->
          <div class="login-inputs">
            <div class="tel-icon-input">
              <img src="./images/tel-icon.svg" class="tel-icon" />
              <input type="text" placeholder="请输入手机号" />
            </div>

            <div class="slider-bar">
              <img src="./images/slider-bar.png" alt="" />
              <div class="slider-text">请按住滑块，拖到最右边</div>
            </div>

            <div class="tel-icon-input">
              <img src="./images/code-icon.svg" class="tel-icon" />
              <input type="text" placeholder="请输入手机号" />
              <a href="#">获取验证码</a>
            </div>
            <button>登录</button>

            <div class="register">
              <div class="register-wechat-phone" @click="toRegist">
                <div class="register-wechat">
                  <img src="./images/wx-logo.svg" class="tel-icon img-wechat" />
                  <a href="#">微信注册登录</a>
                </div>
                <div class="register-phone">
                  <img src="./images/tel-icon.svg" class="tel-icon" />
                  <a href="#">手机注册</a>
                </div>
              </div>
              <div class="register-agreement">
                注册及代表同意<a href="#">《图灵社区用户注册协议》</a>
              </div>
            </div>
          </div>
        </div>

        <!-- login 右边 -->
        <div class="login-container-right">
          <img src="./images/astronaut.png" alt="" />
        </div>
      </div>
    </div>

    <!-- 邮箱登录 页面 -->
    <div class="login">
      <div class="login-title">
        <router-link @click="toHome" to="/home/homeage">
          <img class="back-arrow" src="./images/back-white.svg" alt="" />
          <img class="logo-new" src="./images/logo-new.png" alt="" />
        </router-link>
      </div>
      <!-- login 内容页面+图片 -->
      <div class="login-container">
        <!-- 注册 -->
        <div class="login-container-left">
          <div class="tab-selected">
            <div class="lonin-nopsd">免密登录</div>
            <div class="selected-line-nopsd" style="display: none;"></div>
            <div class="lonin-email">邮箱登录</div>
            <div class="selected-line-email" style="display: block;"></div>
          </div>
          <!-- input 框 + 滑块 + 登录 -->
          <div class="login-inputs">
            <div class="tel-icon-input mail">
              <img src="./images/mail-icon.svg" class="tel-icon" />
              <input type="text" placeholder="请输入注册邮箱" />
            </div>

            <div class="tel-icon-input">
              <img src="./images/pwd-icon.svg" class="tel-icon password" />
              <input type="text" placeholder="请输入密码" />
            </div>

            <div class="slider-bar">
              <img src="./images/slider-bar.png" alt="" />
              <div class="slider-text">请按住滑块，拖到最右边</div>
            </div>
            <button>登录</button>

            <div class="register">
              <div class="register-wechat-phone">
                <div class="register-wechat" @click="toRegist">
                  <img src="./images/wx-logo.svg" class="tel-icon img-wechat" />
                  <a href="#">微信注册登录</a>
                </div>
                <div class="register-phone">
                  <img src="./images/tel-icon.svg" class="tel-icon" />
                  <a href="#">手机注册</a>
                </div>
              </div>
              <div class="register-agreement">
                注册及代表同意<a href="#">《图灵社区用户注册协议》</a>
              </div>
            </div>
          </div>
        </div>

        <!-- login 右边图片 -->
        <div class="login-container-right">
          <img src="./images/astronaut.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    toRegist() {
      this.$router.history.push("/register");
    },
    toHome() {
      console.log(`1123456`);
      // this.$router.to(-1);
    },
  },
};
</script>

<style scoped>
body,
html,
h1,
h2,
h3,
ul,
li {
  padding: 0;
  margin: 0;
}

html {
  background-color: #142131;
}
.background {
  background-color: #142131;
}
ul,
li {
  list-style: none;
  font-size: 14px;
}

.login-title {
  width: 980px;
  height: 58px;
  /* background-color: red; */
  margin: 80px 278px 0px;
}

.login .login-title img.logo-new {
  width: 125px;
  height: 58px;
  margin: 0px 0px 0px 137.5px;
}

.login .login-title img.back-arrow {
  position: absolute;
  left: 24px;
  top: 24px;
  width: 18px;
  height: 18px;
  padding: 5px;
  background-color: #24364b;
  border-radius: 50%;
  cursor: pointer;
}

.login-container {
  width: 980px;
  height: 464px;
  margin: 16px auto;
  border-radius: 4px;
  box-sizing: border-box;
  /* background-color: red; */
}

.login-container .login-container-left {
  width: 400px;
  height: 464px;
  border-radius: 4px;
  background-color: #fff;
}

.tab-selected {
  position: relative;
  width: 400px;
  height: 45px;
  display: flex;
  text-align: center;
  line-height: 45px;
  font-size: 14px;
  border-bottom: 1px solid #dae1e7;
}

.selected-line-nopsd {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 88px;
  width: 24px;
  border-bottom: 3px solid #3d5b96;
}

.selected-line-email {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 287px;
  width: 24px;
  border-bottom: 3px solid #3d5b96;
}

.lonin-nopsd {
  width: 200px;
  height: 45px;
  /* background-color: #008c8c; */
  border-radius: 4px 0 0 0;
  font-size: 14px;
}

.lonin-email {
  width: 200px;
  height: 45px;
  /* background-color: orange; */
  border-radius: 0 4px 0 0;
  color: #c2b5c5;
  font-size: 14px;
}

.login-inputs {
  width: 400px;
  height: 224px;
  padding: 0px 28px;
  margin: 46px 0px;
  /* background-color: skyblue; */
  box-sizing: border-box;
}

.login-container-left .tel-icon-input {
  display: flex;
}

.login-container-left .tel-icon {
  width: 24px;
  height: 24px;
  margin-right: 12px;
}

.tel-icon-input {
  display: flex;
  align-items: center;
  /* background-color: red; */
}

.mail {
  margin-top: -15px;
  margin-bottom: 15px;
}

.tel-icon-input input {
  border: none;
  background-color: #fff;
  outline: none;
  font-size: 14px;
}

input::-webkit-input-placeholder {
  color: #afbbd3;
  width: 400px;
  height: 224px;
  margin: 46px 0px;
  background-color: fff;
  box-sizing: border-box;
}

.slider-bar {
  width: 344px;
  height: 32px;
  margin: 20px 0px;
  background-color: #e8e8e8;
  box-sizing: border-box;
  display: flex;
}

.slider-bar img {
  width: 40px;
  height: 32px;
}

.slider-text {
  height: 32px;
  display: inline-block;
  line-height: 32px;
  padding-left: 76px;
  color: #4d4d4d;
  font-size: 12px;
}

.tel-icon-input a {
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  color: #3d5b96;
  text-decoration: none;
  text-align: right;
  padding-left: 69px;
}

.login-inputs button {
  width: 344px;
  font-size: 14px;
  height: 40px;
  border-radius: 4px;
  background-color: #c3c9d5;
  color: #fff;
  font-weight: 500px;
  line-height: 40px;
  text-align: center;
  outline: none;
  margin: 34px 0 30px;
  border: none;
}

.register {
  width: 344px;
  height: 104px;
  font-size: 14px;
  margin-top: 30px;
  /* background-color: yellow; */
}

.register-wechat-phone {
  height: 40px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  margin-right: 0;
}

.register-wechat-phone .register-wechat {
  display: flex;
  /* background-color: red; */
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}

.register-wechat-phone .register-phone {
  display: flex;
  height: 40px;
  line-height: 40px;
  margin-right: 8px;
  cursor: pointer;
  /* background-color: orange; */
}

.register-phone a,
.register-wechat a {
  text-decoration: none;
  color: #1e1e1e;
}

.register-wechat img,
.register-phone img {
  padding: 10px;
  height: 40px;
  line-height: 40px;
}

.register-wechat .tel-icon {
  margin-right: 0px;
}

.register-phone .tel-icon {
  margin-right: 0;
}

.register-agreement {
  margin: 18px 0 40px;
  font-size: 12px;
  color: #787878;
  text-align: center;
}

.register-agreement a {
  color: #3d5b96;
  text-decoration: none;
}

/* 注册页右边图片 */
.login-container-right {
  position: relative;
}

.login-container-right img {
  position: absolute;
  left: 480px;
  top: -418px;
  width: 500px;
  height: 368px;
}
</style>
