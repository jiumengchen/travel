<template>
  <div class="payresult">
    <div class="top">
      <div class="icon" :style="{ backgroundColor: $route.query.type === 'success' ? '#dceeea' : '#fee2e2' }">
        <svg-icon :name="$route.query.type === 'success' ? 'success-line' : 'fail-line'" width="50px" height="50px"
          :fill="$route.query.type === 'success' ? '#10b981' : '#ef4444'"></svg-icon>
      </div>
      <h1 class="result-title">订单支付{{ $route.query.type === 'success' ? '成功' : '失败' }}!</h1>
      <p class="result-desc">
        {{
          $route.query.type === 'success'
            ? '感谢您的购买，您的旅行产品已成功预订'
            : '抱歉，本次支付未成功，您可以重新发起支付'
        }}
      </p>
      <p class="order-id">订单号:<span style="color: #1e40af">TRAVEL-20251118-78945</span></p>
    </div>
    <div class="middle">
      <div class="m-top">
        <h3 class="m-title">订单详情</h3>
      </div>
      <div class="m-middle">
        <div class="cart-list">
          <div class="cart-item" v-for="(item, index) in 3">
            <img ref="imgRef"
              src="data:image/png;base64,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"
              :data-src="`https://picsum.photos/200/${180 + index}`" alt="" />
            <div class="content-info">
              <div class="content-left">
                <p class="name">巴厘岛海景豪华房</p>
                <p class="desc">4晚 · 含早餐 · 免费WiFi</p>
                <div class="time-msg">
                  <div class="time">
                    <svg-icon name="date" fill="#6b7280" width="14px" height="14px" />
                    <p>2025-11-18</p>
                  </div>
                  <div class="person">
                    <svg-icon name="user" fill="#6b7280" width="18px" height="18px" />
                    <p>2位成人</p>
                  </div>
                </div>
              </div>
              <div class="content-right">x 1</div>
            </div>
            <div class="price">￥2,599</div>
          </div>
        </div>
        <div class="pay-info">
          <h3 class="pay-title">支付信息</h3>
          <div class="pay-info-list">
            <div class="item">
              <p>支付方式:</p>
              <p style="color: #525252">支付宝支付</p>
            </div>
            <div class="item">
              <p>支付时间:</p>
              <p style="color: #525252">2025-11-18 14:35:22</p>
            </div>
            <div class="item">
              <p>预计确认时间:</p>
              <p style="color: #525252">2小时内</p>
            </div>
            <div class="item">
              <p>客服电话:</p>
              <p style="color: #1e88e5">400-888-9999</p>
            </div>
          </div>
        </div>
        <div class="price-info">
          <h3 class="price-title">价格明细</h3>
          <div class="price-info-list">
            <div class="item">
              <p>商品总价 (3件)</p>
              <p style="color: #525252">¥{{ Intl.NumberFormat('zh-CN').format(20597) }}</p>
            </div>
            <div class="item">
              <p>抵扣金额 (优惠券)</p>
              <p style="color: #525252">
                <span style="color: #16a34a">-¥{{ Intl.NumberFormat('zh-CN').format(500) }}</span>
              </p>
            </div>
            <div class="item">
              <p>服务费</p>
              <p style="color: #525252">¥{{ Intl.NumberFormat('zh-CN').format(500) }}</p>
            </div>
            <div class="item">
              <p>税费</p>
              <p style="color: #525252">¥{{ Intl.NumberFormat('zh-CN').format(1200) }}</p>
            </div>
          </div>
        </div>
        <div class="real-price">
          <h3 class="real-title">实付金额</h3>
          <h3 class="price">¥{{ Intl.NumberFormat('zh-CN').format(1200) }}</h3>
        </div>
      </div>
      <div class="m-bottom">
        <a-button>{{ $route.query.type === 'success' ? '查看订单详情' : '重新发起支付' }}</a-button>
        <a-button @click="$router.back()">返回</a-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const $router = useRouter()
const $route = useRoute()
const props = defineProps(['headerRef'])
onMounted(() => {
  props.headerRef.style.backgroundColor = 'rgba(38, 50, 56,0.95)'
})
onUnmounted(() => {
  props.headerRef.style.backgroundColor = 'transparent'
})
</script>

<style scoped lang="scss">
.payresult {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: #f3f4f6;
  box-sizing: border-box;
  padding-top: 120px;
  padding-left: 300px;
  padding-right: 300px;

  .top {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon {
      width: 100px;
      height: 100px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .result-title {
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      font-weight: bold;
      color: #1f2937;
      margin-top: 30px;
    }

    .result-desc {
      color: #525252;
      font-size: 18px;
      margin-top: 25px;
    }

    .order-id {
      color: #737389;
      margin-top: 15px;
    }
  }

  .middle {
    width: 100%;
    margin-top: 30px;

    .m-top {
      padding: 25px;
      background-color: #1e88e5;
      border-radius: 10px 10px 0 0;

      .m-title {
        font-size: 20px;
        color: #fff;
        font-weight: bold;
      }
    }

    .m-middle {
      background-color: #fff;
      border-radius: 0 0 10px 10px;

      .cart-list {
        .cart-item {
          padding: 25px;
          display: flex;
          align-items: center;
          gap: 20px;
          border-bottom: 1px solid #f3f4f6;

          img {
            width: 100px;
            height: 100px;
            border-radius: 10px;
          }

          .content-info {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .content-left {
              .name {
                margin-bottom: 10px;
              }

              .desc {
                color: #6b7280;
                font-size: 15px;
              }

              .time-msg {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 14px;
                color: #6b7280;
                margin-top: 10px;

                .time,
                .person {
                  display: flex;
                  align-items: center;
                  gap: 5px;
                }
              }
            }

            .content-right {
              margin-right: 100px;
            }
          }

          .price {
            font-size: 24px;
            font-weight: bold;
            color: #1e88e5;
          }

          &:hover {
            background-color: #f5f7fa;
          }
        }
      }

      .pay-info {
        padding: 25px;
        border-bottom: 1px solid #f3f4f6;

        .pay-title {
          font-weight: bold;
          color: #374151;
        }

        .pay-info-list {
          color: #737373;
          margin-top: 25px;
          display: flex;
          flex-direction: column;
          gap: 20px;

          .item {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
      }

      .price-info {
        padding: 25px;
        border-bottom: 1px solid #f3f4f6;

        .price-title {
          font-weight: bold;
          color: #374151;
        }

        .price-info-list {
          color: #737373;
          margin-top: 25px;
          display: flex;
          flex-direction: column;
          gap: 20px;

          .item {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
      }
    }

    .real-price {
      padding: 25px;
      border-bottom: 1px solid #f3f4f6;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .real-title {
        font-weight: bold;
        color: #374151;
      }

      .price {
        font-weight: bold;
        color: #1e88e5;
        font-size: 24px;
      }
    }

    .m-bottom {
      margin-top: 20px;
      text-align: center;
      margin-bottom: 30px;
      display: flex;
      gap: 30px;

      button {
        flex: 1;
        background-color: #1e88e5;
        color: #fff;
        height: 40px;
        font-size: 18px;
      }
    }
  }
}
</style>
