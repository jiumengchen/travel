<template>
  <div class="container">
    <div class="header" ref="headerRef">
      <div class="logoBox">
        <svg-icon name="logo" fill="#fff" width="22px" height="22px"></svg-icon>
        <h3>旅游智能推荐</h3>
      </div>
      <div class="navBox">
        <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" @click="goPage($event)" class="menu" />
      </div>
      <div class="loginBox">
        <svg-icon name="cart" :fill="iconColor.cart" width="22px" height="22px" style="cursor: pointer"
          @mouseover="iconColor.cart = '#ff9800'" @mouseleave="iconColor.cart = '#fff'"
          @click="$router.push('/cart')"></svg-icon>
        <svg-icon name="message" :fill="iconColor.message" width="22px" height="22px" style="cursor: pointer"
          @mouseover="iconColor.message = '#ff9800'" @mouseleave="iconColor.message = '#fff'"></svg-icon>
        <svg-icon name="aboutme" :fill="iconColor.aboutme" width="22px" height="22px" style="cursor: pointer"
          @mouseover="iconColor.aboutme = '#ff9800'" @mouseleave="iconColor.aboutme = '#fff'"
          @click="goPerson"></svg-icon>
        <a-button type="primary" class="loginBtn" @click="goLogin">登录 / 注册</a-button>
      </div>
    </div>
  </div>
  <router-view :headerRef="headerRef"></router-view>
</template>

<script setup lang="ts">
import type { MenuProps } from 'ant-design-vue'
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const $route = useRoute()
const headerRef = ref(null)
const iconColor = ref({
  cart: '#fff',
  message: '#fff',
  aboutme: '#fff',
})
const $router = useRouter()
const current = ref<string[]>([
  $route.matched.length > 1 ? $route.matched[1].path : $route.matched[0].path,
])
const goPerson = () => {
  $router.push('/person')
  current.value = ['/person']
}
const items = ref<MenuProps['items']>([
  {
    key: '/index',
    label: '首页',
    title: '首页',
  },
  {
    key: '/dest',
    label: '目的地',
    title: '目的地',
  },
  {
    key: '/reserve',
    label: '预定服务',
    title: '预定服务',
  },
  {
    key: '/traveltips',
    label: '旅行攻略',
    title: '旅行攻略',
  },
  {
    key: '/discount',
    label: '特价优惠',
    title: '特价优惠',
  },
  {
    key: '/aichat',
    label: 'AI旅行顾问',
    title: 'AI旅行顾问',
  },
  {
    key: '/about',
    label: '关于我们',
    title: '关于我们',
  },
])
const goPage = (e: any) => {
  $router.push(e.key)
}
const goLogin = () => {
  $router.push('/login')
}
</script>

<style scoped lang="scss">
// ::v-deep .menu .ant-menu-item:hover {
//   color: #f50 !important;
// }

.container {
  box-sizing: border-box;

  .header {
    padding: 0 30px;
    box-sizing: border-box;
    width: 100vw;
    height: 80px;
    // background-color: rgba($color: #263238, $alpha: 0.95);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 999;

    .navBox {
      .menu {
        height: 80px;
        background-color: transparent;
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 16px;

        &:deep(.ant-menu-item:hover) {
          color: #ff9800 !important;
        }
      }
    }

    .logoBox {
      height: 100%;
      display: flex;
      align-items: center;

      h3 {
        color: #fff;
        font-weight: bold;
        margin-left: 10px;
      }
    }

    .loginBox {
      display: flex;
      align-items: center;
      gap: 20px;

      .loginBtn {
        height: 50px;
        padding: 0 30px;
        border-radius: 50px;
        font-size: 17px;
        background-color: #fff;
        color: #1677ff;
        border: 1px solid #1677ff;
        transition: all 0.4s;

        &:hover {
          background-color: transparent;
          transform: translateY(-5%);
        }
      }
    }
  }
}
</style>
