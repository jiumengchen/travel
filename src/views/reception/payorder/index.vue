<template>
  <div class="container">
    <div class="cart-init">
      <div class="header">
        <h1>订单结算</h1>
      </div>
      <p class="selectcount">
        您即将购买 <span style="color: #1e88e5; font-weight: bold">5</span> 个旅行产品
      </p>
      <div class="main">
        <div class="left">
          <div class="title">
            <h3>订单编号:#TRAVEL4151151554151</h3>
          </div>
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
                <div class="content-right">
                  <div @click="sub">-</div>
                  <div class="num">
                    <a-input-number :min="1" :max="999" style="width: 100%; height: 100%; border: none"
                      :controls="false" v-model:value="sum" />
                  </div>
                  <div @click="add">+</div>
                </div>
              </div>
              <div class="price">￥2,599</div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="order">
            <h3>订单摘要</h3>
            <div class="order-info">
              <div class="item">
                <p>商品总价(3件)</p>
                <p>￥20,597</p>
              </div>
              <div class="item">
                <p>优惠券</p>
                <p style="color: #22c55e">-￥500</p>
              </div>
              <div class="item">
                <p>服务费</p>
                <p>￥200</p>
              </div>
              <div class="item">
                <p>税费</p>
                <p>￥1,200</p>
              </div>
            </div>
            <div class="total-price">
              <h4>总计</h4>
              <p>￥21,497</p>
            </div>
            <div class="pay">
              <p>支付方式</p>
              <div class="alipay" @click="handlePayType('alipay')">
                <a-radio :checked="value === 'alipay'"> </a-radio>
                <div class="pay-icon ali">
                  <svg-icon name="alipay" fill="#fff" width="20px" height="20px"></svg-icon>
                </div>
                <p style="margin-left: 10px">支付宝支付</p>
              </div>
              <div class="wxpay" @click="handlePayType('wxpay')">
                <a-radio value="wxpay" :checked="value === 'wxpay'"></a-radio>
                <div class="pay-icon wx">
                  <svg-icon name="wx" fill="#fff" width="20px" height="20px"></svg-icon>
                </div>
                <p style="margin-left: 10px">微信支付</p>
              </div>
            </div>
            <div class="btn" @click="pay">
              <p>去支付</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ContactWe></ContactWe>
    <FooterBar></FooterBar>
  </div>
</template>

<script setup lang="ts">
import ContactWe from '@/components/ContactWe/index.vue'
import FooterBar from '@/components/FooterBar/index.vue'
import useLazyImage from '@/hooks/useLazyImage'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ReqGetCartList } from '@/api/cart'
import { message } from 'ant-design-vue'
const $route = useRoute()
const $router = useRouter()
const imgRef = ref<HTMLElement | null>(null)
const isClear = ref<boolean>(false)
const value = ref<string>('')
const sum = ref(1)
const closeActiveIndex = ref<number>(-1)
const isSubmitOrderSuccess = ref<boolean>(false)
useLazyImage(imgRef)
const closeColor = {
  active: '#ef4444',
  noactive: '#9ca3af',
}
const cartList = ref([])
const getCartList = async () => {
  try {
    const result = await ReqGetCartList()
    console.log(result.data.data)
  } catch (error) { }
}
const pay = () => {
  $router.push({
    path: '/payresult',
    query: {
      type: 'success',
    },
  })
}
const handlePayType = (payType: string) => {
  value.value = payType
}

const submitOrder = () => {
  isSubmitOrderSuccess.value = true
}

const clearCartList = () => {
  isClear.value = false
  message.success('清空购物车成功')
}
const add = () => {
  if (sum.value === 999) return
  sum.value++
}
const sub = () => {
  if (sum.value === 1) return
  sum.value--
}
console.log($route.matched)
const props = defineProps(['headerRef'])
onMounted(() => {
  console.log(123)
  props.headerRef.style.backgroundColor = 'rgba(38, 50, 56,0.95)'
  getCartList()
})
onUnmounted(() => {
  props.headerRef.style.backgroundColor = 'transparent'
})
</script>

<style scoped lang="scss">
:deep(.ant-input-number-input) {
  text-align: center;
}

.container {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  padding-top: 80px;

  .cart-init {
    padding: 0 100px;

    .header {
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-size: 36px;
        font-weight: bold;
        color: #1f2937;
      }

      p {
        color: #165dff;
        cursor: pointer;
      }
    }

    .selectcount {
      margin-top: 20px;
      color: #6b7280;
    }

    .main {
      display: flex;
      gap: 30px;
      margin-top: 30px;
      margin-bottom: 60px;

      .left {
        flex: 2;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        border-radius: 10px;

        .title {
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #f3f4f6;

          h3 {
            font-weight: bold;
            color: #1f2937;
          }

          .deletebtn {
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 3px;
            color: #6b7280;
            font-size: 14px;
          }
        }

        .cart-list {
          .cart-item {
            padding: 20px;
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
                // width: 120px;
                display: flex;
                border: 1px solid #e5e7eb;
                border-radius: 5px;

                div {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: 30px;
                  height: 30px;
                  cursor: pointer;
                }

                .num {
                  width: 50px;
                }
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
      }

      .right {
        flex: 1;

        .order {
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          position: sticky;
          top: 70px;

          h3 {
            padding: 20px;
            font-weight: bold;
            color: #1f2937;
            border-bottom: 1px solid #f3f4f6;
          }

          .order-info {
            padding: 5px 20px;

            .item {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 10px 0;

              p {
                font-size: 15px;

                &:nth-of-type(1) {
                  color: #7c838f;
                }
              }
            }
          }

          .total-price {
            padding: 20px;
            border: 1px solid #f3f4f6;
            display: flex;
            align-items: center;
            justify-content: space-between;

            h4 {
              font-weight: bold;
              color: #1f2937;
            }

            p {
              font-size: 20px;
              font-weight: bold;
              color: #1e88e5;
            }
          }

          .pay {
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            border-bottom: 1px solid #e5e7eb;

            &>div {
              width: 100%;
              height: 40px;
              border: 1px solid #e5e7eb;
              border-radius: 8px;
              cursor: pointer;
              display: flex;
              align-items: center;
              padding: 0 10px;

              .pay-icon {
                width: 25px;
                height: 25px;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
              }

              .wx {
                background-color: #24db71;
              }

              .ali {
                background-color: #1578fd;
              }

              &:hover {
                border-color: #165dff;
              }
            }
          }

          .btn {
            padding: 20px;

            p {
              width: 100%;
              height: 50px;
              background-color: #ff9800;
              color: #fff;
              border-radius: 10px;
              font-size: 20px;
              font-weight: bold;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              transition: all 0.4s;

              &:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 8px #ccc;
                background-color: #ffa219;
              }
            }
          }
        }
      }
    }
  }
}

.clear-modal {
  .delete-tip {
    margin: 0 auto;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: #fee2e2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-weight: bold;
    text-align: center;
    margin-top: 15px;
    color: #1f2937;
  }

  p {
    text-align: center;
    font-size: 15px;
    margin-top: 10px;
    color: #7c838f;
  }

  .btn {
    display: flex;
    align-items: center;
    margin-top: 30px;
    gap: 20px;

    div {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      border-radius: 10px;
      cursor: pointer;
    }

    .cancel {
      border: 1px solid #d1d5db;
      color: #374151;

      &:hover {
        background-color: #f9fafb;
      }
    }

    .confirm {
      border: 1px solid #d1d5db;
      color: #fff;
      background-color: #ef4444;

      &:hover {
        background-color: #dc2626;
      }
    }
  }
}
</style>
