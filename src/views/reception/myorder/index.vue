<template>
  <div class="myorder">
    <div class="header">
      <div class="left">
        <h1>我的订单</h1>
        <p class="desc">查看我的旅行足迹</p>
      </div>
      <div class="right">
        <a-button>
          <svg-icon name="addtrip" fill="#1e88e5" width="18px" height="18px"></svg-icon>
          <p>创建新订单</p>
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
        <a-input placeholder="搜索订单...">
          <!-- <template #prefix>
            <svg-icon name="search" fill="#86909c"></svg-icon>
          </template> -->
        </a-input>
        <svg-icon name="search" fill="#86909c" class="icon" width="18px" height="18px"></svg-icon>
      </div>
    </div>
    <div class="main">
      <div class="order-list">
        <div class="item" v-for="item in 3">
          <div class="top">
            <div class="orderId">
              <p>订单编号:#TRAVEL9955154251451</p>
              <div class="icon">
                <svg-icon name="yes" fill="#22c55e" class="icon" width="18px" height="18px"></svg-icon>
                <p :style="{ color: '#22c55e' }">已完成</p>
              </div>
            </div>
            <div class="time">
              2026-01-17 15:00:00
            </div>
          </div>
          <div class="middle">
            <div class="order-img">
              <img
                src="https://design.gemcoder.com/staticResource/echoAiSystemImages/0f08f48256e5a412921d4282cea10479.png"
                alt="">
            </div>
            <div class="order-info">
              <div class="info-top">
                <h3>三亚5日4晚自由行</h3>
                <p class="price">￥{{ new Intl.NumberFormat('zh-CN').format(3299) }}</p>
              </div>
              <div class="info-middle">
                三亚湾皇冠假日度假酒店 · 含往返机票
              </div>
              <div class="info-bottom">
                <div class="tag">
                  <a-tag color="blue" class="time-tag">2026-01-10至2026-01-14</a-tag>
                  <a-tag color="cyan" class="time-tag">2位成人</a-tag>
                </div>
                <div class="info-option">
                  <a-button type="primary" ghost style="display: flex;
                  align-items: center;gap: 5px;">
                    <svg-icon name="comment" fill="#1677ff" class="icon" width="18px" height="18px"></svg-icon>
                    <span>评价</span>
                  </a-button>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom">
            <a-button type="primary" danger>删除订单</a-button>
            <a-button type="primary">取消订单</a-button>
            <a-button type="primary" class="pay-btn">去支付</a-button>
            <a-button class="ok-btn">确认收货</a-button>
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
    name: '全部订单'
  },
  {
    id: 2,
    name: '待支付'
  },
  {
    id: 3,
    name: '已支付'
  },
  {
    id: 4,
    name: '已完成'
  },
  {
    id: 5,
    name: '已取消'
  }
])
const handleType = (id: number) => {
  activeIndex.value = id;
}
</script>

<style scoped lang="scss">
.myorder {
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

    .order-list {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .item {
        border: 1px solid #f3f4f6;
        border-radius: 10px;

        .top {
          padding: 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 16px;
          background-color: #f9fafb;

          .orderId {
            display: flex;
            align-items: center;
            gap: 10px;

            .icon {
              display: flex;
              align-items: center;
              gap: 5px;
              font-size: 14px;
            }
          }

          .time {
            color: #90a4ae;
          }
        }

        .middle {
          padding: 15px;
          display: flex;
          align-items: center;
          gap: 15px;

          .order-img {
            width: 100px;
            height: 100px;

            img {
              width: 100%;
              height: 100%;
              border-radius: 10px;
            }

          }

          .order-info {
            flex: 1;

            .info-top {
              display: flex;
              align-items: center;
              justify-content: space-between;
              font-weight: bold;
              color: #263238;

              h3 {
                width: 600px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 18px;
                font-weight: bold;
              }

              .price {
                font-size: 19px;
                color: #1e88e5;
              }
            }

            .info-middle {
              width: 100%;
              margin: 15px 0;
              font-size: 15px;
              color: #90a4ae;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              word-break: break-all;
            }

            .info-bottom {
              display: flex;
              justify-content: space-between;

              .tag {
                .time-tag {
                  border-radius: 50px;
                }
              }
            }
          }
        }

        .bottom {
          padding: 15px;
          display: flex;
          align-items: center;
          font-size: 16px;
          background-color: #f9fafb;
          gap: 10px;

          .pay-btn {
            background-color: #22c55e;

            &:hover {
              background-color: #4ade80;
            }
          }

          .ok-btn {
            background-color: #e6a23c;
            color: #fff;
            border: none;

            &:hover {
              background-color: #f0b769;
              color: #fff;
            }
          }
        }
      }
    }

    .paging {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
    }
  }
}
</style>
