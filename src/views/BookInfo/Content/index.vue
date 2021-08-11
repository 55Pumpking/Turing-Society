<template>
  <div class="book-content-view flex">
    <!-- 主要内容 -->
    <el-tabs class="main-content">
      <el-tab-pane label="图书介绍" class="tab">
        <div class="book-intro" v-if="bookInfoList.briefIntro">
          <!-- 简介 -->
          <h4 class="title">简介</h4>
          <div class="text">
            <p>
              {{ bookInfoList.briefIntro.abstract }}
            </p>
            <p><br /></p>
          </div>
          <!-- 本书特色 -->
          <h4 class="title">本书特色</h4>
          <div class="text">
            <p>
              {{ bookInfoList.briefIntro.highlight }}
            </p>
            <p><br /></p>
          </div>
          <!-- 作译者介绍 -->
          <h4 class="title">作译者介绍</h4>
          <div class="text">
            <p>
              {{ bookInfoList.briefIntro.authorInfo }}
            </p>
            <p><br /></p>
          </div>
          <!-- 出版信息 -->
          <h4 class="title">出版信息</h4>
          <div class="text">
            <ul class="pd-12">
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>书</span>
                  <span>名</span>
                </span>
                <span class="published-value">{{ bookInfoList.name }}</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>系</span>
                  <span>列</span>
                  <span>书</span>
                  <span>名</span>
                </span>
                <span class="published-value">{{
                  bookInfoList.bookCollectionName
                }}</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>执</span>
                  <span>行</span>
                  <span>编</span>
                  <span>辑</span>
                </span>
                <span class="published-value"
                  >关于本书的问题，请联系
                  <a href="#">{{
                    bookInfoList.contributor.Editor[0].name
                  }}</a></span
                >
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>出</span>
                  <span>版</span>
                  <span>日</span>
                  <span>期</span>
                </span>
                <span class="published-value">{{ publicationDate }}</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>书</span>
                  <span>号</span>
                </span>
                <span class="published-value">{{ bookInfoList.isbn }}</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>定</span>
                  <span>价</span>
                </span>
                <span class="published-value">{{ salesInfos[0].price }}</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>页</span>
                  <span>数</span>
                </span>
                <span class="published-value">{{
                  bookInfoList.paperEditionInfo.pageNumber
                }}</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>印</span>
                  <span>刷</span>
                  <span>方</span>
                  <span>式</span>
                </span>
                <span class="published-value">{{
                  bookInfoList.paperEditionInfo.bookPrintName
                }}</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>开</span>
                  <span>本</span>
                </span>
                <span class="published-value">{{
                  bookInfoList.paperEditionInfo.pageSizeName
                }}</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>出</span>
                  <span>版</span>
                  <span>状</span>
                  <span>态</span>
                </span>
                <span class="published-value">上市销售</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>原</span>
                  <span>书</span>
                  <span>名</span>
                </span>
                <span class="published-value">{{
                  bookInfoList.originalBookInfo.originalBookName
                }}</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>原</span>
                  <span>书</span>
                  <span>号</span>
                </span>
                <span class="published-value">{{
                  bookInfoList.originalBookInfo.originalBookIsbn
                }}</span>
              </li>
            </ul>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="在线阅读" class="tab">
        <div class="catalog" v-if="bookInfoList.ebook">
          <div
            class="catalog-item flex-view"
            v-for="chapter in bookInfoList.ebook.chapters"
            :key="chapter.id"
          >
            <span>{{ chapter.subject }}</span>
            <span v-if="chapter.isFree" class="read-title">阅读</span>
            <img v-else src="../images/lock.584dc0b5.svg" class="title" />
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="评论" class="tab">
        <div class="book-comment">
          <div class="title">发表新的评论</div>
          <div class="publish flex-view">
            <img src="../images/avatar.jpg" alt="" class="mine-img" />
            <input
              type="text"
              placeholder="说点什么..."
              class="content-input"
            />
            <button class="send-btn">发送</button>
          </div>
          <div class="tab-view flex-view">
            <div class="count-text">共有{{ commentDate.length }}条评论</div>
            <div class="tab-box flex-view">
              <span class="tab-select">热门</span>
              <div class="line"></div>
              <span class="tab-select">最新</span>
            </div>
          </div>
        </div>
        <div
          class="comments-list"
          v-for="(discuss, index) in discussList.comments"
          :key="discuss.id"
        >
          <div class="comment-item">
            <div class="flex-item flex-view">
              <div class="flex-view">
                <img
                  :src="
                    `https://file.ituring.com.cn/LargeCover/${discuss.userAvatarImageKey}`
                  "
                />
                <div class="person">
                  <div class="name">{{ discuss.userNickName }}</div>
                  <div class="time">{{ commentDate[index] }}</div>
                </div>
              </div>
              <div class="float-right">
                <span>推荐 </span>
                <span>回复</span>
              </div>
            </div>
            <p class="comment-content">
              {{ discuss.content }}
            </p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="勘误" class="tab">
        <template>
          <el-select value="是否确认" placeholder="请选择">
            <el-option value="未确认"> </el-option>
            <el-option value="已确认"> </el-option>
          </el-select>
        </template>
        <template>
          <el-select value="介质" placeholder="请选择">
            <el-option value="电子书"> </el-option>
            <el-option value="纸质版"> </el-option>
          </el-select>
        </template>
        <template>
          <el-select value="类型" placeholder="请选择">
            <el-option value="文字格式错误"> </el-option>
            <el-option value="技术错误"> </el-option>
            <el-option value="建议"> </el-option>
          </el-select>
        </template>
      </el-tab-pane>
      <el-tab-pane label="相关文章" class="tab">暂无</el-tab-pane>
    </el-tabs>
    <div class="recommend" v-if="bookInfoList.relatedBooks.length">
      <div class="loveRead">大家都在读</div>
      <div
        class="books"
        v-for="relatedBook in bookInfoList.relatedBooks"
        :key="relatedBook.id"
      >
        <div class="book-item">
          <div class="img-view">
            <img
              :src="
                `https://file.ituring.com.cn/LargeCover/${relatedBook.coverKey}`
              "
            />
          </div>
          <div class="info-view">
            <h3 class="book-name">{{ relatedBook.name }}</h3>
            <p class="authors">
              {{ authorsName(relatedBook) + "（作者）" }}
            </p>
            <p class="translators">
              {{ relatedBook.translatorNameString + "（译者）" }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getdiscuss } from "../../../API/bookInfo";
