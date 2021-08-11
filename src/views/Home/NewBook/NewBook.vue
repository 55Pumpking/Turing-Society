<template>
  <!-- 新书上市 内容区大盒子 左 -->
  <div class="new-books">
    <img
      class="new-img"
      src="http://image.ituring.com.cn/0f36c7c0-a333-11eb-b7a9-b16899e368e1"
    >
    <!-- 内容区中盒子 -->
    <div
      class="new-items"
      v-if="change"
    >
      <!-- 小盒子 -->
      <div
        class="book-item"
        v-for="newBookItem in newBookComtent"
        :key="newBookItem.id"
        @click="handleBookClick(newBookItem.id)"
      >
        <div class="img-view">
          <img
            v-lazy="`https://file.ituring.com.cn/Original/${newBookItem.coverKey}`"
            :alt="newBookItem.name"
          >
        </div>
        <div class="info-view">
          <h3 class="book-name">{{newBookItem.name}}</h3>
          <p class="authors">{{newBookItem.authorNameString}}（作者）</p>
          <p class="translators">{{newBookItem.translatorNameString}}（译者）</p>
        </div>
      </div>
    </div>

    <!-- 另一边 -->
    <div
      class="new-items"
      v-else
    >
      <!-- 小盒子 -->
      <div
        class="book-item"
        v-for="newBookSwitchItem in newBookSwitch"
        :key="newBookSwitchItem.id"
        @click="handleBookClick(newBookSwitchItem.id)"
      >
        <div class="img-view">
          <img
            v-lazy="`https://file.ituring.com.cn/Original/${newBookSwitchItem.coverKey}`"
            :alt="newBookSwitchItem.name"
          >
        </div>
        <div class="info-view">
          <h3 class="book-name">{{newBookSwitchItem.name}}</h3>
          <p class="authors">{{newBookSwitchItem.authorNameString}}（作者）</p>
          <p class="translators">{{newBookSwitchItem.translatorNameString}}（译者）</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewBook",
  data() {
    return {
      // change: true,
    };
  },

  props: {
    newBookSwitch: Array,
    newBookComtent: Array,
    change: Boolean,
  },

  methods: {
    handleBookClick(id) {
      // console.log("id", id);
      this.$router.push({
        name: "BookInfo",
        params: {
          id,
        },
      });
    },
  },
};
</script>

<style scoped>
/* 内容展示 */
*{
  margin: 0;
  padding: 0;
}
/* 新书上市 */
.new-books {
  display: flex;
  flex-wrap: nowrap;
  box-sizing: inherit;
  width: 100%;
  height: 560px;
  /* border: 1px solid red; */
}
.new-img {
  width: 255px;
  height: 544px;
  margin: 16px 20px 0 0;
}
.new-items {
  display: flex;
  justify-content: flex-start;
  flex: 1;
  flex-wrap: wrap;
}
.book-item {
  position: relative;
  flex: 1;
  width: 255px;
  height: 264px;
  background: greenyellow;
  margin-top: 16px;
  min-width: 255px;
  max-width: 255px;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
  box-sizing: inherit;
  margin-right: 20px;
}
.book-item:nth-of-type(3n) {
  margin-right: 0;
}
.img-view {
  width: 255px;
  height: 140px;
  padding: 8px 0;
  background: #eaf1f5;
}
.img-view:hover {
  transform: scale(1.05, 1.05);
}
.img-view img {
  display: block;
  height: 100%;
  margin: 0 auto;
}
.info-view {
  width: 223px;
  height: 108px;
  padding: 0 16px 0 16px;
  background: #f6f9fb;
  text-align: center;
  overflow: hidden;
}
.book-name {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  overflow: hidden;
  margin: 12px 0 8px;
  color: #1c355a;
}
.authors {
  font-size: 12px;
  line-height: 14px;
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #6f6f6f;
}
.translators {
  font-size: 12px;
  line-height: 14px;
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #6f6f6f;
  white-space: nowrap;
}
</style>