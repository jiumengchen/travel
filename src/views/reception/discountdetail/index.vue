<template>
  <div class="container">
    <div style="padding: 0 30px ;">
      <a-breadcrumb class="bread">
        <a-breadcrumb-item><a href="/">首页</a></a-breadcrumb-item>
        <a-breadcrumb-item><a href="/discount">特价优惠</a></a-breadcrumb-item>
        <a-breadcrumb-item>三亚5日4晚自由行</a-breadcrumb-item>
      </a-breadcrumb>
      <div class="discount-info">
        <div class="d-left">
          <img src="https://design.gemcoder.com/staticResource/echoAiSystemImages/94b0aa477ebe4169e48afb43877e6687.png"
            alt="">
          <div class="mask">
            <div class="m-left">
              <svg-icon name="clock1" fill="#fff" width="18px" height="18px"></svg-icon>
              <p>限时优惠</p>
            </div>
            <div class="m-right">
              <svg-icon name="star1" fill="#facc15" width="18px" height="18px"></svg-icon>
              <p>4.9分</p>
            </div>
          </div>
        </div>
        <div class="d-right">
          <h1>三亚5日4晚自由行</h1>
          <div class="info">
            <div class="score">
              <svg-icon name="star1" fill="#facc15"></svg-icon>
              <svg-icon name="star1" fill="#facc15"></svg-icon>
              <svg-icon name="star1" fill="#facc15"></svg-icon>
              <svg-icon name="star1" fill="#facc15"></svg-icon>
              <svg-icon name="star2" fill="#facc15"></svg-icon>
              <p>4.9分</p>
            </div>
            <div class="position">
              <svg-icon name="position" fill="#4e5969"></svg-icon>
              <p>亚龙湾</p>
            </div>
          </div>
          <div class="price">
            <div class="cur-price">￥1299</div>
            <div class="pre-price">￥2599</div>
            <div class="dis-price">5折优惠</div>
          </div>
          <div class="desc">
            价格包含：往返机票、四星级酒店、三餐、导游服务
          </div>
          <div class="int-box">
            <div class="item">
              <svg-icon name="date" fill="#165dff" width="20px" height="20px"></svg-icon>
              <div class="t">
                <p>行程天数</p>
                <p>5天四晚</p>
              </div>
            </div>
            <div class="item">
              <svg-icon name="morePerson" fill="#165dff" width="20px" height="20px"></svg-icon>
              <div class="t">
                <p>适合人数</p>
                <p>1-4人</p>
              </div>
            </div>
            <div class="item">
              <svg-icon name="fly" fill="#165dff" width="20px" height="20px"></svg-icon>
              <div class="t">
                <p>交通方式</p>
                <p>往返机票</p>
              </div>
            </div>
            <div class="item">
              <svg-icon name="hotel" fill="#165dff" width="20px" height="20px"></svg-icon>
              <div class="t">
                <p>住宿标准</p>
                <p>四星级酒店</p>
              </div>
            </div>
          </div>
          <div class="remain">
            <div class="tip">
              <svg-icon name="tip" fill="#165dff" width="18px" height="18px"></svg-icon>
              <p>剩余名额: <span>27份</span></p>
            </div>
            <a-progress :percent="27" :show-info="false" strokeColor="#f53f3f" />
          </div>
          <div class="btn">
            <div class="pay">立即预定</div>
            <div class="toCart">加入购物车</div>
            <div class="like"><svg-icon name="like-noselect" fill="#586372" width="20px" height="20px"></svg-icon></div>
          </div>
        </div>
      </div>
      <div class="tab">
        <a-tabs v-model:activeKey="activeKey">
          <a-tab-pane key="1" tab="行程安排">
            <div class="trip">
              <h2>详细行程安排</h2>
              <div class="trip-list">
                <div class="item">
                  <div class="t-left t-left-active">
                    1
                  </div>
                  <div class="t-right">
                    <div class="r-item r-item-active">
                      <h3>第1天: 抵达三亚-入住酒店</h3>
                      <p>抵达三亚凤凰国际机场，我们的接机人员将在出口处举牌迎接，随后送往亚龙湾四星级酒店办理入住手续。</p>
                      <div class="include">
                        <div class="i-item">
                          <svg-icon name="yes" fill="#00b42a" width="18px" height="18px"></svg-icon>
                          <p>包含机场至酒店的接送服务</p>
                        </div>
                        <div class="i-item">
                          <svg-icon name="yes" fill="#00b42a" width="18px" height="18px"></svg-icon>
                          <p>四星级酒店住宿（含晚餐）</p>
                        </div>
                        <div class="i-item">
                          <svg-icon name="yes " fill="#00b42a" width="18px" height="18px"></svg-icon>
                          <p>自由活动时间可自行探索周边环境</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="t-left">
                    2
                  </div>
                  <div class="t-right">
                    <div class="r-item">
                      <h3>第2天：亚龙湾热带天堂森林公园</h3>
                      <p>全天游览亚龙湾热带天堂森林公园，感受热带雨林风光，体验玻璃栈道，俯瞰亚龙湾全景。</p>
                      <div class="include">
                        <div class="i-item">
                          <svg-icon name="yes" fill="#00b42a" width="18px" height="18px"></svg-icon>
                          <p>含酒店早餐和午餐</p>
                        </div>
                        <div class="i-item">
                          <svg-icon name="yes" fill="#00b42a" width="18px" height="18px"></svg-icon>
                          <p>专业导游服务</p>
                        </div>
                        <div class="i-item">
                          <svg-icon name="yes " fill="#00b42a" width="18px" height="18px"></svg-icon>
                          <p>景点门票全含</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="t-left ">
                    3
                  </div>
                  <div class="t-right">
                    <div class="r-item">
                      <h3>第3天：蜈支洲岛一日游</h3>
                      <p>全天游览中国最美海岛之一的蜈支洲岛，享受阳光沙滩，可自费参加各种水上活动。</p>
                      <div class="include">
                        <div class="i-item">
                          <svg-icon name="yes" fill="#00b42a" width="18px" height="18px"></svg-icon>
                          <p>含酒店早餐和午餐</p>
                        </div>
                        <div class="i-item">
                          <svg-icon name="yes" fill="#00b42a" width="18px" height="18px"></svg-icon>
                          <p>往返船票及景点门票</p>
                        </div>
                        <div class="i-item">
                          <svg-icon name="yes " fill="#00b42a" width="18px" height="18px"></svg-icon>
                          <p>自由活动时间充足</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="t-left">
                    4
                  </div>
                  <div class="t-right">
                    <div class="r-item">
                      <h3>第4天：南山文化旅游区 - 天涯海角</h3>
                      <p>上午参观南山文化旅游区，拜谒108米高的海上观音像，下午游览著名的天涯海角景区。</p>
                      <div class="include">
                        <div class="i-item">
                          <svg-icon name="yes" fill="#00b42a" width="18px" height="18px"></svg-icon>
                          <p>含酒店早餐和午餐</p>
                        </div>
                        <div class="i-item">
                          <svg-icon name="yes" fill="#00b42a" width="18px" height="18px"></svg-icon>
                          <p>两个景点门票全含</p>
                        </div>
                        <div class="i-item">
                          <svg-icon name="yes " fill="#00b42a" width="18px" height="18px"></svg-icon>
                          <p>专业导游讲解服务</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="t-left ">
                    5
                  </div>
                  <div class="t-right">
                    <div class="r-item ">
                      <h3>第5天：自由活动 - 返程</h3>
                      <p>上午自由活动，可根据返程航班时间安排送机服务，结束愉快的三亚之旅。</p>
                      <div class="include">
                        <div class="i-item">
                          <svg-icon name="yes" fill="#00b42a" width="18px" height="18px"></svg-icon>
                          <p>含酒店早餐</p>
                        </div>
                        <div class="i-item">
                          <svg-icon name="yes" fill="#00b42a" width="18px" height="18px"></svg-icon>
                          <p>酒店至机场送机服务</p>
                        </div>
                        <div class="i-item">
                          <svg-icon name="yes " fill="#00b42a" width="18px" height="18px"></svg-icon>
                          <p>根据航班时间灵活安排</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2" tab="包含内容" force-render>
            <div class="cost-include">
              <h2>费用包含</h2>
              <div class="main">
                <div class="m-left">
                  <div class="top">
                    <svg-icon name="yes" fill="#00b42a" width="20px" height="20px"></svg-icon>
                    <h3>已包含项目</h3>
                  </div>
                  <div class="include-list">
                    <div class="item">
                      <svg-icon name="success-line" fill="#00b42a" width="18px" height="18px"></svg-icon>
                      <p>往返经济舱机票（含税）</p>
                    </div>
                    <div class="item">
                      <svg-icon name="success-line" fill="#00b42a" width="18px" height="18px"></svg-icon>
                      <p>4晚四星级酒店住宿（双人标准间）</p>
                    </div>
                    <div class="item">
                      <svg-icon name="success-line" fill="#00b42a" width="18px" height="18px"></svg-icon>
                      <p>行程中所列景点首道门票</p>
                    </div>
                    <div class="item">
                      <svg-icon name="success-line" fill="#00b42a" width="18px" height="18px"></svg-icon>
                      <p>全程含4早餐5午餐4晚餐</p>
                    </div>
                    <div class="item">
                      <svg-icon name="success-line" fill="#00b42a" width="18px" height="18px"></svg-icon>
                      <p>专业中文导游服务</p>
                    </div>
                    <div class="item">
                      <svg-icon name="success-line" fill="#00b42a" width="18px" height="18px"></svg-icon>
                      <p>行程内所列交通服务</p>
                    </div>
                    <div class="item">
                      <svg-icon name="success-line" fill="#00b42a" width="18px" height="18px"></svg-icon>
                      <p>旅行社责任险</p>
                    </div>
                  </div>
                </div>
                <div class="m-right">
                  <div class="top">
                    <svg-icon name="error1" fill="#f53f3f" width="20px" height="20px"></svg-icon>
                    <h3>不包含项目</h3>
                  </div>
                  <div class="no-include-list">
                    <div class="item">
                      <svg-icon name="close" fill="#f53f3f" width="12px" height="12px"></svg-icon>
                      <p>个人旅游意外险（建议购买）</p>
                    </div>
                    <div class="item">
                      <svg-icon name="close" fill="#f53f3f" width="12px" height="12px"></svg-icon>
                      <p>行程中未提及的其他费用</p>
                    </div>
                    <div class="item">
                      <svg-icon name="close" fill="#f53f3f" width="12px" height="12px"></svg-icon>
                      <p>各种私人消费（如酒店内洗衣、电话等）</p>
                    </div>
                    <div class="item">
                      <svg-icon name="close" fill="#f53f3f" width="12px" height="12px"></svg-icon>
                      <p>景点内自费项目及娱乐活动</p>
                    </div>
                    <div class="item">
                      <svg-icon name="close" fill="#f53f3f" width="12px" height="12px"></svg-icon>
                      <p>因天气、交通延阻等不可抗力因素所引致的额外费用</p>
                    </div>
                    <div class="item">
                      <svg-icon name="close" fill="#f53f3f" width="12px" height="12px"></svg-icon>
                      <p>单房差（如需单独入住一间房）</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane key="3" tab="出行须知">
            <div class="travel">
              <h2>出行须知</h2>
              <div class="main">
                <div class="item" v-for="item in 4">
                  <h3>预定须知</h3>
                  <div class="info">
                    <div class="i-item" v-for="item in 4">
                      <div class="item-icon"></div>
                      <p>本产品需至少提前7天预订，请合理安排您的出行时间。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane key="4" tab="用户评价">
            <div class="eval">
              <h2>用户评价</h2>
              <div class="main">
                <div class="m-left">
                  <h1>4.9</h1>
                  <div class="star-list">
                    <svg-icon name="star1" fill="#facc15" width="20px" height="20px" v-for="item in 4"></svg-icon>
                    <svg-icon name="star2" fill="#facc15" width="20px" height="20px"></svg-icon>
                  </div>
                  <p class="person-count">基于128条评价</p>
                  <div class="propress-list">
                    <div class="item">
                      <div class="des">
                        <p>5分</p>
                        <p>85%</p>
                      </div>
                      <a-progress :percent="85" :show-info="false" strokeColor="#facc15" />
                    </div>
                    <div class="item">
                      <div class="des">
                        <p>4分</p>
                        <p>12%</p>
                      </div>
                      <a-progress :percent="12" :show-info="false" strokeColor="#facc15" />
                    </div>
                    <div class="item">
                      <div class="des">
                        <p>3分</p>
                        <p>3%</p>
                      </div>
                      <a-progress :percent="3" :show-info="false" strokeColor="#facc15" />
                    </div>
                    <div class="item">
                      <div class="des">
                        <p>2分</p>
                        <p>0%</p>
                      </div>
                      <a-progress :percent="0" :show-info="false" strokeColor="#facc15" />
                    </div>
                    <div class="item">
                      <div class="des">
                        <p>1分</p>
                        <p>0%</p>
                      </div>
                      <a-progress :percent="0" :show-info="false" strokeColor="#facc15" />
                    </div>
                  </div>
                </div>
                <div class="m-right">
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
                      <a-image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        :width="100" :height="100" />
                      <a-image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        :width="100" :height="100" />
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
                  <a-pagination :total="100" show-less-items hideOnSinglePage pageSize="5" :showSizeChanger="false"
                    style="margin: 0 auto;" />
                </div>
              </div>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
      <div class="recommend">
        <h2>相关推荐</h2>
        <div class="recommend-list">
          <div class="item" v-for="item in 3">
            <div class="img-box">
              <img
                src="https://design.gemcoder.com/staticResource/echoAiSystemImages/368d499bb4dc8382e77af022da5dc051.png"
                alt="">
              <div class="mask">
                <div class="tag">热门</div>
              </div>
            </div>
            <div class="item-info">
              <h4>三亚6日5晚奢华游</h4>
              <div class="star-list">
                <svg-icon name="star1" fill="#facc15" v-for="item in 5"></svg-icon>
                <p>5.0分</p>
              </div>
              <div class="desc">五星级酒店住宿，私人海滩，特色美食，专属导游服务</div>
              <div class="bottom">
                <div class="price">￥2599</div>
                <div class="todetail">查看详细</div>
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
const activeKey = ref('1');
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
:deep(.ant-tabs-tab) {
  font-size: 16px;
  padding: 20px;
}