import moment from "moment";
export default {
  name: "Content",
  data() {
    return {
      discussList: {}, //评论列表
      commentDate: [], //评论的时间
      shopId: "", //书本的ID
    };
  },
  mounted() {
    this.shopId = this.$route.params.id;
    // 获取评论详情
    this.getdiscussList(this.shopId);
  },
  methods: {
    // 获取评论详情
    async getdiscussList(Id) {
      // 获取当前书本的评论信息
      const discussList = await getdiscuss(Id);
      this.discussList = discussList;
      // 格式化时间
      const commentDate = discussList.comments.map((item) => {
        return moment(item.commentDate).format("YYYY-MM-DD");
      });
      this.commentDate = commentDate;
    },
  },
  props: ["bookInfoList", "salesInfos", "specialNotes", "publicationDate"],
  computed: {
    authorsName() {
      return function(bookItem) {
        let str = "";
        bookItem.authors.forEach((item) => {
          str = str + item.name + " ";
        });
        return str;
      };
    },
  },
};
</script>

<style lang="less" scope>
/* 外层容器 */
.book-content-view {
  width: 70%;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 50px;
  .recommend {
    margin-left: 20px;
    /* 都爱看内容区的标题 */
    .loveRead {
      font-weight: 600;
      font-size: 18px;
      line-height: 26px;
      color: #152844;
      padding-bottom: 12px;
      border-bottom: 2px solid #cedce4;
    }
  }
  /* 都爱看内容区的内容 */
  .recommend .books .book-item {
    margin: 16px 0;
    min-width: 255px;
    max-width: 255px;
    cursor: pointer;
    .img-view {
      background: #eaf1f5;
      font-size: 0;
      text-align: center;
      height: 156px;
      padding: 8px 0;
      img {
        height: 100%;
        margin: 0 auto;
        border-radius: 4px;
      }
    }
    .info-view {
      background: #f6f9fb;
      text-align: center;
      height: 108px;
      overflow: hidden;
      padding: 0 16px;
      .book-name {
        color: #1c355a;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin: 12px 0 8px;
      }
      .authors,
      .translators {
        color: #6f6f6f;
        font-size: 12px;
        line-height: 14px;
        margin-top: 4px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
.flex {
  display: flex;
  justify-content: center;
}

/* 主要内容 */

.main-content {
  .el-tabs__item {
    color: #5f77a6;
    font-size: 16px;
    cursor: pointer;
    line-height: 24px;
  }
  .is-active {
    font-weight: 600;
    color: #152844 !important;
  }
}
.main-content .el-tabs__item:hover {
  color: #152844;
}

.main-content .book-intro {
  .title {
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #152844;
    height: 16px;
    border-left: 4px solid #4684e2;
    margin: 27px 0 11px;
    padding-left: 8px;
  }
  .text {
    color: #484848;
    font-size: 16px;
    line-height: 26px;
    padding-left: 12px;
    margin: 11px 0;
  }
}

.book-intro .text .pd-12 {
  .published-item {
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 22px;
    height: 22px;
    color: #484848;
  }
  .flex-view {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .published-item .published-label {
    justify-content: space-between;
    flex: 0 0 56px;
    margin-right: 24px;
    text-align: justify;
  }
}

/* 在线阅读 */
.flex-view {
  display: flex;
  justify-content: space-between;
}

.catalog-item {
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e9e9e9;
  font-size: 14px;
  height: 46px;
  .read-title {
    font-size: 14px;
    color: #3d5b96;
    cursor: pointer;
  }
}

/* 评论 */
.book-comment {
  .title {
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    height: 22px;
    color: #152844;
    margin: 24px 0 12px;
  }
  .flex-view {
    display: flex;
    justify-content: space-between;
  }
}

.book-comment .publish {
  align-items: center;
  .mine-img {
    flex: 0 0 40px;
    margin-right: 12px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  .content-input {
    border-width: 0;
    border-color: #dae1e7;
    flex: 1;
    background: #f6f9fb;
    border-radius: 4px;
    height: 32px;
    line-height: 32px;
    color: #484848;
    padding: 5px 12px;
    white-space: nowrap;
  }
  .send-btn {
    border-width: 0;
    border-color: #dae1e7;
    margin-left: 10px;
    background: #4684e2;
    border-radius: 4px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 80px;
    flex: 0 0 80px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    height: 32px;
    line-height: 32px;
  }
}

.book-comment .tab-view {
  justify-content: space-between;
  font-size: 14px;
  align-items: center;
  margin: 24px 0;
  .tab-box {
    display: flex;
    color: #5f77a6;
    align-items: center;
    .line {
      width: 1px;
      height: 12px;
      margin: 0 12px;
      background: #cedce4;
    }
  }
}

.comments-list {
  margin: 30px 0;
  .flex-item img {
    flex: 0 0 40px;
    width: 40px;
    height: 40px;
    margin-right: 12px;
    border-radius: 50%;
    cursor: pointer;
  }
  .name {
    color: #152844;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    height: 22px;
    cursor: pointer;
  }
  .comment-content {
    margin-top: 8px;
    color: #484848;
    font-size: 14px;
    line-height: 22px;
    padding-bottom: 16px;
    border-bottom: 1px dashed #cedce4;
    margin-left: 52px;
    overflow: hidden;
  }
}

.comments-list .flex-item .float-right {
  color: #4684e2;
  font-size: 14px;
}
</style>
