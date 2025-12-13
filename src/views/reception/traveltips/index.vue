<template>
  <div class="container" ref="boxRef">
    <a-row class="top">
      <a-col :span="24" align="center">
        <div class="imgBox">
          <img src="../../../assets/images/traveltips/traveltips-bg.png" alt="">
          <div class="mask">
            <div class="context">
              <h1>发现世界的 <span>旅行攻略</span></h1>
              <p class="desc">精选全球热门目的地旅行指南，让你的旅程更加精彩难忘</p>
              <div class="inpBox">
                <a-input class="inp" placeholder="搜索目的地、攻略主题或旅行体验..." size="large" v-model:value="keyWord"></a-input>
                <div type="primary" class="btn" @click="search">
                  <svg-icon name="search" fill="#fff" width="18px" height="18px"></svg-icon>
                </div>
              </div>
              <ul>
                <li>
                  <svg-icon name="island" fill="#ff9800"></svg-icon>
                  <p>海岛度假</p>
                </li>
                <li>
                  <svg-icon name="mountain" fill="#4caf50"></svg-icon>
                  <p>登山徒步</p>
                </li>
                <li>
                  <svg-icon name="delicious" fill="#ef4444"></svg-icon>
                  <p>美食之旅</p>
                </li>
                <li>
                  <svg-icon name="camera" fill="#a855f7"></svg-icon>
                  <p>摄影之旅</p>
                </li>
                <li>
                  <svg-icon name="history" fill="#a16207"></svg-icon>
                  <p>文化古迹</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </a-col>
    </a-row>
    <a-row class="cate">
      <a-col :span="24">
        <h1>攻略分类</h1>
        <div class="desc">
          <p>根据你的旅行偏好，探索不同类型的旅行攻略</p>
          <div class="go">
            <p>查看全部</p>
            <svg-icon name="next" fill="#1e88e5"></svg-icon>
          </div>
        </div>
        <a-row class="cateItem" :gutter="[20, 20]">
          <a-col :span="4" v-for="item in 6">
            <div class="item">
              <div class="icon">
                <svg-icon name="camera" fill="#eab308" width="25px" height="25px"></svg-icon>
              </div>
              <p>摄影指南</p>
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <a-row class="hotDest">
      <a-col :span="24">
        <h1>热门目的地攻略</h1>
        <div class="desc">
          <p>精选全球热门旅行目的地的详细攻略</p>
          <div class="btn">
            <div class="pre" @mouseover="iconColor.pre = '#1e88e5'" @mouseleave="iconColor.pre = '#263238'">
              <svg-icon name="pre" :fill="iconColor.pre" width="15px" height="15px"></svg-icon>
            </div>
            <div class="next" @mouseover="iconColor.next = '#1e88e5'" @mouseleave="iconColor.next = '#263238'">
              <svg-icon name="next" :fill="iconColor.next" width="15px" height="15px"></svg-icon>
            </div>
          </div>
        </div>
        <a-row class="context" :gutter="[20, 20]">
          <a-col v-for="item in 4" :span="6">
            <div class="item">
              <div class="imgBox">
                <img src="../../../assets/images/dest/dest-img03.png" alt="">
                <div class="mask">
                  <div class="position">
                    <svg-icon name="position" fill="#ef4444"></svg-icon>
                    <p>法国</p>
                  </div>
                </div>
              </div>
              <div class="content">
                <h2>巴黎浪漫之旅</h2>
                <p class="txt">漫步塞纳河畔，参观卢浮宫，品尝法式美食，感受浪漫之都的独特魅力。</p>
                <div class="bottom">
                  <div class="left">
                    <div class="starBox">
                      <svg-icon name="star1" fill="#facc15"></svg-icon>
                      <svg-icon name="star1" fill="#facc15"></svg-icon>
                      <svg-icon name="star1" fill="#facc15"></svg-icon>
                      <svg-icon name="star1" fill="#facc15"></svg-icon>
                      <svg-icon name="star1" fill="#facc15"></svg-icon>
                    </div>
                    <p>4.9</p>
                  </div>
                  <div class="right">
                    <svg-icon name="clock" fill="#6b7280"></svg-icon>
                    <p>5天4晚</p>
                  </div>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <a-row class="guide">
      <a-col :span="24">
        <h1>精选旅行攻略</h1>
        <div class="desc">
          <p>由资深旅行达人精心撰写的实用攻略</p>
          <div class="go">
            <p>查看全部</p>
            <svg-icon name="next" fill="#1e88e5"></svg-icon>
          </div>
        </div>
        <a-row class="context" :gutter="[30, 30]">
          <a-col v-for="item in 3" :span="8">
            <div class="item">
              <div class="imgBox">
                <img src="../../../assets/images/dest/dest-img04.png" alt="">
                <div class="mask">
                  <a-tag color="#ff9800" class="tag">冬季旅行</a-tag>
                </div>
              </div>
              <div class="content">
                <div class="head">
                  <svg-icon name="date" fill="#6b7280"></svg-icon>
                  <p>2023-11-15</p>
                  <p>·</p>
                  <svg-icon name="user1" fill="#6b7280"></svg-icon>
                  <p>旅行者大人小李</p>
                </div>
                <h2>北海道冬季旅行全攻略：滑雪、温泉与美食</h2>
                <p class="txt">
                  北海道是冬季旅行的天堂，本文详细介绍了札幌、小樽、旭川等地的必游景点，滑雪场选择，温泉体验以及不可错过的北海道美食。从交通规划到住宿推荐，让你的北海道之旅完美无缺。
                </p>
                <div class="buttom">
                  <div class="left">
                    <svg-icon name="show" fill="#6b7280"></svg-icon>
                    <p>12.5k</p>
                    <svg-icon name="comment" fill="#6b7280"></svg-icon>
                    <p>86</p>
                    <svg-icon name="like-noselect" fill="#6b7280"></svg-icon>
                    <p>328</p>
                  </div>
                  <div class="right" @click="$router.push('/traveltipdetail')">
                    <p>阅读原文</p>
                  </div>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <a-row class="season">
      <a-col :span="24">
        <h1>按季节选择攻略</h1>
        <p class="desc">不同季节，不同风景，发现每个季节的旅行魅力</p>
        <a-row class="context" :gutter="[30, 30]">
          <a-col :span="6">
            <div class="item">
              <img src="../../../assets/images/dest/dest-img05.png" alt="">
              <div class="mask">
                <div class="icon">
                  <svg-icon name="spring" fill="#fff" width="25px" height="25px"></svg-icon>
                </div>
                <h2>春季旅行</h2>
                <p>春暖花开，踏青赏花的最佳时节</p>
                <div class="go">
                  <p>查看春季攻略</p>
                  <svg-icon name="right" fill="#fff" class="svg"></svg-icon>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :span="6">
            <div class="item">
              <img
                src="https://design.gemcoder.com/staticResource/echoAiSystemImages/af1cfc1898554118dcd1beeb114e7456.png"
                alt="">
              <div class="mask">
                <div class="icon" style="background-color: #3b82f6;">
                  <svg-icon name="summer" fill="#fff" width="25px" height="25px"></svg-icon>
                </div>
                <h2>夏季旅行</h2>
                <p>阳光沙滩，海岛度假的理想季节</p>
                <div class="go">
                  <p>查看夏季攻略</p>
                  <svg-icon name="right" fill="#fff" class="svg"></svg-icon>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :span="6">
            <div class="item">
              <img
                src="https://design.gemcoder.com/staticResource/echoAiSystemImages/07e7cb39d58bc7437f677522dc672540.png"
                alt="">
              <div class="mask">
                <div class="icon" style="background-color: #f97316;">
                  <svg-icon name="autumn" fill="#fff" width="25px" height="25px"></svg-icon>
                </div>
                <h2>秋季旅行</h2>
                <p>金秋时节，欣赏红叶与丰收美景</p>
                <div class="go">
                  <p>查看秋季攻略</p>
                  <svg-icon name="right" fill="#fff" class="svg"></svg-icon>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :span="6">
            <div class="item">
              <img
                src="https://design.gemcoder.com/staticResource/echoAiSystemImages/051f58eb20ca2faf15cc6cbd9bc49e77.png"
                alt="">
              <div class="mask">
                <div class="icon" style="background-color: #06b6d4;">
                  <svg-icon name="winter" fill="#fff" width="25px" height="25px"></svg-icon>
                </div>
                <h2>冬季旅行</h2>
                <p>银装素裹，滑雪泡汤的惬意时光</p>
                <div class="go">
                  <p>查看冬季攻略</p>
                  <svg-icon name="right" fill="#fff" class="svg"></svg-icon>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <a-row class="friend">
      <a-col :span="24">
        <h1>旅行达人推荐</h1>
        <div class="desc">
          <p>来自资深旅行博主的精选攻略</p>
          <div class="go">
            <p>关注更多达人</p>
            <svg-icon name="next" fill="#1e88e5"></svg-icon>
          </div>
        </div>
        <a-row class="context" :gutter="[30, 30]">
          <a-col v-for="item in 4" :span="6">
            <div class="item">
              <div class="imgBox">
                <img src="../../../assets/images/index/user-01.png" alt="" />
                <div class="yesSvg">
                  <svg-icon name="yes" fill="#22c55e" width="30px" height="30px"></svg-icon>
                </div>
              </div>
              <h3>环球旅行者</h3>
              <p>走过50+国家的旅行博主</p>
              <div class="tag">
                <a-tag color="#f3f4f6" class="tag">欧洲</a-tag>
                <a-tag color="#f3f4f6" class="tag">亚洲</a-tag>
                <a-tag color="#f3f4f6" class="tag">美洲</a-tag>
              </div>
              <a-button class="btn">关注</a-button>
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <a-row class="answer">
      <a-col :span="24">
        <h1>热门旅行问答</h1>
        <p class="desc">
          解答你旅行中的疑惑，让旅程更加顺利
        </p>
        <a-row align="center" style="margin-top: 30px;margin-bottom: 20px;">
          <a-col :span="12">
            <a-collapse collapsible="header" class="collapse" expandIconPosition="end">
              <a-collapse-panel key="1" header="第一次出国旅行需要准备哪些证件和材料？" class="item">
                <p>
                  第一次出国旅行需要准备的基本证件和材料包括：有效护照、签证（根据目的地国家要求）、机票预订确认单、酒店预订确认单、旅游保险单、紧急联系人信息、国际信用卡、少量当地货币现金等。部分国家还可能要求提供行程计划、资金证明或疫苗接种证明。建议出行前查阅目的地国家的入境要求，确保证件齐全有效。
                </p>
              </a-collapse-panel>
            </a-collapse>
          </a-col>
        </a-row>
        <a-row align="center" style="margin-bottom: 20px;">
          <a-col :span="12">
            <a-collapse collapsible="header" class="collapse" expandIconPosition="end">
              <a-collapse-panel key="1" header=" 如何在旅行中节省住宿费用？" class="item">
                <p>
                  节省住宿费用的方法有很多：提前预订并比较不同平台的价格、选择非旺季出行、考虑青年旅社或民宿、利用会员折扣或积分、选择交通便利但非市中心的住宿、与朋友合租公寓等。此外，关注酒店促销活动、使用价格比较工具、选择包含早餐的住宿也能帮助节省旅行开支。
                </p>
              </a-collapse-panel>
            </a-collapse>
          </a-col>
        </a-row>
        <a-row align="center" style="margin-bottom: 20px;">
          <a-col :span="12">
            <a-collapse collapsible="header" class="collapse" expandIconPosition="end">
              <a-collapse-panel key="1" header="如何在旅行中节省住宿费用？" class="item">
                <p>
                  旅行中保证财物安全的方法包括：使用防盗包或隐形腰包、避免随身携带大量现金、重要证件和现金分散存放、不将贵重物品留在酒店房间、使用酒店保险箱、在公共场所保持警惕、不轻易透露个人信息、注意ATM取款安全、购买旅行保险等。在人多拥挤的地方尤其要提高警惕，注意防范扒窃。
                </p>
              </a-collapse-panel>
            </a-collapse>
          </a-col>
        </a-row>
        <a-row align="center">
          <a-col :span="12">
            <a-collapse collapsible="header" class="collapse" expandIconPosition="end">
              <a-collapse-panel key="1" header="如何规划一条合理的旅行路线？" class="item">
                <p>
                  规划合理旅行路线需要考虑以下几点因素：旅行时间和预算、兴趣点和必游景点、交通便利性、地理位置的连贯性、季节和天气因素、体力和节奏安排等。建议先确定目的地和旅行主题，然后收集相关信息，列出感兴趣的景点和活动，根据地理位置和交通方式优化路线，避免走回头路，同时预留适当的休息时间和弹性空间。
                </p>
              </a-collapse-panel>
            </a-collapse>
          </a-col>
        </a-row>
        <a-button class="btn">
          <p>查看更多问答</p>
          <svg-icon name="right" fill="#fff"></svg-icon>
        </a-button>
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
import { useRouter } from 'vue-router';
const keyWord = ref('');
const boxRef = ref<HTMLElement | null>(null);
const isBackTop = ref<Boolean>(false)
const $router = useRouter();
const props = defineProps(['headerRef']);
const iconColor = ref({
  pre: '#263238',
  next: '#263238'
})

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
const search = () => {
  $router.push({
    path: '/searchtraveltips',
    query: {
      keyWord: keyWord.value
    }
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
    height: 450px;
    background-color: #eef3ff;

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
        background-color: rgba($color: #000000, $alpha: .15);

        .context {
          margin-top: 140px;

          h1 {
            font-size: 60px;
            font-weight: bold;
            color: #fff;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);

            span {
              color: #1e88e5;
            }
          }

          .desc {
            font-size: 20px;
            padding: 30px 0;
            color: #e5e9ec;
          }

          .inpBox {
            width: 700px;
            height: 50px;
            position: relative;

            .inp {
              width: 100%;
              height: 100%;
              border-radius: 50px;
              padding: 0 55px 0 20px;
            }

            .btn {
              border-radius: 100%;
              width: 40px;
              height: 40px;
              background-color: #1e88e5;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);

              &:hover {
                background-color: #3494e8;
              }
            }
          }

          ul {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 20px;
            gap: 10px;

            li {
              font-size: 16px;
              display: flex;
              align-items: center;
              gap: 5px;
              background-color: #fff;
              padding: 5px 15px;
              border-radius: 60px;
              box-shadow: 0 4px 8px rgba($color: #ccc, $alpha: .4);
              cursor: pointer;
              transition: all .5s;

              &:hover {
                box-shadow: 0 6px 10px #ccc;
              }

              p {
                font-size: 14px;
                color: #263238;
              }
            }
          }
        }
      }
    }
  }

  .cate {
    padding: 0 30px;

    h1 {
      font-weight: bold;
      font-size: 32px;
      color: #263238;
      margin-top: 60px;
    }

    .desc {
      padding: 15px 0;
      font-size: 16px;
      color: #59626f;
      display: flex;
      justify-content: space-between;

      .go {
        display: flex;
        gap: 5px;
        color: #1e88e5;
        cursor: pointer;
        border-bottom: 2px solid transparent;

        &:hover {
          border-bottom: 2px solid #1e88e5;
        }
      }
    }

    .cateItem {
      height: 150px;
      margin: 40px 0;

      .item {
        width: 100%;
        height: 100%;
        background-color: #f9fafb;
        border-radius: 10px;
        transition: all .5s;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .icon {
          width: 60px;
          height: 60px;
          background-color: #fef9c3;
          border-radius: 100%;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        p {
          font-size: 16px;
          color: #263238;
        }

        &:hover {
          transform: translateY(-2%);
          box-shadow: 0 4px 8px #ccc;
        }
      }
    }
  }

  .hotDest {
    padding: 0 30px;
    background-color: #f9fafb;

    h1 {
      font-weight: bold;
      font-size: 32px;
      color: #263238;
      margin-top: 60px;
    }

    .desc {
      padding: 15px 0;
      font-size: 16px;
      color: #59626f;
      display: flex;
      justify-content: space-between;

      .btn {
        display: flex;
        align-items: center;
        gap: 20px;

        .pre {
          padding: 12px;
          border: 1px solid #d3d7dd;
          border-radius: 50%;
          cursor: pointer;

          &:hover {
            border-color: #1e88e5;
          }
        }

        .next {
          padding: 12px;
          border: 1px solid #d3d7dd;
          border-radius: 100%;
          cursor: pointer;

          &:hover {
            border-color: #1e88e5;
          }
        }
      }
    }

    .context {
      margin-bottom: 60px;

      .item {
        width: 100%;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba($color: #ccc, $alpha: .4);
        background-color: #fff;
        cursor: pointer;
        transition: all .5s;

        .imgBox {
          width: 100%;
          height: 180px;
          position: relative;
          border-radius: 10px 10px 0 0;

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
            padding: 10px;

            .position {
              display: flex;
              align-items: center;
              gap: 4px;
              background-color: #fff;
              width: 60px;
              justify-content: center;
              border-radius: 60px;
              padding: 3px 0;

              p {
                font-size: 12px;
              }
            }
          }
        }

        .content {
          padding: 20px;
          color: #263238;

          h2 {
            font-weight: bold;
            font-size: 20px;
          }

          .txt {
            padding: 10px 0;
            font-size: 14px;
            color: #6b7280;
          }

          .bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 0;

            .left {
              display: flex;
              gap: 5px;
              align-items: center;

              .starBox {
                display: flex;
                align-items: center;
                gap: 2px;
              }

              p {
                color: #6b7280;
              }

            }

            .right {
              display: flex;
              align-items: center;
              gap: 5px;

              p {
                color: #6b7280;
              }
            }
          }
        }

        &:hover {
          transform: translateY(-2%);
          box-shadow: 0 6px 10px #ccc;
        }
      }
    }
  }

  .guide {
    padding: 0 30px;

    h1 {
      font-weight: bold;
      font-size: 32px;
      color: #263238;
      margin-top: 60px;
    }

    .desc {
      padding: 15px 0;
      font-size: 16px;
      color: #59626f;
      display: flex;
      justify-content: space-between;

      .go {
        display: flex;
        gap: 5px;
        color: #1e88e5;
        cursor: pointer;
        border-bottom: 2px solid transparent;

        &:hover {
          border-bottom: 2px solid #1e88e5;
        }
      }
    }

    .context {
      .item {
        margin-top: 30px;
        margin-bottom: 60px;
        width: 100%;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba($color: #ccc, $alpha: .4);
        transition: all .5s;

        .imgBox {
          width: 100%;
          height: 220px;
          position: relative;
          border-radius: 10px 10px 0 0;

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
            padding: 10px;

            .tag {
              border-radius: 50px;
              font-size: 12px;
            }
          }
        }

        .content {
          padding: 20px;
          color: #263238;

          .head {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          h2 {
            font-weight: bold;
            padding: 15px 0;
            font-size: 20px
          }

          .txt {
            font-size: 14px;
            color: #6b7280;
            line-height: 20px;
          }

          .buttom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 0;

            .left {
              display: flex;
              gap: 10px;
              color: #6d7482;

            }

            .right {
              color: #1e88e5;
              cursor: pointer;
              font-size: 16px;

              &:hover {
                text-decoration: underline;
              }
            }
          }

        }

        &:hover {
          transform: translateY(-2%);
          box-shadow: 0 6px 10px #ccc;
        }
      }
    }
  }

  .season {
    padding: 0 30px;
    background-color: #f9fafb;

    h1 {
      font-weight: bold;
      font-size: 32px;
      color: #263238;
      margin-top: 60px;
      text-align: center;
    }

    .desc {
      padding: 15px 0;
      font-size: 16px;
      color: #59626f;
      text-align: center;
    }

    .context {
      margin-top: 30px;

      .item {
        width: 100%;
        height: 250px;
        border-radius: 10px;
        position: relative;
        margin-bottom: 60px;
        cursor: pointer;
        transition: all .5s;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          transition: all .5s;
        }

        .mask {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          position: absolute;
          top: 0;
          left: 0;
          padding: 20px;
          color: #fff;
          background-color: rgba($color: #000000, $alpha: .2);
          display: flex;
          flex-direction: column;
          gap: 10px;
          justify-content: flex-end;

          .icon {
            width: 50px;
            height: 50px;
            border-radius: 100%;
            background-color: #22c55e;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          h2 {
            font-weight: bold;
          }

          p {
            color: #cfcecd;
            font-size: 14px;
          }

          .go {
            display: flex;
            gap: 5px;
            padding: 5px 0;

            .svg {
              transition: all .5s;
            }

            p {
              color: #fff;
            }
          }
        }

        &:hover {
          transform: translateY(-2%);
          box-shadow: 0 6px 10px #ccc;
        }

        &:hover img {
          transform: scale(1.1);
        }

        &:hover .svg {
          margin-left: 5px;
        }
      }
    }
  }

  .friend {
    padding: 0 30px;

    h1 {
      font-weight: bold;
      font-size: 32px;
      color: #263238;
      margin-top: 60px;
    }

    .desc {
      padding: 15px 0;
      font-size: 16px;
      color: #59626f;
      display: flex;
      justify-content: space-between;

      .go {
        display: flex;
        gap: 5px;
        color: #1e88e5;
        cursor: pointer;
        border-bottom: 2px solid transparent;

        &:hover {
          border-bottom: 2px solid #1e88e5;
        }
      }
    }

    .context {
      .item {
        width: 100%;
        text-align: center;
        color: #263238;
        margin-top: 30px;
        margin-bottom: 60px;

        .imgBox {
          width: 100px;
          height: 100px;
          border-radius: 100%;
          margin: 0 auto;
          position: relative;
          border: 3px solid #fff;
          box-shadow: 0 4px 8px #ccc;

          img {
            width: 100%;
            height: 100%;
            border-radius: 100%;
          }

          .yesSvg {
            margin: 0;
            padding: 0;
            width: 35px;
            height: 35px;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: 4px;
            padding-top: 1px;
            border-radius: 100%;
            position: absolute;
            bottom: 0;
            right: 0;
          }
        }

        h3 {
          margin-top: 20px;
          font-weight: bold;
          font-size: 20px;
        }

        p {
          padding: 10px 0;
          color: #6b7280;
        }

        .tag {
          border-radius: 10px;
          color: #263238;
        }

        .btn {
          margin-top: 10px;
          width: 100%;
          border-radius: 50px;
          border: 1px solid #1e88e5;
          color: #1e88e5;

          &:hover {
            background-color: #1e88e5;
            color: #fff;
          }
        }
      }
    }
  }

  .answer {
    padding: 0 30px;
    background-color: #f9fafb;


    h1 {
      font-weight: bold;
      font-size: 32px;
      color: #263238;
      margin-top: 60px;
      text-align: center;
    }

    .desc {
      padding: 15px 0;
      font-size: 16px;
      color: #59626f;
      text-align: center;
    }

    .collapse {
      background-color: #fff;
      border: 0;
      color: #263238;

      .item {
        border: 0;
        box-shadow: 0 6px 10px rgba($color: #ccc, $alpha: .2);

        p {
          color: #4b5563;

        }
      }
    }

    .btn {
      display: flex;
      align-items: center;
      margin: 0 auto;
      margin-top: 30px;
      margin-bottom: 60px;
      padding: 20px;
      gap: 5px;
      color: #fff;
      background-color: #1e88e5;
      border-radius: 50px;

      &:hover {
        background-color: #3394e8;
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
