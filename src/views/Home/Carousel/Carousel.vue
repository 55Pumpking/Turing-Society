<template>
  <div class="recommedPage-swiper">
    <!-- 左边轮播图 -->
    <div
      ref="leftSwiper"
      class="swiper-container recommedPage-swiper-left"
    >
      <!-- 轮播图容器 -->
      <div class="swiper-wrapper">
        <!-- 轮播图 -->
        <div
          class="swiper-slide"
          v-for="bigImgItem in carouselImg"
          :key="bigImgItem.id"
        >
          <img
            class="swiper-Img"
            :src="`https://file.ituring.com.cn/Original/${bigImgItem.imageKey}`"
          />
        </div>
      </div>
      <!-- 小圆点 -->
      <div class="swiper-pagination"></div>
    </div>

    <!-- 右边轮播 -->
    <div
      ref="rightSwiper"
      class="swiper-container recommedPage-swiper-right"
    >
      <!-- 轮播图容器 -->
      <div class="swiper-wrapper">
        <!-- 轮播图 -->
        <div
          class="swiper-slide"
          v-for="preSaleItem in preSaleList"
          :key="preSaleItem.id"
        >
          <div class="preSale">
            <img
              class="preSale-Img"
              src="../../../assets/tuijian/huahua.svg"
              alt="预售logo"
            />
            <span class="preSale-text">预售</span>
            <router-link to="/preSalePage"><span class="iconfont icon-shenglve">...</span></router-link>
            <img
              :src="`https://file.ituring.com.cn/Original/${preSaleItem.coverKey}`"
              :alt="preSaleItem.name"
            />
            <b>{{ preSaleItem.name }}</b>
            <span>{{ preSaleItem.authorNameString }}（作者）</span>
            <span>{{
              preSaleItem.translatorNameString
                ? `${preSaleItem.translatorNameString}（译者）`
                : ''
            }}</span>
          </div>
        </div>
      </div>
      <!-- 小圆点 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>

</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  name: "Carousel",
  props: {
    carouselImg: Array,
    preSaleList: Array,
  },
  methods: {},

  mounted() {},
  watch: {
    carouselImg() {
      this.$nextTick(() => {
        new Swiper(this.$refs.leftSwiper, {
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          loop: true, // 开启无缝轮播
          autoplay: true, //自动轮播
        });
      });
    },
    preSaleList() {
      this.$nextTick(() => {
        new Swiper(this.$refs.rightSwiper, {
          pagination: {
            el: ".swiper-pagination",
          },
          loop: true, // 开启无缝轮播
          autoplay: true,
        });
      });
    },
    immediate: true,
  },
};
</script>

<style scoped lang="less">
.recommedPage-swiper {
  // width: 1080px;
  height: 309px;
  // margin-top: 70px;
  display: flex;
  justify-content: space-between;
  //左边轮播图样式
  .recommedPage-swiper-left {
    // border: 1px solid red;
    width: 740px;
    height: 100%;
    margin-right: 20px;
    cursor: pointer;
    .swiper-Img {
      width: 740px;
      height: 100%;
      border-radius: 10px;
    }
  }
  //右边轮播图样式
  .recommedPage-swiper-right {
    position: relative;
    width: 320px;
    height: 100%;
    border-radius: 8px;
    background-color: #f6f9fb;
    cursor: pointer;
    .preSale {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      img {
        width: 127.65px;
        height: 168px;
        border-radius: 8px;
      }
      b {
        display: block;
        font-size: 17px;
        color: rgb(55, 55, 112);
        margin: 5px;
        width: 280px;
      }
      span {
        display: block;
        font-size: 12px;
        color: rgb(155, 151, 151);
        width: 100%;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      .icon-shenglve {
        position: absolute;
        top: -25px;
        right: -120px;
        font-size: 25px;
        color: black;
        font-weight: bold;
      }
      .preSale-Img {
        position: absolute;
        top: -20px;
        left: 0;
        width: 40px;
        height: 40px;
      }
      .preSale-text {
        position: absolute;
        top: -8px;
        left: 0;
        width: 40px;
        height: 40px;
        font-size: 14px;
        color: white;
      }
    }
  }
}
</style>