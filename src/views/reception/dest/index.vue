<template>
  <div class="container" ref="boxRef">
    <a-row class="header">
      <a-col :span="24">
        <div class="context">
          <h1>发现你的完美旅程</h1>
          <p>探索世界各地令人惊叹的目的地，找到专属于你的难忘旅行体验</p>
          <a-row align="center">
            <a-col :span="14" style="background-color: #fff;border-radius: 10px;">
              <a-row class="searchBox" :gutter="[10, 10]" align="center">
                <a-col :span="16">
                  <!-- <p style="font-size: 14px; color: #6b7280; margin: 0 0 5px; padding: 0;text-align: left;">目的地</p> -->
                  <a-input placeholder="您想去哪里?" style="height: 40px; border-radius: 50px;" v-model:value="destname">
                    <template #prefix>
                      <svg-icon name="position" fill="#6b7280"></svg-icon>
                    </template>
                  </a-input>
                </a-col>
                <!-- <a-col :span="6" style="position: relative;">
                  <p style="font-size: 14px; color: #6b7280; margin: 0 0 5px; padding: 0;text-align: left;">日期</p>
                  <a-date-picker style="width: 100%;height: 40px;padding-left: 30px;" :locale="locale">
                  </a-date-picker>
                  <svg-icon name="date" fill="#6b7280" width="14px" height="14px" class="dateIcon"></svg-icon>
                </a-col> -->
                <!-- <a-col :span="6" style="position: relative;">
                  <p style="font-size: 14px; color: #6b7280; margin: 0 0 5px; padding: 0;text-align: left;">旅客</p>
                  <a-select style="width: 100%; height: 40px;">
                    <a-select-option value="jack">我去这里</a-select-option>
                  </a-select>
                  <svg-icon name="morePerson" class="selcetIcon" fill="#6b7280" width="15px" height="15px"></svg-icon>
                </a-col> -->
                <a-col :span="4">
                  <!-- <p style="font-size: 14px; color: #6b7280; margin: 0 0 5px; padding: 0;text-align: left;">&nbsp;</p> -->
                  <a-button type="primary" style="width: 100%;height: 40px;border-radius: 50px;"
                    @click="searchDest">搜索</a-button>
                </a-col>
                <a-col :span="4">
                  <!-- <p style="font-size: 14px; color: #6b7280; margin: 0 0 5px; padding: 0;text-align: left;">&nbsp;</p> -->
                  <a-button style="width: 100%;height: 40px;border-radius: 50px" @click="resetDest">重置</a-button>
                </a-col>
              </a-row>
            </a-col>
          </a-row>
        </div>
      </a-col>
    </a-row>
    <a-row class="hotSearch">
      <a-col :span="24">
        <div class="context">
          <div class="title">热门搜索:</div>
          <ul>
            <li># 三亚</li>
            <li># 北京</li>
            <li># 上海</li>
            <li># 成都</li>
            <li># 广州</li>
            <li># 西安</li>
            <li># 杭州</li>
            <li># 更多</li>
          </ul>
        </div>
      </a-col>
    </a-row>
    <div class="hotDest">
      <!-- <div style="width: 100%;background-color: pink;">123</div> -->
      <a-row class="context" :gutter="[30, 30]">
        <a-col :span="5">
          <div class="left">
            <a-row class="filterBox">
              <a-col :span="24">
                <div class="title">
                  <svg-icon name="fillter" fill="#1e88e5"></svg-icon>
                  <h3>筛选条件</h3>
                </div>
                <div class="range">
                  <p>价格范围</p>
                  <a-slider :max="10000" v-model:value="price" style="width: 100%;" />
                  <ul class="price">
                    <li>￥0</li>
                    <li>￥{{ price }}</li>
                    <li>￥10000+</li>
                  </ul>
                </div>
                <div class="travelType">
                  <p>旅行类型</p>
                  <div class="checkbox">
                    <a-checkbox v-for="(item, index) in checkBoxList" :key="index">{{ item }}</a-checkbox>
                  </div>
                </div>
                <div class="season">
                  <p>季节推荐</p>
                  <a-row class="seasonBtn" :gutter="[10, 10]">
                    <a-col :span="12" v-for="item in seasonList" :key="item.id">
                      <div class="item" :class="{ active: item.flag }" @click="handleSeason(item.id)">{{ item.name }}
                      </div>
                    </a-col>
                  </a-row>
                </div>
                <div class="score">
                  <p>最低评分</p>
                  <div class="context">
                    <div class="item">
                      <div class="star">
                        <svg-icon :name="showStarValue >= index + 1 ? 'star1' : 'star0'" fill="#facc15"
                          v-for="(_, index) in starMax" @mouseover="showStarValue = index + 1" style="cursor: pointer;"
                          @mouseleave="showStarValue = starvalue"
                          @click="showStarValue = index + 1; starvalue = index + 1"></svg-icon>
                      </div>
                      <div class="txt">{{ showStarValue }}.0 及以上</div>
                    </div>
                  </div>
                </div>
                <a-button type="primary" size="large" style="width: 100%;margin-top: 20px;"
                  @click="applyfilter">应用筛选</a-button>
              </a-col>
            </a-row>
            <a-row class="tip">
              <div class="imgBox">
                <img src="../../../assets/images/dest/dest-tips.png" alt="">
              </div>
              <div class="context">
                <h2>旅行小贴士</h2>
                <ul>
                  <li>
                    <svg-icon name="yes" fill="#4caf50"></svg-icon>
                    <p>提前预订可节省高达30%的旅行费用</p>
                  </li>
                  <li>
                    <svg-icon name="yes" fill="#4caf50"></svg-icon>
                    <p>选择非旺季出行，体验更佳且价格更低</p>
                  </li>
                  <li>
                    <svg-icon name="yes" fill="#4caf50"></svg-icon>
                    <p>轻装旅行，携带必需品提高旅行舒适度</p>
                  </li>
                </ul>
                <div class="gomoretips">
                  <p>查看更多旅行贴士</p>
                  <svg-icon name="right" fill="#1e88e5"></svg-icon>
                </div>
              </div>
            </a-row>
          </div>
        </a-col>
        <a-col :span="19">
          <div class="right">
            <a-row class="top">
              <a-col :span="24">
                <div class="context">
                  <div class="des">
                    <h2>热门旅行目的地</h2>
                    <p>找到 <span>{{ destTotal }}</span> 个相关结果</p>
                  </div>
                  <div class="btn">
                    <a-select style="width: 140px;" v-model:value="sortValue" @change="handleSortType">
                      <a-select-option value="1">推荐排序</a-select-option>
                      <a-select-option value="2">价格由高到低</a-select-option>
                      <a-select-option value="3">评分由高到低</a-select-option>
                      <a-select-option value="4">价格由低到高</a-select-option>
                      <a-select-option value="5">评分由低到高</a-select-option>
                    </a-select>
                  </div>
                </div>
              </a-col>
            </a-row>
            <div class="empty" v-if="destTotal === 0">
              <a-empty description="未查询到相关目的地"></a-empty>
            </div>
            <a-row class="result" :gutter="[30, 30]">
              <a-col :span="8" v-for="item in destList" :key="item.id">
                <div class="item">
                  <div class="imgBox">
                    <img :src="item.cover" alt="">
                    <div class="mask">
                      <a-tag color="#ff9800">热门</a-tag>
                      <div class="collect">
                        <svg-icon :name="item.flag ? 'like-select' : 'like-noselect'" fill="#ef4444" width="18px"
                          height="18px" @mouseover="iconColor['like-noselect'] = '#ef4444'"
                          @mouseleave="iconColor['like-noselect'] = '#727884'" @click="handleLike(item.id)"></svg-icon>
                      </div>
                    </div>
                  </div>
                  <div class="context">
                    <div class="title">
                      <h2>{{ item.name }}</h2>
                      <div class="star">
                        <svg-icon name="star1" fill="#facc15"></svg-icon>
                        <p>{{ item.score }}</p>
                      </div>
                    </div>
                    <p class="desc">广东省 · {{ item.description }}</p>
                    <div class="tag">
                      <a-tag :color="value.color" v-for="value in item.tagList" :key="value.id">{{ value.name }}</a-tag>
                    </div>
                    <div class="line"></div>
                    <div class="price">
                      <p class="indo"><span>￥{{ item.price }}</span> /人起</p>
                      <a-button type="primary" class="btn">查看详情</a-button>
                    </div>
                  </div>
                </div>
              </a-col>
              <div class="bottom" v-show="isLoading != -1">
                <a-button type="primary" size="large" class="btn" @mouseover="iconColor.bottom = '#fff'"
                  @mouseleave="iconColor.bottom = '#1e88e5'" @click="getMoreData(123)">
                  <div style="display: flex; align-items: center;gap: 10px;" v-show="isLoading == 0">
                    <p>加载更多目的地</p>
                    <svg-icon name="bottom" :fill="iconColor.bottom" width="14px" height="14px"></svg-icon>
                  </div>
                  <div style="display: flex;align-items: center;gap: 10px;" v-show="isLoading == 1">
                    <a-spin size="small" />
                    <p>加载中. . .</p>
                  </div>
                </a-button>
              </div>
            </a-row>
          </div>
        </a-col>
      </a-row>
    </div>
    <a-row class="recommend">
      <a-col :span="24">
        <h1>为你推荐的旅行灵感</h1>
        <p class="des">发现热门旅行主题和精选目的地，开启你的下一段难忘旅程</p>
        <a-row class="box" :gutter="[30, 30]">
          <a-col :span="6" v-for="item in 4">
            <div class="item">
              <img src="../../../assets/images/dest/dest-img02.png" alt="">
              <div class="mask">
                <div class="context">
                  <h2>春季赏花</h2>
                  <p class="desc">探索最美花海秘境</p>
                  <div class="go">
                    <p>查看专题</p>
                    <svg-icon name="right" fill="#fff" class="svg"></svg-icon>
                  </div>
                </div>
              </div>
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
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
import ContactWe from '@/components/ContactWe/index.vue'
import FooterBar from '@/components/FooterBar/index.vue'
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import debounce from '@/utils/debounce';
import { ReqGetDestList } from '@/api/dest';
import { notification } from 'ant-design-vue';
const props = defineProps(['headerRef']);
const isBackTop = ref<boolean>(false);
const price = ref<number>(0);
const isLoading = ref<number>(0);
const boxRef = ref<HTMLElement | null>(null);
const destList = ref<any[]>([]);
const destTotal = ref<number>(0);
const currentPage = ref<number>(1);
const pageSize = ref<number>(6)
const showStarValue = ref(5);
const starvalue = ref(5)
const starMax = ref(5)
const sortValue = ref<string>('1')
const destname = ref<string>('');
const checkBoxList = ref([
  '自然风光',
  '城市观光',
  '历史文化',
  '美食之旅',
  '休闲度假',
  '探险体验'
])
const iconColor = ref({
  "like-noselect": '#727884',
  bottom: '#1e88e5'
})
const getMoreData = debounce(async () => {
  currentPage.value++;
  isLoading.value = 1;
  await getDestList({ flag: true })
  if (isLoading.value == 1) {
    isLoading.value = 0;
  }
})
const getDestList = async ({ flag = false, sortType = '1', keyword = '' } = {}) => {
  try {
    const result = await ReqGetDestList({ page: currentPage.value, pageSize: pageSize.value, sortType, keyword })
    if (!flag) {
      destList.value = result.data.list;
      destTotal.value = result.data.total
    } else {
      (result.data.list as any[]).forEach(item => {
        destList.value.push(item)
      })
    }
    if (destList.value.length >= destTotal.value) {
      isLoading.value = -1
    }
  } catch (error) {
    console.log(error)
  }
}

