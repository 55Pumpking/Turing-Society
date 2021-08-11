<template>
  <div>
    <!-- 左侧导航栏结构 -->
    <div class="leftNav">
      <router-link to="/"><img src="./logo.svg" class="logo"/></router-link>
      <ul @click="changePage($event)">
        <li data-select="1">
          <router-link to="/home/homepage" active-class="active" exact
            ><span class="iconfont icon-xingqiu"></span> <span class="title">推荐</span></router-link
          >
        </li>
        <li data-select="2">
          <router-link to="/home/book" active-class="active"
            ><span class="iconfont icon-book"></span><span class="title">图书</span></router-link
          >
        </li>
        <li data-select="3">
          <router-link to="/home/article" active-class="active"
            ><span class="iconfont icon-articleicon301"></span><span class="title">文章</span></router-link
          >
        </li>
      </ul>
    </div>
    <!-- 头部导航栏结构 -->
    <div class="header">
      <div class="container">
        <div class="search" @click="toSearch">
          <img src="../../static/images/searchIcon.571b59cb.svg" alt="" />
          <input class="input" placeholder="输入关键词" />
        </div>
        <div class="header-right">
          <button class="push icon-button">投稿</button>
          <button class="login icon-button" @click="toLogin">登录图灵</button>
          <span class="iconfont icon-gouwu icon-button" @click="toCart"></span>
          <span class="iconfont icon-ling icon-button"></span>
        </div>
      </div>
    </div>
    <!-- 底部结构 -->
  </div>
</template>

<script>
export default {
  name: 'LeftHeader',
  data() {
    return {
      selectPage: ''
    }
  },

  methods: {
    toSearch() {
      this.$router.history.push({
        name: 'Search'
      })
    },
    toCart() {
      this.$router.history.push({
        name: 'Cart'
      })
    },
    toLogin() {
      this.$router.history.push({
        name: 'Login'
      })
    },
    changePage(e) {
      const { select } = e.target.dataset
      if (!select) return
      this.selectPage = select
    }
  }
}
</script>

<style lang="less" scoped>
// 左侧导航栏样式
.leftNav {
  width: 172px;
  background: #fff;
  min-height: 100vh;
  height: 100vh;
  border-right: 1px solid #cedce4;
  padding-left: 24px;
  margin-top: -56px;
  box-sizing: border-box;
  overflow: hidden;
  font-size: 0;
  z-index: 18;
  position: fixed;
  left: 0;
  img {
    width: 120px;
    margin-top: 16px;
  }
  ul {
    margin-top: 28px;
    li {
      margin-bottom: 24px;
      line-height: 24px;
      .active {
        color: #4684e2;
      }
      span.title {
        font-size: 14px;
        padding: 0;
        margin-left: 16px;
      }
      span.iconfont {
        font-size: 20px;
      }
      a {
        text-decoration: none;
        color: #152844;
        display: flex;
        align-items: center;
      }
      &:hover a {
        color: #4684e2;
        transition: color 0.2s;
      }
    }
  }
}

// 头部样式
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-left: 172px;
  border-bottom: 1px solid #cedce4;
  z-index: 16;
  background-color: #fff;
  overflow: hidden;
  // display: flex;
  // justify-content: space-between;
}
.container {
  padding: 0 54px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 56px;
  line-height: 56px;
  .search {
    margin-right: 36%;
    img {
      position: relative;
      left: 10px;
      top: 3px;
      // vertical-align: bottom;
    }
  }
  .input {
    /* position: relative; */
    /* width: 300px; */
    height: 30px;
    min-width: 350px;
    border-radius: 20px;
    background: #ecf3fc;
    padding: 0 12px;
    margin-left: -20px;
    border: none;
    color: #a1adc5;
    line-height: 30px;
    padding-left: 36px;
    outline: none;
  }
  input::-webkit-input-placeholder {
    /* WebKit browsers */
    font-size: 14px;
    color: #a1adc5;
  }
  .header-right {
    flex: 1;
    display: flex;
    align-items: center;
    button {
      margin-right: 32px;
      width: 88px;
      height: 32px;
      cursor: pointer;
      background-color: #4684e2;
      font-size: 14px;
      color: #fff;
      border-radius: 32px;
      border: none;
      text-align: center;
      transition: background-color 0.2s;
      &:hover {
        background-color: #3f77cb;
      }
    }
    span {
      margin-right: 32px;
      font-size: 24px;
      cursor: pointer;
      transition: color 0.4s;
      &:hover {
        color: #4684e2;
      }
    }
  }
}
</style>
