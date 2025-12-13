<template>
  <div class="container" ref="boxRef">
    <a-row class="top">
      <a-col :span="24">
        <div class="imgBox">
          <img src="../../../assets/images/dest/dest-bg.png" alt="">
          <div class="mask">
            <div class="context">
              <h1>限时特价旅行套餐</h1>
              <p class="desc">发现令人难以置信的旅行优惠，探索世界各地的美丽目的地，享受难忘的旅行体验</p>
              <a-row align="center">
                <a-col :span="14" style="background-color: #fff;border-radius: 10px;">
                  <a-row class="searchBox" :gutter="[10, 10]">
                    <a-col :span="8">
                      <p style="font-size: 14px; color: #6b7280; margin: 0 0 5px; padding: 0;text-align: left;">目的地</p>
                      <a-input placeholder="您想去哪里?" style="height: 40px;">
                        <template #prefix>
                          <svg-icon name="position" fill="#6b7280"></svg-icon>
                        </template>
                      </a-input>
                    </a-col>
                    <a-col :span="8" style="position: relative;">
                      <p style="font-size: 14px; color: #6b7280; margin: 0 0 5px; padding: 0;text-align: left;">日期</p>
                      <a-date-picker style="width: 100%;height: 40px;padding-left: 30px;" :locale="locale">
                      </a-date-picker>
                      <svg-icon name="date" fill="#6b7280" width="14px" height="14px" class="dateIcon"></svg-icon>
                    </a-col>
                    <a-col :span="8">
                      <p style="font-size: 14px; color: #6b7280; margin: 0 0 5px; padding: 0;text-align: left;">&nbsp;
                      </p>
                      <a-button type="primary" style="width: 100%;height: 40px;">搜索</a-button>
                    </a-col>
                  </a-row>
                </a-col>
              </a-row>
            </div>
          </div>
        </div>
      </a-col>
    </a-row>
    <a-row class="fillter">
      <a-col :span="24">
        <div class="context">
          <div class="left">
            <p>共找到 <span>128</span> 个特价优惠</p>
          </div>
          <div class="right">
            <a-select style="width: 150px;"></a-select>
            <a-select style="width: 150px;"></a-select>
            <a-select style="width: 150px;"></a-select>
            <a-button @mouseover="iconColor.fillter1 = '#1e88e5'" @mouseleave="iconColor.fillter1 = '#263238'">
              <svg-icon name="fillter1" :fill="iconColor.fillter1"></svg-icon>
              <p>更多筛选</p>
            </a-button>
          </div>
        </div>
      </a-col>
    </a-row>
    <a-row class="main">
      <a-col :span="24">
        <div class="content">
          <ul>
            <li class="active">全部</li>
            <li>三亚</li>
            <li>北京</li>
            <li>上海</li>
            <li>成都</li>
            <li>广州</li>
            <li>西安</li>
            <li>杭州</li>
            <li>厦门</li>
          </ul>
          <a-row class="context" :gutter="[30, 30]">
            <a-col :span="8" v-for="item in 9">
              <div class="item">
                <div class="imgBox">
                  <img src="../../../assets/images/discount/discount-img01.png" alt="">
                  <div class="mask">
                    <a-tag color="#ff9800" class="leftTag">限时优惠</a-tag>
                    <a-tag class="scoreTag" color="#f0efea">
                      <svg-icon name="star1" fill="#1e88e5"></svg-icon>
                      <p>4.9</p>
                    </a-tag>
                  </div>
                </div>
                <div class="de">
                  <div class="price">
                    <h2>三亚5日4晚自由行</h2>
                    <div class="right">
                      <p>￥1,299</p>
                      <p>￥2,599</p>
                    </div>
                  </div>
                  <div class="position">
                    <svg-icon name="position" fill="#1e88e5"></svg-icon>
                    <p>三亚 · 亚龙湾 · 5天4晚</p>
                  </div>
                  <p class="des">包含往返机票+4晚五星级酒店住宿，享受阳光沙滩和清澈海水，体验热带风情。</p>
                  <div class="tagBox">
                    <a-tag color="#eff6ff" style="color: #2563eb;" class="tag">含门票</a-tag>
                    <a-tag color="#f0fdf4" style="color: #16a34a;" class="tag">四星酒店</a-tag>
                    <a-tag color="#faf5ff" style="color: #9333ea;" class="tag">含三餐</a-tag>
                    <a-tag color="#fefce8" style="color: #ca8a04" class="tag">导游服务</a-tag>
                  </div>
                  <div class="bottom">
                    <div class="time">
                      <svg-icon name="clock" fill="#6b7280"></svg-icon>
                      <p>剩下27份</p>
                    </div>
                    <a-button type="primary" size="large" @click="$router.push('/discountdetail')">查看详情</a-button>
                  </div>
                </div>
              </div>
            </a-col>
          </a-row>
          <div class="loadingBtnBox">
            <a-button type="primary" size="large" class="btn" @mouseover="iconColor.bottom = '#fff'"
              @mouseleave="iconColor.bottom = '#1e88e5'" @click="getMoreData">
              <div style="display: flex; align-items: center;gap: 10px;" v-show="isLoading == false">
                <p>加载更多目的地</p>
                <svg-icon name="bottom" :fill="iconColor.bottom" width="14px" height="14px"></svg-icon>
              </div>
              <div style="display: flex;align-items: center;gap: 10px;" v-show="isLoading == true">
                <a-spin size="small" />
                <p>加载中. . .</p>
              </div>
            </a-button>
          </div>
        </div>
      </a-col>
    </a-row>
    <ContactWe></ContactWe>
    <FooterBar></FooterBar>
  </div>
  <div class="backTop" v-show="isBackTop" @click="backTop">
    <svg-icon name="toTop" fill="#fff" width="20px" height="20px"></svg-icon>
  </div>