const searchDest = () => {
  if (destname.value.trim() === '') return notification.error({
    message: '提示',
    description: '搜索目的地关键词不能为空'
  })
  currentPage.value = 1;
  isLoading.value = 0;
  getDestList({ keyword: destname.value, sortType: sortValue.value })
}

const seasonList = ref<any[]>([
  {
    id: 1,
    name: '春季',
    flag: false
  },
  {
    id: 2,
    name: '夏季',
    flag: false
  },
  {
    id: 3,
    name: '秋季',
    flag: false
  },
  {
    id: 4,
    name: '冬季',
    flag: false
  }
])
const handleSeason = (id: number) => {
  const index = seasonList.value.findIndex(item => item.id === id);
  seasonList.value[index].flag = !seasonList.value[index].flag;
}
const handleLike = (id: number) => {
  const index = destList.value.findIndex(item => item.id === id);
  destList.value[index].flag = !destList.value[index].flag
}
const handleSortType = (e: any) => {
  currentPage.value = 1;
  isLoading.value = 0;
  getDestList({ sortType: e, keyword: destname.value })
}
const resetDest = () => {
  currentPage.value = 1;
  isLoading.value = 0;
  destname.value = ''
  getDestList({ sortType: sortValue.value })
}
const applyfilter = () => {
  console.log('筛选')
}
onMounted(() => {
  boxRef.value?.scrollIntoView();
  getDestList()
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
  overflow: auto;
  width: 100vw;
  height: 100vh;

  .header {
    height: 450px;
    background: url(../../../assets/images/dest/dest-bg.png) no-repeat;
    background-size: cover;
    // background-position: top 30px left 0;

    .context {
      width: 100%;
      height: 100%;
      background-color: rgba($color: #000000, $alpha: 0.4);
      position: absolute;
      z-index: 2;
      text-align: center;
      color: #fff;
      padding: 150px 0 20px;

      h1 {
        font-weight: bold;
        font-size: 60px;
      }

      p {
        padding: 20px 0;
        font-size: 22px;
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

  .hotSearch {
    padding: 30px;
    box-sizing: border-box;

    .context {
      width: 100%;
      display: flex;
      align-items: center;

      .title {
        margin-right: 20px;
        color: #6b7280;
      }

      ul {
        display: flex;
        align-items: center;
        gap: 20px;

        li {
          background-color: #f3f4f6;
          padding: 8px 10px;
          border-radius: 20px;
          color: #263238;
          cursor: pointer;

          &:hover {
            background-color: #e8f3fc;
            color: #1e88e5;
          }
        }
      }
    }
  }

  .hotDest {
    padding: 40px 30px;
    box-sizing: border-box;
    background-color: #f9fafb;

    .context {
      .left {
        width: 100%;

        .filterBox {
          padding: 20px;
          box-sizing: border-box;
          background-color: #fff;
          box-shadow: 0 4px 8px rgba($color: #ccc, $alpha: 0.4);
          border-radius: 10px;

          .title {
            display: flex;
            gap: 5px;

            h3 {
              font-weight: bold;
              color: #263238;
            }
          }

          .range {
            padding: 20px 0;
            font-weight: bold;
            color: #263238;
          }

          .price {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 10px;
            color: #858a96;
          }

          .travelType {
            font-weight: bold;

            .checkbox {
              display: flex;
              flex-direction: column;
              gap: 5px;
              color: #374151;
              font-weight: normal;
              margin: 10px 0;
            }
          }

          .season {
            margin-top: 20px;
            font-weight: bold;
            color: #263238;

            .seasonBtn {
              font-weight: normal;
              margin-top: 15px;

              .item {
                width: 100%;
                border: 1px solid #e5e7eb;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 40px;
                border-radius: 10px;
                color: #263238;
                cursor: pointer;

                &:hover {
                  border-color: #1e88e5;
                  color: #1e88e5;
                }

              }

              .active {
                background-color: #1677ff;
                color: #fff;

                &:hover {
                  background-color: #1677ff;
                  color: #fff;
                }
              }
            }
          }

          .score {
            font-weight: bold;
            margin-top: 20px;
            color: #263238;

            .context {
              font-weight: normal;
              margin-top: 10px;
              display: flex;
              flex-direction: column;
              gap: 5px;

              .item {
                display: flex;
                align-items: center;
                gap: 5px;
                color: #47505f;
              }
            }
          }
        }

        .tip {
          margin-top: 30px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba($color: #ccc, $alpha: 0.4);

          .imgBox {
            border-radius: 10px 10px 0 0;
            width: 100%;
            height: 130px;

            img {
              border-radius: 10px 10px 0 0;
              width: 100%;
              height: 100%;
            }
          }

          .context {
            padding: 30px 20px;

            h2 {
              font-weight: bold;
              font-size: 18px;
              color: #263238;
            }

            ul {
              margin: 10px 0;

              li {
                padding: 8px 0;
                display: flex;
                gap: 5px;
                font-size: 14px;
                color: #47505f;
              }
            }
          }

          .gomoretips {
            display: flex;
            color: #1e88e5;
            cursor: pointer;
            gap: 10px;
          }
        }

      }

      .right {
        display: flex;
        flex-direction: column;
        gap: 30px;
        height: 100%;

        .top {
          padding: 30px;
          box-shadow: 0 4px 8px rgba($color: #ccc, $alpha: 0.4);
          border-radius: 10px;
          background-color: #fff;

          .context {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .des {
              h2 {
                font-weight: bold;
                color: #263238;
                margin-bottom: 10px;
              }

              p {
                font-size: 16px;
                color: #7c838f;

                span {
                  color: #1e88e5;
                }
              }
            }
          }
        }

        .empty {
          background-color: #fff;
          box-shadow: 0 4px 8px rgba($color: #ccc, $alpha: 0.4);
          border-radius: 10px;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .result {
        .item {
          background-color: #fff;
          box-shadow: 0 4px 8px rgba($color: #ccc, $alpha: 0.4);
          border-radius: 10px;
          transition: all .5s;

          .imgBox {
            width: 100%;
            height: 200px;
            position: relative;
            border-radius: 10px 10px 0 0;
            overflow: hidden;

            img {
              width: 100%;
              height: 100%;
              border-radius: 10px 10px 0 0;
              transition: all .5s;
              object-fit: cover;

              &:hover {
                transform: scale(1.1);
              }
            }

            .mask {
              width: 100%;
              padding: 10px;
              box-sizing: border-box;
              display: flex;
              position: absolute;
              top: 0;
              left: 0;
              justify-content: space-between;
              align-items: center;

              .collect {
                width: 30px;
                height: 30px;
                background-color: #dadcd1;
                border-radius: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
              }
            }

          }

          .context {
            padding: 20px;
            color: #26323e;

            .title {
              display: flex;
              align-items: center;
              justify-content: space-between;

              h2 {
                font-weight: bold;
                font-size: 18px;

              }

              .star {
                display: flex;
                align-items: center;
                gap: 5px;
              }
            }

            .desc {
              font-size: 16px;
              color: #8d939d;
              padding: 15px 0;
            }

            .line {
              width: 100%;
              height: 2px;
              background-color: #f3f4f6;
              margin: 15px 0;
            }

            .price {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 10px;

              p {
                color: #6b7280;

                span {
                  font-size: 20px;
                  font-weight: bold;
                  color: #1e88e5;
                }
              }

              .btn {
                background-color: #e8f3fc;
                border: none;
                color: #1e88e5;

                &:hover {
                  background-color: #d2e7fa;
                }
              }
            }
          }

          &:hover {
            transform: translateY(-2%);
            box-shadow: 0px 5px 10px #ccc;
          }
        }

        .bottom {
          width: 100%;
          margin-top: 20px;
          display: flex;
          justify-content: center;

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

  .recommend {
    padding: 0 30px;

    h1 {
      text-align: center;
      font-size: 32px;
      color: #263238;
      font-weight: bold;
      padding: 70px 0 20px;
    }

    .des {
      font-size: 16px;
      color: #747a87;
      text-align: center;
    }

    .box {
      margin-top: 50px;

      .item {
        height: 250px;
        margin-bottom: 60px;
        border-radius: 10px;
        position: relative;
        transition: all .5s;
        cursor: pointer;
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
          background-color: rgba($color: #000000, $alpha: .2);
          padding: 20px;
          display: flex;
          align-items: flex-end;

          .context {
            color: #fff;

            h2 {
              font-weight: bold;
            }

            .desc {
              font-size: 15px;
              padding: 10px 0;
              color: #e0dde0;
            }

            .go {
              display: flex;
              gap: 5px;
              font-size: 16px;

              .svg {
                transition: all .5s;
              }
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
