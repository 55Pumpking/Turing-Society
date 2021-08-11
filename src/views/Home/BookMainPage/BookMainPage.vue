<template>
  <div>
    <!-- 图书页面主要结构 -->
    <div class="Container">
      <!-- 左侧侧边栏部分 -->
      <aside class="nav_container">
        <!-- 分类列表 -->
        <dl class="bookNav">
          <dt class="bookCategory">图书分类</dt>
          <dd :class="{ totalBooks: true, select: showTotal }" @click="getTotalBooks">
            全部
          </dd>
          <!-- 这里category1.id为数字类型，不能全等 -->
          <dd
            :class="{ category1: true, select: category1Id == category1.id }"
            v-for="category1 in categoryList"
            :key="category1.id"
            @click="changeCategory($event)"
          >
            <p :data-id="category1.id" data-categorylv="1">{{ category1.name }}</p>
            <ul :style="{ display: category1.id == category1Id && isShowCategory2 ? '' : 'none' }">
              <li
                :class="{ category2: true, select: category2Id == category2.id && isShowCategory2 }"
                v-for="category2 in category1.children"
                :key="category2.id"
              >
                <p :data-id="category2.id" data-categorylv="2">{{ category2.name }}</p>
                <ul :style="{ display: category2.id == category2Id && isShowCategory3 ? '' : 'none' }">
                  <li
                    :class="{ category3: true, select: category3Id == category3.id && isShowCategory3 }"
                    v-for="category3 in category2.children"
                    :key="category3.id"
                  >
                    <p :data-id="category3.id" data-categorylv="3">
                      {{ category3.name }}
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </dd>
        </dl>
        <!-- 书籍状态 -->
        <dl>
          <dt class="bookStatus">书籍状态</dt>
          <dd>
            <input
              type="checkbox"
              :checked="bookStatus == 60"
              @click="handleStatusClick(60, 'bookStatus')"
              id="bookStatus1"
            />
            <span>上市销售</span>
          </dd>
          <dd>
            <input
              type="checkbox"
              :checked="bookStatus == 10"
              @click="handleStatusClick(10, 'bookStatus')"
              id="bookStatus2"
            />
            <span>诚招译者</span>
          </dd>
          <dd>
            <input
              type="checkbox"
              :checked="bookStatus == 20"
              @click="handleStatusClick(20, 'bookStatus')"
              id="bookStatus3"
            />
            <span>正在翻译</span>
          </dd>
          <dd>
            <input
              type="checkbox"
              :checked="bookStatus == 30"
              @click="handleStatusClick(30, 'bookStatus')"
              id="bookStatus4"
            />
            <span>正在写作</span>
          </dd>
          <dd>
            <input
              type="checkbox"
              :checked="bookStatus == 46"
              @click="handleStatusClick(46, 'bookStatus')"
              id="bookStatus5"
            />
            <span>正在排版</span>
          </dd>
          <dd>
            <input
              type="checkbox"
              :checked="bookStatus == 50"
              @click="handleStatusClick(50, 'bookStatus')"
              id="bookStatus6"
            />
            <span>正在印刷</span>
          </dd>
        </dl>
        <!-- 其他 -->
        <dl>
          <dt class="bookOther">其他</dt>
          <dd>
            <input type="checkbox" :checked="otherStatus == 1" @click="handleStatusClick(1, 'otherStatus')" />
            <span>免费</span>
          </dd>
          <dd>
            <input type="checkbox" :checked="otherStatus == 2" @click="handleStatusClick(2, 'otherStatus')" />
            <span>可兑换样书</span>
          </dd>
        </dl>
        <!-- 日期选择 -->
        <dl>
          <dt>出版日期</dt>
          <!-- 日期选择 -->
          <div class="block">
            <el-date-picker
              class="date-picker"
              v-model="date"
              size="mini"
              format="yyyy-MM"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </div>
        </dl>
        <!-- 热门标签列表 -->
        <dl>
          <dt>热门标签</dt>
          <dd class="tag_container">
            <span class="tag_active">Python</span>
            <span>算法</span>
            <span>诚征译者</span>
            <span>机器学习</span>
            <span>Java</span>
            <span>JavaScript</span>
            <span>数学</span>
            <span>C语言</span>
            <span>sql</span>
            <span>最新上线</span>
          </dd>
        </dl>
        <!-- <div ref="tagList"></div> -->
      </aside>

      <!-- 右侧内容部分 -->
      <div class="book_container">
        <!-- 头部搜索栏 -->
        <div class="search_container">
          <img class="searchIcon" src="../../../static/images/searchIcon.571b59cb.svg" alt="搜索" />
          <input class="searchInput" placeholder="搜索书名、ISBN" v-model="name" />
          <img
            class="clearIcon"
            @click="cancleSearch"
            src="../../../static/images/clear-search.ede8c7ca.svg"
            alt="清空"
          />
          <button class="searchBtn" @click="searchBook">搜索</button>
          <span class="allBook">共有{{ total }}本图书</span>
          <div class="shareBook">
            <img class="shareIcon" src="../../../static/images/share-link-icon.4e687db0.svg" alt="分享链接" />
            <div class="buildBookLink">生成当前书单链接</div>
          </div>
        </div>
        <!-- 类型和排序栏 -->
        <div class="typeOrSort_container">
          <!-- 类型栏 -->
          <div class="type_container" @click="changeType($event)">
            <span :class="{ 'type-tab': true, type_active: selectTypeId == 1 }" data-edition="1" data-selectid="1"
              >纸质书</span
            >
            <span :class="{ 'type-tab': true, type_active: selectTypeId == 2 }" data-edition="4" data-selectid="2"
              >电子书</span
            >
            <span :class="{ 'type-tab': true, type_active: selectTypeId == 3 }" data-edition="5" data-selectid="3"
              >开放出版</span
            >
            <span :class="{ 'type-tab': true, type_active: selectTypeId == 4 }" data-saletype="1" data-selectid="4"
              >预售</span
            >
            <span :class="{ 'type-tab': true, type_active: selectTypeId == 5 }" data-saletype="0" data-selectid="5"
              >抢读</span
            >
            <span
              :class="{
                'tab-underline': true,
                'left-2': selectTypeId == 2,
                'left-3': selectTypeId == 3,
                'left-4': selectTypeId == 4,
                'left-5': selectTypeId == 5
              }"
            ></span>
          </div>
          <!-- 排序栏 -->
          <div class="sort_container" @click="changeSort($event)">
            <span class="sort-tab">排序方式：</span>
            <span :class="{ 'sort-tab': true, sort_active: sort === 'new' }" data-sort="new">最新</span>
            <span :class="{ 'sort-tab': true, sort_active: sort === 'hot' }" data-sort="hot">最热</span>
            <span :class="{ 'sort-tab': true, sort_active: sort === 'vote' }" data-sort="vote">推荐</span>
            <span
              :class="{
                'tab-underline': true,
                'left-2': sort === 'hot',
                'left-3': sort === 'vote'
              }"
            ></span>
          </div>
        </div>
        <!-- 书本展示列表 -->
        <div class="BookList_container">
          <div class="loadingBox" v-loading="loading" v-show="loading"></div>
          <router-link
            :to="{ path: '/home/book/' + bookItem.id }"
            target="_blank"
            class="bookItem"
            v-show="!loading"
            v-for="bookItem in bookItems"
            :key="bookItem.id"
          >
            <div class="bookImg_container">
              <img
                class="bookImg"
                v-lazy="{
                  src: 'https://file.ituring.com.cn/LargeCover/' + bookItem.coverKey
                }"
                :alt="bookItem.name"
              />
            </div>
            <div class="bookInfo">
              <h3 class="bookTitle">{{ bookItem.name }}</h3>
              <p class="authors" v-if="bookItem.authorNameString">
                <!-- {{ bookItem.authors.length === 1 ? bookItem.authors[0].name : bookItem.authorNameString }}（作者） -->
                {{ showName(bookItem) ? showName(bookItem) + '（作者）' : '' }}
              </p>
              <p class="translators" v-if="bookItem.translatorNameString">
                {{ bookItem.translatorNameString }}（译者）
              </p>
            </div>
          </router-link>
        </div>
        <!-- 分页器 -->
        <el-pagination
          @current-change="handleCurrentChange"
          v-if="bookItems.length"
          class="pagination"
          :background="true"
          :current-page="page"
          :page-size="15"
          layout="prev, pager, next"
          :total="total"
          v-show="!loading"
        >
        </el-pagination>
        <p v-if="!bookItems.length && !loading" class="no_result">没有搜索到结果</p>
      </div>
    </div>
  </div>

  <!-- 底部结构 -->
