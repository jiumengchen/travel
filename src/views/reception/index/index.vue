<template>
  <div class="container" ref="boxRef">
    <div class="bg">
      <div class="mask">
        <div class="context">
          <div>
            <h1>发现世界的</h1>
            <h1>每一处精彩</h1>
            <p>探索精选目的地，体验独特文化，创造难忘回忆。我们为您提供最专业的旅行建议和最优惠的旅行套餐。</p>
            <div class="btn">
              <a-button type="primary" class="explorebtn">
                <div class="btnBox">
                  <p class="txt" @click="$router.push('/dest')">探索目的地</p>
                  <svg-icon name="right" fill="#fff" width="20px" height="20px"></svg-icon>
                </div>
              </a-button>
              <a-button type="primary" class="lmbtn" ghost>
                <div class="btnBox">
                  <p class="txt" style="color: #1677ff;">了解更多</p>
                </div>
              </a-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a-row align="center" style="background-color: #f5f7fa;">
      <a-col :span="18" class="searchBox">
        <h1 class="title">寻找您完美的旅程</h1>
        <a-form class="form">
          <a-form-item>
            <p>目的地</p>
            <a-input placeholder="您想去哪里?" style="height: 40px;">
              <template #prefix>
                <svg-icon name="position" fill="#6b7280"></svg-icon>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <p>日期</p>
            <a-date-picker style="width: 100%;height: 40px; padding-left: 30px;" :locale="locale" />
            <svg-icon name="date" fill="#6b7280" style="position: absolute;top: 52%;left: 3%;"></svg-icon>
          </a-form-item>
          <a-form-item>
            <p>旅客</p>
            <a-select size="large" placeholder="请选择"></a-select>
            <!-- <svg-icon name="date" fill="#6b7280" style="position: absolute;top: 52%;left: 3%;"></svg-icon> -->
          </a-form-item>
          <a-form-item>
            <p>&nbsp;</p>
            <a-button type="primary" style="width: 100%;height: 40px;w">搜索</a-button>
          </a-form-item>
        </a-form>
        <div class="hotSearchBox">
          <p>热门搜索:</p>
          <ul>
            <li>三亚</li>
            <li>北京</li>
            <li>上海</li>
            <li>成都</li>
            <li>西安</li>
            <li>杭州</li>
          </ul>
        </div>
      </a-col>
    </a-row>
    <a-row class="hotdestBox">
      <a-col :span="24">
        <h1 class="title">热门目的地</h1>
        <div class="describe">
          <p>发现旅行者最爱的目的地，从繁华都市到宁静乡村，从壮丽山川到蔚蓝海岸</p>
          <div class="lookAll">
            <p>查看全部</p>
            <svg-icon name="right" fill="#1677ff"></svg-icon>
          </div>
        </div>
        <a-row :gutter="[30, 30]" class="hotRecommend">
          <a-col :span="6" :xs="24" :md="12" :xl="6" v-for="item in recommendDestList" :key="item.id">
            <div class="item">
              <div class="imgBox">
                <img :src="item.cover" alt="">
                <div class="mask">
                  <a-tag color="#ec9008" class="tag">{{ item.tag }}</a-tag>
                  <h2>{{ item.name }}</h2>
                  <p class="address">{{ item.name }} · {{ item.attr_count }}个景点</p>
                </div>
              </div>
              <div class="context">
                <div class="star">
                  <svg-icon v-for="(_, index) in 5" :key="index" :name="getStarIconName(item.score, index)"
                    fill="#facc15"></svg-icon>
                  <p class="score">{{ item.score }} ({{ item.score_count }} 评价)</p>
                </div>
                <p class="introduce">{{ item.description }}</p>
              </div>
              <div class="goSearch" @click="toRouter('/destdetail', item.id)">
                <p>探索{{ item.name }}</p>
                <svg-icon name="right" fill="#1e88e5"></svg-icon>
              </div>
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <a-row class="tourismBox">
      <a-col :span="24">
        <h1 class="title">特色旅游套餐</h1>
        <p class="desc">精心策划的旅行套餐，满足您的不同需求，让旅行更加轻松愉快</p>
        <a-row class="context" :gutter="[30, 30]">
          <a-col :span="8" :xs="24" :lg="8" v-for="item in recommendDiscountList" :key="item.id">
            <div class="item">
              <div class="imgBox">
                <img :src="item.cover" alt="">
                <div class="mask">
                  <a-tag color="#ff9800" class="tag">{{ item.tag }}</a-tag>
                </div>
              </div>
              <div class="content">
                <div class="title">
                  <h2>{{ item.title }}</h2>
                  <a-tag color="#dcfce7" class="tag">4.8分</a-tag>
                </div>
                <p class="desci">{{ item.description }}</p>
                <div class="line"></div>
                <div class="date">
                  <div class="time">
                    <svg-icon name="date" fill="#4b5563"></svg-icon>
                    <p>{{ item.duration }}</p>
                  </div>
                  <div class="morePerson">
                    <svg-icon name="morePerson" fill="#4b5563"></svg-icon>
                    <p>最多{{ item.max_person }}人</p>
                  </div>
                </div>
                <div class="priceBox">
                  <div class="priceGroup">
                    <div class="realPrice">￥{{ item.cur_price }}</div>
                    <div class="disPrice">￥{{ item.pre_price }}</div>
                    <div class="subPrice">省￥{{ item.pre_price - item.cur_price }}</div>
                  </div>
                  <div class="goDetail" @click="toRouter('/discountdetail', item.id)">
                    查看详细
                  </div>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
        <div class="goAll">
          <p>查看全部套餐</p>
          <svg-icon name="right" fill="#1e88e5"></svg-icon>
        </div>
      </a-col>
    </a-row>
    <a-row class="strategyBox">
      <a-col :span="24">
        <h1>精选旅行攻略</h1>
        <div class="headerdesc">
          <p>来自资深旅行者的真实体验和实用建议，助您规划完美旅程</p>
          <div class="btn">
            <div class="pre" @mouseover="iconColor.pre = '#1e88e5'" @mouseleave="iconColor.pre = '#263238'">
              <svg-icon name="pre" :fill="iconColor.pre" width="20px" height="20px"></svg-icon>
            </div>
            <div class="next" @mouseover="iconColor.next = '#1e88e5'" @mouseleave="iconColor.next = '#263238'">
              <svg-icon name="next" :fill="iconColor.next" width="20px" height="20px"></svg-icon>
            </div>
          </div>
        </div>
        <a-row class="context" :gutter="[30, 30]">
          <a-col :span="6" v-for="item in recommendTravelList" :key="item.id">
            <div class="item">
              <div class="imgBox">
                <img :src="item.cover" alt="">
                <div class="mask">
                  <a-tag color="#ff9800" class="tag">{{ item.tag }}</a-tag>
                </div>
              </div>
              <div class="content">
                <h2 @click="toRouter('/traveltipdetail', item.id)">{{ item.title }}</h2>
                <p>{{ item.description }}</p>
                <div class="userBox">
                  <div class="userInfo">
                    <img :src="item.author.imgUrl" alt="">
                    <p>{{ item.author.name }}</p>
                  </div>
                  <div class="time">
                    <svg-icon name="clock"></svg-icon>
                    <p>{{ item.send_time }}</p>
                  </div>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <a-row class="evaluateBox">
      <a-col :span="24">
        <h1>旅行者的真实评价</h1>
        <p>听听已经和我们一起旅行的朋友们怎么说</p>
        <a-row class="context" :gutter="[30, 30]">
          <a-col :xs="24" :lg="8" v-for="item in recommendEvallList" :key="item.id">
            <div class="item">
              <div class="star">
                <svg-icon v-for="(_, index) in 5" :name="getStarIconName(item.score, index)" fill="#facc15"></svg-icon>
              </div>
              <p>"{{ item.content }}"</p>
              <div class="userinfo">
                <div class="imgBox">
                  <img :src="item.author.imgUrl" alt="">
                </div>
                <div class="info">
                  <div class="name">{{ item.author.name }}</div>
                  <div class="select">{{ item.eval_type }}</div>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
        <div class="lookAll">
          <p>查看更多评价</p>
          <svg-icon name="right" fill="#1e88e5"></svg-icon>
        </div>
      </a-col>
    </a-row>
    <a-row class="takeBox">
      <a-col :span="24">
        <div class="mask"></div>
        <div class="context">
          <h1>获取最新旅行灵感和独家优惠</h1>
          <p>订阅我们的电子邮件，率先获取季节性旅行建议、目的地指南和限时优惠信息</p>
          <a-form>
            <a-form-item>
              <div class="form">
                <a-input placeholder="请输入您的电子邮箱" class="inp"></a-input>
                <a-button type="primary" class="btn">立即订阅</a-button>
              </div>
            </a-form-item>
          </a-form>
          <p class="tip">我们尊重您的隐私，不会向第三方分享您的信息</p>
        </div>
      </a-col>
    </a-row>
    <footer-bar></footer-bar>
  </div>
  <div class="backTop" v-show="isBackTop" @click="backTop">
    <svg-icon name="toTop" fill="#fff" width="20px" height="20px"></svg-icon>
  </div>
