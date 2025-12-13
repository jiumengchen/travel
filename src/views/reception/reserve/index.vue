<template>
  <div class="container">
    <div style="padding: 0 40px;">
      <div class="header">
        <h1>智能旅行预定</h1>
        <a-tabs v-model:activeKey="activeKey" class="tab" @change="searchKeyWord = ''">
          <a-tab-pane key="1">
            <template #tab>
              <span>
                <apple-outlined />
                酒店
              </span>
            </template>
            <a-form class="form">
              <a-form-item>
                <p>目的地</p>
                <div class="inp">
                  <a-input placeholder="城市/区域/酒店名称" size="large" class="position" v-model:value="searchKeyWord">
                  </a-input>
                  <svg-icon name="position" fill="#6b7280" width="20px" height="20px" class="icon"></svg-icon>
                </div>
              </a-form-item>
              <a-form-item>
                <p>入住日期</p>
                <div class="inp">
                  <a-date-picker style="width: 100%;padding-left: 40px;" size="large" :locale="locale" />
                  <svg-icon name="date" fill="#6b7280" width="16px" height="16px" class="icon"
                    style="left: 12px;top: 12px;"></svg-icon>
                </div>
              </a-form-item>
              <a-form-item>
                <p>离店日期</p>
                <div class="inp">
                  <a-date-picker style="width: 100%;padding-left: 40px;" size="large" :locale="locale" />
                  <svg-icon name="date" fill="#6b7280" width="16px" height="16px" class="icon"
                    style="left: 12px;top: 12px;"></svg-icon>
                </div>
              </a-form-item>
              <a-form-item>
                <p>客人</p>
                <div class="inp">
                  <a-select size="large">
                    <a-select-option value="jack">Jack</a-select-option>
                  </a-select>
                  <svg-icon name="user" fill="#6b7280" width="20px" height="20px" class="icon"></svg-icon>
                </div>
              </a-form-item>
            </a-form>
            <div style="display: flex; justify-content: flex-end;gap: 10px;">
              <a-button size="large" style="display: flex; align-items: center;gap: 10px;" v-show="isSearch"
                @click="reset">
                <!-- <svg-icon name="search" fill="#fff" width="18px" height="18px"></svg-icon> -->
                重置
              </a-button>
              <a-button type="primary" size="large" style="display: flex; align-items: center;gap: 10px;"
                @click="search('hotel')">
                <svg-icon name="search" fill="#fff" width="18px" height="18px"></svg-icon>
                搜索酒店
              </a-button>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2" tab="景区门票" force-render>
            <a-form class="form" style="grid-template-columns: repeat(3,1fr);">
              <a-form-item>
                <p>景区名称/地点</p>
                <div class="inp">
                  <a-input placeholder="搜索景区/城市" size="large" class="position" v-model:value="searchKeyWord">
                  </a-input>
                  <svg-icon name="position" fill="#6b7280" width="20px" height="20px" class="icon"></svg-icon>
                </div>
              </a-form-item>
              <a-form-item>
                <p>游玩日期</p>
                <div class="inp">
                  <a-date-picker style="width: 100%;padding-left: 40px;" size="large" :locale="locale" />
                  <svg-icon name="date" fill="#6b7280" width="16px" height="16px" class="icon"
                    style="left: 12px;top: 12px;"></svg-icon>
                </div>
              </a-form-item>
              <a-form-item>
                <p>游客信息</p>
                <div class="inp">
                  <a-select size="large">
                    <a-select-option value="jack">Jack</a-select-option>
                  </a-select>
                  <svg-icon name="user" fill="#6b7280" width="20px" height="20px" class="icon"></svg-icon>
                </div>
              </a-form-item>
            </a-form>
            <div style="display: flex; justify-content: flex-end;gap: 10px;">
              <a-button size="large" style="display: flex; align-items: center;gap: 10px;" v-show="isSearch"
                @click="reset">
                <!-- <svg-icon name="search" fill="#fff" width="18px" height="18px"></svg-icon> -->
                重置
              </a-button>
              <a-button type="primary" size="large" style="display: flex; align-items: center;gap: 10px;"
                @click="search('attr')">
                <svg-icon name="search" fill="#fff" width="18px" height="18px"></svg-icon>
                搜索景区门票
              </a-button>
            </div>
          </a-tab-pane>
          <a-tab-pane key="3" tab="旅游团">
            <a-form class="form" style="grid-template-columns: repeat(3,1fr);">
              <a-form-item>
                <p>目的地</p>
                <div class="inp">
                  <a-input placeholder="搜索目的地" size="large" class="position" v-model:value="searchKeyWord">
                  </a-input>
                  <svg-icon name="position" fill="#6b7280" width="20px" height="20px" class="icon"></svg-icon>
                </div>
              </a-form-item>
              <a-form-item>
                <p>出发日期</p>
                <div class="inp">
                  <a-date-picker style="width: 100%;padding-left: 40px;" size="large" :locale="locale" />
                  <svg-icon name="date" fill="#6b7280" width="16px" height="16px" class="icon"
                    style="left: 12px;top: 12px;"></svg-icon>
                </div>
              </a-form-item>
              <a-form-item>
                <p>行程天数</p>
                <div class="inp">
                  <a-select size="large">
                    <a-select-option value="jack">Jack</a-select-option>
                  </a-select>
                  <svg-icon name="user" fill="#6b7280" width="20px" height="20px" class="icon"></svg-icon>
                </div>
              </a-form-item>
            </a-form>
            <div style="display: flex; justify-content: flex-end;gap: 10px;">
              <a-button size="large" style="display: flex; align-items: center;gap: 10px;" v-show="isSearch"
                @click="reset">
                <!-- <svg-icon name="search" fill="#fff" width="18px" height="18px"></svg-icon> -->
                重置
              </a-button>
              <a-button type="primary" size="large" style="display: flex; align-items: center;gap: 10px;"
                @click="search('tour')">
                <svg-icon name="search" fill="#fff" width="18px" height="18px"></svg-icon>
                搜索旅游团
              </a-button>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
      <div v-show="isInit">
        <div class="hot-dest">
          <h3>热门目的地</h3>
          <a-row :gutter="[20, 20]" class="hot-main">
            <a-col :xs="{ span: 12 }" :md="{ span: 8 }" :lg="{ span: 6 }" :xl="{ span: 4 }">
              <div class="item">
                <img
                  src="https://design.gemcoder.com/staticResource/echoAiSystemImages/003f3fd7a38069d9ade0bc5fa386c9b6.png"
                  alt="">
                <div class="hot-mask">北京</div>
              </div>
            </a-col>
            <a-col :xs="{ span: 12 }" :md="{ span: 8 }" :lg="{ span: 6 }" :xl="{ span: 4 }">
              <div class="item">
                <img
                  src="https://design.gemcoder.com/staticResource/echoAiSystemImages/b515c6c7eba314cfdc2e690c701d677b.png"
                  alt="">
                <div class="hot-mask">上海</div>
              </div>
            </a-col>
            <a-col :xs="{ span: 12 }" :md="{ span: 8 }" :lg="{ span: 6 }" :xl="{ span: 4 }">
              <div class="item">
                <img
                  src="https://design.gemcoder.com/staticResource/echoAiSystemImages/fa814d35727753bde3472eb79c551c9f.png"
                  alt="">
                <div class="hot-mask">广州</div>
              </div>
            </a-col>
            <a-col :xs="{ span: 12 }" :md="{ span: 8 }" :lg="{ span: 6 }" :xl="{ span: 4 }">
              <div class="item">
                <img
                  src="https://design.gemcoder.com/staticResource/echoAiSystemImages/c16f72c3f7d4fd9b161edc6f9aab4a19.png"
                  alt="">
                <div class="hot-mask">三亚</div>
              </div>
            </a-col>
            <a-col :xs="{ span: 12 }" :md="{ span: 8 }" :lg="{ span: 6 }" :xl="{ span: 4 }">
              <div class="item">
                <img
                  src="https://design.gemcoder.com/staticResource/echoAiSystemImages/06a8fc9b80793d8f09b0eda773a1a0d7.png"
                  alt="">
                <div class="hot-mask">成都</div>
              </div>
            </a-col>
            <a-col :xs="{ span: 12 }" :md="{ span: 8 }" :lg="{ span: 6 }" :xl="{ span: 4 }">
              <div class="item">
                <img
                  src="https://design.gemcoder.com/staticResource/echoAiSystemImages/178d034a38e9f2cd21d0c645e07793f1.png"
                  alt="">
                <div class="hot-mask">杭州</div>
              </div>
            </a-col>
          </a-row>
        </div>
        <div class="hotel">
          <h3>推荐酒店</h3>
          <a-row class="hotel-main" :gutter="[30, 30]">
            <a-col :xs="{ span: 24 }" :lg="{ span: 12 }" v-for="item in 4">
              <a-row class="item">
                <a-col :span="9">
                  <div class="item-img">
                    <img
                      src="https://design.gemcoder.com/staticResource/echoAiSystemImages/2a5c311196b10a36acfe17a1b4e82743.png"
                      alt="">
                    <div class="item-img-mask">
                      <div class="tag">推荐</div>
                      <div class="like">
                        <svg-icon name="like-noselect" fill="#f53f3f" width="18px" height="18px"></svg-icon>
                      </div>
                    </div>
                  </div>
                </a-col>
                <a-col :span="15">
                  <div class="item-info">
                    <div class="info-header">
                      <h3>云端度假酒店</h3>
                      <div class="score">
                        <p>4.8</p>
                        <svg-icon name="star1" fill="#facc15" width="18px" height="18px"></svg-icon>
                      </div>
                    </div>
                    <div class="position">
                      <svg-icon name="position" fill="#4e5969" width="18px" height="18px"></svg-icon>
                      <p>三亚湾旅游度假区，近海滩</p>
                    </div>
                    <div class="tag">
                      <div class="tag-item active">
                        海景房
                      </div>
                      <div class="tag-item">免费WiFi</div>
                      <div class="tag-item">游泳池</div>
                      <div class="tag-item">健身房</div>
                    </div>
                    <div class="content">
                      位于三亚湾核心区域，步行5分钟即可到达海滩。酒店拥有豪华海景房、室外游泳池和健身中心，提供免费接送服务。
                    </div>
                    <div class="price">
                      <div class="left">
                        <p class="cur-price">¥1,299</p>
                        <p class="discount-price">¥1,599</p>
                      </div>
                      <a-button type="primary">查看详情</a-button>
                    </div>
                  </div>
                </a-col>
              </a-row>
            </a-col>
          </a-row>
        </div>
        <div class="hot-trave">
          <h3>热门旅游团</h3>
          <a-row class="trave-main" :gutter="[30, 30]">
            <a-col :span="8" v-for="item in 3">
              <div class="item">
                <div class="item-img">
                  <img
                    src="https://design.gemcoder.com/staticResource/echoAiSystemImages/a90ed06ed1c4287c78ec9f59a000f19a.png"
                    alt="">
                  <div class="item-img-mask">
                    <div class="left">热销</div>
                    <div class="right">5天4晚</div>
                  </div>
                </div>
                <div class="item-info">
                  <h3>桂林山水假天下</h3>
                  <div class="position">
                    <svg-icon name="position" fill="#4e5969" width="18px" height="18px"></svg-icon>
                    <p>桂林、阳朔、漓江</p>
                  </div>
                  <div class="star">
                    <div class="person">
                      <svg-icon name="morePerson" fill="#4e5969" width="18px" height="18px"></svg-icon>
                      <p>20人小团</p>
                    </div>
                    <div class="cur-star">
                      <svg-icon name="star1" fill="#facc15" width="18px" height="18px"></svg-icon>
                      <p>4.8分(238人评价)</p>
                    </div>
                  </div>
                  <div class="content">游览桂林经典景点，乘坐漓江竹筏，欣赏阳朔山水，体验遇龙河漂流，品尝桂林特色美食。</div>
                  <div class="bottom">
                    <div class="price">
                      <p class="cur-price">¥2,699</p>
                      <p class="desc">/人起</p>
                    </div>
                    <a-button type="primary">查看行程</a-button>
                  </div>
                </div>
              </div>
            </a-col>
          </a-row>
        </div>
        <div class="quest">
          <h3>常见问题</h3>
          <div class="quest-main">
            <a-collapse v-model:activeKey="activeCollapse" class="collapse">
              <a-collapse-panel key="1" header=" 如何修改或取消预订？">
                <p>您可以在"我的订单"中找到相应的预订，点击"修改"或"取消"按钮进行操作。不同类型的产品取消政策不同，具体以订单详情页显示的取消政策为准。如需帮助，可联系客服热线400-123-4567。</p>
              </a-collapse-panel>
              <a-collapse-panel key="2" header="预订后多久能收到确认信息？">
                <p>一般情况下，在线支付完成后10分钟内会收到预订确认短信和邮件。特殊情况（如节假日、房源紧张等）可能需要较长时间，最长不超过24小时。如未收到确认信息，请检查垃圾邮件或联系客服查询。</p>
              </a-collapse-panel>
              <a-collapse-panel key="3" header="旅游团包含哪些费用？">
                <p>
                  旅游团费用通常包含：交通（根据产品描述，可能包含往返机票、火车票或当地交通）、住宿、行程中所列景点门票、导游服务、部分餐饮。不包含：个人消费、自费项目、旅游保险（可选购买）、因不可抗力产生的额外费用等。具体包含内容请查看产品详情页。
                </p>
              </a-collapse-panel>
              <a-collapse-panel key="4" header="如何申请发票？">
                <p>
                  您可以在"我的订单"中找到已完成的订单，点击"申请发票"按钮，填写发票信息。电子发票将在申请后24小时内发送至您的邮箱，纸质发票将在3-5个工作日内寄出。请注意，部分产品可能不支持开发票，具体以订单详情页为准。
                </p>
              </a-collapse-panel>
              <a-collapse-panel key="5" header="酒店预订可以指定房型吗？">
                <p>您可以在预订时选择房型偏好（如大床/双床、无烟房等），我们会尽量满足您的需求，但不能保证一定能安排。具体房型以酒店实际安排为准。如需确保特定房型，建议选择"可指定房型"的产品或直接联系酒店确认。</p>
              </a-collapse-panel>
            </a-collapse>
          </div>
        </div>
      </div>
      <div class="search-result" v-show="isSearch">
        <p class="top">找到24个结果，{{ showSearchText }}</p>
        <div class="main">
          <div class="item" v-for="item in 6">
            <div class="img-box">
              <img
                src="https://design.gemcoder.com/staticResource/echoAiSystemImages/e7900c693ca5380b41cb6eddd270bed6.png"
                alt="">
              <div class="mask">
                <div class="tag">热门</div>
                <div class="like">
                  <svg-icon name="like-noselect" fill="#4b597b" width="18px" height="18px"></svg-icon>
                </div>
              </div>
            </div>
            <div class="info">
              <div class="info-header">
                <h3>故宫博物院</h3>
                <div class="score">
                  4.8分
                </div>
              </div>
              <div class="info-desc">
                北京故宫博物院是中国明清两代的皇家宫殿，世界文化遗产，国家5A级旅游景区。
              </div>
              <div class="position">
                <svg-icon name="position" fill="#6b7280"></svg-icon>
                <p>北京市东城区景山前街4号</p>
              </div>
              <div class="bottom">
                <div class="price">
                  <div class="cur-price">￥60</div>
                  <div class="pre-price">￥80</div>
                </div>
                <div class="btn">查看详情</div>
              </div>
            </div>
          </div>
        </div>
        <div class="page"><a-pagination v-model:current="currentPage" :total="50" show-less-items pageSize="6"
            style="margin: 0 auto;" />
        </div>
      </div>
    </div>
    <ContactWe></ContactWe>
    <FooterBar></FooterBar>
  </div>
