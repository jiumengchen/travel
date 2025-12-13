<template>
  <a-row class="takeBox">
    <a-col :span="24">
      <div class="mask"></div>
      <div class="context">
        <h1>获取最新旅行灵感和独家优惠</h1>
        <p>订阅我们的电子邮件，率先获取季节性旅行建议、目的地指南和限时优惠信息</p>
        <a-form>
          <a-form-item>
            <div class="form">
              <a-input placeholder="请输入您的电子邮箱" class="inp"></a-input>
              <a-button type="primary" class="btn">立即订阅</a-button>
            </div>
          </a-form-item>
        </a-form>
        <p class="tip">我们尊重您的隐私，不会向第三方分享您的信息</p>
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.takeBox {
  background: url(../../assets/images/index/index-takebg.png) no-repeat;
  background-size: cover;
  position: relative;

  .mask {
    width: 100%;
    height: 100%;
    background-color: rgba($color: #1e88e5, $alpha: .8);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .context {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 80px 0;

    h1 {
      font-size: 40px;
      font-weight: bold;
      color: #fff;
    }

    p {
      color: #fff;
      font-size: 16px;
      padding: 30px 0 40px;
    }

    .form {
      .inp {
        width: 400px;
        height: 50px;
        margin-right: 10px;
      }

      .btn {
        height: 50px;
        font-size: 16px;
        padding: 0 20px;
        background-color: #ff9800;
        border-radius: 10px;

        &:hover {
          background-color: #e99716;
        }
      }
    }

    .tip {
      padding: 0;
      margin: 0;
      font-size: 15px;
      color: #a5d1f3;
    }
  }
}
</style>
