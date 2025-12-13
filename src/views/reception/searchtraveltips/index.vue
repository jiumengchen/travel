<template>
  <div class="container">
    <div class="header">
      <div class="top">
        <a-input placeholder="请输入要搜索的旅行攻略..." v-model:value="searchKeyWord"></a-input>
        <div class="search" @click="search">
          <svg-icon name="search" fill="#fff" width="20px" height="20px"></svg-icon>
        </div>
      </div>
      <div class="bottom">
        <div class="b-left">
          搜索结果:约<span style="font-weight: bold; color: #1e88e5;"> 1,284 </span>条关于“<span
            style="font-weight: bold;color: #333333;">{{
              showKeyWord }}</span>”的内容
        </div>
        <div class="b-right">
          <p>排序:</p>
          <a-select style="width: 120px;" v-model:value="selectType">
            <a-select-item value="最新发布"></a-select-item>
            <a-select-item value="最多浏览"></a-select-item>
            <a-select-item value="最高评分"></a-select-item>
            <a-select-item value="最多评论"></a-select-item>
          </a-select>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="m-left">
        <h3>筛选条件</h3>
        <div class="box">
          <div class="b-item">
            <h4>攻略类型</h4>
            <a-checkbox>全部类型</a-checkbox>
            <a-checkbox>行程规划</a-checkbox>
            <a-checkbox>美食推荐</a-checkbox>
            <a-checkbox>住宿指南</a-checkbox>
            <a-checkbox>交通攻略</a-checkbox>
            <a-checkbox>景点介绍</a-checkbox>
          </div>
          <div class="b-item">
            <h4>旅行时间</h4>
            <a-checkbox>1-3天</a-checkbox>
            <a-checkbox>4-7天</a-checkbox>
            <a-checkbox>1-2周</a-checkbox>
            <a-checkbox>2周以上</a-checkbox>
          </div>
          <div class="b-item">
            <h4>预算范围</h4>
            <a-checkbox>经济型(￥5000以下)</a-checkbox>
            <a-checkbox>舒适型(￥5000-15000)</a-checkbox>
            <a-checkbox>豪华型(￥15000以上)</a-checkbox>
          </div>
          <div class="b-item">
            <h4>发布时间</h4>
            <a-checkbox>最近一周</a-checkbox>
            <a-checkbox>最近一个月</a-checkbox>
            <a-checkbox>最近三个月</a-checkbox>
            <a-checkbox>半年内</a-checkbox>
            <a-checkbox>一年内</a-checkbox>
          </div>
        </div>
        <div class="btn">
          <a-button type="primary" class="application">应用筛选</a-button>
          <a-button class="reset">
            重置
          </a-button>
        </div>
      </div>
      <div class="m-right"
        :style="searchResultList.length === 0 ? { backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' } : {}">
        <a-empty description="未查询到有关的旅行攻略" v-show="searchResultList.length === 0" />
        <div class="search-list" v-show="searchResultList.length != 0">
          <div class="item" v-for="item in searchResultList">
            <div class="img-box">
              <img :src="item.cover" alt="">
            </div>
            <div class="info">
              <div class="tag-box">
                <a-tag color="#f3e8ff" :style="{ color: '#9333ea' }">{{ item.tagList[0] }}</a-tag>
                <a-tag color="#dcfce7" :style="{ color: '#4dbc75' }">{{ item.tagList[1] }}</a-tag>
              </div>
              <h3 class="title">{{ item.title }}</h3>
              <div class="content">{{ item.content }}</div>
              <div class="bottom">
                <div class="user">
                  <img :src="item.author.imgUrl" alt="">
                  <p class="name">{{ item.author.name }}</p>
                </div>
                <div class="send-time">
                  <svg-icon name="date" fill="#6b7b90"></svg-icon>
                  <p>{{ item.sendTime }}</p>
                </div>
                <div class="look-count">
                  <svg-icon name="eyes" fill="#6b7b90"></svg-icon>
                  <p>{{ item.viewCount }}</p>
                </div>
                <div class="comment">
                  <svg-icon name="comment2" fill="#6b7b90"></svg-icon>
                  <p>{{ item.commentCount }}</p>
                </div>
                <div class="score">
                  <svg-icon name="star1" fill="#facc15"></svg-icon>
                  <p>{{ item.score }}</p>
                </div>
              </div>
            </div>
          </div>
          <ConfigProvider :locale="zhCN" v-show="searchResultList.length">
            <a-pagination v-model:current="currentPage" :total="total" show-less-items style="margin: 0 auto;"
              pageSize="6" show-quick-jumper :showSizeChanger="false" hideOnSinglePage @change="handlePage" />
          </ConfigProvider>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { ConfigProvider, message } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { ReqGetTraveltipList } from '@/api/traveltips';
