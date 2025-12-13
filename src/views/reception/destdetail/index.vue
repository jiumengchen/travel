<template>
  <div class="container">
    <div style="padding: 0 30px ;">
      <a-breadcrumb class="bread">
        <a-breadcrumb-item><a href="/">首页</a></a-breadcrumb-item>
        <a-breadcrumb-item><a href="/dest">目的地</a></a-breadcrumb-item>
        <a-breadcrumb-item>上海</a-breadcrumb-item>
      </a-breadcrumb>
      <div class="banner-box">
        <img src="https://design.gemcoder.com/staticResource/echoAiSystemImages/2b31e457fada5b00a30ed0f45cd27bcd.png"
          alt="">
        <div class="banner-mask">
          <div class="left">
            <a-tag color="#ff7d00" class="tag">热门</a-tag>
            <h1 class="dest-name">上海</h1>
            <div class="position">
              <svg-icon name="position" fill="#e7e7e8" width="20px" height="20px"></svg-icon>
              <div class="address">中国 · 华东地区 · 328个景点</div>
            </div>
            <div class="star-box">
              <svg-icon name="star1" fill="#facc15" width="18px" height="18px"></svg-icon>
              <p class="star-value">4.7</p>
              <p class="total">(2.5k 评价)</p>
            </div>
          </div>
          <div class="right">
            <a-button class="collectbtn" size="large">
              <svg-icon name="like-select" fill="#165dff" width="20px" height="20px"></svg-icon>
              <p>收藏</p>
            </a-button>
            <a-button type="primary" class="achiebtn" size="large">
              <svg-icon name="myfootprint" fill="#fff" width="20px" height="20px"></svg-icon>
              <p>规划行程</p>
            </a-button>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="left">
          <div class="dest-int">
            <div class="title">
              <svg-icon name="tip" fill="#165dff" width="25px" height="25px"></svg-icon>
              <h3>关于上海</h3>
            </div>
            <div class="content">
              <p>上海，简称"沪"或"申"，是中国共产党的诞生地，中华人民共和国直辖市，国家中心城市，超大城市，沪杭甬大湾区核心城市，国际经济、金融、贸易、航运、科技创新中心，首批沿海开放城市。</p>
              <p>作为中国的经济中心和国际化大都市，上海融合了东方传统与西方现代元素，形成了独特的海派文化。从外滩的殖民时期建筑到陆家嘴的摩天大楼，从豫园的古典园林到田子坊的文艺小店，上海展现了不同的城市风貌。</p>
              <p>上海也是购物天堂，拥有南京路、淮海路等著名商业街，以及众多高端购物中心。美食方面，上海菜以浓油赤酱、咸鲜合一为特色，小笼包、生煎包、红烧肉等都是不容错过的美味。</p>
            </div>
            <div class="spe-tag">
              <h4>特色标签</h4>
              <div class="tag-list">
                <a-tag color="#eff6ff">现代都市</a-tag>
                <a-tag color="#eff6ff">历史文化</a-tag>
                <a-tag color="#eff6ff">美食天堂</a-tag>
              </div>
            </div>
          </div>
          <div class="hot-attr">
            <div class="top">
              <div class="title">
                <svg-icon name="attr" fill="#165dff" width="25px" height="25px"></svg-icon>
                <h3>热门景点</h3>
              </div>
              <div class="more">
                <p>查看全部</p>
                <svg-icon name="next" fill="#165dff" width="14px" height="14px"></svg-icon>
              </div>
            </div>
            <div class="attr-box">
              <div class="item" v-for="item in 4">
                <div class="img-box">
                  <img
                    src="https://design.gemcoder.com/staticResource/echoAiSystemImages/5f8aa98f212728a809e87e6e3e52ef94.png"
                    alt="">
                </div>
                <div class="info">
                  <h4>东方明珠塔</h4>
                  <div class="position">
                    <svg-icon name="position" fill="#86909c" width="16px" height="16px"></svg-icon>
                    <p>浦东新区</p>
                    <p>·</p>
                    <svg-icon name="star1" fill="#facc15" width="16px" height="16px"></svg-icon>
                    <p>4.6</p>
                  </div>
                  <div class="content">
                    上海的标志性建筑，高468米，是集观光、餐饮、购物、娱乐为一体的综合性旅游景点。
                  </div>
                  <div class="price">
                    <div class="price-init">
                      ￥199起
                    </div>
                    <div class="todetail" @click="$router.push({ path: '/attrdetail', query: { id: 1 } })">
                      查看详情
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="trave-tip">
              <div class="top">
                <div class="title">
                  <svg-icon name="book" fill="#165dff" width="25px" height="25px"></svg-icon>
                  <h3>旅行攻略</h3>
                </div>
                <div class="more">
                  <p>查看全部</p>
                  <svg-icon name="next" fill="#165dff" width="14px" height="14px"></svg-icon>
                </div>
              </div>
              <div class="tip">
                <div class="img-box">
                  <img
                    src="https://design.gemcoder.com/staticResource/echoAiSystemImages/2a68aa3f0e25e95069bff99977a8878f.png"
                    alt="">
                </div>
                <div class="tip-info">
                  <div class="info-header">
                    <a-tag color="#eff6ff" class="tag">3天2晚</a-tag>
                    <p>·</p>
                    <p>适合首次到访</p>
                    <p>·</p>
                    <p>2.3k 阅读</p>
                  </div>
                  <h4 class="info-title">上海3日游攻略：领略魔都魅力</h4>
                  <div class="info-content">这份攻略将带您领略上海的精华景点，从外滩的历史建筑到陆家嘴的现代摩天大楼，从豫园的传统文化到田子坊的文艺气息，让您在短短3天内感受魔都的独特魅力...
                  </div>
                  <div class="info-user">
                    <div class="user-info">
                      <img
                        src="https://design.gemcoder.com/staticResource/echoAiSystemImages/88108017b42ad3f8bf733b39d02e50a6.png"
                        alt="">
                      <div class="name">旅行达人</div>
                    </div>
                    <div class="time">2025-11-17</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="eval-box">
            <div class="top">
              <div class="title">
                <svg-icon name="eval" fill="#165dff" width="25px" height="25px"></svg-icon>
                <h3>游客评价</h3>
              </div>
              <div class="more">
                <p>查看全部</p>
                <svg-icon name="next" fill="#165dff" width="14px" height="14px"></svg-icon>
              </div>
            </div>
            <div class="score">
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
          <div class="q-info">
            <h3>快速信息</h3>
            <div class="info-box">
              <div class="item">
                <div class="icon">
                  <svg-icon name="clock1" fill="#165dff" width="20px" height="20px"></svg-icon>
                </div>
                <div class="context">
                  <p class="des">最佳旅游事件</p>
                  <p class="txt">春秋两季(3-5月,9-11月)</p>
                </div>
              </div>
              <div class="item">
                <div class="icon">
                  <svg-icon name="language" fill="#165dff" width="20px" height="20px"></svg-icon>
                </div>
                <div class="context">
                  <p class="des">语言</p>
                  <p class="txt">普通话、上海话、英语</p>
                </div>
              </div>
              <div class="item">
                <div class="icon">
                  <svg-icon name="yuan" fill="#165dff" width="20px" height="20px"></svg-icon>
                </div>
                <div class="context">
                  <p class="des">货币</p>
                  <p class="txt">人民币(CNY)</p>
                </div>
              </div>
              <div class="item">
                <div class="icon">
                  <svg-icon name="chatou" fill="#165dff" width="20px" height="20px"></svg-icon>
                </div>
                <div class="context">
                  <p class="des">电源插座</p>
                  <p class="txt">A型、I型 (220V, 50Hz)</p>
                </div>
              </div>
              <div class="item">
                <div class="icon">
                  <svg-icon name="xincart" fill="#165dff" width="20px" height="20px"></svg-icon>
                </div>
                <div class="context">
                  <p class="des">支付方式</p>
                  <p class="txt">支付宝、微信支付、信用卡</p>
                </div>
              </div>
            </div>
          </div>
          <div class="dest">
            <h3>相关目的地</h3>
            <div class="dest-box">
              <div class="item" v-for="item in 3">
                <img
                  src="https://design.gemcoder.com/staticResource/echoAiSystemImages/3c1142e59d7a2d16d9ccb321ea7d53c2.png"
                  alt="">
                <div class="info">
                  <div class="name">广州</div>
                  <div class="score">
                    <svg-icon name="star1" fill="#facc15" width="14px" height="14px"></svg-icon>
                    <p>4.6 (2.8k评价)</p>
                  </div>
                </div>
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
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
const $route = useRoute();
const $router = useRouter();
console.log($route.matched)
const props = defineProps(['headerRef']);
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

  .banner-box {
    width: 100%;
    height: 500px;
    position: relative;
    margin-bottom: 30px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 15px;
      object-fit: cover;
    }

    .banner-mask {
      width: 100%;
      height: 100%;
      border-radius: 15px;
      background-color: rgba($color: #000000, $alpha: .3);
      position: absolute;
      top: 0;
      left: 0;
      padding: 40px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      .left {
        .tag {
          border-radius: 50px;
          color: #fff;
          padding: 0 15px;
          font-weight: bold;
        }

        .dest-name {
          font-size: 50px;
          font-weight: bold;
          color: #fff;
          padding: 20px 0;
        }

        .position {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 20px;

          .address {
            color: #e7e7e8;
          }
        }

        .star-box {
          display: flex;
          align-items: center;
          gap: 5px;
          background-color: rgba($color: #eee, $alpha: .3);
          width: fit-content;
          padding: 10px;
          border-radius: 50px;

          .star-value {
            color: #fff;
            font-weight: bold;
            font-size: 18px;
          }

          .total {
            color: #e7e7e8;
            font-size: 14px;
          }
        }
      }

      .right {
        display: flex;
        gap: 15px;

        button {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .collectbtn {
          background-color: #fff;
          color: #165dff;
        }

        .achiebtn {
          color: #fff;
        }
      }
    }
  }

  .main {
    width: 100%;
    display: flex;
    gap: 40px;

    .left {
      width: 100%;
      flex: 2;

      .dest-int {
        padding: 20px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        margin-bottom: 30px;

        .title {
          display: flex;
          align-items: center;
          gap: 10px;

          h3 {
            font-weight: bold;
          }
        }

        .content {
          padding: 20px 0;
          display: flex;
          flex-direction: column;
          gap: 20px;

          p {
            line-height: 24px;
            font-size: 16px;
            color: #4e5969;
          }
        }

        .spe-tag {
          h4 {
            font-weight: bold;
            color: #86909c;
          }

          .tag-list {
            margin-top: 10px;

            span {
              color: #165dff;
              border-radius: 50px;
              padding: 0 15px;
            }
          }
        }
      }

      .hot-attr {
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
      }

      .attr-box {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;

        .item {
          width: 100%;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          transition: all .2s;

          .img-box {
            width: 100%;
            height: 180px;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 10px 10px 0 0;
            }
          }

          .info {
            padding: 20px;

            h4 {
              font-weight: bold;
              font-size: 18px;
              margin-bottom: 10px;
            }

            .position {
              display: flex;
              align-items: center;
              gap: 5px;
              color: #86909c;
              font-size: 14px;
            }

            .content {
              width: 100%;
              padding: 15px 0;
              color: #4e5969;
              line-height: 20px;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              text-overflow: ellipsis;
              overflow: hidden;
            }

            .price {
              display: flex;
              justify-content: space-between;

              .price-init {
                font-size: 16px;
                font-weight: bold;
                color: #165dff;
              }

              .todetail {
                color: #165dff;
                cursor: pointer;
              }
            }
          }

          &:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 8px #ccc;
          }
        }
      }

      .trave-tip {
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

        .tip {
          width: 100%;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          margin-bottom: 30px;
          border-radius: 10px;
          transition: all .4s;

          .img-box {
            flex: 1;
            height: 100%;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 10px 0 0 10px;
            }
          }

          .tip-info {
            flex: 2;
            padding: 20px;

            .info-header {
              display: flex;
              align-items: center;
              gap: 5px;
              color: #86909c;
              font-size: 12px;
              margin-bottom: 15px;

              .tag {
                color: #165dff;
                padding: 0 15px;
                border-radius: 50px;
              }
            }

            .info-title {
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 15px;
            }

            .info-content {
              width: 100%;
              color: #4e5969;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              text-overflow: ellipsis;
              overflow: hidden;
              font-size: 14px;
              line-height: 20px;
            }

            .info-user {
              margin-top: 50px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              color: #919aa5;

              .user-info {
                display: flex;
                align-items: center;
                gap: 10px;

                img {
                  width: 30px;
                  height: 30px;
                  border-radius: 100%;
                }
              }

              .time {
                font-size: 12px;
              }
            }
          }

          &:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 8px #ccc;
          }
        }
      }

      .eval-box {
        margin-bottom: 30px;

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
      width: 100%;
      flex: 1;

      .q-info {
        padding: 20px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        border-radius: 10px;

        h3 {
          font-weight: bold;
          margin-bottom: 20px;
        }

        .info-box {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;

          .item {
            display: flex;
            align-items: center;
            gap: 10px;

            .icon {
              width: 40px;
              height: 40px;
              background-color: #eff6ff;
              border-radius: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .context {
              flex: 1;

              .des {
                color: #86909c;
                font-size: 15px;
                margin-bottom: 5px;
              }

              .txt {
                color: #474a50;
                font-size: 15px;
              }
            }
          }
        }
      }

      .dest {
        padding: 20px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        margin-top: 30px;

        h3 {
          font-weight: bold;
          margin-bottom: 20px;
        }

        .dest-box {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;

          .item {
            display: flex;
            align-items: center;
            gap: 10px;

            img {
              width: 70px;
              height: 70px;
              border-radius: 10px;
              transition: all .4s;
            }

            .name {
              margin-bottom: 10px;
              font-size: 18px;
            }

            .score {
              display: flex;
              align-items: center;
              font-size: 12px;
              color: #979faa;
              gap: 2px;
            }

            &:hover {
              cursor: pointer;

              .name {
                color: #165dff;
              }

              img {
                transform: scale(1.05);
              }
            }
          }
        }
      }
    }
  }
}

@media (min-width:0) and (max-width:1000px) {
  .main {
    .left {
      .trave-tip {
        .tip {
          flex-direction: column;

          .img-box {
            width: 100% !important;
            height: 200px !important;

            img {
              border-radius: 10px 10px 0 0 !important;
              height: 200px !important;
            }
          }
        }
      }
    }

    .right {
      display: none !important;
    }
  }
}
</style>
