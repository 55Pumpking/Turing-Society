<template>
  <div class="articleItem">
    <h3 class="title" @click="toDetail">
      {{ itemData.subject }}
    </h3>
    <div class="info">
      <div class="left-info">
        <img class="left-info-avatar" src="../../../assets/logo.png" alt="" />
        <span>{{ itemData.authorNickName }}</span>
        <span>{{ itemData.createDate.split("T")[0] }}</span>
      </div>
      <div class="right-num">
        <span>{{ itemData.voteCount }}推荐</span>
        <span>{{ itemData.viewCount }}阅读</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleItem",
  props: {
    itemData: Object,
  },
  methods: {
    toDetail() {
      let { id } = this.itemData;
      this.$router.history.push({
        name: "ArticleDetail",
        params: {
          id,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.articleItem {
  border-bottom: 1px dashed #cedce4;
  padding: 16px 0;
  .title {
    font-size: 18px;
    height: 28px;
    line-height: 28px;
    margin: 12px 0;
    cursor: pointer;
  }
}
.info {
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  .left-info {
    .left-info-avatar {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      margin-right: 8px;
    }
  }
}
/* .info:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
} */
</style>
