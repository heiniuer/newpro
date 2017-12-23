<template>
  <div class="head">
    <div class="box">
      <div class="message">
        <img src="../../assets/message.png" alt="">
        <span>12</span>
      </div>
      <div class="sign-in-info">
        <div class="touxiang">
          <img src="../../assets/touxiang.jpg" alt="">
        </div>
        <p><span>李博</span>，<span>下午好</span>！</p>
      </div>
      <div class="sign-out">
        <img src="../../assets/sign-out.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
.head{
  height: 55px;
  background: linear-gradient(to bottom, #3B49EE, #3367F8);
  .box{
    float: right;
    width: 350px;
    height: 55px;
    position: relative;
  }
  .message{
    position: absolute;
    left: 0;
    top: 20px;
    img{
      width: 25px;
      height: 22px;
    }
    span{
      position: absolute;
      right: -17px;
      top: -15px;
      width: 17px;
      height: 17px;
      background: #FD5739;
      color: #fff;
      border-radius: 50%;
      text-align: center;
      padding-top: 2px;
      box-sizing: border-box;
    }
  }
  .sign-in-info{
    display: flex;
    margin-left: 80px;
    .touxiang{
      width: 41px;
      height: 41px;
      border-radius: 50%;
      border: 2px solid #fff;
      overflow: hidden;
      margin-top: 5px;
      margin-right: 10px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    p{
      color: #fff;
      line-height: 55px;
      span{
        color: #fff;
      }
    }
  }
  .sign-out{
    position: absolute;
    right: 45px;
    top: 20px;
    img{
      width: 19px;
      height: 21px;
    }
  }
}

</style>
