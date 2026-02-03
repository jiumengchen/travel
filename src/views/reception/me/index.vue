<template>
  <div class="me">
    <div class="header">
      <div class="left">
        <h1>欢迎回来，张明！</h1>
        <p class="desc">继续你的旅行探索，发现更多精彩目的地。你的下一次旅行计划准备好了吗？</p>
      </div>
      <div class="right">
        <a-button>
          <svg-icon name="addtrip" fill="#1e88e5" width="18px" height="18px"></svg-icon>
          <p>创建新行程</p>
        </a-button>
      </div>
    </div>
    <a-row class="datashow" :gutter="[20, 30]">
      <a-col :span="8">
        <div class="item">
          <div class="top">
            <div class="left">
              <p>进行中的行程</p>
              <h2>2</h2>
            </div>
            <div class="right" style="background-color: #eff6ff;">
              <svg-icon name="triping" fill="#1e88e5" width="20px" height="20px"></svg-icon>
            </div>
          </div>
          <div class="goDetail">
            <p>查看详细</p>
            <svg-icon name="next" fill="#268ce6" width="12px" height="12px"></svg-icon>
          </div>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="item">
          <div class="top">
            <div class="left">
              <p>即将开始的行程</p>
              <h2>1</h2>
            </div>
            <div class="right" style="background-color: #fff7ed;">
              <svg-icon name="date" fill="#ff9800" width="20px" height="20px"></svg-icon>
            </div>
          </div>
          <div class="goDetail">
            <p>查看详细</p>
            <svg-icon name="next" fill="#268ce6" width="12px" height="12px"></svg-icon>
          </div>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="item">
          <div class="top">
            <div class="left">
              <p>已完成的行程</p>
              <h2>5</h2>
            </div>
            <div class="right" style="background-color: #f0fdf4;">
              <svg-icon name="yes" fill="#4caf50" width="20px" height="20px"></svg-icon>
            </div>
          </div>
          <div class="goDetail">
            <p>查看详细</p>
            <svg-icon name="next" fill="#268ce6" width="12px" height="12px"></svg-icon>
          </div>
        </div>
      </a-col>
    </a-row>
    <a-row class="triping">
      <a-col :span="24">
        <div class="top">
          <h2>进行中的行程</h2>
          <p class="go">查看全部</p>
        </div>
        <div class="main">
          <a-row :gutter="[20, 30]">
            <template v-for="value in 2">
              <a-col :span="6">
                <div class="left">
                  <img src="../../../assets/images/me-img01.png" alt="">
                </div>
              </a-col>
              <a-col :span="18">
                <div class="right">
                  <div class="title">
                    <h2>西安文化探索之旅</h2>
                    <div class="time">
                      <svg-icon name="date" fill="#6b7280"></svg-icon>
                      <p>2025/10/15 - 2025/10/22</p>
                    </div>
                  </div>
                  <div class="position">
                    <svg-icon name="position" fill="#ef4444"></svg-icon>
                    <p>西安, 中国</p>
                    <div class="cricle"></div>
                    <svg-icon name="clock" fill="#9ca3af"></svg-icon>
                    <p>8天7晚</p>
                  </div>
                  <p class="de">探索西安的历史文化遗产，包括兵马俑、大雁塔、古城墙等著名景点，品尝正宗的陕西美食。</p>
                  <div class="typeTag">
                    <a-tag color="#f3f4f6" style="color: #4b5563;">历史文化</a-tag>
                    <a-tag color="#f3f4f6" style="color: #4b5563;">美食探索</a-tag>
                    <a-tag color="#f3f4f6" style="color: #4b5563;">古迹</a-tag>
                  </div>
                  <div class="bottom">
                    <div class="userimg">
                      <img src="../../../assets/images/index/user-01.png" alt="">
                      <img src="../../../assets/images/index/user-01.png" alt="">
                      <img src="../../../assets/images/index/user-01.png" alt="">
                      <div class="last">+1</div>
                    </div>
                    <div class="btnBox">
                      <a-button class="edit">
                        <svg-icon name="edit" fill="#263238"></svg-icon>
                        <p>编辑</p>
                      </a-button>
                      <a-button class="see">
                        <svg-icon name="myfootprint" fill="#fff"></svg-icon>
                        <p>查看行程</p>
                      </a-button>
                    </div>
                  </div>
                </div>
              </a-col>
            </template>
          </a-row>
        </div>
      </a-col>
    </a-row>
    <a-row class="collect">
      <a-col :span="24">
        <div class="top">
          <h2>收藏的目的地</h2>
          <p class="go">查看全部</p>
        </div>
        <a-row class="context" :gutter="[20, 20]">
          <a-col v-for="value in 3" :span="8">
            <div class="item">
              <div class="imgBox">
                <img src="../../../assets/images/me-img01.png" alt="">
                <div class="mask">
                  <div class="icon">
                    <svg-icon name="like-select" fill="#ef4444" width="18px" height="18px"></svg-icon>
                  </div>
                </div>
              </div>
              <div class="main">
                <h3>北京</h3>
                <div class="position">
                  <svg-icon name="position" fill="#6b7280"></svg-icon>
                  <p>中国 · 华北</p>
                </div>
                <div class="comm">
                  <div class="star">
                    <svg-icon name="star1" fill="#facc15"></svg-icon>
                    <svg-icon name="star1" fill="#facc15"></svg-icon>
                    <svg-icon name="star1" fill="#facc15"></svg-icon>
                    <svg-icon name="star1" fill="#facc15"></svg-icon>
                    <svg-icon name="star2" fill="#facc15"></svg-icon>
                  </div>
                  <p>(2.4k 评价)</p>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <a-row class="guide">
      <a-col :span="24">
        <div class="top">
          <h2>我的旅行攻略</h2>
          <a-button class="go">
            <PlusOutlined />
            <p>发布新攻略</p>
          </a-button>
        </div>
        <div class="main">
          <a-row :gutter="[20, 30]" class="context">
            <template v-for="item in 2">
              <a-col :span="6">
                <div class="left">
                  <img src="../../../assets/images/me-img01.png" alt="">
                </div>
              </a-col>
              <a-col :span="18">
                <div class="right">
                  <div class="head">
                    <h2>成都美食全攻略:从街边小吃到高端川菜</h2>
                    <div class="btn">
                      <svg-icon name="edit1" fill="#6b7280" width="18px" height="18px"></svg-icon>
                      <svg-icon name="delete" fill="#6b7280" width="18px" height="18px"></svg-icon>
                    </div>
                  </div>
                  <div class="message">
                    <svg-icon name="clock" fill="#6b7280"></svg-icon>
                    <p>发布于 2025/08/08</p>
                    <div class="circle"></div>
                    <svg-icon name="eye" fill="#6b7280"></svg-icon>
                    <p>1.2k 阅读</p>
                    <div class="circle"></div>
                    <svg-icon name="comment" fill="#6b7280"></svg-icon>
                    <p>36 评论</p>
                  </div>
                  <div class="desc">这篇攻略详细介绍了成都必吃的美食，从地道的火锅、串串到各种特色小吃，附带店铺推荐和实用小贴士</div>
                  <div class="typeTag">
                    <a-tag color="#f3f4f6">美食</a-tag>
                    <a-tag color="#f3f4f6">成都</a-tag>
                    <a-tag color="#f3f4f6">攻略</a-tag>
                  </div>
                </div>
              </a-col>
            </template>
          </a-row>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue';
