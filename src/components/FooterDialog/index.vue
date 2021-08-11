<template>
         <!-- 二维码区域 -->
            <div :class="{close:isClose, qrCode: true}">
              <div class="footer-dialog" >
              <div class="footer-dialog-title">
                <h2>关注图灵社区知乎号</h2>
                <img @click="handelClose" src="../../assets/images/indexImg/close.55d03344.svg" >
              </div>
              <img
                class="dialogImg"
                src="../../assets/images/indexImg/Bz.png"
                alt="知乎"
              />
              <p class="footerinfo">扫描二维码 关注图灵社区</p>
              <p class="footerinfo">或 <a href="###">点击前往</a></p>
            </div>
            </div>
</template>

<script>
export default {
  name: 'FooterDialog',
  data:()=>{
    return{
      isClose:true,
    }
  },
  methods:{
    handelClose(){
      this.isClose=false
    },
   
  }
}
</script>

<style scoped>
div.close{
  display: block;
}
.qrCode {
  display: none;
}
.footer-dialog {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 380px;
  min-height: 400px;
  background-color: #fff;
  z-index: 10000;
  /* border: 1px solid red; */
}
.footer-dialog-title{
  height: 20px;
  margin: 22px 0;
  display: flex;
   /* border: 1px solid red; */
   justify-content: space-between;
   
}
.footer-dialog-title h2{
  margin: 0 auto;
}

.dialogImg {
  width: 220px;
  height: 220px;
  margin: 0 80px;
}
.footerinfo{
  height: 18px;
  margin: 12px 0;
  color: #dae1e7;
  font-size: 14px;
}
.footerinfo a{color:#4684e2}
p{
  text-align: center;
}
</style>