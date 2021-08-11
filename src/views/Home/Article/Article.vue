<template>
  <div class="content-margin">
    <!-- 左侧菜单 -->
    <div class="content-menu" @click="tab">
      <!-- 单个项目 -->
      <div class="menu-item" data-tab="all">
        <span class>所有文章</span>
        <div class="traingle"></div>
      </div>
      <!-- 单个项目 -->
      <div class="menu-item" data-tab="7hot">
        <span class>7日热门</span>
        <div class="traingle"></div>
      </div>
      <!-- 单个项目 -->
      <div class="menu-item" data-tab="30hot">
        <span class>30日热门</span>
        <div class="traingle"></div>
      </div>
      <!-- 单个项目 -->
      <div class="menu-item" data-tab="follow">
        <span class>我的关注</span>
        <div class="traingle"></div>
      </div>
      <!-- 单个项目 -->
      <div class="menu-item" data-tab="fav">
        <span class>我的搜藏</span>
        <div class="traingle"></div>
      </div>
      <!-- 单个项目 -->
      <div class="menu-item" data-tab="mine">
        <span class>我的文章</span>
        <div class="traingle"></div>
      </div>
    </div>
    <!-- 右侧列表 -->
    <div class="content-list-view">
      <div class="content-nav" @click="sort">
        <span>排序方式:</span>
        <span
          class="tab-item"
          @click="num = 0"
          :class="{ active: num == 0 }"
          data-sort="new"
          >最新</span
        >
        <span
          class="tab-item"
          @click="num = 1"
          :class="{ active: num == 1 }"
          data-sort="hot"
          >最热</span
        >
        <span
          class="tab-item"
          @click="num = 2"
          :class="{ active: num == 2 }"
          data-sort="vote"
          >推荐</span
        >
        <span
          class="tab-underline"
          :style="`transform:translate(${offset}px)`"
        ></span>
      </div>
      <!-- 列表 -->
      <div
        class="articleList"
        element-loading-text="拼命加载中"
        v-loading="loading"
      >
        <div v-if="articleListItems.length">
          <ArticleItem
            v-for="item in articleListItems"
            :key="item.id"
            :itemData="item"
          />
        </div>
        <div v-else-if="!loading && !articleListItems.length">
          <h3>没有更多了</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleItem from "./ArticleItem";
import { getArticle } from "../../../utils/api";
export default {
  name: "Article",
  components: {
    ArticleItem,
  },
  data() {
    return {
      offset: 80,
      loading: true,
      num: 0,
      count: 0,
      articleListItems: [],
      articleObject: {
        url: "/Article",
        params: {
          sort: "new",
          page: 1,
          tab: "",
        },
      },
    };
  },
  watch: {
    num(val) {
      switch (val) {
        case 0: {
          this.offset = 80;
          break;
        }
        case 2: {
          this.offset = 205;
          break;
        }
        case 1: {
          this.offset = 145;
          break;
        }
      }
    },
  },
  methods: {
    /* 排序 */
    sort(e) {
      if (e.target.dataset.sort) {
        let { sort } = e.target.dataset;
        /* e.target.classList.add('tab-item-active') */
        let sortObj = {
          new: "new",
          hot: "hot",
          vote: "vote",
        };
        this.articleListItems = [];
        this.articleObject.params.sort = sortObj[sort];
        this.getArticleData(this.articleObject);
      }
    },
    /* 分类 */
    tab(e) {
      if (e.target.dataset.tab) {
        let { tab } = e.target.dataset;
        let tabObj = {
          all: "",
          "7hot": "7hot",
          "30hot": "30hot",
          follow: "follow",
          fav: "fav",
          mine: "mine",
        };
        this.articleListItems = [];
        this.articleObject.params.tab = tabObj[tab];
        this.getArticleData(this.articleObject);
      }
    },
    /* 分装请求 */
    async getArticleData({ url, params, method = "GET" }) {
      this.loading = true;
      let { articleListItems } = await getArticle({ url, params, method });
      this.loading = false;
      this.articleListItems.push(...articleListItems);
    },
    /* 节流 */
    thro(fn, time) {
      var lasttime = 0;
      return function() {
        let starttime = Date.now();
        if (starttime - lasttime < time) {
          return;
        }
        lasttime = starttime;
        fn.call(this, arguments[0]);
      };
    },
  },
  async mounted() {
    /* 初次加载 */
    await this.getArticleData(this.articleObject);
    /* 滚动到底部 */
    window.onscroll = () => {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 变量 windowHeight 是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      // 变量 scrollHeight 是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      if (scrollTop + windowHeight >= scrollHeight - 19) {
        this.articleObject.params.page += 1;
        this.thro(this.getArticleData(this.articleObject), 1000);
      }
    };
  },
  beforeDestroy() {
    window.onscroll = null;
  },
};
</script>

<style lang="less" scoped>
/* 菜单开始 */
.content-margin {
  display: flex;
  margin: 0 auto;
}
.content-menu {
  height: fit-content;
  margin-right: 20px;
  box-sizing: border-box;
  min-width: 235px;
  padding: 4px 16px;
  border: 1px solid #cedce4;
  .menu-item {
    /* position: relative; */
    height: 42px;
    line-height: 42px;
    font-size: 14px;
    color: #152844;
    border-bottom: 1px dashed #cedce4;
    cursor: pointer;
  }
  .menu-item:last-of-type {
    border-bottom: 0px;
  }
}

.menu-item-select {
  color: #4684e2;
}
/* 菜单三角 */
.traingle {
  position: absolute;
  right: 0;
  top: 16px;
  border-left: 6px solid #4684e2;
  border-right: none;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
}
/* 菜单结束 */

/* 列表开始 */
.content-list-view {
  flex: 1;
}
.content-nav {
  position: relative;
  height: 42px;
  line-height: 42px;
  color: #6c6c6c;
  display: flex;
}
.content-nav .active {
  color: blue;
}
/* 滑动效果 */
.content-nav .tab-underline {
  top: 35px;
  transition: 0.3s;
  position: absolute;
  width: 12px;
  height: 4px;
  background: #4684e2;
}
.tab-item {
  width: 44px;
  text-align: center;
  color: #999;
  cursor: pointer;
  margin-right: 16px;
}
.articleList {
  width: 745px;
}
</style>
