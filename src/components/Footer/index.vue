<template>
  <div class="footer-out">
    <div class="footer">
      <div class="footerContent">
        <div class="footerContent-left">
          <ul class="footerul">
            <li class="footerLi" @click="handelToBook">
              <h5>诚证译者</h5>
              <p>成为图灵图书的优秀译者</p>
            </li>
            <li class="footerLi" @click="handelToPersonal">
              <h5>注册刮刮卡</h5>
              <p>获得银子与电子版优惠码</p>
            </li>
            <li class="footerLi" @click="handelToTag">
              <h5>纸质书开通预售</h5>
              <p>第一时间寄给你</p>
            </li>
          </ul>
          <div class="footerMedia">
            <h4>媒体平台</h4>
            <div class="footerMedia-icon">
              <div class="footericon-zhihu1 footericon" @click="handelShow(1)">
                <img
                  src="https://www.ituring.com.cn/img/friend-icon-normal-1.743b6fa7.svg"
                  class="iconfont icon-zhihu1"
                />
              </div>

              <div class="footericon-weibo footericon" @click="handelShow(2)">
                <img
                  src="https://www.ituring.com.cn/img/friend-icon-normal-2.299fb44d.svg"
                  class="iconfont icon-weibo"
                />
              </div>
              <div class="footericon-bz footericon" @click="handelShow(3)">
                <img
                  src="https://www.ituring.com.cn/img/friend-icon-normal-3.fc7e21e8.svg"
                  class="iconfont icon-shiliangxiaotubiao_bzhan"
                />
              </div>
              <div class="footericon-toutiao footericon" @click="handelShow(4)">
                <img
                  src="https://www.ituring.com.cn/img/friend-icon-normal-4.ffa55f7c.svg"
                  class="iconfont icon-toutiao"
                />
              </div>
              <div class="footericon-douyin footericon" @click="handelShow(5)">
                <img
                  src="https://www.ituring.com.cn/img/friend-icon-normal-6.c7636e1e.svg"
                  class="iconfont icon-douyin"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="footerContent-right">
          <h4>关注我们</h4>
          <div class="footerBig">
            <div class="footerBigLeft">
              <img src="../../assets/images/indexImg/group-qrcode.png" alt="" />
              <p>关注服务号</p>
              <p>加入读者群</p>
            </div>
            <div class="footerBigRight">
              <img
                src="../../assets/images/indexImg/wvr03jzd5xsbegfqej75yaojffooc62o.png"
                alt=""
              />
              <p>关注图灵教育</p>
              <p>分享技术知识</p>
            </div>
          </div>
        </div>
      </div>
      <div class="footerbottom">
        <div class="footer-link">
          <router-link to="/article/:articleId?">加入我们</router-link>|
          <router-link to="/article/:articleId?">联系我们</router-link>
        </div>
        <p class="footerinfo">
          京ICP备11039595号 京公网安备11010502011375 新出发京零字第东110150号
          统一社会信用代码 91110101777086608F
        </p>
        <p class="footeraddress">
          2005-2020 © 北京图灵文化发展有限公司 · All Rights Reserved
        </p>
      </div>
    </div>
    <!-- 二维码区域 -->
    <div
      :class="{
        'footer-dialog': true,
        close: isClose,
        qrCode: true
      }"
      v-show="isShow === 1"
    >
      <div class="footer-dialog-title">
        <h2>关注图灵社区知乎号</h2>
        <img
          @click="handelClose"
          src="../../assets/images/indexImg/close.55d03344.svg"
        />
      </div>
      <img
        class="dialogImg"
        src="../../assets/images/indexImg/Bz.png"
        alt="知乎"
      />
      <p class="footerinfo">扫描二维码 关注图灵社区</p>
      <p class="footerinfo">或 <a href="###">点击前往</a></p>
    </div>

    <div
      :class="{
        'footer-dialog': true,
        close: isClose,
        qrCode: true
      }"
      v-show="isShow === 2"
    >
      <div class="footer-dialog-title">
        <h2>关注图灵社区微博</h2>
        <img
          @click="handelClose"
          src="../../assets/images/indexImg/close.55d03344.svg"
        />
      </div>
      <img
        class="dialogImg"
        src="https://www.ituring.com.cn/img/footer-qr-3.88ba4968.png"
        alt="微博"
      />
      <p class="footerinfo">扫描二维码 关注图灵社区</p>
      <p class="footerinfo">或 <a href="###">点击前往</a></p>
    </div>
     <div
      :class="{
        'footer-dialog': true,
        close: isClose,
        qrCode: true
      }"
      v-show="isShow === 3"
    >
      <div class="footer-dialog-title">
        <h2>关注图灵B站</h2>
        <img
          @click="handelClose"
          src="../../assets/images/indexImg/close.55d03344.svg"
        />
      </div>
      <img
        class="dialogImg"
        src="https://www.ituring.com.cn/img/footer-qr-4.25a7db6f.png"
        alt="B站"
      />
      <p class="footerinfo">扫描二维码 关注图灵社区</p>
      <p class="footerinfo">或 <a href="###">点击前往</a></p>
    </div>
     <div
      :class="{
        'footer-dialog': true,
        close: isClose,
        qrCode: true
      }"
      v-show="isShow === 4"
    >
      <div class="footer-dialog-title">
        <h2>关注图灵教育头条号</h2>
        <img
          @click="handelClose"
          src="../../assets/images/indexImg/close.55d03344.svg"
        />
      </div>
      <img
        class="dialogImg"
        src="https://www.ituring.com.cn/img/footer-qr-2.a0be3893.png"
        alt="头条"
      />
      <p class="footerinfo">扫描二维码 关注图灵社区</p>
      <p class="footerinfo">或 <a href="###">点击前往</a></p>
    </div>
     <div
      :class="{
        'footer-dialog': true,
        close: isClose,
        qrCode: true
      }"
      v-show="isShow === 5"
    >
      <div class="footer-dialog-title">
        <h2>关注图灵社区抖音号</h2>
        <img
          @click="handelClose"
          src="../../assets/images/indexImg/close.55d03344.svg"
        />
      </div>
      <img
        class="dialogImg"
        src="https://www.ituring.com.cn/img/dy.3f28bc26.png"
        alt="抖音"
      />
      <p class="footerinfo">打开抖音搜索页扫一扫</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Footer',
  data:()=>{
    return {
      isClose: false,
      isShow: 0,
    }
  },
  methods: {
    handelToBook() {
      this.$router.history.push('/book')
    },
    handelToPersonal() {
      this.$router.history.push('/space/:userId?')
    },
    handelToTag() {
      this.$router.history.push('/PreSalePage')
    },
    //关闭二维码
    handelClose() {
      this.isClose = false
      
    },
    // 点击显示二维码
    handelShow(num) {
      // console.log(111111)
      this.isShow = num
      this.isClose = true
    }
  }
}
</script>