</template>

<script>
import { reqGetAllCategory, reqGetAdvancedBook, reqGetHotTag } from '../../../API/bookMainPage'
export default {
  name: 'BookMainPage',
  data() {
    return {
      //用于当前发送请求的分类id
      categoryId: 0,
      edition: 1,
      name: '',
      sort: 'new',
      // 当前页
      page: 1,
      saleType: '',
      // 选择的日期范围
      publishStartDate: '',
      // 选择的书本状态码
      bookStatus: '',
      // 是否选择免费
      // isFree: false,
      // 是否选择礼品书
      // isGiftBook: false,
      //以上为请求书本列表需要的数据

      // 用于控制切换选中免费和可兑换
      otherStatus: -1,
      // 书本总数
      total: 50,
      // 当前页的书本列表
      bookItems: [],
      // 热门标签列表，字符串形式
      hotTagList: '',
      // 三级分类列表
      categoryList: [],
      // 用于日期选择器组件
      date: '',
      //每级分类的id
      category1Id: '',
      category2Id: '',
      category3Id: '',
      // 用于高亮显示全部按钮
      // 当前选中的分类等级
      categorylv: '',
      showTotal: false,
      // 用于点击隐藏三级分类
      isShowCategory2: false,
      isShowCategory3: false,
      // 用于切换书本类型的激活样式
      selectTypeId: 1,
      // 用于显示正在加载
      loading: false
    }
  },
  async mounted() {
    const [categoryList, hotTagList] = await Promise.all([reqGetAllCategory(), reqGetHotTag()])
    this.categoryList = categoryList
    this.hotTagList = hotTagList.content
    // this.$refs.tagList.innerHTML = hotTagList.content
    this.reqAdvancedBook()
  },
  computed: {
    showName() {
      return function(bookItem) {
        let nameStr = ''
        bookItem.authors.forEach((item) => {
          return (nameStr = nameStr + item.name + ' ')
        })
        return nameStr
      }
    }
  },
  methods: {
    // 用于发送请求书本列表信息
    async reqAdvancedBook() {
      this.loading = true
      // 得到请求需要的属性
      const { categoryId, edition, name, sort, page, saleType, bookStatus, otherStatus } = this
      let dataObj = {
        categoryId,
        name,
        sort,
        page
      }
      // 动态添加请求对象中的属性
      if (edition) dataObj.edition = edition
      if (saleType || saleType === 0) dataObj.saleType = saleType
      if (bookStatus) dataObj.bookStatus = bookStatus
      if (otherStatus == 1) {
        dataObj.isFree = true
      } else if (otherStatus == 2) {
        dataObj.isGiftBook = true
      }

      const { bookItems, pagination } = await reqGetAdvancedBook(dataObj)
      // console.log(bookItems, pagination)
      this.total = pagination.totalItemCount
      this.bookItems = bookItems
      this.loading = false
    },
    //点击分类标签触发的事件
    changeCategory(e) {
      const { categorylv, id } = e.target.dataset
      // 记录信息以发送请求
      this.categoryId = id
      this.showTotal = false
      this.reqAdvancedBook()
      // 判断重复点击是否隐藏当前分类列表
      const { category1Id, category2Id, isShowCategory2, isShowCategory3 } = this
      // 点击一级列表时，展示二级列表，三级不展示
      if (categorylv === '1') {
        this.isShowCategory2 = true
        this.isShowCategory3 = false
      }
      // 每次点击相同的一级列表时，切换二级列表显示（show2 =!show2,show3 =false）
      if (categorylv === '1' && id === category1Id) {
        this.isShowCategory2 = !isShowCategory2
        this.isShowCategory3 = false
        if (isShowCategory2) {
          this.category2Id = ''
          this.category3Id = ''
        }
      }
      // 点击不同的一级列表时，对应二级列表显示（show2 =true,show3=false）
      if (categorylv === '1' && id !== category1Id) {
        this.isShowCategory2 = true
        this.isShowCategory3 = false
      }
      // 每次点击相同的二级列表时，切换三级列表显示（show3 =!show3）
      if (categorylv === '2' && id === category2Id) {
        this.isShowCategory3 = !isShowCategory3
        if (isShowCategory3) {
          this.category3Id = ''
        }
      }
      // 点击不同的二级列表时，对应三级列表显示（show3 = true）
      if (categorylv === '2' && id !== category2Id) {
        this.isShowCategory3 = true
      }
      // 记录点击的分类等级
      this.categorylv = categorylv
      if (categorylv === '1') return (this.category1Id = id)
      if (categorylv === '2') return (this.category2Id = id)
      if (categorylv === '3') return (this.category3Id = id)
    },
    // 用于监视搜索按钮的触发事件
    searchBook() {
      if (!this.name) return
      this.reqAdvancedBook()
    },
    // 用于监视清空搜索按钮的事件
    cancleSearch() {
      this.name = ''
      this.reqAdvancedBook()
    },
    // 用于分页器的当前页面改变时生效
    handleCurrentChange(page) {
      // 根据页数发送请求
      this.page = page
      this.reqAdvancedBook()
    },
    // 用于监视点击全部分类按钮触发
    getTotalBooks() {
      // 清除已选中的三级分类
      this.category1Id = ''
      this.category2Id = ''
      this.category3Id = ''

      this.showTotal = true
      this.categoryId = 0
      this.reqAdvancedBook()
    },
    // 用于监视筛选书本状态
    handleStatusClick(statusCode, statusType) {
      if (this[statusType] == statusCode) {
        this[statusType] = 0
        return this.reqAdvancedBook()
      }
      if (statusType === 'bookStatus') {
        // 判断点击的状态类型
        this.bookStatus = statusCode
      }
      if (statusType === 'otherStatus') {
        this.otherStatus = statusCode
      }
      this.reqAdvancedBook()
    },
    //用于监视点击切换书本类型
    changeType(e) {
      const { saletype, edition, selectid } = e.target.dataset
      if (selectid) this.selectTypeId = selectid
      if (saletype) {
        this.edition = ''
        this.saleType = +saletype
        return this.reqAdvancedBook()
      }
      if (edition) {
        this.saleType = ''
        this.edition = +edition
        return this.reqAdvancedBook()
      }
    },
    //用于监视点击切换排序类型
    changeSort(e) {
      const { sort } = e.target.dataset
      if (!sort) return
      this.sort = sort
      this.reqAdvancedBook()
    }
  }
}
</script>

