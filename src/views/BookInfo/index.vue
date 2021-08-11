<template>
  <div class="bookInfoContainer" v-loading.fullscreen.lock="loading">
    <!-- 详情页头部 -->
    <div class="book-infos-view">
      <!-- 封面及作者 -->
      <div class="book-infos">
        <div class="book-img-box">
          <img
            :src="
              `https://file.ituring.com.cn/LargeCover/${bookInfoList.coverKey}`
            "
            alt=""
          />
        </div>
        <div class="book-info-box">
          <div class="book-state">
            <span class="state">上市销售</span>
            <span>{{ bookInfoList.bookCollectionName }}</span>
          </div>
          <h1>{{ bookInfoList.name }}</h1>
          <div class="authors">
            <span>作者：</span>
            <span class="name">{{ bookInfoList.authorNameString }}</span>
          </div>
          <div class="translator">
            <span>译者：</span>
            <span class="name">{{ bookInfoList.translatorNameString }}</span>
          </div>
        </div>
      </div>
      <!-- 用户操作 -->
      <div class="book-counts">
        <div class="count-item">
          <div class="count-img">
            <img src="./images/want-read-icon.030fb9dc.svg" alt="" />
          </div>
          <div class="count-box">
            <span class="count-title">加入心愿单</span>
            <div class="count-num">{{ bookInfoList.favCount }}</div>
          </div>
        </div>

        <div class="count-item">
          <div class="count-img">
            <img src="./images/recommend-icon.f76f2546.svg" alt="" />
          </div>
          <div class="count-box">
            <span class="count-title">推荐</span>
            <div class="count-num">{{ bookInfoList.voteCount }}</div>
          </div>
        </div>

        <div class="count-item">
          <div class="count-img">
            <img src="./images/read-online-icon.db682cf7.svg" alt="" />
          </div>
          <div class="count-box">
            <span class="count-title">在线阅读</span>
            <div class="count-num">{{ bookInfoList.viewCount }}</div>
          </div>
        </div>

        <div class="count-item">
          <div class="count-img">
            <img src="./images/ebook-download-icon.8efa1dbf.svg" alt="" />
          </div>
          <div class="count-box">
            <span class="count-title">随书下载</span>
            <div>
              <span class="text">文件</span>
              <span class="num-text">{{
                bookInfoList.resources ? bookInfoList.resources.length : 0
              }}</span>
            </div>
          </div>
        </div>

        <div class="count-item">
          <div class="count-img">
            <img src="./images/share-icon.01325570.svg" alt="" />
          </div>
          <div class="count-box">
            <span class="count-title">分享</span>
            <img src="./images/wb-share.de904f1b.svg" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- 购买方式 -->
    <div class="buy-way">
      <div class="title">购买方式</div>
      <div class="flex-view">
        <div
          class="buy-way-item"
          v-for="salesInfo in salesInfos"
          :key="salesInfo.edition"
          v-show="salesInfo.canBeSaled"
        >
          <div class="name">
            {{ salesInfosObj[salesInfo.edition].kind }}
          </div>
          <div class="price" v-if="salesInfo.edition !== 8">
            <span class="discount-price">¥{{ salesInfo.discountPrice }}</span>
            <span
              class="original-price"
              v-if="salesInfo.discountPrice !== salesInfo.price"
              >¥{{ salesInfo.price }}</span
            >
            <el-button
              icon="el-icon-plus"
              class="buy-btn"
              type="primary"
              @click="toShopCar"
              >{{ salesInfosObj[salesInfo.edition].join }}</el-button
            >
          </div>
          <div v-else>
            <el-button class="buy-left" type="primary" size="mini">
              <img src="./images/buy-dangdang.96fdd8ae.svg" alt="" />
              当当
            </el-button>
            <el-button class="buy-right" type="primary" size="mini">
              <img src="./images/buy-jingdong.1d483f5f.svg" alt="" />
              京东
            </el-button>
          </div>
        </div>
      </div>
    </div>
    <Content
      :bookInfoList="bookInfoList"
      :salesInfos="salesInfos"
      :specialNotes="specialNotes"
      :publicationDate="publicationDate"
    />
  </div>
</template>