</template>

<script setup lang="ts">
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
import ContactWe from '@/components/ContactWe/index.vue'
import FooterBar from '@/components/FooterBar/index.vue'
import { ref, onMounted, nextTick, onUnmounted } from 'vue'
const props = defineProps(['headerRef']);
const boxRef = ref<HTMLElement | null>(null);
const iconColor = ref({
  fillter1: '#263238',
  bottom: '#1e88e5'
})
const isLoading = ref<Boolean>(false);
const isBackTop = ref<boolean>(false);
const getMoreData = () => {
  isLoading.value = true
}
onMounted(() => {
  boxRef.value?.scrollIntoView();
})
nextTick(() => {
  console.log(boxRef.value)
  boxRef.value?.addEventListener('scroll', () => {
    const scrollTop: number = (boxRef.value?.scrollTop as number);
    if (scrollTop > 500) {
      props.headerRef.style.backgroundColor = 'rgba(38, 50, 56,0.95)'
      isBackTop.value = true;
    } else if (scrollTop < 500) {
      props.headerRef.style.backgroundColor = 'transparent'
      isBackTop.value = false;
    }
  })
})
const backTop = () => {
  console.log('返回')
  boxRef.value?.scroll({
    top: 0,
    behavior: 'smooth'
  })
}
onUnmounted(() => {
  props.headerRef.style.backgroundColor = 'transparent'
})
</script>

