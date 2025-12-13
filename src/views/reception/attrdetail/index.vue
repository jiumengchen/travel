<template>
  <div class="container">
    <div style="padding: 0 30px ;">
      <a-breadcrumb class="bread">
        <a-breadcrumb-item><a href="/">首页</a></a-breadcrumb-item>
        <a-breadcrumb-item><a href="/dest">目的地</a></a-breadcrumb-item>
        <a-breadcrumb-item><a href="/destdetail">上海</a></a-breadcrumb-item>
        <a-breadcrumb-item>东方明珠塔</a-breadcrumb-item>
      </a-breadcrumb>
      <div class="main">
        <div class="left">
          <div class="banner-box">
            <div class="banner-list" ref="bannerRef">
              <div class="item" v-for="item in bannerList">
                <img :src="item" alt="">
              </div>
              <div class="item">
                <img :src="bannerList[0]" alt="">
              </div>
            </div>
            <div class="banner-control">
              <div class="pre" @click="preImg">
                <svg-icon name="pre" fill="#2d40af" width="18px" height="18px"></svg-icon>
              </div>
              <div class="next" @click="nextImg">
                <svg-icon name="next" fill="#2d40af" width="18px" height="18px"></svg-icon>
              </div>
              <div class="indicators">
                <div class="item" v-for="(item, index) in bannerList.length" :class="{ active: index == bannerIndex }"
                  @click="toSlide(index)">
                </div>
              </div>
            </div>
            <div class="changeActive">
              <div class="item" v-for="(item, index) in bannerList" :class="{ active: bannerIndex == index }"
                @click="toSlide(index)">
                <img :src="item" alt="">
              </div>
            </div>
          </div>
          <div class="attr-int">
            <h3>景点介绍</h3>
            <div class="content">
              <p>东方明珠塔是上海的标志性建筑，高468米，是集观光、餐饮、购物、娱乐为一体的综合性旅游景点。位于浦东新区陆家嘴金融贸易区，与外滩隔江相望，是上海最著名的地标之一。</p>
              <p>东方明珠塔由三根直径为9米的擎天立柱、太空舱、上球体、下球体、五个小球、塔座和广场组成。登上塔顶的太空舱，可以360度俯瞰上海全景，感受这座国际大都市的魅力。</p>
              <p>塔内设有上海城市历史发展陈列馆，通过珍贵的文物、图片、模型、多媒体等多种展示手段，生动展现了上海从古代到现代的发展历程。此外，塔内还有旋转餐厅、观光层、娱乐设施等，满足不同游客的需求。</p>
            </div>
          </div>
          <div class="attr-feat">
            <h3>景点特色</h3>
            <div class="content">
              <div class="item">
                <div class="i-left">
                  <svg-icon name="eyes" fill="#1677ff" width="24px" height="24px"></svg-icon>
                </div>
                <div class="i-right">
                  <h4>高空观光</h4>
                  <p>上球体、下球体和太空舱三个不同高度的观光层，提供全方位的城市景观体验。</p>
                </div>
              </div>
              <div class="item">
                <div class="i-left">
                  <svg-icon name="food" fill="#1677ff" width="24px" height="24px"></svg-icon>
                </div>
                <div class="i-right">
                  <h4>旋转餐厅</h4>
                  <p>位于上球体的旋转餐厅，可一边享用美食一边欣赏上海全景，每小时旋转一圈。</p>
                </div>
              </div>
              <div class="item">
                <div class="i-left">
                  <svg-icon name="attr" fill="#1677ff" width="24px" height="24px"></svg-icon>
                </div>
                <div class="i-right">
                  <h4>城市历史陈列馆</h4>
                  <p>展示上海从开埠到现代的发展历程，收藏了大量珍贵文物和历史照片。</p>
                </div>
              </div>
              <div class="item">
                <div class="i-left">
                  <svg-icon name="camera" fill="#1677ff" width="24px" height="24px"></svg-icon>
                </div>
                <div class="i-right">
                  <h4>摄影胜地</h4>
                  <p>无论是白天还是夜晚，东方明珠塔都是摄影爱好者的理想拍摄地点。</p>
                </div>
              </div>
            </div>
          </div>
          <div class="attr-traffic">
            <h3>交通指南</h3>
            <div class="content">
              <div class="item">
                <div class="icon">
                  <svg-icon name="subway" fill="#1677ff" width="20px" height="20px"></svg-icon>
                  <h4>地铁</h4>
                </div>
                <div class="t-info">
                  <div class="t-item">
                    <div class="tag">2号线</div>
                    <p>陆家嘴站1号口出，步行约10分钟</p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="icon">
                  <svg-icon name="bus" fill="#1677ff" width="20px" height="20px"></svg-icon>
                  <h4>公交</h4>
                </div>
                <div class="t-info">
                  <div class="t-item">
                    <div class="tag">2号线</div>
                    <p>陆家嘴站1号口出，步行约10分钟</p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="icon">
                  <svg-icon name="car" fill="#1677ff" width="20px" height="20px"></svg-icon>
                  <h4>自驾</h4>
                </div>
                <div class="t-info">
                  <div class="t-item">
                    <p>东方明珠塔设有地下停车场，收费标准为10元/小时，每日最高60元。</p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="icon">
                  <svg-icon name="lundu" fill="#1677ff" width="20px" height="20px"></svg-icon>
                  <h4>轮渡</h4>
                </div>
                <div class="t-info">
                  <div class="t-item">
                    <p>从外滩乘坐轮渡至东昌路渡口，步行约15分钟即可到达东方明珠塔。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="eval-box">
            <div class="score">
              <div class="top">
                <div class="title">
                  <h3>用户评价</h3>
                </div>
                <div class="more">
                  <p>查看全部评价</p>
                  <svg-icon name="next" fill="#165dff" width="14px" height="14px"></svg-icon>
                </div>
              </div>
              <div class="bottom">
                <div class="s-left">
                  <div class="sc">4.7</div>
                  <div class="sc-count">基于2,2536条评价</div>
                  <div class="start">
                    <svg-icon name="star1" fill="#facc15" width="16px" height="16px"></svg-icon>
                    <svg-icon name="star1" fill="#facc15" width="16px" height="16px"></svg-icon>
                    <svg-icon name="star1" fill="#facc15" width="16px" height="16px"></svg-icon>
                    <svg-icon name="star1" fill="#facc15" width="16px" height="16px"></svg-icon>
                    <svg-icon name="star2" fill="#facc15" width="16px" height="16px"></svg-icon>
                  </div>
                </div>
                <div class="s-right">
                  <div class="item">
                    <p>5分</p>
                    <a-progress :percent="75" strokeColor="#facc15" :show-info="false" class="progress" />
                    <p>75%</p>
                  </div>
                  <div class="item">
                    <p>4分</p>
                    <a-progress :percent="18" strokeColor="#facc15" :show-info="false" class="progress" />
                    <p>18%</p>
                  </div>
                  <div class="item">
                    <p>3分</p>
                    <a-progress :percent="15" strokeColor="#facc15" :show-info="false" class="progress" />
                    <p>15%</p>
                  </div>
                  <div class="item">
                    <p>2分</p>
                    <a-progress :percent="1" strokeColor="#facc15" :show-info="false" class="progress" />
                    <p>1%</p>
                  </div>
                  <div class="item">
                    <p>1分</p>
                    <a-progress :percent="1" strokeColor="#facc15" :show-info="false" class="progress" />
                    <p>1%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="comment-box">
            <div class="item" v-for="(item, index) in 2">
              <div class="comment-header">
                <div class="comment-user">
                  <img
                    src="https://design.gemcoder.com/staticResource/echoAiSystemImages/e0f26f427974e75dbe20e1df2178ec51.png"
                    alt="">
                  <div class="info">
                    <div class="name">李小明</div>
                    <div class="time">2025-11-17 · 5天4晚自由行</div>
                  </div>
                </div>
                <div class="star">
                  <svg-icon name="star1" fill="#facc15" width="16px" height="16px"></svg-icon>
                  <svg-icon name="star1" fill="#facc15" width="16px" height="16px"></svg-icon>
                  <svg-icon name="star1" fill="#facc15" width="16px" height="16px"></svg-icon>
                  <svg-icon name="star1" fill="#facc15" width="16px" height="16px"></svg-icon>
                  <svg-icon name="star1" fill="#facc15" width="16px" height="16px"></svg-icon>
                </div>
              </div>
              <div class="comment-title">上海是一座令人惊叹的城市！</div>
              <div class="comment-content">
                上海给我留下了深刻的印象，这座城市完美融合了传统与现代。外滩的夜景令人叹为观止，迪士尼乐园让我找回了童年的快乐，豫园的传统建筑和小吃也非常有特色。强烈推荐大家来体验这座魔都的魅力！</div>
              <div class="comment-imgbox">
                <a-image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" :width="100"
                  :height="100" />
                <a-image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" :width="100"
                  :height="100" />
              </div>
              <div class="user-option">
                <div class="like">
                  <svg-icon name="like" fill="#919aa5" width="14px" height="14px"></svg-icon>
                  <p>有用(18)</p>
                </div>
                <div class="dislike">
                  <svg-icon name="like" fill="#919aa5" width="14px" height="14px"></svg-icon>
                  <p>没用(18)</p>
                </div>
                <p>·</p>
                <div class="reply" @click="replyIndex = 'parent' + index">
                  <svg-icon name="comment1" fill="#919aa5" width="14px" height="14px"></svg-icon>
                  <p>回复</p>
                </div>
              </div>
              <div class="reply-box" v-if="replyIndex === 'parent' + index">
                <a-textarea placeholder="写下你的回复..." allow-clear />
                <div class="btn">
                  <a-button size="small" @click="handleReplyIndex('parent' + index)">取消</a-button>
                  <a-button type="primary" size="small">提交回复</a-button>
                </div>
              </div>
              <div class="sec-comment">
                <p class="look" @click="handleLookComment(index)">{{
                  LookCommentIndex === index ? '收起回复' : '查看1条回复' }}</p>
                <div class="sec-box" v-if="LookCommentIndex === index">
                  <div class="sec-item" v-for="(item, index) in 4">
                    <div class="item-left">
                      <img
                        src="https://design.gemcoder.com/staticResource/echoAiSystemImages/76ebfd3baddbe5a5165b277b4fc5ec20.png"
                        alt="">
                    </div>
                    <div class="item-right">
                      <div class="item-info">
                        <div class="name">陈美势->久梦辰</div>
                        <div class="comment-text">推荐你下次试试南翔小笼包，就在豫园附近，非常地道！</div>
                        <div class="user-option" style="margin-top: 10px;">
                          <div class="like">
                            <svg-icon name="like" fill="#919aa5" width="14px" height="14px"></svg-icon>
                            <p>有用(18)</p>
                          </div>
                          <div class="dislike">
                            <svg-icon name="like" fill="#919aa5" width="14px" height="14px"></svg-icon>
                            <p>没用(18)</p>
                          </div>
                          <p>·</p>
                          <div class="reply" @click="replyIndex = 'child' + index">
                            <svg-icon name="comment1" fill="#919aa5" width="14px" height="14px"></svg-icon>
                            <p>回复</p>
                          </div>
                        </div>
                        <div class="reply-box" v-if="replyIndex === 'child' + index">
                          <a-textarea placeholder="写下你的回复..." allow-clear />
                          <div class="btn">
                            <a-button size="small" @click="handleReplyIndex('child' + index)">取消</a-button>
                            <a-button type="primary" size="small">提交回复</a-button>
                          </div>
                        </div>
                      </div>
                      <div class="item-time">2025-11-18</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="r-info">
            <div class="top">
              <h2>东方明珠塔</h2>
              <div class="star">
                <svg-icon name="star1" fill="#facc15"></svg-icon>
                <svg-icon name="star1" fill="#facc15"></svg-icon>
                <svg-icon name="star1" fill="#facc15"></svg-icon>
                <svg-icon name="star1" fill="#facc15"></svg-icon>
                <svg-icon name="star2" fill="#facc15"></svg-icon>
                <p>4.6</p>
                <p class="eva">2.8k评价</p>
              </div>
              <div class="position">
                <svg-icon name="position" fill="#4b5563"></svg-icon>
                <p>上海市浦东新区世纪大道1号</p>
              </div>
            </div>
            <div class="middle">
              <div class="item">
                <p class="title">开放时间</p>
                <p>09:00 - 21:00</p>
              </div>
              <div class="item">
                <p class="title">建议游玩时间</p>
                <p>3-4小时</p>
              </div>
              <div class="item">
                <p class="title">官方网站</p>
                <a href="https://www.orientalpearltower.com" target="_blank">www.orientalpearltower.com</a>
              </div>
            </div>
            <div class="bottom">
              <div class="price">
                <div class="cur-price">￥199</div>
                <div class="pre-price">￥220</div>
                <div class="price-tag">省￥21</div>
              </div>
              <div class="desc">成人票 · 上球体+下球体+陈列馆</div>
              <div class="btn">
                <div class="pay">立即预定</div>
                <div class="toCart">加入购物车</div>
                <div class="collect">收藏</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
