<template>
  <div>
    <!-- 底部网站信息部分 -->
    <footer class="footer_container">
      <div class="footer-view">
        <div class="left-view">
          <ul>
            <li>
              <h5>诚征译者</h5>
              <p>成为图灵图书的优秀译者</p>
            </li>
            <li>
              <h5>注册刮刮卡</h5>
              <p>获得银子与电子版优惠码</p>
            </li>
            <li>
              <h5>纸质书开通预售</h5>
              <p>第一时间寄给你！</p>
            </li>
          </ul>
          <div class="friendly_link">
            <h4>媒体平台</h4>
            <div class="link_container">
              <div class="linkItem">
                <img
                  src="../../static/images/friend-icon-normal-1.743b6fa7.svg"
                  alt=""
                />
                <div class="hover"></div>
              </div>
              <div class="linkItem">
                <img
                  src="../../static/images/friend-icon-normal-2.299fb44d.svg"
                  alt=""
                />
                <div class="hover"></div>
              </div>
              <div class="linkItem">
                <img
                  src="../../static/images/friend-icon-normal-3.fc7e21e8.svg"
                  alt=""
                />
                <div class="hover"></div>
              </div>
              <div class="linkItem">
                <img
                  src="../../static/images/friend-icon-normal-4.ffa55f7c.svg"
                  alt=""
                />
                <div class="hover"></div>
              </div>
              <div class="linkItem">
                <img
                  src="../../static/images/friend-icon-normal-6.c7636e1e.svg"
                  alt=""
                />
                <div class="hover"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="us-code">
          <h4>关注我们</h4>
          <div class="code_container">
            <div class="code-box">
              <img
                src="../../static/images/group-qrcode.a2be38de.png"
                alt=""
              />
              <p>关注服务号</p>
              <p>加入读者群</p>
            </div>
            <div class="code-box">
              <img
                src="../../static/images/下载.png"
                alt=""
              />
              <p>关注图灵教育</p>
              <p>分享技术知识</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 网站底部信息栏 -->
      <div class="webInfo">
        <div class="join-us">
          <a href="JavaScript:;">加入我们</a>
          <div></div>
          <a href="JavaScript:;">联系我们</a>
        </div>
        <p>
          京ICP备11039595号 京公网安备11010502011375 新出发京零字第东110150号
          统一社会信用代码 91110101777086608F
        </p>
        <p>2005-2020 © 北京图灵文化发展有限公司 · All Rights Reserved</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
// 底部样式开始
.footer_container {
  position: relative;
  left: 0;
  bottom: 0;
  background: #fbfeff;
  padding-left: 172px;

  max-width: 1108px;
  margin: 0 auto ;
  padding: 24px 0 20px 100px;
  text-align: center;
  // 底部友情链接链接二维码样式
  .footer-view {
    display: flex;
    justify-content: space-between;
    .left-view {
      flex: 1;
      h4 {
        text-align: left;
        margin-top: 24px;
        color: #1c355a;
        font-size: 14px;
        line-height: 16px;
      }
      .link_container {
        display: flex;
        margin-top: 16px;
        .linkItem {
          cursor: pointer;
          margin-right: 18px;
          position: relative;
          .hover {
            position: absolute;
            top: 0;
            border-radius: 50%;
            z-index: 1;
            height: 100%;
            width: 100%;
            transition: background 0.2s;
            &:hover {
              background: rgba(0, 0, 0, 0.2);
            }
          }
        }
      }
      ul {
        display: flex;
      }
      li {
        text-align: left;
        flex: 1;
        h5 {
          cursor: pointer;
          color: #1c355a;
          font-size: 14px;
          line-height: 16px;
        }
        p {
          cursor: pointer;
          font-size: 12px;
          color: #6f6f6f;
          margin-top: 6px;
          line-height: 16px;
        }
      }
    }
    .us-code {
      min-width: 289px;
      h4 {
        text-align: left;
        margin-bottom: 8px;
      }
      .code_container {
        display: flex;
      }
      .code-box {
        img {
          width: 80px;
          height: 80px;
          margin-bottom: 4px;
        }
        p {
          font-size: 12px;
        }
      }
    }
  }
  // 网站信息样式
  .webInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .join-us {
      color: #2a4f88;
      display: flex;
      align-items: center;
      margin: 24px 0 8px 0;
      div {
        height: 8px;
        width: 1px;
        background: #dbdbdb;
      }
      a {
        margin: 0 16px;
        color: #2a4f88;
        font-size: 14px;
        text-decoration: none;
      }
    }
    p {
      color: #aeaeae;
      font-size: 12px;
      margin-top: 16px;
      line-height: 16px;
      &:last-child {
        margin-top: 8px;
      }
    }
  }
}
</style>
