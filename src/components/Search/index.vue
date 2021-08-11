<template>
  <div class="searchComtainer">
    <div class="searchNav">
      <div class="searchContent" @click="handelToSearch">
        <img
          src="https://www.ituring.com.cn/img/searchIcon.571b59cb.svg"
          class="iconfont icon-suosou"
        />
        <input type="text" placeholder="输入关键词" />
      </div>
      <!-- 已登录状态 -->
      <div class="searchIconHid" v-if="userId">
        <button type="primary" round class="searchBut" @click="handelTologin">
          投稿
        </button>
        <img
          class="searchIcon-img"
          @click="isshowPersonal = !isshowPersonal"
          src="../../assets/images/indexImg/avatar.jpg"
        />
        <img
          src="https://www.ituring.com.cn/img/cart-icon.cd440001.svg"
          @click="isShowCart = !isShowCart"
        />
        <img
          src="https://www.ituring.com.cn/img/message-icon.f075aa5c.svg"
          @click="messageMainIsShow = !messageMainIsShow"
          class="iconfont icon-xiaoxi"
        />
        <div
          ref="div"
          :class="{
            message: true,
            show: messageMainIsShow
          }"
        >
          <div class="messageMain">
            <div class="messageMain-tilie">
              <p class="show">新提醒</p>
              <p>短信息</p>
            </div>
            <ul class="messageMain-ul">
              <li class="active">新提醒</li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 未登录状态 -->
      <div class="searchIcon" v-else>
        <button type="primary" round class="searchBut" @click="handelTologin">
          投稿
        </button>
        <button type="primary" round class="searchBut" @click="handelTologin">
          登录图灵
        </button>
        <img
          @click="handelTologin"
          src="https://www.ituring.com.cn/img/cart-icon.cd440001.svg"
        />
        <img
          @click="handelTologin"
          src="https://www.ituring.com.cn/img/message-icon.f075aa5c.svg"
          class="iconfont icon-xiaoxi"
        />
        <div
          ref="div"
          :class="{
            message: true,
            show: messageMainIsShow
          }"
        >
          <div class="messageMain">
            <div class="messageMain-tilie">
              <p class="show">新提醒</p>
              <p>短信息</p>
            </div>
            <ul class="messageMain-ul">
              <li class="active">新提醒</li>
              <li></li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>

      <!-- 购物袋 区域 -->
      <div :class="{ shopcart: true, show: isShowCart }">
        <ul class="shopcart-ul">
          <li class="shopcart-li first" @click="handelToCart">
            <h5>购物袋</h5>
            <p class="shopcartp">0</p>
          </li>
          <li class="shopcart-li" @click="handelToGift">
            <h5>样书袋</h5>
            <p class="shopcartp">0</p>
          </li>
        </ul>
      </div>
      <!-- 个人主页 -->
      <div :class="{ personalContainer: true, show: isshowPersonal }">
        <div class="personalUser">
          <h3>用户名</h3>
          <span>0 银子</span>
        </div>
        <ul class="personalUserDetail">
          <li class="personalUserDetailItem">
            <p>个人主页</p>
            <p>个人设置</p>
          </li>
          <li class="personalUserDetailItem">
            <p>个人主页</p>
            <p>个人设置</p>
          </li>
          <li class="personalUserDetailItem">
            <p>个人主页</p>
            <p>个人设置</p>
          </li>
          <li class="personalUserDetailItem">
            <p>个人主页</p>
            <p>个人设置</p>
          </li>
        </ul>
        <div class="personalOff">
          <button class="personalbtn">退出登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data: () => {
    return {
      messageMainIsShow: false,
      isShowCart: false,
      userId: '',
      isshowPersonal: false
    }
  },

  methods: {
    handelTologin() {
      // localStorage.setItem('userId',userId)
      // let userId=localStorage.getItem('userId')
      // this.userId=userId
      // console.log(userId)
      if (!this.userId) {
        this.$router.history.push('/login')
      } else {
        this.$router.history.push('/editor')
      }
    },
    handelToSearch() {
      this.$router.history.push('/search')
    },
    //跳转购物袋页面
    handelToCart() {
      this.$router.history.push('/cart')
    },
    //跳转购物袋页面
    handelToGift() {
      this.$router.history.push('/gift')
    }
  }
}
</script>

