<template>
  <!-- <el-row class="tac">
    <el-col :span="14">
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <img src="./logo.svg" class="logo" />
        <el-menu-item index="2">
          <i class="iconfont icon-xingqiu"></i>
          <span slot="title" class="title">推荐</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="iconfont icon-book"></i>
          <span slot="title" class="title">图书</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="iconfont icon-articleicon301" style="font-size: 18px"></i>
          <span slot="title" class="title">文章</span>
        </el-menu-item>
      </el-menu>
    </el-col> </el-row
  > -->
  <div>
    <ul>
      <li>
        <router-link to="/"><img src="./logo.svg" class="logo"/></router-link>
      </li>
      <li>
        <router-link to="/home/homepage" active-class="active"
          ><span class="iconfont icon-xingqiu"></span>
          <span class="title">推荐</span></router-link
        >
      </li>
      <li>
        <router-link to="/home/book" active-class="active"
          ><span class="iconfont icon-articleicon301"></span>
          <span class="title">图书</span></router-link
        >
      </li>
      <li>
        <router-link to="/home/article" active-class="active"
          ><span class="iconfont icon-book"></span>
          <span class="title">文章</span></router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LeftNav",
  mounted() {
    /* console.log("mounted"); */
  },
};
</script>

<style scoped>
a {
  text-decoration: none !important;
}
a {
  color: black;
}
a:hover {
  text-decoration: none !important;
}
/* 
.tac {
  width: 300px;
}

.logo {
  margin-top: 20px;
  margin-left: 20px;
  text-align: center;
} */

.logo {
  margin-top: 20px;
  text-align: center;
}
ul {
  width: 170px;
  height: 100%;
  border-right: 1px solid #cedce4;
  font-size: 16px;
}
ul li {
  margin: 26px;
  margin-left: 20px;
  margin-top: 0px;
}
.title {
  margin-left: 20px;
  vertical-align: middle;
}
.active {
  color: #409eff;
}
</style>