</template>

<script setup lang="ts">
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
import FooterBar from '@/components/FooterBar/index.vue'
import { onMounted, ref, nextTick, onUnmounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ReqGetRecommendDestList } from '@/api/dest';
import { ReqGetRecommendDiscountList } from '@/api/discount';
import { ReqGetRecommendTravelList } from '@/api/traveltips';
import { ReqGetRecommendEvalList } from '@/api/eval';
const recommendDestList = ref<any[]>([]);
const recommendDiscountList = ref<any[]>([]);
const recommendTravelList = ref<any[]>([]);
const recommendEvallList = ref<any[]>([]);
const $route = useRoute();
const $router = useRouter();
const iconColor = ref({
  pre: '#263238',
  next: '#263238'
})
const isBackTop = ref<Boolean>(false)
const props = defineProps(['headerRef'])
const boxRef = ref<HTMLElement | null>(null)
const getRecommendDest = async () => {
  try {
    const result = await ReqGetRecommendDestList();
    recommendDestList.value = result.data;
  } catch (error) {
    console.log(error)
  }
}
const getRecommendDiscount = async () => {
  try {
    const result = await ReqGetRecommendDiscountList();
    recommendDiscountList.value = result.data;
  } catch (error) {
    console.log(error)
  }
}
const getRecommendTravel = async () => {
  try {
    const result = await ReqGetRecommendTravelList();
    recommendTravelList.value = result.data;
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
const toRouter = (url: string, id: number) => {
  $router.push({
    path: url,
    query: {
      id
    }
  })
}
const getRecommendEval = async () => {
  try {
    const result = await ReqGetRecommendEvalList();
    recommendEvallList.value = result.data;
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
const getStarIconName = (score: number, index: number) => {
  const current = index + 1;
  if (score >= current) return 'star1'
  else if (score > current - 1) {
    if (Math.round(score) >= score) return 'star2'
    else return 'star0'
  }
  else return 'star0'
}
onMounted(() => {
  boxRef.value?.scrollIntoView();
  getRecommendDest()
  getRecommendDiscount()
  getRecommendTravel()
  getRecommendEval();
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

  .bg {
    width: 100%;
    height: 100vh;
    background: url(../../../assets/images/index/index-bg.png) no-repeat;
    background-size: cover;
    overflow: hidden;
    position: relative;

    .mask {
      width: 100%;
      height: 100%;
      background-color: rgba($color: #000000, $alpha: 0.4);

      .context {
        width: 800px;
        height: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;

        div {
          h1 {
            font-size: 65px;
            font-weight: bold;
            margin: 20px 0;
          }

          p {
            font-size: 24px;
            color: #edf0f1;
            line-height: 40px;
          }

          .btn {
            margin-top: 50px;
            display: flex;
            align-items: center;
            gap: 30px;

            .explorebtn {
              height: 50px;
              border-radius: 50px;
              transition: all .4s;

              &:hover {
                transform: translateY(-5%);
                box-shadow: 0 8px 10px rgba($color: #000000, $alpha: 0.2);
              }
            }

            .lmbtn {
              height: 50px;
              border-radius: 50px;
              border: 1px solid #1677ff;
              background-color: #fff;
              transition: all .4s;

              &:hover {
                background-color: transparent;
                transform: translateY(-5%);
              }

            }

            .btnBox {
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 0 20px;

              .txt {
                font-size: 16px;
                margin-right: 10px;
              }
            }

          }
        }
      }

    }
  }

  .searchBox {
    transform: translateY(-28%);
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0 4px 10px rgba($color: #ccc, $alpha: .8);

    .title {
      text-align: center;
      font-size: 23px;
      font-weight: bold;
      color: #263238;
      margin: 40px 0;
    }

    .form {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 20px;
      align-content: center;

    }
  }

  .hotSearchBox {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;

    ul {
      display: flex;
      gap: 10px;
      margin-left: 10px;
      color: #1e88e5;

      li {
        cursor: pointer;

        &:hover {
          color: #4ba0ea;
        }
      }
    }
  }

  .hotdestBox {
    padding: 0 30px;
    background-color: #f5f7fa;

    .title {
      font-size: 45px;
      font-weight: bold;
      color: #263238;
    }

    .describe {
      width: 100%;
      margin: 20px 0;
      font-size: 18px;
      color: #4b5563;
      display: flex;
      justify-content: space-between;

      .lookAll {
        display: flex;
        gap: 10px;
        color: #1677ff;
        cursor: pointer;
        transition: all .5s;

        &:hover {
          transform: translateY(-5%);
        }
      }
    }
  }

  .hotRecommend {
    margin-top: 60px;
    // height: 500px;
    margin-bottom: 100px;

    .item {
      border-radius: 10px;
      width: 100%;
      height: 100%;
      box-shadow: 0 5px 10px rgba($color: #ccc, $alpha: .5);
      overflow: hidden;
      transition: all .5s;

      .imgBox {
        width: 100%;
        height: 250px;
        position: relative;
        overflow: hidden;

        img {
          border-radius: 10px 10px 0 0;
          width: 100%;
          height: 100%;
          transition: all .5s;
          object-fit: cover;
        }

        .mask {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          width: 100%;
          height: 100%;
          background-color: rgba($color: #000000, $alpha: .4);
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 20px 20px 0 0;
          padding: 20px;
          box-sizing: border-box;

          h2 {
            font-weight: bold;
            font-size: 24px;
            color: #fff;
          }

          .tag {
            width: 50px;
            text-align: center;
            margin-bottom: 10px;
            font-weight: bold;
          }

          .address {
            margin-top: 10px;
            color: #d2d4d5;
            font-size: 16px;
          }
        }
      }


      .context {
        padding: 20px;

        .star {
          display: flex;
          align-items: center;
          gap: 4px;

          .score {
            margin-left: 10px;
            color: #4b5563;
            font-size: 16px;
          }
        }

        .introduce {
          margin-top: 20px;
          font-size: 16px;
          color: #4b5563;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          overflow: hidden;
          line-height: 20px;
        }
      }

      &:hover img {
        transform: scale(1.1);
      }

      &:hover {
        transform: translateY(-2%);
        box-shadow: 0 6px 8px rgba($color: hsl(0, 0%, 80%), $alpha: 1.0);
      }
    }

    .goSearch {
      display: flex;
      padding: 0 20px;
      margin-bottom: 25px;
      cursor: pointer;

      p {
        color: #1e88e5;
        margin-right: 6px;
        font-size: 16px;
      }
    }
  }

  .tourismBox {
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;

    .title {
      text-align: center;
      font-weight: bold;
      font-size: 45px;
      color: #263238;
      padding: 40px 0 30px;
    }

    .desc {
      text-align: center;
      font-size: 18px;
      color: #4b5563;
    }

    .context {
      margin-top: 60px;
      // margin-bottom: 200px;

      .item {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        box-shadow: 0 6px 10px rgba($color: #ccc, $alpha: .5);
        transition: all .5s;

        .imgBox {
          width: 100%;
          height: 220px;
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
            padding: 20px;
            box-sizing: border-box;
            text-align: right;
            display: flex;
            justify-content: flex-end;

            .tag {
              display: flex;
              align-items: center;
              width: 50px;
              height: 25px;
              justify-content: center;
              border-radius: 20px;
              font-family: bold;
            }
          }
        }

        .content {
          padding: 0 20px;
          box-sizing: border-box;
          background-color: #f5f7fa;

          .title {
            display: flex;
            justify-content: space-between;
            align-items: center;

            h2 {
              font-size: 22px;
              font-weight: bold;
              color: #263238;
            }

            .tag {
              padding: 0 10px;
              color: #4caf72;
            }
          }

          .desci {
            font-size: 16px;
            line-height: 20px;
            color: #4b5563;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            overflow: hidden;
          }

          .line {
            width: 100%;
            height: 2px;
            background-color: #e5e7eb;
            margin: 20px 0;
          }

          .date {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .time {
              display: flex;
              align-items: center;
              gap: 8px;
              color: '#4b5563';
              font-size: 16px;
            }

            .morePerson {
              display: flex;
              align-items: center;
              gap: 8px;
              font-size: 16px;
              color: '#4b5563';
            }
          }

          .priceBox {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0 40px;
            box-sizing: border-box;

            .priceGroup {
              display: flex;
              align-items: center;
              gap: 10px;

              .realPrice {
                font-size: 30px;
                font-weight: bold;
                color: #1e88e5;
              }

              .disPrice {
                font-size: 18px;
                text-decoration: line-through;
                color: #6b7280;
              }

              .subPrice {
                color: #4caf50;
              }

            }
          }

          .goDetail {
            background-color: #dfecf8;
            color: #1e88e5;
            padding: 10px 20px;
            border-radius: 10px;
            font-size: 16px;
            cursor: pointer;

            &:hover {
              background-color: #cae1f6;
            }
          }
        }

        &:hover {
          transform: translateY(-2%);
          box-shadow: 0 6px 10px #ccc;
        }
      }
    }

    .goAll {
      width: 200px;
      color: #1e88e5;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #1e88e5;
      font-size: 18px;
      padding: 20px 0;
      border-radius: 50px;
      gap: 10px;
      margin: 0 auto;
      margin-top: 40px;
      margin-bottom: 60px;
      cursor: pointer;
      transition: all .5s;

      &:hover {
        box-shadow: 0 4px 8px #ccc;
        transform: translateY(-2%);
        background-color: #f4f9fe;
      }
    }
  }

  .strategyBox {
    padding: 0 30px;
    background-color: #f5f7fa;

    h1 {
      font-size: 45px;
      font-weight: bold;
      color: #263238;
      margin: 70px 0 10px;
    }

    .headerdesc {
      font-size: 18px;
      color: #4b5563;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;

      .btn {
        display: flex;
        align-items: center;
        gap: 20px;

        .pre {
          padding: 15px;
          border: 1px solid #d3d7dd;
          border-radius: 50%;
          cursor: pointer;

          &:hover {
            border-color: #1e88e5;
          }
        }

        .next {
          padding: 15px;
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
        height: 100%;
        box-shadow: 0 6px 10px rgba($color: #ccc, $alpha: .4);
        border-radius: 10px;
        transition: all .5s;
        background-color: #fff;

        .imgBox {
          width: 100%;
          height: 200px;
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
            border-radius: 10px 10px 0 0;
            padding: 20px;

            .tag {
              padding: 0 10px;
              border-radius: 20px;
            }
          }

        }

        &:hover {
          transform: translateY(-2%);
          box-shadow: 0 4px 8px #ccc;
        }
      }
    }

    .content {
      padding: 20px;

      h2 {
        color: #263238;
        font-weight: bold;
        margin-bottom: 10px;
        cursor: pointer;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &:hover {
          color: #1e88e5;
        }
      }

      p {
        font-size: 16px;
        line-height: 20px;
        color: #4b5563;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .userBox {
        margin: 20px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .userInfo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
          color: #4b5563;

          img {
            width: 30px;
            height: 30px;
            border-radius: 100%;
          }
        }

        .time {
          display: flex;
          align-items: center;
          gap: 5px;
        }
      }
    }
  }

  .evaluateBox {
    padding: 0 30px;
    box-sizing: border-box;

    h1 {
      text-align: center;
      font-size: 45px;
      color: #263238;
      font-weight: bold;
      margin: 70px 0 30px;
    }

    p {
      text-align: center;
      font-size: 18px;
      color: #4b5563;
    }

    .context {
      margin-top: 50px;

      .item {
        background-color: #f5f7fa;
        padding: 20px;
        box-sizing: border-box;
        box-shadow: 0 6px 10px rgba($color: #ccc, $alpha: .4);
        border-radius: 10px;
        transition: all .4s;

        p {
          display: block;
          width: 100%;
          // padding: 20px 0;
          margin: 20px 0;
          text-align: left;
          font-size: 16px;
          line-height: 25px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .userinfo {
          display: flex;
          align-items: center;
          gap: 10px;

          .imgBox {
            width: 50px;
            height: 50px;

            img {
              width: 100%;
              height: 100%;
              border-radius: 100%;
            }
          }

          .info {
            line-height: 20px;

            .name {
              font-size: 16px;
              font-weight: bold;
              color: #263238;
            }

            .select {
              font-size: 15px;
              color: #6b72a0;
            }
          }
        }

        &:hover {
          transform: translateY(-2%);
          box-shadow: 0 4px 8px #ccc;
        }
      }
    }

    .lookAll {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      cursor: pointer;
      margin: 40px 0 60px;

      p {
        font-size: 16px;
        color: #1e88e5;
      }
    }
  }

  .takeBox {
    background: url(../../../assets/images/index/index-takebg.png) no-repeat;
    background-size: cover;
    position: relative;

    .mask {
      width: 100%;
      height: 100%;
      background-color: rgba($color: #1e88e5, $alpha: .8);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    .context {
      position: relative;
      z-index: 2;
      text-align: center;
      padding: 80px 0;

      h1 {
        font-size: 40px;
        font-weight: bold;
        color: #fff;
      }

      p {
        color: #fff;
        font-size: 16px;
        padding: 30px 0 40px;
      }

      .form {
        .inp {
          width: 400px;
          height: 50px;
          margin-right: 10px;
        }

        .btn {
          height: 50px;
          font-size: 16px;
          padding: 0 20px;
          background-color: #ff9800;
          border-radius: 10px;

          &:hover {
            background-color: #e99716;
          }
        }
      }

      .tip {
        padding: 0;
        margin: 0;
        font-size: 15px;
        color: #a5d1f3;
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