<script>
import { getBookInfo } from "../../API/bookInfo";
import moment from "moment";
import Content from "./Content";
export default {
  name: "BookInfo",
  data() {
    return {
      bookInfoList: {}, //详情页总数据
      salesInfos: [], //购买方式的种类
      salesInfosObj: {
        1: { kind: "纸质书", join: "购书袋" },
        4: { kind: "电子书", join: "购书袋" },
        5: { kind: "样书", join: "样书袋" },
        8: { kind: "其他渠道" },
      },
      shopId: "", //书本的ID
      specialNotes: "",
      loading: true, //是否显示正在加载
      publicationDate: "", //发版时间
    };
  },
  mounted() {
    this.shopId = this.$route.params.id;
    // 请求书本详情
    this.getBookInfoList(this.shopId);
  },
  methods: {
    // 请求书本详情
    async getBookInfoList(Id) {
      // 请求书本的详细信息
      const bookInfoList = await getBookInfo(Id);
      this.bookInfoList = bookInfoList;
      // 购买方式及价格
      this.salesInfos = bookInfoList.salesInfos;
      // 书本的详细介绍
      this.specialNotes = bookInfoList.briefIntro.specialNotes;
      // 格式化时间
      this.publicationDate = moment(bookInfoList.publishDate).format(
        "YYYY-MM-DD"
      );
      // 关闭loading状态
      this.loading = false;
    },
    // 跳转至购物车页面
    toShopCar() {
      this.$router.push({
        path: `/home/cart/${this.shopId}`,
        params: {
          id: this.shopId,
        },
      });
    },
  },
  components: {
    Content,
  },
};
</script>

<style lang="less" scoped>
.bookInfoContainer {
  width: 100%;
}

/* 详情页头部 */
.book-infos-view {
  min-width: 1080px;
  width: 70%;
  display: flex;
  margin: 0px auto;
  padding: 40px 0;
  justify-content: space-between;
}

/* 封面及作者 */
.book-infos {
  display: flex;
}

.book-img-box {
  width: 235px;
  height: 320px;
  margin: 0 40px 0 0;
  img {
    width: 235px;
    height: 302px;
  }
}

.book-state .state {
  font-weight: 500;
  color: #4684e2;
  background: rgba(70, 132, 226, 0.1);
  border-radius: 2px;
  padding: 5px 8px;
  margin-right: 16px;
}

.book-info-box {
  width: 550px;
  height: 320px;
  h1 {
    font-size: 24px;
    line-height: 32px;
    margin: 16px 0;
  }
}

.authors {
  font-size: 14px;
  line-height: 18px;
  margin: 8px 0;
  color: #787878;
  .name {
    color: #315c9e;
    white-space: normal;
  }
}

.translator {
  font-size: 14px;
  line-height: 18px;
  margin: 8px 0;
  color: #787878;
  .name {
    color: #315c9e;
    white-space: normal;
  }
}

/* 用户操作 */
.book-counts {
  width: 235px;
  height: 320px;
  flex: 0 0 235px;
  margin-left: 20px;
}

.count-item {
  width: 100%;
  height: 64px;
  align-items: center;
  display: flex;
  .count-img {
    margin: 0 24px 0 0;
    img {
      width: 32px;
      height: 32px;
    }
  }
  .count-box {
    display: flex;
    width: 100%;
    height: 100%;
    line-height: 24px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #dae1e7;
    .text {
      color: #787878;
      font-size: 12px;
      margin-right: 4px;
      font-weight: 400;
      vertical-align: middle;
    }
    img {
      width: 30px;
      height: 30px;
      margin-left: 16px;
    }
    .count-title {
      color: #152844;
      font-weight: 600;
      font-size: 16px;
      display: block;
      height: 18px;
    }
  }
}

.count-item .count-box .count-num,
.count-item .count-box div .num-text {
  font-weight: 600;
  font-size: 20px;
  color: #152844;
}

/* 购买方式 */
.buy-way {
  min-width: 1080px;
  width: 70%;
  margin: 0 auto;
  overflow: hidden;
}

.buy-way .title {
  font-weight: 600;
  font-size: 18px;
  height: 26px;
  line-height: 26px;
  color: #152844;
  margin-bottom: 12px;
}

.buy-way .flex-view {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  .buy-way-item {
    width: 235px;
    height: 127px;
    border: 1px solid #cedce4;
    border-radius: 4px;
    background-color: #fbfeff;
    margin-right: 20px;
    padding: 10px;
    .name {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #152844;
      height: 24px;
      margin-bottom: 22px;
    }
    .price {
      line-height: 24px;
    }
    .discount-price {
      color: #ff7b31;
      font-size: 18px;
      font-weight: 700;
    }
    .original-price {
      text-decoration: line-through;
      margin-left: 8px;
      color: #787878;
      font-weight: 400;
    }
    .buy-btn {
      display: block;
      background: #4684e2;
      color: #fff;
      margin-top: 12px;
    }
    .buy-left {
      background: #ec4737;
      color: #fff;
    }
    .buy-right {
      background: #d1382c;
      color: #fff;
    }
  }
}
</style>
