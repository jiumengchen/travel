<template>
  <div class="container" ref="boxRef">
    <a-row class="top">
      <a-col :span="24">
        <div class="imgBox">
          <img src="../../../assets/images/about/about-bg.png" alt="">
          <div class="mask">
            <div class="context">
              <h1>关于探索之旅</h1>
              <p class="desc">我们致力于为旅行者提供最真实、最独特的旅行体验，让每一次出行都成为难忘的回忆</p>
            </div>
          </div>
        </div>
      </a-col>
    </a-row>
    <a-row class="story">
      <a-col :span="24">
        <a-row class="context" :gutter="[30, 30]" align="middle">
          <a-col :span="12">
            <div class="left">
              <h1>我们的故事</h1>
              <div class="line"></div>
              <p>探索之旅成立于2010年，由一群热爱旅行的专业人士创立。我们深知旅行不仅仅是到达目的地，更是一段充满发现与成长的旅程。</p>
              <p>十余年来，我们始终坚持"真实、独特、负责任"的旅行理念，为超过100万旅行者提供了难忘的旅行体验。我们的团队由来自世界各地的旅行专家组成，他们不仅熟悉当地文化，更拥有丰富的旅行经验。</p>
              <div class="dataShow">
                <div class="item">
                  <div class="icon">
                    <Svg-icon name="logo" fill="#1e88e5" width="20px" height="20px"></Svg-icon>
                  </div>
                  <div class="content">
                    <h2>50+</h2>
                    <p>目的地国家</p>
                  </div>
                </div>
                <div class="item">
                  <div class="icon">
                    <Svg-icon name="morePerson" fill="#1e88e5" width="20px" height="20px"></Svg-icon>
                  </div>
                  <div class="content">
                    <h2>100万+</h2>
                    <p>满意客户</p>
                  </div>
                </div>
                <div class="item">
                  <div class="icon">
                    <Svg-icon name="date" fill="#1e88e5" width="20px" height="20px"></Svg-icon>
                  </div>
                  <div class="content">
                    <h2>13年</h2>
                    <p>行业经验</p>
                  </div>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :span="12">
            <div class="right">
              <img src="../../../assets/images/about/about-img01.png" alt="">
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <a-row class="wish">
      <a-col :span="24">
        <h1>我们的使命与愿景</h1>
        <div class="line"></div>
        <p class="desc">
          我们致力于通过旅行连接世界，促进文化交流，同时保护我们珍贵的自然和文化遗产
        </p>
        <a-row class="context" :gutter="[30, 30]">
          <a-col :span="8">
            <div class="item">
              <div class="icon">
                <svg-icon name="compass" fill="#1e88e5" width="30px" height="30px"></svg-icon>
              </div>
              <h2>我们的使命</h2>
              <p>为旅行者创造有意义的旅行体验，通过深度文化交流促进全球理解与和平，同时推动可持续旅游发展，保护地球环境。</p>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="item">
              <div class="icon">
                <svg-icon name="eye" fill="#1e88e5" width="30px" height="30px"></svg-icon>
              </div>
              <h2>我们的愿景</h2>
              <p>成为全球领先的负责任旅行平台，让每个旅行者都能通过我们的服务探索世界、体验文化、拓展视野，同时为目的地社区带来积极影响。</p>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="item">
              <div class="icon">
                <svg-icon name="like-select" fill="#1e88e5" width="30px" height="30px"></svg-icon>
              </div>
              <h2>我们的价值观</h2>
              <ul>
                <li>
                  <svg-icon name="yes" fill="#ff9800"></svg-icon>
                  <p>诚信正直 - 始终对客户和合作伙伴保持透明诚实</p>
                </li>
                <li>
                  <svg-icon name="yes" fill="#ff9800"></svg-icon>
                  <p>尊重多元 - 珍视文化多样性，尊重不同的价值观和传统</p>
                </li>
                <li>
                  <svg-icon name="yes" fill="#ff9800"></svg-icon>
                  <p>卓越服务 - 追求卓越，不断提升客户体验</p>
                </li>
                <li>
                  <svg-icon name="yes" fill="#ff9800"></svg-icon>
                  <p>社会责任 - 致力于可持续旅游和社区发展</p>
                </li>
              </ul>
            </div>
          </a-col>
        </a-row>
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
import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import ContactWe from '@/components/ContactWe/index.vue'
import FooterBar from '@/components/FooterBar/index.vue'
const boxRef = ref<HTMLElement | null>(null);
const isBackTop = ref<Boolean>(false)
const props = defineProps(['headerRef'])
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
  width: 100vw;
  height: 100vh;
  overflow: auto;

  .top {
    width: 100%;
    height: 450px;

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
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba($color: #000000, $alpha: .4);
        text-align: center;

        .context {
          margin-top: 200px;

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
        }
      }
    }

  }

  .story {
    padding: 100px 30px;
    box-sizing: border-box;

    .context {
      .left {
        h1 {
          font-size: 32px;
          color: #263238;
          font-weight: bold;
        }

        .line {
          width: 80px;
          height: 4px;
          background-color: #ff9800;
          margin: 30px 0;
        }

        p {
          font-size: 18px;
          margin-bottom: 20px;
          line-height: 26px;
          color: #607d8b;
        }

        .dataShow {
          display: flex;
          align-items: center;
          gap: 20px;

          .item {
            margin-top: 20px;
            display: flex;
            gap: 10px;

            .icon {
              width: 50px;
              height: 50px;
              background-color: #e8f3fc;
              border-radius: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .content {
              h2 {
                font-weight: bold;
                color: #263238;
              }

              p {
                font-size: 16px;
              }
            }
          }
        }
      }

      .right {
        width: 100%;
        height: 500px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          transition: all .5s;

          &:hover {
            transform: scale(1.01);
          }
        }
      }
    }
  }

  .wish {
    padding: 80px 30px;
    background-color: #f5f7fa;
    text-align: center;

    h1 {
      font-size: 32px;
      color: #263238;
      font-weight: bold;
    }

    .line {
      width: 80px;
      height: 4px;
      background-color: #ff9800;
      margin: 20px auto;
    }

    .desc {
      font-size: 16px;
      color: #607d8b;
    }

    .context {
      margin-top: 60px;
      text-align: left;

      .item {
        width: 100%;
        height: 100%;
        padding: 30px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba($color: #ccc, $alpha: .4);
        transition: all .5s;

        .icon {
          width: 60px;
          height: 60px;
          background-color: #e8f3fc;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        h2 {
          font-size: 20px;
          font-weight: bold;
          color: #263238;
          margin: 20px 0;
        }

        p {
          font-size: 17px;
          line-height: 24px;
          color: #607d8b;
        }

        ul {
          display: flex;
          flex-direction: column;
          gap: 10px;

          li {
            display: flex;
            gap: 10px;

            p {
              line-height: 17px;
            }
          }
        }

        &:hover {
          transform: translateY(-2%);
          box-shadow: 0 4px 8px #ccc;
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