<style lang="less" scoped>
// 图书页面主要部分样式
.Container {
  display: flex;
  margin: 0 auto;
  width: 1080px;
  height: 100%;
}
/* 左侧侧边栏开始 */
.nav_container {
  margin-right: 32px;
  width: 220px;
  /* background: skyblue; */
  dl {
    margin-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #cedce4;
    .date-picker {
      width: 190px;
      margin-top: 20px;
    }
    dt {
      cursor: pointer;
      font-size: 16px;
      line-height: 24px;
      font-weight: bold;
      color: #4d4d4d;
    }
    dd {
      line-height: 18px;
      margin-top: 12px;
      cursor: pointer;
      font-size: 14px;
      color: #333;
      span {
        margin-left: 12px;
      }
      input {
        vertical-align: middle;
      }
      &.totalBooks.select {
        color: #4684e2;
      }
      &.totalBooks:hover {
        color: #4684e2;
      }
    }
    /* 热门标签样式 */
    .tag_container {
      display: flex;
      flex-wrap: wrap;
      width: 220px;
      height: 112px;
      margin-top: 4px;
      cursor: auto;
      span {
        border: 1px solid #a1adc5;
        border-radius: 16px;
        height: 20px;
        line-height: 18px;
        padding: 0 8px;
        margin: 8px 8px 0 0;
        font-size: 12px;
        color: #152844;
        cursor: pointer;
        &:hover {
          color: white;
          background-color: #4684e2;
        }
        &.tag_active {
          color: white;
          background-color: #4684e2;
        }
      }
    }
  }
  dl.bookNav > dd {
    padding-left: 16px;
    line-height: 24.8px;
    transition: color 0.2s;

    &:hover > p {
      color: #4684e2;
    }
    &.select > p {
      color: #4684e2;
    }
    .category1,
    .category2,
    .category3 {
      padding-left: 16px;
    }
    .category1 {
      margin-top: 6px;
    }
    .category1 > p:hover,
    .category2 > p:hover,
    .category3 > p:hover {
      transition: color 0.2s;
      color: #4684e2;
    }
    .select > p {
      color: #4684e2;
    }
  }
}
/* 左侧侧边栏结束 */

