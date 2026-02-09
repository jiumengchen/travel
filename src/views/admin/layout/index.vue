<template>
  <a-layout class="container">
    <a-layout-sider
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      style="background: #fff"
    >
      <div class="logo">
        <svg-icon name="logo" fill="#1677ff" width="24px" height="24px"></svg-icon>
        <p v-if="!collapsed">旅游后台管理系统</p>
      </div>
      <div class="menu-box">
        <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
          <template v-for="item in routeArr" :key="item.path">
            <a-menu-item
              @click="changeRouter(item.path)"
              v-if="item.meta?.hidden != true && !item.children"
              :key="item.path"
            >
              <template #icon>
                <div
                  class="iconfont"
                  style="display: inline-block"
                  :class="[item.meta?.icon]"
                ></div>
              </template>
              <span>{{ item.meta?.title }}</span>
            </a-menu-item>
            <a-sub-menu v-if="item.meta?.hidden != true && item.children" :key="item.path">
              <template #icon>
                <div
                  class="iconfont"
                  style="display: inline-block"
                  :class="[item.meta?.icon]"
                ></div>
              </template>
              <template #title>{{ item.meta?.title }}</template>
              <template v-for="children in item.children" :key="children.path">
                <a-menu-item @click="changeRouter(children.path)">
                  <template #icon>
                    <div
                      class="iconfont"
                      style="display: inline-block"
                      :class="[children.meta?.icon]"
                    ></div>
                  </template>
                  <span>{{ children.meta?.title }}</span>
                </a-menu-item>
              </template>
            </a-sub-menu>
          </template>
        </a-menu>
      </div>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">
        <div>
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
        </div>
        <div>
          <a-avatar
            src="https://q1.itc.cn/q_70/images03/20250701/afddfb3d5fcf459594cfa880445c9b2c.jpeg"
          />
          <a-dropdown>
            <a class="ant-dropdown-link" @click.prevent>
              管理员
              <DownOutlined />
            </a>
            <template #overlay>
              <a-menu style="margin-top: 10px">
                <a-menu-item key="3" style="color: red">退出登录</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px' }" class="main">
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" v-if="flag"></component>
          </transition>
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref, watch, nextTick, reactive, h, onMounted, computed } from 'vue'
import useLayoutSetting from '@/stores/modules/layoutSettingStore'
import {
  UserOutlined,
  MailOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
} from '@ant-design/icons-vue'
import { useRoute, useRouter } from 'vue-router'
const $router = useRouter()
const $route = useRoute()
const selectedKeys = ref<string[]>([$route.path])
const collapsed = ref<boolean>(false)
let flag = ref<boolean>(true)
let LayOutSettingStore = useLayoutSetting()
watch(
  () => LayOutSettingStore.is,
  () => {
    flag.value = false
    nextTick(() => {
      flag.value = true
    })
  },
)
const changeRouter = (path: string) => {
  $router.push(path)
}
const routeArr = computed(() => {
  return $router.getRoutes().filter((t) => /^\/admin$/.test(t.path))[0].children
})
onMounted(() => {
  console.log($route.path)
})
</script>
<style lang="scss" scoped>
:deep(.ant-menu-item-selected) {
  background-color: #1677ff;
  color: #fff;
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}

.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .logo {
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 18px;
    color: #1677ff;
    padding: 0 10px;
  }
  .menu-box {
    width: 100%;
    height: calc(100vh - 64px);
    overflow: auto;
    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background: #f5f5f5;
      border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb {
      background: #d9d9d9;
      border-radius: 3px;

      &:hover {
        background: #bfbfbf;
      }
    }
  }

  .header {
    background-color: #fff;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .main {
    height: 100%;
    overflow: auto;
  }
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
