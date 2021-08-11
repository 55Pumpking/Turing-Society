<template>
  <div class="newBook-oneBook" @click="handleBookClick(book.id)">
    <div class="oneBookImg">
      <img
        v-lazy="{ src: 'https://file.ituring.com.cn/LargeCover/' + book.coverKey }"
        :alt="book.name"
      />
    </div>
    <div class="oneBook-text">
      <b class="oneBook-name">{{ book.name }}</b>
      <p class="oneBook-author">{{ book.authorNameString }}（作者）</p>
      <p class="oneBook-translator" v-if="book.translatorNameString">
        {{ book.translatorNameString }}（译者）
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OneBook',
  props: {
    book: Object
  },
  methods: {
    handleBookClick(bookId) {
      this.$router.push({
        name: 'BookDetail',
        params: {
          bookId
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.newBook-oneBook {
  margin: 10px 10px;
  width: 255px;
  text-align: center;
  .oneBookImg {
    width: 255px;
    height: 156px;
    border-radius: 5px 5px 0 0;
    background-color: rgb(234, 241, 245);
    img {
      width: 102.25px;
      height: 140px;
      margin-top: 8px;
      border-radius: 5px;
    }
  }
  .oneBook-text {
    height: 104px;
    padding-top: 10px;
    border-radius: 0 0 5px 5px;
    background-color: rgb(246, 249, 251);
    .oneBook-name {
      display: block;
      font-size: 16px;
      padding-bottom: 10px;
    }
    p {
      font-size: 12px;
      color: rgb(128, 124, 124);
    }
    .oneBook-translator {
      margin-top: 3px;
    }
  }
}
</style>