<style scoped>
.searchComtainer {
  width: 1038px;
  height: 56px;
  border-bottom: 1px solid #cedce4;
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 20;
  padding-left: 15%;
  /* border: 1px solid red; */
}
.searchNav {
  width: 1238px;
  display: flex;
  height: 32px;
  margin: 12px 0;
  justify-content: space-between;
  line-height: 32px;
  align-items: center;
  /* border: 1px solid green; */
}
.searchBut {
  width: 88px;
  height: 32px;
  line-height: 32px;
  background: #4684e2;
  color: #fff;
  border-radius: 32px;
  outline: none;
  border: none;
}
.searchContent {
  position: relative;
  /* border: 1px solid yellow; */

}
.icon-suosou {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 15px;
  font-size: 24px;
}
.searchContent input {
  cursor: pointer;
  width: 354px;
  height: 32px;
  border-radius: 20px 20px;
  outline: none;
  border: none;
  background: #ecf3fc;
  padding: 0 42px;
}
.searchContent input::-ms-input-placeholder {
  text-indent: 2em;
}

.searchIcon {
  width: 270px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid pink; */
}
.icon-xiaoxi {
  font-size: 24px;
  position: relative;
}
.searchIcon img {
  width: 24px;
  height: 24px;
}
.searchIconHid {
  width: 256px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.searchIconHid .searchIcon-img {
  width: 32px;
  height: 32px;
}
input::-webkit-input-placeholder { /* Edge */
  color: #a1adc5;
}

input:-ms-input-placeholder { /* Internet Explorer */
  color: #a1adc5;
}

input::placeholder {
  color: #a1adc5;
}
/* 消息栏 */
.message {
  display: none;
  position: fixed;
  width: 498px;
  top: 56px;
  right: 0;
  border: 1px solid #cedce4;
  /* border-top: none; */
  background-color: #fff;
}
.message.show {
  display: block;
}
.messageMain-tilie {
  display: flex;
  width: 100%;
  height: 42px;
  line-height: 42px;
  padding: 0 0 0 20px;
  border: 1px solid #cedce4;
}
.messageMain-tilie p {
  font-size: 14px !important;
  color: #4684e2;
  width: 80px;
  height: 41px;
}
.messageMain-ul {
  /* border:1px solid black; */
  border-top: none;
}
.messageMain-ul li {
  height: 300px;
  /* border:1px solid red; */
}
.active::after {
  content: '';
  position: absolute;
  left: 50px;
  top: 40px;
  width: 10px;
  height: 4px;
  background-color: blue;
}
.searchContent input:hover {
  cursor: pointer;
}
.searchContent:hover {
  cursor: pointer;
}
/* 购物袋区域 */
.shopcart {
  display: none;
  width: 128px;
  height: 76px;
  padding: 8px 16px;
  border: 1px solid #dae1e7;
  position: absolute;
  right: 30px;
  top: 58px;
  background-color: white;
}
.shopcart.show {
  display: block;
}
.shopcart-li {
  height: 38px;
  line-height: 38px;
  display: flex;
  justify-content: space-between;
}
.shopcart-li.first {
  border-bottom: 1px solid #dae1e7;
}
.shopcartp {
  width: 22px;
  height: 16px;
  line-height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: #a1adc5;
  color: white;
  text-align: center;
  margin-top: 9px;
}
/* 个人主页 */
.personalContainer {
  display: none;
  width: 240px;
  height: 260px;
  padding: 0 16px;
  border: 1px solid #dae1e7;
  position: absolute;
  top: 58px;
  right: 50px;
  background-color: white;
}
.personalContainer.show {
  display: block;
}
.personalUser {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dae1e7;
}
.personalUserDetail {
  border-bottom: 1px solid #dae1e7;
}
.personalUser h3 {
  width: 204px;
  height: 50px;
  line-height: 50px;
}
.personalUser span {
  width: 35px;
  height: 50px;
  line-height: 50px;
  color: #ff8a00;
}
.personalUserDetail {
  width: 240px;
  height: 150px;
  padding: 4px 0;
  display: flow-root;
}
.personalUserDetail .personalUserDetailItem {
  width: 240px;
  height: 22px;
  padding: 8px 0;
}
.personalUserDetailItem {
  display: flex;
  justify-content: space-around;
}
.personalbtn {
  width: 80px;
  height: 45px;
  line-height: 45px;
  color: #f62222;
  border-radius: 32px;
  outline: none;
  border: none;
  background-color: white;
  font-size: 14px;
}

.search-placeholder {
  color: red;
}
</style>
