<template>
  <div class="collect">
    <div class="header">
      <div class="left">
        <h1>我的收藏</h1>
        <p class="desc">继续你的旅行探索，发现更多精彩目的地。你的下一次旅行计划准备好了吗？</p>
      </div>
      <!-- <div class="right">
        <a-button>
          <svg-icon name="addtrip" fill="#1e88e5" width="18px" height="18px"></svg-icon>
          <p>创建新行程</p>
        </a-button>
      </div> -->
    </div>
    <div class="select">
      <div class="left">
        <div class="item" v-for="item in collectType" :key="item.id" :class="{ active: item.id === activeIndex }"
          @click="handleType(item.id)">{{
            item.name }}</div>
      </div>
      <div class="right">
        <a-input placeholder="搜索收藏...">
          <!-- <template #prefix>
            <svg-icon name="search" fill="#86909c"></svg-icon>
          </template> -->
        </a-input>
        <svg-icon name="search" fill="#86909c" class="icon" width="18px" height="18px"></svg-icon>
      </div>
    </div>
    <div class="main">
      <div class="list">
        <div class="item" v-for="item in 3">
          <div class="img_box">
            <img
              src="https://design.gemcoder.com/staticResource/echoAiSystemImages/455c848d917195871324ede67f64d7f1.png"
              alt="">
            <div class="mask">
              <a-tag color="#f50">目的地</a-tag>
              <div class="collect">
                <svg-icon name="like-select" fill="#ef4444" width="20px" height="20px"></svg-icon>
              </div>
            </div>
          </div>
          <div class="info">
            <h3 class="title">巴厘岛海滩</h3>
            <p class="position">
              印度尼西亚 · 巴厘岛
            </p>
            <div class="bottom">
              <div class="b-left">
                <div class="score">
                  <svg-icon name="star1" fill="#facc15"></svg-icon>
                  <p>4.8</p>
                </div>
                <div class="split"></div>
                <p>200 收藏</p>
              </div>
              <div class="b-right">查看详情</div>
            </div>
          </div>
        </div>
        <div class="item" v-for="item in 3">
          <div class="img_box">
            <img
              src="https://design.gemcoder.com/staticResource/echoAiSystemImages/455c848d917195871324ede67f64d7f1.png"
              alt="">
            <div class="mask">
              <a-tag color="#108ee9">酒店</a-tag>
              <div class="collect">
                <svg-icon name="like-select" fill="#ef4444" width="20px" height="20px"></svg-icon>
              </div>
            </div>
          </div>
          <div class="info">
            <h3 class="title">巴厘岛海滩</h3>
            <p class="position">
              印度尼西亚 · 巴厘岛
            </p>
            <div class="bottom">
              <div class="b-left">
                <div class="score">
                  <svg-icon name="star1" fill="#facc15"></svg-icon>
                  <p>4.8</p>
                </div>
                <div class="split"></div>
                <p>200 收藏</p>
              </div>
              <div class="b-right">查看详情</div>
            </div>
          </div>
        </div>
        <div class="item" v-for="item in 3">
          <div class="img_box">
            <img
              src="https://design.gemcoder.com/staticResource/echoAiSystemImages/455c848d917195871324ede67f64d7f1.png"
              alt="">
            <div class="mask">
              <a-tag color="#87d068">攻略</a-tag>
              <div class="collect">
                <svg-icon name="like-select" fill="#ef4444" width="20px" height="20px"></svg-icon>
              </div>
            </div>
          </div>
          <div class="info">
            <h3 class="title">巴厘岛海滩</h3>
            <p class="position">
              印度尼西亚 · 巴厘岛
            </p>
            <div class="bottom">
              <div class="b-left">
                <div class="score">
                  <svg-icon name="star1" fill="#facc15"></svg-icon>
                  <p>4.8</p>
                </div>
                <div class="split"></div>
                <p>200 收藏</p>
              </div>
              <div class="b-right">查看详情</div>
            </div>
          </div>
        </div>
      </div>
      <div class="paging">
        <a-pagination v-model:current="currentPage" :total="50" show-less-items style="margin:  10px auto;" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeIndex = ref<number>(1);
const currentPage = ref<number>(1);
const collectType = ref<any[]>([
  {
    id: 1,
    name: '全部收藏'
  },
  {
    id: 2,
    name: '目的地'
  },
  {
    id: 3,
    name: '酒店'
  },
  {
    id: 4,
    name: '景点'
  },
  {
    id: 5,
    name: '攻略'
  }
])
const handleType = (id: number) => {
  activeIndex.value = id;
}
</script>

<style scoped lang="scss">
.collect {
  .header {
    padding: 30px 20px;
    background: linear-gradient(to top right, #1e88e5, #3a82f5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;

    .left {
      h1 {
        padding: 10px 0 20px;
        font-size: 45px;
        font-weight: bold;
        color: #fff;
      }

      .desc {
        color: #e6f1fd;
        font-size: 16px;
      }
    }

    .right {
      button {
        display: flex;
        align-items: center;
        gap: 5px;
        color: #1e88e5;
        height: 45px;
        font-size: 16px;
        padding: 10px 25px;
        border-radius: 10px;

        &:hover {
          background-color: #f3f4f6;
        }
      }
    }
  }

  .select {
    margin-top: 25px;
    background-color: #fff;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
      gap: 10px;

      .item {
        background-color: #f2f3f5;
        padding: 8px 15px;
        border-radius: 50px;
        color: #6b7280;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:hover {
          background-color: #e5e7eb;
        }
      }

      .active {
        background-color: #165dff;
        color: #fff;

        &:hover {
          background-color: #165dff;
        }
      }
    }

    .right {
      width: 200px;
      position: relative;

      input {
        border-radius: 50px;
        width: 100%;
        padding-left: 35px;
      }

      .icon {
        position: absolute;
        top: 7px;
        left: 10px;
      }
    }
  }

  .main {
    margin-top: 25px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    .list {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;

      .item {
        width: 100%;
        border-radius: 10px;
        border-bottom: 1px solid #f6f6f6;
        transition: all .4s;

        .img_box {
          width: 100%;
          height: 180px;
          position: relative;

          img {
            width: 100%;
            height: 100%;
            border-radius: 10px 10px 0 0;
            object-fit: cover;
          }

          .mask {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            padding: 15px;
            display: flex;
            justify-content: space-between;

            span {
              width: fit-content;
              height: fit-content;
              align-self: flex-end;
            }

            .collect {
              background-color: rgba($color: #fff, $alpha: .5);
              width: fit-content;
              height: fit-content;
              padding: 7px;
              border-radius: 100%;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }

        .info {
          padding: 15px;

          .title {
            font-weight: bold;
            color: #333;
            font-size: 18px;

            &:hover {
              cursor: pointer;
              color: #1e88e5;
            }
          }

          .position {
            margin-top: 8px;
            color: #9690a9;
          }

          .bottom {
            margin-top: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .b-left {
              display: flex;
              align-items: center;
              gap: 5px;

              .score {
                display: flex;
                align-items: center;
                gap: 5px;
                padding-right: 10px;
                border-right: 2px solid #ccc;
              }
            }

            .b-right {
              color: #165dff;
              cursor: pointer;
              font-size: 16px;

              &:hover {
                text-decoration: underline;
              }
            }
          }
        }

        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 8px #ccc;
        }
      }
    }

    .paging {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
    }
  }
}
</style>