const selectType = ref('最新发布')
const props = defineProps(['headerRef']);
const searchKeyWord = ref('');
const showKeyWord = ref('')
const $router = useRouter();
const $route = useRoute();
const searchResultList = ref<any[]>([]);
const currentPage = ref<number>(1);
const total = ref<number>(0);
const search = () => {
  $router.push({
    path: '/searchtraveltips',
    query: {
      keyWord: searchKeyWord.value
    }
  })
  showKeyWord.value = searchKeyWord.value
  getSearchResultList();
}
const getSearchResultList = async (page = 1) => {
  try {
    const result = await ReqGetTraveltipList({ page, pageSize: 6 });
    searchResultList.value = result.data.list;
    total.value = result.data.total;
    console.log(result.data)
  } catch (error) {
    message.error('获取旅行攻略列表失败');
    console.log(error);
  }
}
const handlePage = (page: number) => {
  currentPage.value = page;
  getSearchResultList(currentPage.value);
}
onMounted(() => {
  showKeyWord.value = $route.query.keyWord as string;
  searchKeyWord.value = $route.query.keyWord as string;
  props.headerRef.style.backgroundColor = 'rgba(38, 50, 56,0.95)'
  // getSearchResultList()
})
onUnmounted(() => {
  props.headerRef.style.backgroundColor = 'transparent'
})
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  padding-top: 80px;

  .header {
    padding: 20px 350px;

    .top {
      position: relative;

      input {
        width: 100%;
        height: 50px;
        border-radius: 100px;
        font-size: 16px;
        padding-right: 60px;
        padding-left: 20px;
      }

      .search {
        width: 40px;
        height: 40px;
        background-color: #1e88e5;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;

        &:hover {
          background-color: #3494e8;
        }
      }
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      align-items: center;
      color: #837290;
      font-size: 15px;

      .b-right {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }
  }

  .main {
    width: 100%;
    background-color: #f5f7fa;
    padding: 30px;
    display: flex;
    gap: 30px;

    .m-left {
      flex: 1;
      background-color: #fff;
      padding: 20px;
      border-radius: 10px;

      h3 {
        font-weight: bold;
        color: #333333;
        margin-bottom: 20px;
      }

      .box {
        display: flex;
        flex-direction: column;
        gap: 20px;
        color: #4b5563;

        .b-item {
          display: flex;
          flex-direction: column;
          gap: 10px;

          h4 {
            margin-bottom: 10px;
          }
        }
      }

      .btn {
        display: flex;
        align-items: center;
        margin-top: 20px;
        gap: 10px;

        .application {
          flex: 1;
        }
      }
    }

    .m-right {
      flex: 3;

      .search-list {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .item {
          display: flex;
          background-color: #fff;
          border-radius: 10px;
          align-items: center;
          transition: all .4s;

          .img-box {
            flex: 1;

            img {
              width: 100%;
              height: 200px;
              object-fit: cover;
              border-radius: 10px 0 0 10px;
            }
          }

          .info {
            flex: 3;
            width: 100%;
            padding: 20px;

            .tag-box {
              span {
                border-radius: 50px;
                margin-bottom: 10px;
              }
            }

            .title {
              font-weight: bold;
              color: #333333;

              &:hover {
                color: #1e88e5;
                cursor: pointer;
              }

            }

            .content {
              width: 100%;
              margin: 15px 0;
              color: #4b5563;
              line-height: 20px;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            .bottom {
              display: flex;
              align-items: center;
              gap: 20px;

              div {
                display: flex;
                align-items: center;
                gap: 5px;
                color: #6b7280;
                font-size: 14px;

                img {
                  width: 25px;
                  height: 25px;
                  border-radius: 100%;
                }
              }

              .score {
                color: #facc15;
              }
            }

          }

          &:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 8px #ccc;
          }
        }
      }
    }
  }
}
</style>
