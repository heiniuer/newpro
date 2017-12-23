<template>
  <div class="left" v-show="flag">
    <div class="logo">
      <div class="logo-pic">
          <img src="../../assets/logo.png" alt="">
      </div>
      <div class="logo-info">营销平台后台管理</div>
    </div>
    <div class="menu-logo"><img src="../../assets/menu.png" alt="" class="menu-logo-pic"></div>
    <div class="left-menu">
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            defaultActive="1"
            :defaultOpeneds="openeds"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <span @click="isShow()">点击打开</span>
              </template>
              <el-menu-item-group>
                <!-- <el-submenu index="8"> -->
                  <router-link to="/membermanage"><el-menu-item @click="isShow()" index="1-1" id="member-manage"><img src="../../assets/vip.png" alt=""><span>会员管理</span></el-menu-item></router-link>
                  <router-link to="/memberinfo"><el-menu-item @click="isShow()" index="1-2" id="member-info"><img src="../../assets/vip-info.png" alt="">会员信息审核认证</el-menu-item></router-link>
                  <router-link to="/order"><el-menu-item @click="isShow()" index="1-3" id="order"><img src="../../assets/order.png" alt="">订单管理</el-menu-item></router-link>
                  <router-link to="/records"><el-menu-item @click="isShow()" index="1-4" id="records"><img src="../../assets/record.png" alt="">发放记录查询</el-menu-item></router-link>
                <!-- </el-submenu> -->
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      openeds: ['1'],
      uniqueOpened: false,
      flag: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    isShow () {
      // alert(1)
      // let str = $('#member-manage').children('span').text()
      this.flag = !this.flag
      // document.querySelector('.left').style.width = '0';
      // document.querySelector('.left').style.overflow = 'hidden'
    }
  }
}
</script>

<style lang='less'>
.left{
  max-width: 240px;
  height:auto; 
  background:rgba(255,255,255,1);
  box-shadow: 1px 0 4px 0 rgba(0,0,0,0.20);
  position: relative;
  .logo{
    width:240px;
    height:55px; 
    background:rgba(51,103,248,1);
    display: flex;
    align-items: center;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.20);
    .logo-pic{
      width:44px;
      height:44px; 
      background:rgba(255,255,255,1);
      text-align: center;
      border-radius: 50%;
      line-height: 44px;
      margin-left: 2.1%;
      img{
        width:25px;
        height:20px;
        margin-top: 12px;
      }
    }
    .logo-info{
      width:145px;
      height:25px; 
      font-size:18px;
      font-family:PingFangSC-Medium;
      color:rgba(255,255,255,1);
      line-height:25px;
      margin-left: 4.9%;
    }
  }
  .el-col{
    width: 100%;
  }
  .menu-logo{
    position: absolute;
    left: 0;
    top: 55px;
    width: 100%;
    height: 45px;
    z-index: 9;
    overflow: hidden;
    img{
      float: right;
      height: 100%;
    }
  }
}
.el-submenu{
  width: 100%;
  .el-submenu__title{
    opacity: 0;
    z-index: 99;
    span{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
.el-menu{
  background: white ! important;
}
.el-submenu__title{
  height: 45px ! important;
}
.el-menu-item-group{
  padding-top: 0 ! important;
}
.el-menu-item-group__title{
  padding: 0 ! important;
}
.el-menu-item-group .el-menu-item{
  background: white ! important;
  color: #6E819F ! important;
  padding-left: 20px ! important;
  box-sizing: border-box;
  height: 45px ! important;
  img{
    margin-right: 10px;
  }
}
.el-menu-item-group a:first-child .el-menu-item{
  border-left: 3px solid #3367F8;
}
</style>