import { onMounted, nextTick } from 'vue';
</script>

<style scoped lang="scss">
.me {
  .header {
    padding: 30px 20px;
    background: linear-gradient(to top right, #1e88e5, #3a82f5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;

    .left {
      h1 {
        padding: 10px 0 20px;
        font-size: 45px;
        font-weight: bold;
        color: #fff;
      }

      .desc {
        color: #e6f1fd;
        font-size: 16px;
      }
    }

    .right {
      button {
        display: flex;
        align-items: center;
        gap: 5px;
        color: #1e88e5;
        height: 45px;
        font-size: 16px;
        padding: 10px 25px;
        border-radius: 10px;

        &:hover {
          background-color: #f3f4f6;
        }
      }
    }
  }

  .datashow {
    margin-top: 25px;

    .item {
      padding: 20px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba($color: #ccc, $alpha: 0.4);
      transition: all .5s;

      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left {
          color: #6b7280;

          p {
            font-size: 15px;
          }

          h2 {
            font-size: 28px;
            font-weight: bold;
            color: #263238;
            padding: 10px 0;
          }
        }

        .right {
          width: 40px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }
      }

      .goDetail {
        display: flex;
        color: #268ce6;
        align-items: center;
        gap: 2px;
        cursor: pointer;
        margin-top: 10px;
      }

      &:hover {
        transform: translateY(-2%);
        box-shadow: 0 4px 8px #ccc;
      }
    }
  }

  .triping {
    margin-top: 25px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba($color: #ccc, $alpha: .4);
    border-radius: 10px;

    .top {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid #f3f4f6;

      h2 {
        font-size: 20px;
        color: #263238;
        font-weight: bold;
      }

      .go {
        color: #1e88e5;
        cursor: pointer;
      }
    }

    .main {
      padding: 20px;

      .left {
        height: 100%;

        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }

      .right {
        .title {
          display: flex;
          align-items: center;
          justify-content: space-between;

          h2 {
            font-size: 19px;
            font-weight: bold;
            color: #263238;
            cursor: pointer;

            &:hover {
              color: #1e88e5;
            }
          }

          .time {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #6b7280;
          }
        }

        .position {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #263238;
          padding: 15px 0;

          .cricle {
            width: 4px;
            height: 4px;
            background-color: #263238;
            border-radius: 100%;
          }
        }

        .de {
          font-size: 16px;
          color: #59626f;
          padding: 5px 0;
        }

        .typeTag {
          padding: 20px 0;

          span {
            border-radius: 10px;
            padding: 2px 10px;
            margin-right: 15px;
          }
        }

        .bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .userimg {
            display: flex;
            align-items: center;

            img {
              width: 30px;
              height: 30px;
              border-radius: 100%;
              border: 1px solid #fff;
              object-fit: cover;
            }

            .last {
              width: 30px;
              height: 30px;
              border-radius: 100%;
              background-color: #f3f4f6;
              border: 1px solid #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #58616e;
              font-size: 12px;
            }
          }

          .btnBox {
            display: flex;
            align-items: center;
            gap: 10px;

            button {
              display: flex;
              align-items: center;
              gap: 5px;

              &:nth-child(1) {
                &:hover {
                  background-color: #f9fafb;
                  color: #263238;
                  border-color: #e5e7eb;
                }
              }

              &:nth-child(2) {
                background-color: #1e88e5;
                color: #fff;

                &:hover {
                  background-color: #3494e8;
                }
              }
            }
          }
        }

      }
    }
  }

  .collect {
    margin-top: 25px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba($color: #ccc, $alpha: .4);
    border-radius: 10px;

    .top {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid #f3f4f6;

      h2 {
        font-size: 20px;
        color: #263238;
        font-weight: bold;
      }

      .go {
        color: #1e88e5;
        cursor: pointer;
      }
    }

    .context {
      padding: 20px;

      .item {
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba($color: #ccc, $alpha: .2);
        background-color: #fff;
        transition: all .5s;

        .imgBox {
          width: 100%;
          height: 200px;
          position: relative;
          border-radius: 10px 10px 0 0;
          overflow: hidden;

          img {
            border-radius: 10px 10px 0 0;
            width: 100%;
            height: 100%;
            transition: all .5s;
          }

          .mask {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            padding: 10px;
            display: flex;
            justify-content: flex-end;

            .icon {
              width: 30px;
              height: 38px;
              background-color: #f6f6f6;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 20px;
              cursor: pointer;

              &:hover {
                background-color: #ffffff;
              }
            }
          }
        }

        .main {
          padding: 15px;

          h3 {
            font-weight: bold;
            color: #263238;
          }

          .position {
            display: flex;
            align-items: center;
            gap: 2px;
            color: #6b7280;
            padding: 10px 0;
          }

          .comm {
            display: flex;
            align-items: center;
            gap: 5px;
            color: #6b7280;
          }
        }

        &:hover {
          box-shadow: 0 4px 8px #ccc;
        }

        &:hover img {
          transform: scale(1.05);
        }
      }
    }
  }

  .guide {
    margin-top: 25px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba($color: #ccc, $alpha: .4);
    border-radius: 10px;

    .top {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid #f3f4f6;

      h2 {
        font-size: 20px;
        color: #263238;
        font-weight: bold;
      }

      .go {
        color: #1e88e5;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        background-color: #e8f3fc;
        border: none;
        height: 40px;

        &:hover {
          background-color: #d2e7fa;
        }
      }
    }

    .main {
      padding: 20px;

      .context {
        // height: 100%;

        .left {
          img {
            width: 100%;
            height: 185px;
            border-radius: 10px;
          }
        }

        .right {
          .head {
            display: flex;
            align-items: center;
            justify-content: space-between;

            h2 {
              font-size: 19px;
              color: #263238;
              font-weight: bold;

              &:hover {
                color: #1e88e5;
                cursor: pointer;
              }
            }

            .btn {
              display: flex;
              align-items: center;
              gap: 10px;

              svg {
                cursor: pointer;
              }
            }
          }

          .message {
            display: flex;
            align-items: center;
            gap: 5px;
            color: #6b7280;
            font-size: 15px;
            padding: 15px 0;

            .circle {
              width: 4px;
              height: 4px;
              border-radius: 100%;
              background-color: #6b7280;
              margin: 0 5px;
            }
          }

          .desc {
            color: #4b5563;
            font-size: 17px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-right: 20px;
          }

          .typeTag {
            margin-top: 20px;

            span {
              color: #4b5563;
              border-radius: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