import FooterBar from '@/components/FooterBar/index.vue'
import { message } from 'ant-design-vue';
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router';
const $route = useRoute();
const $router = useRouter();
console.log($route.matched)
const props = defineProps(['headerRef']);
const bannerRef = ref<HTMLElement | null>(null);
const bannerIndex = ref<number>(0);
const bannerList = ["https://design.gemcoder.com/staticResource/echoAiSystemImages/0c1548af6be952ee031cc4bcabbfe59b.png",
  "https://design.gemcoder.com/api/searchImage?query=Oriental%20Pearl%20Tower%20in%20Shanghai%20with%20blue%20sky%20background,%20professional%20photography,%20high%20resolution,%20tourist%20attraction&width=800&height=500",
  "https://design.gemcoder.com/api/searchImage?query=Oriental%20Pearl%20Tower%20museum%20exhibition,%20historical%20artifacts&width=800&height=500",
  "https://design.gemcoder.com/api/searchImage?query=Oriental%20Pearl%20Tower%20at%20night%20with%20lights,%20Shanghai%20skyline&width=800&height=500"
]
const lastItemIndex = ref(0);
const preImg = () => {
  if (bannerIndex.value === 0) {
    bannerIndex.value = bannerList.length - 1
  } else {
    bannerIndex.value--;
  }
}
const nextImg = () => {
  if (bannerIndex.value === bannerList.length - 1) {
    bannerIndex.value = 0;
  } else {
    bannerIndex.value++;
  }
}
const toSlide = (index: number) => {
  bannerIndex.value = index
}
watch(bannerIndex, (curIndex) => {
  if (bannerRef.value) {
    bannerRef.value.style.transform = `translateX(-${curIndex * 100}%)`;
  }
})
const LookCommentIndex = ref<number>(-1);
const replyIndex = ref('1');
const handleLookComment = (id: number) => {
  if (LookCommentIndex.value == id) {
    LookCommentIndex.value = -1
  } else {
    LookCommentIndex.value = id
  }
}
const handleReplyIndex = (id: string) => {
  if (replyIndex.value === id) {
    replyIndex.value = ''
  } else {
    replyIndex.value = id;
  }
}
onMounted(() => {
  console.log(123)
  props.headerRef.style.backgroundColor = 'rgba(38, 50, 56,0.95)'
  lastItemIndex.value = bannerList.length;
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
  padding-top: 80px;

  .bread {
    padding: 20px 0;
  }

  .main {
    display: flex;
    gap: 40px;

    .left {
      flex: 2;

      .banner-box {
        width: 100%;
        overflow: hidden;
        position: relative;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        border-radius: 10px;

        .banner-control {
          width: 100%;
          height: 400px;
          position: absolute;
          top: 0;

          .pre,
          .next {
            padding: 10px 4px;
            background-color: rgba($color: #fff, $alpha: .5);
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: fit-content;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;

            &:hover {
              background-color: #fff;
            }
          }

          .pre {
            left: 20px;
          }

          .next {
            right: 20px;
          }

          .indicators {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            align-items: center;
            gap: 5px;

            .item {
              width: 12px;
              height: 12px;
              background-color: rgba($color: #fff, $alpha: .5);
              border-radius: 100%;
              cursor: pointer;
            }

            .active {
              background-color: #fff;
            }
          }
        }

        .banner-list {
          display: flex;
          height: 400px;
          transition: all .5s ease-in-out;
          position: relative;
          border-radius: 10px;

          .item {
            min-width: 100%;
            width: 100%;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 10px 10px 0 0;
            }
          }
        }
      }

      .changeActive {
        padding: 20px;
        display: flex;
        gap: 20px;

        .item {
          width: 100%;
          height: 100px;
          border: 2px solid transparent;
          border-radius: 5px;
          cursor: pointer;

          img {
            width: 100%;
            height: 100%;
            border-radius: 5px;
          }

          &:hover {
            border-color: #1677ff;
          }
        }

        .active {
          border-color: #1677ff;
        }
      }

      .attr-int {
        margin-top: 30px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        padding: 20px;

        h3 {
          font-weight: bold;
          color: #111827;
          font-size: 20px;
        }

        .content {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 20px;
          color: #374151;
          line-height: 25px;
        }
      }

      .attr-feat {
        margin-top: 30px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        padding: 20px;

        h3 {
          font-weight: bold;
          color: #111827;
          font-size: 20px;
        }

        .content {
          margin-top: 30px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;

          .item {
            display: flex;
            gap: 10px;

            .i-left {
              width: 70px;
              height: 50px;
              background-color: #eff6ff;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 100%;
            }


            .i-right {
              h4 {
                font-weight: bold;
                color: #111827;
                margin-bottom: 10px;
              }

              p {
                color: #4b557c;
                line-height: 20px;
              }
            }
          }
        }
      }

      .attr-traffic {
        margin-top: 30px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        padding: 20px;

        h3 {
          font-weight: bold;
          color: #111827;
          font-size: 20px;
        }

        .content {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;

          .item {
            .icon {
              display: flex;
              align-items: center;
              gap: 10px;

              h4 {
                font-weight: bold;
                color: #111827;
              }
            }

            .t-info {
              margin: 10px 0;
              display: flex;
              flex-direction: column;
              gap: 10px;

              .t-item {
                display: flex;
                align-items: center;
                gap: 10px;
                padding-left: 30px;
                color: #374151;

                .tag {
                  width: fit-content;
                  height: fit-content;
                  background-color: #dcfce7;
                  font-size: 12px;
                  padding: 5px 8px;
                  border-radius: 5px;
                  color: #166534;
                }
              }
            }
          }
        }
      }

      .eval-box {
        margin-bottom: 30px;
        margin-top: 30px;

        .top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;

          .title {
            display: flex;
            align-items: center;
            gap: 5px;

            h3 {
              font-weight: bold;
              color: #111827;
              font-size: 20px;
            }
          }

          .more {
            display: flex;
            gap: 5px;
            align-items: center;
            color: #165dff;
            cursor: pointer;
            font-size: 14px;
          }
        }

        .score {
          width: 100%;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          padding: 20px;

          .bottom {
            display: flex;
            align-items: center;

            .s-left {
              flex: 1;
              width: 100%;
              display: flex;
              flex-direction: column;
              gap: 10px;

              .sc {
                font-size: 50px;
                font-weight: bold;
                color: #165dff;
              }

              .sc-count {
                color: #86909c;
              }

              .start {
                display: flex;
                align-items: center;
                gap: 5px;
              }
            }

            .s-right {
              flex: 1.5;
              width: 100%;
              display: flex;
              flex-direction: column;

              .item {
                display: flex;
                align-items: center;
                gap: 20px;

                p {
                  font-size: 14px;
                  color: #86909c;
                }

                .progress {
                  flex: 1;
                }
              }
            }
          }


        }
      }

      .comment-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 30px;

        .item {
          padding: 20px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
          border-radius: 10px;

          .comment-header {
            display: flex;
            justify-content: space-between;

            .comment-user {
              display: flex;
              align-items: center;
              gap: 10px;
              margin-bottom: 15px;

              img {
                width: 50px;
                height: 50px;
                border-radius: 100%;
              }

              .info {
                .time {
                  color: #86909c;
                  font-size: 12px;
                  margin-top: 10px;
                }
              }
            }

            .star {
              display: flex;
              align-items: center;
              gap: 3px;
            }
          }

          .comment-title {
            font-weight: bold;
            font-size: 18px;
            color: #1d2129;
            margin-bottom: 15px;
          }

          .comment-content {
            color: #4e5969;
            line-height: 20px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            overflow: hidden;
            margin-bottom: 15px;
          }

          .comment-imgbox {
            display: flex;
            align-items: center;
            gap: 15px;

            :deep(.ant-image-img) {
              border-radius: 10px;
            }

            :deep(.ant-image) {
              border-radius: 10px;
            }

            :deep(.ant-image-mask) {
              border-radius: 10px;
            }
          }

          .user-option {
            display: flex;
            align-items: center;
            font-size: 12px;
            gap: 5px;
            color: #919aa5;
            margin-top: 15px;

            .like {
              display: flex;
              align-items: center;
              gap: 5px;
              cursor: pointer;

              &:hover {
                color: #165dff;
              }
            }

            .dislike {
              margin-left: 10px;
              display: flex;
              align-items: center;
              gap: 5px;
              cursor: pointer;

              &:hover {
                color: #165dff;
              }
            }

            .reply {
              display: flex;
              align-items: center;
              gap: 5px;
              cursor: pointer;

              &:hover {
                color: #165dff;
              }
            }
          }

          .reply-box {
            margin-top: 20px;

            .btn {
              margin-top: 10px;
              display: flex;
              gap: 10px;
              justify-content: flex-end;
            }
          }

          .sec-comment {
            padding-left: 20px;
            border-left: 2px solid #f3f4f6;
            margin-top: 20px;

            .look {
              color: #165dff;
              font-size: 12px;
              cursor: pointer;
            }

            .sec-box {
              margin-top: 20px;

              .sec-item {
                display: flex;
                gap: 10px;
                // align-items: center;
                background-color: #f9fafb;
                padding: 20px;

                .item-left {
                  width: 40px;
                  height: 40px;

                  img {
                    width: 100%;
                    height: 100%;
                    border-radius: 100%;
                  }
                }

                .item-right {
                  flex: 1;
                  display: flex;
                  justify-content: space-between;

                  .item-info {
                    flex: 1;

                    .name {
                      font-size: 14px;
                      margin-bottom: 5px;
                    }

                    .comment-text {
                      font-size: 12px;
                      color: #4e5969;
                    }
                  }

                  .item-time {
                    font-size: 12px;
                    color: #86909c;
                    align-self: flex-start;
                  }
                }
              }
            }
          }
        }
      }
    }

    .right {
      flex: 1;
      position: relative;
      margin-bottom: 30px;

      .r-info {
        position: sticky;
        top: 50px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        padding: 20px;

        .top {
          border-bottom: 1px solid #f3f4f6;

          h2 {
            font-weight: bold;
            color: #111827;
            margin-bottom: 15px;
          }

          .star {
            display: flex;
            align-items: center;
            gap: 5px;
            margin-bottom: 20px;

            p {
              margin-left: 10px;
            }

            .eva {
              color: #6b7280;
              font-size: 14px;
            }
          }

          .position {
            display: flex;
            color: #4b5563;
            gap: 5px;
            margin-bottom: 20px;
          }
        }

        .middle {
          padding: 20px 0;
          border-bottom: 1px solid #f3f4f6;
          display: flex;
          flex-direction: column;
          gap: 20px;

          .item {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .title {
              color: #4b557c;
            }

            a {
              color: #1e40af;

              &:hover {
                text-decoration: underline;
              }
            }
          }
        }

        .bottom {
          margin-top: 20px;

          .price {
            display: flex;
            gap: 5px;
            margin-bottom: 15px;

            .cur-price {
              font-size: 30px;
              font-weight: bold;
              color: #1e88e5;
            }

            .pre-price {
              font-size: 16px;
              color: #6b7280;
              text-decoration: line-through;
              align-self: flex-end;
            }

            .price-tag {
              color: #dc2626;
              font-size: 13px;
              background-color: #fee2e2;
              width: fit-content;
              height: fit-content;
              align-self: flex-end;
              padding: 5px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 5px;
              margin-left: 10px;
            }
          }

          .desc {
            color: #6b7280;
            font-size: 14px;
            margin-bottom: 20px;
          }

          .btn {
            display: flex;
            flex-direction: column;
            gap: 20px;

            div {
              width: 100%;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 10px;
              cursor: pointer;
            }

            .pay {
              background-color: #165dff;
              color: #fff;

              &:hover {
                background-color: #2d6dff;
              }
            }

            .toCart {
              border: 1px solid #165dff;
              color: #165dff;

              &:hover {
                background-color: #f3f7ff;
              }
            }

            .collect {
              border: 1px solid #dc2626;
              color: #dc2626;

              &:hover {
                background-color: #fee2e2;
              }
            }
          }
        }
      }
    }
  }
}
</style>
