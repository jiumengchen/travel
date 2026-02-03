<template>
  <div class="container">
    <a-row :gutter="[30, 30]">
      <a-col :span="6">
        <div class="left">
          <div class="card">
            <div class="cover">
              <div class="addcovericon">
                <svg-icon name="camera" fill="#fff" width="20px" height="20px"></svg-icon>
              </div>
            </div>
            <div class="imgBox">
              <img src="../../../assets/images/index/user-01.png" alt="">
              <div class="addicon">
                <svg-icon name="camera" fill="#fff" width="18px" height="18px"></svg-icon>
              </div>
            </div>
            <div class="username">张明</div>
            <div class="intr">旅行爱好者 | 已探索12个城市</div>
            <div class="data">
              <div class="item">
                <h2>12</h2>
                <p>已旅行</p>
              </div>
              <div class="item">
                <h2>8</h2>
                <p>收藏</p>
              </div>
              <div class="item">
                <h2>5</h2>
                <p>攻略</p>
              </div>
            </div>
            <div class="btnBox">
              <a-button type="primary" @click="$router.push('/person/edituserinfo'); currentMenu = ''">
                <svg-icon name="editUser" fill="#fff" width="18px" height="18px"></svg-icon>
                <p>编辑个人资料</p>
              </a-button>
            </div>
          </div>
          <ul class="menu">
            <li v-for="(item, index) in menu" :key="index" :class="{ active: item.path == currentMenu }"
              @click="changeMenu(item)">
              <svg-icon :name="item.icon" :fill="currentMenu ? item.iconColor : ''" width="20px"
                height="20px"></svg-icon>
              <p>{{ item.name }}</p>
            </li>
          </ul>
          <div class="count">
            <h2>旅行统计</h2>
            <ul>
              <li>
                <div class="top">
                  <p>已探索城市</p>
                  <p>12/34</p>
                </div>
                <a-progress :percent="30" :show-info="false" strokeColor="#1e88e5" />
              </li>
              <li>
                <div class="top">
                  <p>旅行天数</p>
                  <p>45天</p>
                </div>
                <a-progress :percent="30" :show-info="false" strokeColor="#ff9800" />
              </li>
              <li>
                <div class="top">
                  <p>攻略贡献</p>
                  <p>5篇</p>
                </div>
                <a-progress :percent="30" :show-info="false" strokeColor="#4caf50" />
              </li>
            </ul>
            <a-button>查看详细统计</a-button>
          </div>
        </div>
      </a-col>
      <a-col :span="18">
        <router-view></router-view>
      </a-col>
    </a-row>
  </div>
  <FooterBar></FooterBar>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import FooterBar from '@/components/FooterBar/index.vue'


const $router = useRouter();
const menu = ref([
  {
    path: '/person/me',
    name: '个人中心',
    icon: 'aboutme',
    iconColor: '#374151'
  },
  {
    path: '/person/mytrip',
    name: '我的行程',
    icon: 'mytrip',
    iconColor: '#374151'
  },
  {
    path: '/person/mycollect',
    name: '我的收藏',
    icon: 'like-select',
    iconColor: '#374151'
  },
  {
    path: '/person/myorder',
    name: '我的订单',
    icon: 'myfootprint',
    iconColor: '#374151'
  },
  {
    path: '/person/myguide',
    name: '我的攻略',
    icon: 'myguide',
    iconColor: '#374151'
  }
])
const currentMenu = ref('/person/me');

const props = defineProps(['headerRef']);
const changeMenu = (data: any) => {
  currentMenu.value = data.path;
  menu.value.forEach(item => {
    if (data.path == item.path) {
      item.iconColor = '#1e88e5';
    } else {
      item.iconColor = '#374151';
    }
  })
  $router.push(data.path);
}
onMounted(() => {
  props.headerRef.style.backgroundColor = 'rgba(38, 50, 56,0.95)'
  menu.value[0].iconColor = '#1e88e5'
})
onUnmounted(() => {
  props.headerRef.style.backgroundColor = 'transparent'
})
</script>

<style scoped lang="scss">
.container {
  padding: 30px;
  padding-top: 100px;
  background-color: #f9fafb;

  .left {
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 4px 8px rgba($color: #ccc, $alpha: .4);
      border-radius: 10px;
      background-color: #fff;

      .cover {
        border-radius: 10px 10px 0 0;
        width: 100%;
        height: 130px;
        background: linear-gradient(to top right, #1e88e5, #5ea4fa);
        position: relative;

        .addcovericon {
          width: 30px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          background-color: #7cb5f9;
          position: absolute;
          right: 10px;
          top: 10px;
          cursor: pointer;
          z-index: 4;

          &:hover {
            background-color: #8dbffa;
          }
        }
      }

      .imgBox {
        width: 120px;
        height: 120px;
        position: relative;
        transform: translateY(-50%);

        img {
          border: 4px solid #fff;
          width: 100%;
          height: 100%;
          border-radius: 100%;
        }

        .addicon {
          width: 30px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #1e88e5;
          border-radius: 20px;
          border: 1px solid #fff;
          position: absolute;
          right: 0;
          bottom: 0;
          cursor: pointer;

          &:hover {
            background-color: #3494e8;
          }
        }
      }

      .username {
        font-weight: bold;
        font-size: 20px;
        color: #263238;
        margin-top: -40px;
        margin-bottom: 10px;
      }

      .intr {
        font-size: 16px;
        color: #6b7280;
      }

      .data {
        display: flex;
        gap: 20px;
        padding: 30px 0;
        align-items: center;

        .item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;

          h2 {
            font-weight: bold;
            color: #263238;
            font-size: 26px;
          }

          p {
            color: #6b7280;
          }
        }
      }

      .btnBox {
        padding: 0 20px;
        width: 100%;
        margin-bottom: 30px;

        button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background-color: #1e88e5;
          height: 40px;
          font-size: 16px;

          &:hover {
            background-color: #3494e8;
          }
        }
      }
    }

    .menu {
      margin-top: 30px;
      background-color: #fff;
      box-shadow: 0 4px 8px rgba($color: #ccc, $alpha: .4);
      padding: 20px 0;
      border-radius: 10px;

      li {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 16px;
        padding: 15px 30px;
        color: #374151;
        cursor: pointer;
        border-left: 4px solid transparent;

        &.active {
          border-color: #1e88e5;
          background-color: #e8f3fc;
          color: #1e88e5;
        }

        &:hover {
          background-color: #f9fafb;
        }
      }
    }

    .count {
      margin-top: 30px;
      background-color: #fff;
      box-shadow: 0 4px 8px rgba($color: #ccc, $alpha: .4);
      padding: 20px;
      border-radius: 10px;
      color: #263238;

      h2 {
        font-size: 20px;
        font-weight: bold;
        padding: 10px 0 20px;
      }

      ul {
        li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5px 0;

          .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #4b5563;
          }
        }
      }

      button {
        width: 100%;
        height: 40px;
        border-color: #1e88e5;
        color: #1e88e5;
        font-size: 16px;

        &:hover {
          background-color: #f4f9fe;
        }
      }
    }
  }
}
</style>