// 右边内容区域样式开始
.book_container {
  width: 828px;
  padding-top: 24px;
  // 搜索栏样式
  .search_container {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    justify-content: space-between;
    font-size: 14px;
    .searchInput {
      flex-grow: 1;
      margin: 5px 0 0 5px;
      outline: none;
      border: none;
      border-bottom: 1px solid #cedce4;
      color: #152844;
      height: 22px;
      line-height: 22px;
      padding-bottom: 5px;
    }
    .searchBtn {
      cursor: pointer;
      outline: none;
      border: none;
      background: #288dda;
      border-radius: 32px;
      width: 88px;
      height: 32px;
      line-height: 30px;
      margin-left: 2px;
      color: #fff;
    }
    .clearIcon {
      position: relative;
      left: -28px;
      cursor: pointer;
    }
    .allBook {
      color: #999;
      margin-left: 24px;
    }
    .shareBook {
      display: flex;
      align-items: center;
      margin-left: 24px;
      cursor: pointer;
      color: #288dda;
      .shareIcon {
        margin-right: 4px;
      }
    }
  }
  // 类型和排序栏样式
  .typeOrSort_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    line-height: 40px;
    .type_container {
      position: relative;
      .type-tab {
        margin-right: 32px;
        cursor: pointer;
        font-size: 18px;
        color: #5f77a6;
        &.type_active {
          font-size: 20px;
          color: #152844;
          font-weight: bold;
        }
      }
      .tab-underline {
        position: absolute;
        background: #4684e2;
        bottom: 0;
        left: 22px;
        height: 4px;
        width: 16px;
        transition: left 0.3s;
        &.left-2 {
          left: 112px;
        }
        &.left-3 {
          left: 204px;
        }
        &.left-4 {
          left: 288px;
        }
        &.left-5 {
          left: 356px;
        }
      }
    }
    .sort_container {
      position: relative;
      .sort-tab {
        font-size: 14px;
        color: #6c6c6c;
        margin-right: 24px;
        cursor: pointer;
        &:first-of-type {
          margin-right: 8px;
          cursor: auto;
        }
        &.sort_active {
          color: #152844;
        }
      }

      .tab-underline {
        position: absolute;
        background: #4684e2;
        bottom: 0;
        left: 84px;
        height: 4px;
        width: 16px;
        transition: left 0.3s;
        &.left-2 {
          left: 135px;
        }
        &.left-3 {
          left: 188px;
        }
      }
    }
  }
  // 书本展示栏样式
  .BookList_container {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    .loadingBox {
      position: absolute;
      left: 45%;
      top: 100px;
    }
    .bookItem {
      text-decoration: none;
      flex: 1;
      margin: 16px 20px 0 0;
      min-width: 255px;
      max-width: 255px;
      cursor: pointer;
      &:hover .bookImg {
        transform: scale(1.05);
        transition: transform 0.1s;
      }
      .bookImg_container {
        height: 156px;
        width: 255px;
        padding: 8px 0;
        box-sizing: border-box;
        text-align: center;
        font-size: 0px;
        background: #eaf1f5;
        .bookImg {
          height: 100%;
          border-radius: 5px;
        }
      }
      .bookInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #f6f9fb;
        height: 108px;
        overflow: hidden;
        min-width: 0px;
        padding: 0 16px;
        .bookTitle {
          color: #1c355a;
          font-size: 16px;
          line-height: 20px;
          text-overflow: ellipsis;
          text-align: center;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          margin: 12px 0 8px;
        }
        p {
          color: #6f6f6f;
          font-size: 12px;
          line-height: 14px;
          margin-top: 4px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
  // 分页器样式
  .el-pagination {
    text-align: center;
    margin-top: 24px;
    // 添加深度选择器进行样式穿透
    /deep/button {
      background: #fff;
    }
    /deep/.el-pager li {
      height: 30px;
      line-height: 30px;
      background: #fff;
      &:hover {
        color: #606266;
      }
      &.active:hover {
        color: #fff;
      }
    }
    /deep/.el-pager li.active {
      background: #4684e2;
      border-radius: 50%;
    }
  }
  .no_result {
    color: #152844;
    height: 200px;
    line-height: 200px;
    text-align: center;
    width: 100%;
    font-size: 16px;
  }
}
// 右边内容区域样式结束
</style>
