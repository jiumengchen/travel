<template>
  <a-row justify="center" align="middle" class="loginBox">
    <a-col :span="13" class="login" :xs="20" :lg="13">
      <a-row class="content">
        <a-col :span="12" class="left" :xs="0" :lg="12">
          <a-row align="middle" style="height: 100%;">
            <a-col :span="24" align="center" class="left-context">
              <h1>准备好探索世界了吗？</h1>
              <p>加入我们的旅行社区，发现令人惊叹的目的地，并与志同道合的旅行者分享您的冒险经历。</p>
              <img src="../../../assets/images/login/login-left.png" alt="">
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="12" class="right" :xs="24" :lg="12">
          <a-row class="content" align="middle">
            <a-col :span="12" class="alogin" :class="{ active: isLogin == true }" @click="switchLogin">
              登录
            </a-col>
            <a-col :span="12" align="center" class="aregister" :class="{ active: isLogin == false }"
              @click="switchRegister">
              注册
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <login-form v-if="isLogin == true"></login-form>
              <register-form v-if="isLogin == false"></register-form>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LoginForm from './LoginForm.vue';
import RegisterForm from './RegisterForm.vue';
const isLogin = ref<Boolean>(true);
const switchLogin = () => {
  isLogin.value = true;
}
const switchRegister = () => {
  isLogin.value = false;
}
</script>

<style scoped lang="scss">
.loginBox {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background: url(../../../assets/images//login/login-bg.png) no-repeat;
  background-size: cover;

  .login {
    border-radius: 20px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

    .content {
      height: 100%;

      .left {
        border-radius: 20px 0 0 20px;
        background: linear-gradient(to bottom right, #1a73e7, #0d47a1);
        padding: 30px;
        box-sizing: border-box;

        .left-context {
          color: #fff;

          h1 {
            font-weight: bold;
            margin: 20px 0;
          }

          p {
            margin: 20px 0;
            font-size: 14px;
          }

          img {
            margin: 20px 0;
            width: 80%;
            height: 80%;
            border-radius: 20px;
          }

        }

      }

      .right {
        height: 100%;
        border-radius: 0 20px 20px 0;
        padding: 60px 40px;
        box-sizing: border-box;
        background: #fff;

        .content {
          height: 40px;
          color: #6b7280;
          cursor: pointer;
          border-bottom: 1px solid #e5e7eb;

          .alogin {
            display: flex;
            height: 100%;
            font-size: 16px;
            align-items: center;
            justify-content: center;

            &:hover {
              color: #374151;
            }
          }

          .aregister {
            display: flex;
            height: 100%;
            font-size: 16px;
            align-items: center;
            justify-content: center;

            &:hover {
              color: #374151;
            }
          }

          .active {
            color: #1a73e8;
            border-bottom: 2px solid #1a73e8;

            &:hover {
              color: #1a73e8;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .right {
    border-radius: 20px !important;
  }
}
</style>
