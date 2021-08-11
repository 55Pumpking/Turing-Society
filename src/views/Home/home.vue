<template>
  <!--首页 https://api.ituring.com.cn/api/Page/Home -->
  <div class="content-view">
    <!-- 轮播图 -->
    <div class="banner-view">
      <div class="swiper-one">
        <Carousel
          :carouselImg="carousel"
          :preSaleList="preSaleList"
          @click="handleBookClick"
        />
      </div>
    </div>

    <!-- 内容区 -->
    <div class="book-list hidden-sm">
      <!-- 新书上市 -->
      <div class="new-view">
        <!-- 标题 -->
        <div class="title">
          <span class="title-one">新书上市</span>
          <button class="right-btns" v-if="change" @click="handleChange">
            &gt;
          </button>
          <button class="right-btns" v-else @click="handleChange">
            &lt;
          </button>
        </div>
        <NewBook
          :change="change"
          :newBookComtent="newBookComtent"
          :newBookSwitch="newBookSwitch"
        />
      </div>

      <!-- 每周特价 -->
      <div class="special-view">
        <!-- 标题 -->
        <div class="title">
          <span class="title-one">每周特价</span>
        </div>

        <div class="special-books">
          <img class="special-img" src="../../assets/tuijian/tejia.png" />
          <div
            class="book-item"
            v-for="weeklySpecialItem in weeklyList"
            :key="weeklySpecialItem.id"
            @click="handleBookClick(weeklySpecialItem.id)"
          >
            <div class="img-view">
              <img
                v-lazy="
                  `https://file.ituring.com.cn/Original/${weeklySpecialItem.coverKey}`
                "
              />
            </div>
            <div class="info-view">
              <h3 class="book-name">{{ weeklySpecialItem.name }}</h3>
              <p class="authors">
                {{ weeklySpecialItem.authorNameString }}（作者）
              </p>
              <p class="translators">
                {{ weeklySpecialItem.translatorNameString }}（译者）
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 热门图书 -->
      <div class="hot-view">
        <!-- 标题 -->
        <div class="title">
          <span class="title-one">热门图书</span>
        </div>

        <div class="hot-books">
          <div
            class="book-item-remen"
            v-for="BooksItem in popList"
            :key="BooksItem.id"
            @click="handleBookClick(BooksItem.id)"
          >
            <div class="img-view">
              <img
                v-lazy="
                  `https://file.ituring.com.cn/Original/${BooksItem.coverKey}`
                "
                :alt="BooksItem.name"
              />
            </div>
            <div class="info-view">
              <h3 class="book-name">{{ BooksItem.name }}</h3>
              <p class="authors">{{ BooksItem.authorNameString }}（作者）</p>
              <p class="translators">
                {{ BooksItem.translatorNameString }}（译者）
              </p>
            </div>
          </div>
        </div>
        <!-- <a
          class="more-hot-books"
          href=""
        >查看全部热门书籍</a> -->
        <router-link
          class="more-hot-books"
          :to="{ name: 'BookMainPage', query: {} }"
          >查看全部热门书籍</router-link
        >
      </div>
    </div>
    <!-- <Footer></Footer> -->
    <Footer v-if="!$route.meta.hideFooter" />
  </div>
</template>

<script>
import NewBook from "@/views/Home/NewBook/NewBook";
import Carousel from "./Carousel/Carousel";
import api from "../../API/home";
import Footer from "../../components/Footer/Footer";

export default {
  name: "home",
  data() {
    return {
      change: true,
      carousel: [], //大轮播图
      preSaleList: [], //小轮播图
      popList: [], //热门图书
      weeklyList: [], //每周特价
      newBookComtent: [], //新书上市
      newBookSwitch: [], //新书上市切换
    };
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

    handleChange() {
      this.change = !this.change;
    },
  },

  async mounted() {
    // 请求轮播图数据
    const lunbotu = (await api.reqGetCarouselBigImg()).banners;
    // console.log("lunbotu", lunbotu);
    // 冻结响应式数据
    this.carousel = Object.freeze(lunbotu);

    //获取新书上市的数据
    const newBookComtent = (await api.reqGetNewBookComtent()).bookItems;
    // console.log('newBookComtent', newBookComtent)
    this.newBookComtent = Object.freeze(newBookComtent);

    const getNewBookSwitch = (await api.reqGetNewBookSwitch()).bookItems;
    this.newBookSwitch = Object.freeze(getNewBookSwitch);

    // 请求小轮播图、每周特价、热门图书数据
    const getRecommendPageText = (await api.reqGetRecommendPageText())
      .blockContents;
    const result = getRecommendPageText.map((item) => {
      return item.tag.bookItems;
    });
    // console.log(result);
    const bookItems = Object.freeze(result.slice(0, 3));
    this.popList = bookItems[0];
    this.weeklyList = bookItems[1];
    this.preSaleList = bookItems[2];
    // console.log('bookItems',bookItems);
  },

  components: {
    Carousel,
    NewBook,
    Footer,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.content-view {
  width: 1080px;
  margin: 0 auto;
  padding-top: 2px;
}

/* 轮播图 */
.banner-view {
  display: flex;
  width: 100%;
  height: 309px;
  margin: 16px 0 3px 0;
}

/* 内容展示 */
.book-list {
  width: 1080px;
}
.new-view {
  display: block;
  width: 100%;
  /* height: 586px; */
  background: #fff;
  margin: 24px 0;
}
.title {
  position: relative;
  width: 100%;
  height: 26px;
  line-height: 26px;
  font-weight: 600px;
  color: #333;
}
.title-one {
  font-weight: 600;
  font-size: 18px;
}
.right-btns {
  position: absolute;
  right: 0;
  top: 0;
  width: 26px;
  height: 26px;
  margin-left: 8px;
  font-weight: 600;
  font-size: 14px;
  background: #f6f9fb;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
}

/* 新书上市 */

.book-item {
  position: relative;
  /* flex: 1; */
  /* width: 255px; */
  /* height: 264px; */
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
.book-item-remen {
  position: relative;
  flex: 1;
  width: 255px;
  height: 264px;
  margin-top: 16px;
  min-width: 255px;
  max-width: 255px;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
  box-sizing: inherit;
  margin-right: 20px;
}
.book-item-remen:nth-of-type(4n) {
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
  white-space: nowrap;
  color: #6f6f6f;
}

.special-view {
  width: 100%;
  height: 306px;
}
.special-img {
  width: 255px;
  height: 263px;
  margin: 16px 20px 0 0;
}
.special-books {
  display: flex;
  width: 100%;
  /* margin-right: 16px; */
  /* justify-content: space-between; */
}

/* 第三栏 */
.hot-view {
  width: 100%;
  /* height: 352px; */
  margin: 24px 0;
}
.hot-books {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.more-hot-books {
  display: block;
  width: 100%;
  height: 22px;
  line-height: 22px;
  font-size: 14px;
  text-align: center;
  margin: 24px auto 0;
  color: #4684e2;
  text-decoration: none;
}
</style>