<style scoped>
.footer-out {
  width: 1177px;
  height: 285px;
  padding: 0 0 0 172px;
  margin-top: 80px;
}
.footer {
  width: 1122px;
  height: 241px;
  padding: 24px 0 20px 54px;
  margin: 0 auto;
  background-color: #fbfeff;
  bottom: 0;
  right: 0;
}
.footerContent {
  display: flex;
}
.footerul {
  display: flex;
  justify-content: center;
}
.footerLi {
  width: 229.5px;
  height: 38px;
  margin: 0 20px 0 0;
  text-align: left;
}
.footerLi:hover {
  cursor: pointer;
}
.footerLi p {
  margin-top: 6px;
  color: #6f6f6f;
}
.footerContent-left {
  width: 765px;
  height: 136px;
}
.footerContent-right {
  width: 289px;
  height: 112px;
  text-align: left;
}
.footerBig {
  display: flex;
}
.footerBigLeft {
  margin-right: 24px;
}
.footerBigRight {
  margin-right: 24px;
}
.footerBig img {
  width: 80px;
  height: 80px;
  margin-bottom: 4px !important;
}
.footerMedia-icon {
  display: flex;
}
.footerMedia {
  text-align: left;
}
.footerMedia h4 {
  margin-top: 24px;
}
.footerMedia-icon {
  margin-top: 16px;
}
.footericon {
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  margin-right: 16px;
}

.footericon:hover {
  cursor: pointer;
}
.footerBig p {
  width: 80px;
  height: 14px;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
}
.footerbottom {
  width: 1054px;
  text-align: center;
}
.footer-link {
  text-align: center;
  height: 25px;
  margin: 24px 0 8px;
  line-height: 25px;
  text-align: center;
}
.footer-link a {
  margin: 0 16px;
  color: #2a4f88;
}
.footer-link a:hover {
  cursor: pointer;
  color: #2a4f88 !important;
  text-decoration: none;
}
.footerinfo {
  text-align: center;
  padding: 4px 0 0 64px;
  color: #dae1e7;
  text-align: center;
}
.footeraddress {
  text-align: center;
  margin-top: 8px;
  color: #dae1e7;
  text-align: center;
}
/* 二维码区域 */
div.close {
  display: block;
}
.qrCode {
  display: none;
}

.footer-dialog {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  min-height: 400px;
  background-color: #fff;
  z-index: 10000;
  /* border: 1px solid red; */
}
.footer-dialog-title {
  height: 20px;
  margin: 22px 0;
  display: flex;
  /* border: 1px solid red; */
  justify-content: space-between;
}
.footer-dialog-title h2 {
  margin: 0 auto;
}

.dialogImg {
  width: 220px;
  height: 220px;
  margin: 0 80px;
}
.footerinfo {
  height: 18px;
  margin: 12px 0;
  color: #dae1e7;
  font-size: 14px;
  text-align: center;
}
.footerinfo a {
  color: #4684e2;
}
</style>
