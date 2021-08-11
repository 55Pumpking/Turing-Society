<template>
  <div class="articleDetail-container">
    <section class="artcle-view">
      <!-- 头部 -->
      <div class="header">
        <div class="top-text">
          <span class="triangle"></span>
          <span>{{ articleDetail.articlePersonalCategoryName }}</span>
        </div>
        <h1 class="title">{{ articleDetail.subject }}</h1>
        <div class="user">
          <img src="https://file.ituring.com.cn/SmallAvatar/" alt="" />
          <span class="user-name">{{ articleDetail.userBlock.nickName }}</span>
          <span class="time">{{
            articleDetail.publishDate.split("T")[0]
          }}</span>
        </div>
      </div>
      <!-- 主体 -->
      <div class="content">
        <!-- 左侧菜单 -->
        <div class="left-menu">
          <div class="left-menu-item">
            <img
              src="https://www.ituring.com.cn/img/recommend-icon2.9aff01a8.svg"
            />
            <div class="text">推荐</div>
            <span class="count">{{ articleDetail.voteCount }}</span>
          </div>
          <div class="left-menu-item">
            <img src="https://www.ituring.com.cn/img/fav-icon.967a3440.svg" />
            <div class="text">收藏</div>
            <span class="count">{{ articleDetail.favCount }}</span>
          </div>
        </div>
        <!-- 右侧详情 -->
        <div class="right-content">
          <p>
            Java从1995年诞生至今，连续多年占据着流行编程语言排行榜前列，如今也越来越多的人选择学习Java语言，
            可大数据等新技术层出不穷，有网友说，Java市场已经饱和了，要过时了。事实究竟如何，2021年Java软件开发有前途吗？易牛云朗沃为你分析一波Java。
          </p>
          <h2>一、人才需求大</h2>
          <p>
            目前市场的大部分银行、证券、电子商务、电子政务等系统都已经采用Java
            EE平台构建，或正过渡到用Java
            EE来构建。在软件类的Java软件开发工程师所占的比例最大，竟达到60%以上。
          </p>
          <p>
            我国信息化人才培养正处于成长阶段，市场实际需求人才数远大于培养出的数量，供不应求的局面，许多中小企业出现了招聘难的问题。
          </p>
          <p>
            <img
              src="https://file.ituring.com.cn/ScreenShow/21072620f159f002e1f6"
              alt=""
            />
          </p>

          <h2>二、就业方向</h2>
          <h3>1.Java电子商务</h3>
          <p>
            电子商务系统看重的就是程序代码安全、可靠、同时还能跨平台，与全世界客户开展业务来往。
            Java语言特性就是以其面向对象编程，强安全性、跨平台性、硬件结构无关性、语言简洁，成为实现电子商务系统最合适的语言。
          </p>
          <h3>2.Android系统开发</h3>
          <p>
            Android系统是基于Linux的免费开源，是Java自己写的。安卓可以不拘泥于手机、平板等设备，即继承了Java的跨平台特性，我们在市场上见到的手机系统例如MIUI
            ，阿里云，乐蛙等，都是修改源代码再发行的。
          </p>
          <h3>3.JavaWeb 开发</h3>
          <p>
            Web开发语言很多，Java是其中之一。Java在开发高访问、高并发、集群化的大型网站方面有很大的优势，例如去哪儿网、美团等。
          </p>
          <h3>4.服务器程序开发</h3>
          <p>
            Java在金融服务业的应用很广泛，许多银行都会用Java来编写前台和后台的电子交易系统，数据处理项目，还有政府、教育行业也同样用到Java来编写系统。
          </p>
          <h3>5.游戏开发</h3>
          <p>
            现在主要是C++开发游戏，Java同样可也用在游戏开发，像热门游戏《我的世界》就是Java写的。
          </p>
          <h2>三、薪资状况</h2>
          <p>
            我们来看下面这张图：<img
              src="https://file.ituring.com.cn/ScreenShow/2107a04e68f727432224"
              alt=""
            />
          </p>

          <p>
            成都Java工程师平均的薪资9.2K，而且工作年限越久薪资会越来越高，3~5年开发经验的工程师，拥有年薪
            20万元是很正常的一个薪酬水平。通常一名Java初级程序员在成都薪资会在6-8K左右，而一名初级Java程序员只需在培训机构认真学习半年左右时间就可以满足要求。
          </p>
          <h2>四、职业发展</h2>
          <p>产品方向：需求分析师—业务经理—产品助理—产品运营—产品总监</p>
          <p>技术方向：后端程序员—项目经理—技术经理—架构师</p>
          <p>数据方向：数据挖掘—数据分析—大数据技术总监</p>
          <p>
            <img
              src="https://file.ituring.com.cn/ScreenShow/210721bcb0571b135117"
              alt=""
            />
          </p>

          <p>
            2021年Java软件开发有前途吗？总的来说Java软件开发，到今天依旧势头不减，无论是前途还是钱途都是非常优秀的，但这一切的前提都是要学好Java技术，不然上面的都是些空话。我这有免费的Java入门视频，有兴趣的小伙伴们可以自行领取。
          </p>
          <!-- 底部评论 -->
          <div class="bottom-content">
            <div class="bottom-title">发表新的评论</div>
            <div class="comment">
              <span>请先登录后发表评论</span>
            </div>
            <div class="bottom-num">
              <div class="left-num">共有0条评论</div>
              <div class="right-num">
                <span class="left">热门</span>
                <div class="line"></div>
                <span class="right">最新</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {
  getArticleDetail,
  getArticleDetailComment,
} from "../../../utils/api.js";
export default {
  name: "Article",
  data() {
    return {
      articleDetail: {},
      comments: [],
    };
  },
  async mounted() {
    // console.log(this.$route.params.id);
    let { id } = this.$route.params;
    let result = await getArticleDetail({
      url: `Article/${id}`,
      params: { id: id },
    });
    this.articleDetail = result;

    let comment = await getArticleDetailComment({
      url: "/Article/Comment",
      params: {
        id: id,
        page: 1,
        sort: "vote",
      },
    });
    this.comments = comment;
  },
};
</script>