<style scoped lang="scss">
.container {
  box-sizing: border-box;
  transition: all .5s;
  height: 100vh;
  overflow: auto;

  .top {
    width: 100%;
    height: 450px;
    background-color: pink;

    .imgBox {
      width: 100%;
      height: 450px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }

      .mask {
        width: 100%;
        height: 100%;
        background-color: rgba($color: #000000, $alpha: .4);
        position: absolute;
        top: 0;
        left: 0;

        .context {
          margin-top: 140px;
          text-align: center;

          h1 {
            font-size: 60px;
            font-weight: bold;
            color: #fff;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
          }

          .desc {
            font-size: 20px;
            padding: 30px 0;
            color: #e5e9ec;
          }

          .searchBox {
            padding: 20px;

            &:deep(.ant-select-selector) {
              width: 100%;
              height: 40px !important;
              display: flex !important;
              align-items: center;
              text-align: left;
              padding-left: 30px;

              // background-color: pink !important;
            }

            &:deep(.ant-select-selection-search) {
              padding-left: 30px;
            }

            .selcetIcon {
              position: absolute;
              top: 53%;
              left: 15px;
            }

            .dateIcon {
              position: absolute;
              top: 54.5%;
              left: 15px;
            }
          }
        }
      }
    }
  }

  .fillter {
    padding: 0 20px;
    border-bottom: 2px solid #f0f1f2;

    .context {
      color: #263238;
      padding: 20px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .left {
        p {
          font-size: 16px;
          color: #7f8690;

          span {
            color: #1e88e5;
            font-weight: bold;
          }
        }
      }

      .right {
        display: flex;
        align-items: center;
        gap: 15px;

        button {
          display: flex;
          align-items: center;
          gap: 5px;

          &:hover {
            color: #1e88e5;
          }
        }
      }
    }
  }

  .main {
    background-color: #f9fafb;

    .content {
      padding: 0 20px;

      ul {
        display: flex;
        gap: 20px;
        align-items: center;
        padding: 50px 0;

        li {
          background-color: pink;
          padding: 10px 20px;
          border-radius: 50px;
          color: #374151;
          background-color: #fff;
          cursor: pointer;

          &:hover {
            background-color: #f3f4f6;
          }
        }

        .active {
          background-color: #1e88e5;
          color: #fff;

          &:hover {
            background-color: #1e88e5;
          }
        }
      }

      .context {
        .item {
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba($color: #ccc, $alpha: .4);
          transition: all .5s;

          .imgBox {
            width: 100%;
            height: 220px;
            border-radius: 10px 10px 0 0;
            position: relative;

            img {
              width: 100%;
              height: 100%;
              border-radius: 10px 10px 0 0;
            }

            .mask {
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              padding: 20px;
              display: flex;
              justify-content: space-between;

              .leftTag {
                height: 25px;
                display: flex;
                align-items: center;
                border-radius: 50px;
                padding: 0 10px;
                font-weight: bold;
                font-size: 14px;
              }

              .scoreTag {
                display: flex;
                height: 25px;
                color: #1e88e5;
                font-size: 14px;
                align-items: center;
                gap: 5px;
                border-radius: 50px;
                padding: 0 10px;
                font-weight: bold;
              }
            }
          }

          .de {
            padding: 20px;

            .price {
              display: flex;
              justify-content: space-between;

              h2 {
                font-weight: bold;
                color: #263238;
                font-size: 20px;
              }

              .right {
                display: flex;
                flex-direction: column;
                gap: 10px;
                align-items: flex-end;

                p {
                  &:nth-child(1) {
                    color: #1e88e5;
                    font-weight: bold;
                    font-size: 24px;
                  }

                  &:nth-child(2) {
                    color: #6b7280;
                    text-decoration: line-through;
                  }
                }
              }
            }

            .position {
              display: flex;
              align-items: center;
              gap: 5px;
              color: #4b5563;
              padding: 10px 0;
            }

            .des {
              font-size: 16px;
              color: #4b5563;
              line-height: 25px;
              padding: 10px 0;
            }

            .tagBox {
              margin: 10px 0;

              .tag {
                border-radius: 10px;
              }
            }

            .bottom {
              display: flex;
              align-items: center;
              justify-content: space-between;

              .time {
                display: flex;
                align-self: center;
                color: #6b7280;
                gap: 5px;
              }

              button {
                background-color: #1e88e5;

                &:hover {
                  background-color: #3494e8;
                }
              }
            }

          }

          &:hover {
            transform: translateY(-2%);
            box-shadow: 0 4px 8px #ccc;
          }

        }
      }

      .loadingBtnBox {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 50px 0;

        .btn {
          background-color: transparent;
          border: 1px solid #1e88e5;
          color: #1e88e5;
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 25px 40px;

          &:hover {
            background-color: #1e88e5;
            color: #fff;
          }
        }
      }
    }
  }
}

.backTop {
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 4%;
  right: 2%;
  background-color: #1e88e5;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999;

  &:hover {
    background-color: #1f80d4;
  }
}
</style>
