<template>
  <div>
    <!-- aside 部分 -->
    <!-- <aside>aside 部分</aside> -->

    <!-- header 部分 -->
    <!-- <header class="header-container">header 部分</header> -->

    <!-- 购物车+收货地址  -->
    <div class="cart-address">
      <div class="cart-center">
        <!-- 购物车左边开始 -->
        <div class="cart-left">
          <div class="cart-container">
            <div class="shopping-book">
              <h3 class="shopping-book-package">购书袋</h3>
              <ul>
                <li class="book-info book">书籍</li>
                <li class="book-info version">版本</li>
                <li class="book-info price">原价</li>
                <li class="book-info pay">实际支付</li>
                <li class="book-info quantity">数量</li>
                <li class="book-info operation">操作</li>
              </ul>

              <table class="table-content" style="display: block">
                <tr>
                  <td>1111111111</td>
                  <td>纸质书</td>
                  <td>169</td>
                  <td>4311111</td>
                  <td>531111111111</td>
                  <td><img src="../Login/images/delete-icon.svg" alt="" /></td>
                </tr>
              </table>

              <div class="book-info-show">当前没有添加任何图书</div>

              <div class="discount-code">
                <div class="discount-code-money">
                  <h3 class="h3-style">优惠码及银子</h3>
                  <span class="have-money">拥有：0.00两 可使用：0两 </span>
                </div>
                <div class="input-button">
                  <div class="input-code">
                    <input
                      class="input-discount-code"
                      type="text"
                      placeholder="输入优惠码"
                    />
                    <button class="use-discount-code button">使用优惠码</button>
                  </div>
                  <div class="input-money">
                    <input
                      class="input-money-quantity"
                      type="text"
                      placeholder="输入银子数量"
                    />
                    <button class="use-money button">使用银子</button>
                  </div>
                </div>
              </div>

              <div class="remarks">
                <h3 class="h3-style">备注</h3>
                <!-- <textarea name="showText" rows="4" placeholder="输入备注信息，200字以内"> </textarea  > -->
                <textarea
                  cols="30"
                  rows="2"
                  placeholder="输入备注信息，200字以内"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <!-- 购物车左边结束 -->

        <!-- 购物车右边开始 -->
        <div class="address-right">
          <div class="address-container">
            <div class="receiving-address">
              <h3 class="address-title">收货地址</h3>
              <div class="no-input-address">
                此订单均为电子版，无需填写收货地址
              </div>
            </div>

            <div class="electronic-invoice">
              <h3 class="h3-style">电子发票</h3>
              <div class="electronic-invoice-container">
                <a href="#">不开发票</a>
                <span>个人</span>
                <span>公司</span>
              </div>
            </div>

            <div>
              <table>
                <tr>
                  <th>
                    <h3 class="settlement">结算</h3>
                  </th>
                  <th><a href="#">购前必读</a></th>
                </tr>

                <tr>
                  <td>图书总价</td>
                  <td class="price-text">0 元</td>
                </tr>

                <tr>
                  <td>订单满减金额</td>
                  <td class="price-text">0 元</td>
                </tr>

                <tr>
                  <td>优惠码优惠</td>
                  <td class="price-text">0 元</td>
                </tr>

                <tr>
                  <td>银子优惠</td>
                  <td class="price-text">0 元</td>
                </tr>

                <tr>
                  <td>赠送银子</td>
                  <td class="price-text">0 元</td>
                </tr>

                <tr>
                  <td>运费 <span>满99包邮</span> <a href="#">运费规则</a></td>
                  <td class="price-text">+0 元</td>
                </tr>

                <tr class="last-line">
                  <td>合计</td>
                  <td class="price-text"><i>0</i> 元</td>
                </tr>
              </table>

              <div class="shopping-settlement">
                <button class="cotinue-shopping button">继续购物</button>
                <button class="settlement-button button">结算</button>
              </div>
            </div>
          </div>
        </div>
        <!-- 购物车右边结束 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* aside 部分开始 */
aside {
  position: absolute;
  display: inline-block;
  width: 172px;
  border-right: 1px solid #cedce4;
  height: 700px;
  box-sizing: border-box;
}
/* aside 部分结束 */

/* header 部分开始 */
body {
  position: relative;
}

/* .header-container {
  position: absolute;
  top: 0;
  left: 180px;
  width: 1350px;
  height: 56px;
  z-index: -18;
  overflow: hidden;
  border-bottom: 1px solid #cedce4;
} */
/* header 部分结束 */

/* 购物车左边开始 */
.cart-address {
  /* position: absolute; */
  /* left: 172px;
  top: 56px; */
  width: 1360px;
  /* height: 1800px; */
  overflow: hidden;
  /* background-color: pink; */
}

.cart-center {
  width: 1352px;
  display: flex;
  box-sizing: border-box;
}

.cart-container {
  padding-right: 20px;
  border-right: 1px solid #cedce4;
  margin-top: 20px;
}

h3.shopping-book-package {
  padding-top: -30px;
}

.cart-left {
  margin-left: 136px;
}

