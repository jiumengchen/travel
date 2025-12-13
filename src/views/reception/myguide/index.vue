<template>
  <div class="guide">
    <div class="header">
      <div class="left">
        <h1>我的攻略</h1>
        <p class="desc">继续你的旅行探索，发现更多精彩目的地。你的下一次旅行计划准备好了吗？</p>
      </div>
      <div class="right">
        <a-button>
          <svg-icon name="addtrip" fill="#1e88e5" width="18px" height="18px"></svg-icon>
          <p>发布新攻略</p>
        </a-button>
      </div>
    </div>
    <div class="select">
      <div class="left">
        <div class="item" v-for="item in collectType" :key="item.id" :class="{ active: item.id === activeIndex }"
          @click="handleType(item.id)">{{
            item.name }}</div>
      </div>
      <div class="right">
        <a-input placeholder="搜索收藏...">
        </a-input>
        <svg-icon name="search" fill="#86909c" class="icon" width="18px" height="18px"></svg-icon>
      </div>
    </div>
    <div class="main">
      <div class="list">
        <div class="item" v-for="item in 9">
          <div class="img_box">
            <img
              src="https://design.gemcoder.com/staticResource/echoAiSystemImages/df946792eb7890cd53149680e0c5d569.png"
              alt="">
            <div class="mask">
              <a-tag color="#f50">城市探索</a-tag>
              <div class="view-info">
                <svg-icon name="eyes" fill="#fff" width="18px" height="18px"></svg-icon>
                <p>2000</p>
                <p>·</p>
                <svg-icon name="like-select" fill="#fff" width="18px" height="18px"></svg-icon>
                <p>128</p>
              </div>
            </div>
          </div>
          <div class="info">
            <h3 class="title">东京樱花季旅行攻略：邂逅粉色浪漫</h3>
            <p class="desc">
              精选东京最佳赏樱地点，推荐樱花季限定美食，实用交通指南，让你的樱花之旅完美无缺。
            </p>
            <div class="bottom">
              <div class="b-left">
                <svg-icon name="date" fill="#6b7280"></svg-icon>
                <p>2025-11-28</p>
              </div>
              <div class="b-right">
                <svg-icon name="edit2" fill="#9ca3af"></svg-icon>
                <svg-icon name="delete" fill="#9ca3af" width="18px" height="18px"></svg-icon>
              </div>
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
    name: '全部攻略'
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
.guide {
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
    // background-color: #fff;
    // box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
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
        background-color: #fff;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

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
            flex-direction: column;
            justify-content: space-between;
            color: #fff;
            background-color: rgba($color: #000000, $alpha: .1);
            border-radius: 10px 10px 0 0;

            p {
              &:nth-of-type(2) {
                font-weight: bold;
              }
            }

            span {
              width: fit-content;
              height: fit-content;
            }

            .view-info {
              display: flex;
              align-items: center;
              gap: 5px;
            }
          }
        }

        .info {
          padding: 15px;

          .title {
            width: 100%;
            font-weight: bold;
            color: #333;
            font-size: 18px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;

            &:hover {
              cursor: pointer;
              color: #1e88e5;
            }
          }

          .desc {
            margin-top: 10px;
            font-size: 16px;
            line-height: 20px;
            color: #9690a9;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            overflow: hidden;
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
              color: #6b7280;
            }

            .b-right {
              display: flex;
              align-items: center;
              gap: 10px;

              svg {
                cursor: pointer;
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