<style scoped>
.searchComtainer {
  background: #fff;
  left: 180px;
  width: 1300px;
}
.articleDetail-container {
  width: 1080px;
  margin: 70px 133px 0px 304px;
}
.article-view {
  padding: 0 54px;
}
/* 头部 */
.header .top-text {
  display: flex;
  align-items: center;
}
.header .top-text .triangle {
  width: 0;
  height: 0;
  border-left: 8px solid #4684e2;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-right: none;
  width: 0;
  height: 0;
}
.header .top-text span {
  font-size: 14px;
  margin-left: 5px;
  color: #5f77a6;
}
.title {
  font-size: 32px;
  font-weight: 600;
  padding: 20px 0;
}
.user {
  display: flex;
  font-size: 14px;
  align-items: center;
  cursor: pointer;
  padding: 20px;
}
.user img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.user-name {
  font-weight: 500;
  margin-right: 16px;
  height: 22px;
  line-height: 22px;
}
.time {
  height: 22px;
  line-height: 20px;
}
/* 主体 */
.content {
  display: flex;
  position: relative;
  top: 50px;
}
.left-menu {
  position: sticky;
  width: 110px;
  max-height: 400px;
}
.left-menu .left-menu-item {
  width: 32px;
  height: 66px;
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  white-space: nowrap;
}
.left-menu-item img {
  width: 32px;
  height: 32px;
}
.count {
  font-weight: 600;
  font-size: 14px;
}
/* 右侧 */
.right-content {
  width: 722px;
}
.right-content p {
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 20px;
}
.right-content h2 {
  font-size: 24px;
  line-height: 32px;
}
.right-content h3 {
  font-size: 22px;
  line-height: 38px;
}
/* 底部 */
.bottom-content {
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  height: 22px;
  color: #152844;
  margin: 24px 0 12px;
}
.comment {
  color: #5f77a6;
  font-size: 14px;
  background: #f6f9fb;
  border-radius: 4px;
  text-align: center;
  height: 64px;
  line-height: 64px;
}
.bottom-num {
  margin: 24px 0;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.right-num {
  display: flex;
}
.right-num .line {
  width: 1px;
  height: 14px;
  margin: 3px 12px;
  background: #cedce4;
}
</style>