.address-right {
  width: 354px;
  /* height: 1800px; */
  /* background-color: green; */
  margin-left: 20px;
}

.shopping-book ul {
  display: flex;
  justify-content: space-between;
  width: 700px;
  border-bottom: 1px solid #dae1e7;
}

.shopping-book .book {
  padding-right: 160px;
}

.shopping-book .quantity {
  padding-right: 20px;
}

.shopping-book .pay {
  padding-left: 30px;
}

.shopping-book .operation {
  padding-left: 40px;
}

.book-info {
  color: #152844;
  padding-top: 16px;
  padding-bottom: 10px;
}

.book-info-show {
  text-align: center;
  color: #a1adc5;
  font-size: 14px;
  min-height: 200px;
  /* border: 1px solid red; */
  line-height: 22px;
  height: 22px;
  margin: 50px auto 0px;
}

.shopping-book table {
  width: 700px;
  color: #a1adc5;
  font-size: 14px;
  min-height: 200px;
  /* border: 1px solid red; */
  margin: 50px auto 0px;
}

.shopping-book table tr td {
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #333;
}

.shopping-book table tr td:nth-child(1) {
  /* border: 1px solid red; */
  width: 230px;
  margin-left: -2px;
}

.shopping-book table tr td:nth-child(2) {
  /* border: 1px solid red; */
  width: 70px;
}

.shopping-book table tr td:nth-child(3) {
  /* border: 1px solid red; */
  width: 110px;
}

.shopping-book table tr td:nth-child(4) {
  width: 100px;
  color: #ff8a00;
  font-size: 16px;
}

.shopping-book table tr td:nth-child(5) {
  /* border: 1px solid red; */
  width: 130px;
}

.shopping-book table tr td:nth-child(6) {
  text-align: right;
  /* border: 1px solid red; */
  width: 30px;
}

.shopping-book table tr td:nth-child(6) img {
  cursor: pointer;
}

.discount-code-money h3 {
  padding: 0;
  margin: 0;
}

.discount-code-money {
  /* background-color: hotpink; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.have-money {
  color: #5f77a6;
  font-size: 12px;
}

.use-discount-code {
  width: 100px;
}

.use-money {
  width: 80px;
}

.input-button {
  display: flex;
  justify-content: space-between;
}

.input-button .input-discount-code {
  width: 200px;
}

.input-button .input-money-quantity {
  width: 120px;
}
/* 购物车左边结束 */

/* 购物车右边开始*/
.address-title {
  margin-bottom: 10px;
  color: #152844;
}
.address-container {
  margin-top: 20px;
}

.no-input-address {
  font-size: 14px;
  color: #6f6f6f;
}

.electronic-invoice-container {
  display: flex;
  justify-content: space-between;
  width: 180px;
  padding: 18px 0;
}

table {
  width: 354px;
}

table tr,
table th {
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  font-size: 14px;
}

table th a {
  color: #4684e2;
  font-weight: 400;
}

.price-text {
  font-weight: 500;
  color: #ff8a00;
}

.price-text i {
  font-style: normal;
  font-size: 28px;
}

.last-line {
  padding-top: 18px;
  border-top: 1px solid #cedce4;
}

h3.settlement {
  font-weight: 600;
  font-size: 18px;
  color: #152844;
}

.shopping-settlement {
  display: flex;
  justify-content: flex-end;
}

button.cotinue-shopping {
  background: #fff;
  color: #4684e2;
  width: 96px;
  height: 36px;
  line-height: 33px;
  margin-left: 16px;
  text-align: center;
  border-radius: 32px;
  border: 1px solid #4684e2;
  font-size: 16px;
  outline: none;
}

button.cotinue-shopping:hover {
  background: #4684e2;
  color: #fff;
}

button.settlement-button {
  width: 96px;
  height: 36px;
  line-height: 33px;
  margin-left: 16px;
  text-align: center;
  border-radius: 32px;
  border: 1px solid #4684e2;
  font-size: 16px;
  outline: none;
}
/* 购物车右边结束*/

/* 公共样式 */

body,
html,
h1,
h2,
h3,
ul,
li {
  padding: 0;
  margin: 0;
}
/* 
body {
  margin-top: -600px;
} */

ul,
li {
  list-style: none;
  font-size: 14px;
}

.h3-style {
  font-weight: 600;
  font-size: 18px;
  padding-top: 30px;
  color: #152844;
}

textarea {
  padding-left: 6px;
  border: none;
  outline: none;
  width: 680px;
  background: #f6f9fb;
  border-radius: 4px;
  padding: 6px 12px;
  color: #152844;
  margin-top: 16px;
  resize: none;
  line-height: 22px;
}

input {
  border: none;
  outline: none;
  background: #f6f9fb;
  border-radius: 4px;
  margin-right: 16px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  padding: 0 12px;
  color: #152844;
}

button {
  background: #4684e2;
  height: 32px;
  border-radius: 32px;
  font-size: 14px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #3f77cb;
}

a {
  color: #4684e2;
  text-decoration: none;
  font-size: 14px;
}
</style>