.container {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  padding-top: 80px;

  .bread {
    padding: 20px 0;
  }

  .discount-info {
    display: flex;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);


    .d-left {
      width: 100%;
      height: 100%;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px 0 0 10px;
      }

      .mask {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        padding: 20px;
        display: flex;
        justify-content: space-between;

        .m-left,
        .m-right {
          width: fit-content;
          height: fit-content;
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 5px 10px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: bold;
        }

        .m-left {
          color: #fff;
          background-color: #ff7d00;
        }

        .m-right {
          background-color: #f3fafe;
          color: #1d2129;
        }

      }
    }

    .d-right {
      width: 100%;
      padding: 0 30px;

      h1 {
        font-weight: bold;
        color: #1d2129;
        margin-bottom: 15px;
      }

      .info {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 15px;

        .score {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .position {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #4e5969;
        }
      }

      .price {
        display: flex;
        gap: 10px;
        margin-bottom: 15px;

        .cur-price {
          font-size: 30px;
          font-weight: bold;
          color: #1e88e5;
        }

        .pre-price {
          align-self: flex-end;
          text-decoration: line-through;
          color: #4e5969;
        }

        .dis-price {
          align-self: flex-end;
          padding: 5px;
          font-size: 14px;
          color: #f64c4c;
          background-color: #feebeb;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .int-box {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        margin-top: 20px;
        margin-bottom: 20px;

        .item {
          background-color: #f2f3f5;
          padding: 15px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 10px;

          p {
            &:nth-of-type(1) {
              color: #4e5969;
              margin-bottom: 5px;
            }
          }
        }
      }

      .remain {
        .tip {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #4e5969;

          span {
            color: #f53f3f;
          }
        }
      }

      .btn {
        display: flex;
        align-items: center;
        gap: 20px;
        font-size: 18px;
        margin-top: 20px;

        div {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-radius: 5px;
        }

        .pay {
          flex: 1;
          height: 50px;
          background-color: #165dff;
          color: #fff;

          &:hover {
            background-color: #2d6dff;
          }
        }

        .toCart {
          flex: 1;
          height: 50px;
          border: 1px solid #165dff;
          color: #165dff;

          &:hover {
            background-color: #f3f7ff;
          }
        }

        .like {
          width: 50px;
          height: 50px;
          border: 1px solid #e5e6eb;

          &:hover {
            background-color: #f2f3f5;
          }
        }

      }

    }
  }

  .tab {

    border-bottom: 1px solid #ccc;
    margin-bottom: 30px;

    .trip {

      h2 {
        font-weight: bold;
        color: #1d2129;
        padding: 0 20px;
      }

      .trip-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 20px 0;

        .item {
          display: flex;
          gap: 20px;

          .t-left {
            width: 25px;
            height: 25px;
            background-color: #e5e6eb;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #4e5969;
          }

          .t-left-active {
            background-color: #165dff;
            color: #fff;
          }

          .t-right {
            flex: 1;

            .r-item {
              color: #5c6675;
              border-left: 4px solid #e5e6eb;
              padding-left: 20px;


              h3 {
                font-weight: bold;
                color: #1d2129;
                font-size: 18px;
              }

              &>p {
                padding: 10px 0;
                font-size: 16px;
              }

              .include {
                display: flex;
                flex-direction: column;
                gap: 10px;
                padding-bottom: 30px;

                .i-item {
                  display: flex;
                  align-items: center;
                  gap: 10px;
                }
              }
            }

            .r-item-active {
              border-color: #165dff;
            }

          }
        }
      }
    }

    .cost-include {
      padding: 0 20px;

      h2 {
        font-weight: bold;
        color: #1d2129;
      }

      .main {
        display: flex;
        gap: 20px;
        margin: 20px 0;

        .m-left {
          flex: 1;

          .top {
            display: flex;
            align-items: center;
            gap: 5px;
            margin-bottom: 20px;

            h3 {
              font-weight: bold;
              align-self: center;
              font-size: 18px;
            }
          }

          .include-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
            color: #4e5969;
            font-size: 16px;

            .item {
              display: flex;
              gap: 10px;
              align-items: center;
            }
          }
        }

        .m-right {
          flex: 1;

          .top {
            display: flex;
            align-items: center;
            gap: 5px;
            margin-bottom: 20px;

            h3 {
              font-weight: bold;
              align-self: center;
              font-size: 18px;
            }
          }

          .no-include-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
            color: #4e5969;
            font-size: 16px;

            .item {
              display: flex;
              gap: 10px;
              align-items: center;
            }
          }
        }
      }
    }

    .travel {
      padding: 0 20px;

      h2 {
        font-weight: bold;
        color: #1d2129;
      }

      .main {
        margin: 20px 0;
        display: flex;
        flex-direction: column;
        gap: 20px;

        .item {
          h3 {
            font-weight: bold;
            color: #4e5969;
            font-size: 18px;
            margin-bottom: 10px;
          }

          .info {
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-size: 16px;
            color: #5c6675;

            .i-item {
              display: flex;
              align-items: center;
              gap: 10px;

              .item-icon {
                width: 6px;
                height: 6px;
                border-radius: 100%;
                background: #4e5969;
              }
            }
          }
        }
      }
    }

    .eval {
      padding: 0 20px;

      h2 {
        font-weight: bold;
        color: #1d2129;
      }

      .main {
        margin: 20px 0;
        display: flex;
        gap: 40px;

        .m-left {
          flex: 1;
          background-color: #f2f3f5;
          padding: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #4e5969;
          border-radius: 10px;

          h1 {
            font-size: 48px;
            font-weight: bold;
            color: #1d2129;
          }

          .star-list {
            display: flex;
            align-items: center;
            gap: 5px;
            margin-bottom: 10px;
          }

          .person-count {
            font-size: 16px;
          }

          .propress-list {
            width: 100%;

            .item {
              .des {
                display: flex;
                align-items: center;
                justify-content: space-between;
              }
            }
          }
        }

        .m-right {
          flex: 2;
          display: flex;
          flex-direction: column;
          gap: 20px;

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
    }
  }

  .recommend {
    padding: 0 20px;

    h2 {
      font-weight: bold;
      color: #1d2129;
    }

    .recommend-list {
      padding: 20px 0;
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
          height: 180px;
          position: relative;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px 10px 0 0;
          }

          .mask {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            padding: 20px;

            .tag {
              width: fit-content;
              height: fit-content;
              padding: 5px 10px;
              border-radius: 5px;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #ff7d00;
              font-size: 12px;
              color: #fff;
            }
          }
        }

        .item-info {
          padding: 20px;

          h4 {
            font-weight: bold;
            font-size: 18px;
            color: #1d2129;
          }

          .star-list {
            display: flex;
            align-items: center;
            margin: 10px 0;

            p {
              margin-left: 10px;
            }
          }

          .desc {
            color: #4e5969;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-bottom: 20px;
          }

          .bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .price {
              font-size: 20px;
              font-weight: bold;
              color: #1e88e5;
            }

            .todetail {
              font-size: 14px;
              color: #165dff;
              cursor: pointer;

              &:hover {
                text-decoration: underline;
              }
            }
          }
        }

        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 8px #ccc;
        }
      }
    }
  }
}
</style>