</template>

<script setup lang="ts">
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
import ContactWe from '@/components/ContactWe/index.vue'
import FooterBar from '@/components/FooterBar/index.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import { message } from 'ant-design-vue';
const showSearchText = ref<string>('');
const props = defineProps(['headerRef']);
const activeKey = ref('1');
const activeCollapse = ref('0');
const currentPage = ref(1);
const searchKeyWord = ref('');
const isSearch = ref<boolean>(false);
const isInit = ref<boolean>(true);
const reset = () => {
  isSearch.value = false;
  isInit.value = true;
}
const search = (type: string) => {
  isInit.value = false;
  isSearch.value = true;
  switch (type) {
    case 'hotel':
      message.success('搜索酒店');
      showSearchText.value = searchKeyWord.value + '酒店';
      break;
    case 'tour':
      message.success('搜索旅游团');
      showSearchText.value = searchKeyWord.value + '旅游团';
      break;
    case 'attr':
      message.success('搜索景区门票');
      showSearchText.value = searchKeyWord.value + '景区门票';
      break;
    default:
      message.success('正常来说不会触发');
      break;
  }
}
onMounted(() => {
  props.headerRef.style.backgroundColor = 'rgba(38, 50, 56,0.95)'
})
onUnmounted(() => {
  props.headerRef.style.backgroundColor = 'transparent'
})
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  // padding: 80px 40px;
  padding-top: 80px;

  .header {
    width: 100%;
    // height: 300px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
    border-radius: 15px;
    padding: 20px;

    h1 {
      font-weight: bold;
      color: #1d2129;
    }

    .tab {
      margin-top: 20px;

      :deep(.ant-tabs-tab) {
        font-size: 16px;
      }

      .form {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;

        p {
          margin-bottom: 10px;
        }

        .inp {
          width: 100%;
          position: relative;

          :deep(.ant-select-selector) {
            padding-left: 40px;
          }

          .icon {
            position: absolute;
            top: 10px;
            left: 10px;
          }
        }

        .position {
          padding-left: 40px;
        }
      }
    }
  }

  .hot-dest {
    width: 100%;
    margin-top: 30px;

    h3 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .hot-main {
      width: 100%;

      .item {
        background-color: pink;
        height: 120px;
        border-radius: 10px;
        position: relative;
        overflow: hidden;
        cursor: pointer;

        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          transition: all .5s;
        }

        .hot-mask {
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.3);
          border-radius: 10px;
          position: absolute;
          top: 0;
          left: 0;
          padding: 15px;
          font-size: 18px;
          color: #fff;
          display: flex;
          align-items: flex-end;
        }

        &:hover {
          img {
            transform: scale(1.1);
          }
        }
      }
    }
  }

  .hotel {
    width: 100%;
    margin-top: 30px;

    h3 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .hotel-main {
      width: 100%;

      .item {
        height: 260px;
        border-radius: 10px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        transition: all .4s;

        .item-img {
          width: 100%;
          height: 100%;
          position: relative;

          img {
            width: 100%;
            height: 100%;
            border-radius: 10px 0 0 10px;
          }

          .item-img-mask {
            width: 100%;
            height: 100%;
            background-color: rgba($color: #000000, $alpha: 0.1);
            border-radius: 10px 0 0 10px;
            position: absolute;
            top: 0;
            padding: 15px;
            display: flex;
            justify-content: space-between;

            .tag {
              background-color: #165dff;
              color: #fff;
              height: fit-content;
              padding: 5px 10px;
              border-radius: 5px;
              font-size: 12px;
            }

            .like {
              width: 30px;
              height: 30px;
              padding: 5px;
              border-radius: 100%;
              background-color: #f4f7f9;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }

        .item-info {
          height: 100%;
          padding: 15px;
          display: flex;
          flex-direction: column;
          justify-content: center;

          .info-header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            h3 {
              margin: 0;
              margin-bottom: 10px;
            }

            .score {
              display: flex;
              align-items: center;
              gap: 5px;
            }
          }

          .position {
            display: flex;
            align-items: center;
            gap: 5px;
            margin-bottom: 10px;
            color: #697280;
          }

          .tag {
            width: 100%;
            display: flex;
            gap: 10px;
            margin-bottom: 15px;

            .tag-item {
              padding: 5px 15px;
              background-color: #f2f3f5;
              font-size: 12px;
              border-radius: 50px;
              cursor: pointer;
            }

            .active {
              background-color: #e8f3ff;
              color: #1677ff;
            }
          }

          .content {
            width: 100%;
            color: #697280;
            font-size: 15px;
            line-height: 20px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 20px;
          }

          .price {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .left {
              display: flex;
              gap: 10px;

              .cur-price {
                font-size: 28px;
                font-weight: bold;
                color: #f53f3f;
              }

              .discount-price {
                font-size: 16px;
                text-decoration: line-through;
                color: #697280;
                align-self: flex-end;
              }
            }
          }
        }

        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 8px #ccc;
          cursor: pointer;
        }
      }
    }
  }

  .hot-trave {
    width: 100%;
    margin-top: 30px;

    h3 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .trave-main {
      width: 100%;

      .item {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        transition: all .4s;

        .item-img {
          width: 100%;
          height: 180px;
          position: relative;

          img {
            width: 100%;
            height: 100%;
            border-radius: 10px 10px 0 0;
          }

          .item-img-mask {
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.1);
            position: absolute;
            top: 0;
            border-radius: 10px 10px 0 0;
            padding: 15px;
            display: flex;
            justify-content: space-between;

            .left {
              width: fit-content;
              height: fit-content;
              background-color: #ff7d00;
              color: #fff;
              font-size: 12px;
              padding: 5px 10px;
              border-radius: 5px;
            }

            .right {
              width: fit-content;
              height: fit-content;
              background-color: #e9eff0;
              padding: 5px 10px;
              border-radius: 50px;
              font-size: 12px;
            }
          }
        }

        .item-info {
          padding: 15px;
          color: #697280;

          h3 {
            margin: 10px 0;
            color: #1d2129;
          }

          .position {
            display: flex;
            align-items: center;
            gap: 5px;
          }

          .star {
            padding: 10px 0;
            display: flex;
            align-items: center;
            gap: 20px;

            .person {
              display: flex;
              align-items: center;
              gap: 5px;
            }

            .cur-star {
              display: flex;
              align-items: center;
              gap: 5px;
            }
          }

          .content {
            width: 100%;
            color: #697280;
            font-size: 15px;
            line-height: 20px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 20px;
          }

          .bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .price {
              display: flex;
              gap: 5px;

              .cur-price {
                font-size: 24px;
                font-weight: bold;
                color: #f53f3f;
              }

              .desc {
                font-size: 12px;
                align-self: flex-end;
              }
            }
          }
        }

        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 8px #ccc;
          cursor: pointer;
        }
      }
    }
  }

  .quest {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 40px;

    h3 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .quest-main {
      width: 100%;
      padding: 20px;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
      border-radius: 10px;

      .collapse {
        border: none;
        background-color: #fff;
        font-size: 18px;
        color: #1d2129;

        p {
          color: #4e5969;
          font-size: 16px;
        }

        :deep(svg) {
          margin-top: 12px;
        }
      }
    }
  }

  .search-result {
    .top {
      padding: 40px 0;
      color: #1f2937;
    }

    .main {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-bottom: 30px;

      .item {
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        transition: all .4s;

        .img-box {
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
            padding: 20px;
            display: flex;
            justify-content: space-between;

            .tag {
              width: fit-content;
              height: fit-content;
              padding: 5px 10px;
              font-size: 12px;
              background-color: #ff7d00;
              border-radius: 5px;
              font-weight: bold;
              color: #fff;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .like {
              padding: 6px;
              background-color: rgba($color: #fff, $alpha: .8);
              width: fit-content;
              height: fit-content;
              border-radius: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
            }
          }
        }

        .info {
          padding: 20px;

          .info-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;

            h3 {
              font-weight: bold;
              color: #1f2937;
            }

            .score {
              width: fit-content;
              height: fit-content;
              background-color: #dcfce7;
              color: #15803d;
              font-size: 12px;
              padding: 5px 10px;
              border-radius: 5px;
            }
          }

          .info-desc {
            width: 100%;
            color: #697280;
            font-size: 15px;
            line-height: 20px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            text-overflow: ellipsis;
            overflow: hidden;
            -webkit-box-orient: vertical;
            margin-bottom: 10px;
          }

          .position {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 14px;
            color: #837280;
            margin-bottom: 20px;
          }

          .bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .price {
              display: flex;
              align-items: center;
              gap: 10px;

              .cur-price {
                font-size: 24px;
                font-weight: bold;
                color: #1e88e5;
              }

              .pre-price {
                align-self: flex-end;
                text-decoration: line-through;
                color: #6b7280;
              }


            }

            .btn {
              width: fit-content;
              height: fit-content;
              padding: 10px;
              background-color: #e7eeff;
              font-size: 15px;
              border-radius: 5px;
              color: #1e88e5;
              cursor: pointer;

              &:hover {
                background-color: #d0dfff;
              }
            }
          }
        }

        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 8px #ccc;

          .info {
            .info-header {
              h3 {
                color: #1e88e5;
              }
            }
          }
        }
      }
    }

    .page {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 30px;
    }
  }
}

@media (min-width:0) and (max-width: 700px) {
  .form {
    grid-template-columns: repeat(1, 1fr) !important;
    gap: 0 !important;
  }
}
</style>
