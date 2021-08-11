<template>
  <div class="search">
    <!-- 搜索 -->
    <div class="search-input">
      <img src="./image/search-icon.7e146fd0.svg" @click="toBook" />
      <input
        placeholder="请输入搜索关键词 "
        v-model="search"
        @keyup.enter="toBook"
      />
      <router-link to="/home/homepage">
        <img src="./image/search-close-icon.58504ba8.svg" />
      </router-link>
    </div>
    <!-- 搜索历史 -->
    <div class="search-history">
      <h3>搜索历史</h3>
      <div class="history-box">
        <button v-for="item in history" :key="item">{{ item }}</button>
      </div>
    </div>
    <!-- 热门搜索 -->
    <div class="hot-search">
      <h3>热门搜索</h3>
      <div class="hot-box">
        <button>Python</button>
        <button>算法</button>
        <button>诚征译者</button>
        <button>机器学习</button>
        <button>Java</button>
        <button>JavaScript</button>
        <button>数学</button>
        <button>c语言</button>
        <button>sql</button>
        <button>最新上线</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      history: [],
      search: "",
    };
  },
  methods: {
    toBook() {
      let { search, history } = this;
      if (!search) return;
      history.unshift(search);
      sessionStorage.setItem("history", JSON.stringify(history));
      this.$router.history.push("/home/book");
    },
  },
  mounted() {
    if (sessionStorage.getItem("history")) {
      let history = JSON.parse(sessionStorage.getItem("history"));
      this.history = history;
    }
  },
};
</script>

<style scoped>
.search {
  min-width: 1000px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  /* background: skyblue; */
}
.search-input {
  display: flex;
  margin: 32px 0 40px;
  text-align: center;
}
input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #bac1ce;
}
.search-input input {
  width: 90%;
  height: 30px;
  border: none;
  margin: 0 10px;
  color: #152844;
  font-size: 14px;
  line-height: 30px;
  vertical-align: bottom;
}
.search-input input:focus {
  outline: 0;
  border-color: #fff;
}

.search-history {
  margin-top: 40px;
}
button {
  border: 1px solid #a1adc5;
  border-radius: 16px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  margin: 8px 8px 0 0;
  padding: 0 16px;
  font-size: 14px;
  color: #152844;
  background: #fff;
}
.hot-search {
  margin-top: 30px;
}
</style>
