<template>
  <div class="mainNavList">
    <div class="mainNavListItem">
      <img
        class="mainlogoImg"
        src="../../assets/images/indexImg/turing-logo-beta.60847c6d.svg"
      />
      <ul class="mainUl">
        <li class="mainLi" @click="handleToRecommend" @mouseenter="handleShow(1)" @mouseleave="handleGo(1)">
          <img
           :class="{mainLiIcon:!isShow1, isShow:!isShow1}"
            src="https://www.ituring.com.cn/img/hot-icon.f5af22b5.svg"
          />
           <img
           :class="{mainLiIcon:isShow1, isShow:isShow1}"
            src="https://www.ituring.com.cn/img/hot-icon-select.09d8d431.svg"
          />
          <span class="hot-icon-select">推荐</span>
        </li>
        <li class="mainLi" @click="handelToBook" @mouseenter="handleShow(2)" @mouseleave="handleGo(2)">
          <img
           :class="{mainLiIcon:!isShow2, isShow:!isShow2}"
            src="https://www.ituring.com.cn/img/book-icon.bac7021b.svg"
          />
           <img
           :class="{mainLiIcon:isShow2, isShow:isShow2}"
            src="https://www.ituring.com.cn/img/book-icon-select.d4b0e689.svg"
          />
          <span class="hot-icon-select">图书</span>
        </li>
        <li class="mainLi" @click="handelToArticle" @mouseenter="handleShow(3)" @mouseleave="handleGo(3)">
          <img
           :class="{mainLiIcon:!isShow3, isShow:!isShow3}"
            src="https://www.ituring.com.cn/img/article-icon.5414cc1a.svg"
          />
           <img
           :class="{mainLiIcon:isShow3, isShow:isShow3}"
            src="https://www.ituring.com.cn/img/article-icon-select.ee74cfc7.svg"
          />
          <span class="hot-icon-select">文章</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainNavList',
  data(){
    return{
      isShow1:true,
      isShow2:true,
      isShow3:true,
    }
  },
  methods:{
    //跳转到图书页面
    handelToBook(){
      this.$router.history.push('/book')
    },
    //跳转到文章页面
    handelToArticle(){
      this.$router.history.push('/article')
    },
    //跳转到推荐页面
    handleToRecommend() {
      this.$router.history.push('/')
    },
    handleShow(num){
      this[`isShow${num}`]=false
    },
    handleGo(num){
      this[`isShow${num}`]=true
    }
  }
}
</script>

<style scoped>
.mainNavList {
  width: 147px;
  height: 3000px;
  padding-left: 24px;
  border-right: 1px solid #cedce4;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #fff;
}
.mainlogoImg {
  margin-top: 12px;
  text-align: left;
}
.mainUl {
  margin-top: 28px;
}
.mainUl .mainLi {
  width: 140px;
  height: 24px;
  line-height: 24px;
  margin-bottom: 24px;
  text-align: left;
}
.mainLi span {
  display: inline-block;
  font-size: 14px;
  padding-bottom: 15px;
  vertical-align: middle;
}
.mainLi img {
  margin-right: 16px;
}
.mainLi:hover {
  color: #4684e2;
  cursor: pointer;
}
.mainLiIcon.isShow{
  display: none;
}

</style>
