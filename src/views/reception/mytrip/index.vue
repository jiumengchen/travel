<template>
  <div class="mytrip">
    <div class="header">
      <div class="left">
        <h1>我的行程</h1>
        <p class="desc">继续你的旅行探索，发现更多精彩目的地。你的下一次旅行计划准备好了吗？</p>
      </div>
      <div class="right">
        <a-button>
          <svg-icon name="addtrip" fill="#1e88e5" width="18px" height="18px"></svg-icon>
          <p>创建新行程</p>
        </a-button>
      </div>
    </div>
    <div class="select">
      <a-row class="switch">
        <a-col :span="6">
          <div class="item" :class="{ active: state == 0 }" @click="switchMenu(0)">
            全部行程
          </div>
        </a-col>
        <a-col :span="6">
          <div class="item" :class="{ active: state == 1 }" @click="switchMenu(1)">
            进行中 (2)
          </div>
        </a-col>
        <a-col :span="6">
          <div class="item" :class="{ active: state == 2 }" @click="switchMenu(2)">
            即将开始 (1)
          </div>
        </a-col>
        <a-col :span="6">
          <div class="item" :class="{ active: state == 3 }" @click="switchMenu(3)">
            已完成 (5)
          </div>
        </a-col>
      </a-row>
      <a-row class="fillter" :gutter="[20, 20]">
        <a-col :span="14">
          <a-input size="large" placeholder="搜索行程...">
            <template #prefix>
              <svg-icon name="search" fill="#9ca3af"></svg-icon>
            </template>
          </a-input>
        </a-col>
        <a-col :span="5">
          <a-select size="large" style="width: 100%;"></a-select>
        </a-col>
        <a-col :span="5">
          <a-select size="large" style="width: 100%;"></a-select>
        </a-col>
      </a-row>
    </div>
    <a-row class="triping" v-show="state == 0 || state == 1">
      <a-col :span="24">
        <div class="top">
          <div class="breathe"></div>
          <h2>进行中的行程 (3)</h2>
        </div>
        <a-row class="context" :gutter="[20, 30]" align="middle">
          <template v-for="value in 3">
            <a-col :span="8">
              <div class="left">
                <img src="../../../assets/images/me-img01.png" alt="">
              </div>
            </a-col>
            <a-col :span="16">
              <div class="right">
                <div class="head">
                  <div class="title">
                    <a-tag color="#fee2e2">进行中</a-tag>
                    <h2>西安文化探索之旅</h2>
                  </div>
                  <div class="btn">
                    <svg-icon name="edit1" fill="#6b7280" width="18px" height="18px"></svg-icon>
                    <svg-icon name="delete" fill="#6b7280" width="18px" height="18px"></svg-icon>
                  </div>
                </div>
                <div class="position">
                  <svg-icon name="position" fill="#6b7280"></svg-icon>
                  <p>西安，中国</p>
                  <div class="circle"></div>
                  <svg-icon name="date" fill="#6b7280"></svg-icon>
                  <p>2023年10月18日至2023年10月25日</p>
                </div>
                <div class="des">游览桂林山水甲天下的美丽景色，乘船游览漓江，欣赏阳朔西街夜景，体验当地民俗文化</div>
                <div class="typeTag">
                  <a-tag color="#f3f4f6">历史文化</a-tag>
                  <a-tag color="#f3f4f6">美食探索</a-tag>
                  <a-tag color="#f3f4f6">古迹</a-tag>
                </div>
                <div class="bottom">
                  <div class="intr">7 天行程 | 5 个景点 | 4 晚住宿</div>
                  <a-button>查看详细</a-button>
                </div>
              </div>
            </a-col>
          </template>
        </a-row>
      </a-col>
    </a-row>
    <a-row class="betrip" v-show="state == 0 || state == 2">
      <a-col :span="24">
        <div class="top">
          <div class="breathe"></div>
          <h2>即将开始的行程 (3)</h2>
        </div>
        <a-row class="context" :gutter="[20, 30]" align="middle">
          <template v-for="value in 3">
            <a-col :span="8">
              <div class="left">
                <img src="../../../assets/images/me-img01.png" alt="">
              </div>
            </a-col>
            <a-col :span="16">
              <div class="right">
                <div class="head">
                  <div class="title">
                    <a-tag color="#fef9c3">即将开始</a-tag>
                    <h2>西安文化探索之旅</h2>
                  </div>
                  <div class="btn">
                    <svg-icon name="edit1" fill="#6b7280" width="18px" height="18px"></svg-icon>
                    <svg-icon name="delete" fill="#6b7280" width="18px" height="18px"></svg-icon>
                  </div>
                </div>
                <div class="position">
                  <svg-icon name="position" fill="#6b7280"></svg-icon>
                  <p>西安，中国</p>
                  <div class="circle"></div>
                  <svg-icon name="date" fill="#6b7280"></svg-icon>
                  <p>2023年10月18日至2023年10月25日</p>
                </div>
                <div class="des">游览桂林山水甲天下的美丽景色，乘船游览漓江，欣赏阳朔西街夜景，体验当地民俗文化</div>
                <div class="typeTag">
                  <a-tag color="#f3f4f6">历史文化</a-tag>
                  <a-tag color="#f3f4f6">美食探索</a-tag>
                  <a-tag color="#f3f4f6">古迹</a-tag>
                </div>
                <div class="bottom">
                  <div class="intr">
                    <p>7 天行程 | 5 个景点 | 4 晚住宿</p>
                    <div class="dela">
                      <svg-icon name="alarm" fill="#6b7280"></svg-icon>
                      <p>还有15天开始</p>
                    </div>
                  </div>
                  <div class="btn">
                    <a-button>修改行程</a-button>
                    <a-button>查看详细</a-button>
                  </div>
                </div>
              </div>
            </a-col>
          </template>
        </a-row>
      </a-col>
    </a-row>
    <a-row class="triped" v-show="state == 0 || state == 3">
      <a-col :span="24">
        <div class="top">
          <div class="breathe"></div>
          <h2>已完成的行程 (3)</h2>
        </div>
        <a-row class="context" :gutter="[20, 30]" align="middle">
          <template v-for="value in 3">
            <a-col :span="8">
              <div class="left">
                <img src="../../../assets/images/me-img01.png" alt="">
              </div>
            </a-col>
            <a-col :span="16">
              <div class="right">
                <div class="head">
                  <div class="title">
                    <a-tag color="#22c55e">已完成</a-tag>
                    <h2>西安文化探索之旅</h2>
                  </div>
                  <div class="btn">
                    <svg-icon name="edit1" fill="#6b7280" width="18px" height="18px"></svg-icon>
                    <svg-icon name="delete" fill="#6b7280" width="18px" height="18px"></svg-icon>
                  </div>
                </div>
                <div class="position">
                  <svg-icon name="position" fill="#6b7280"></svg-icon>
                  <p>西安，中国</p>
                  <div class="circle"></div>
                  <svg-icon name="date" fill="#6b7280"></svg-icon>
                  <p>2023年10月18日至2023年10月25日</p>
                </div>
                <div class="des">游览桂林山水甲天下的美丽景色，乘船游览漓江，欣赏阳朔西街夜景，体验当地民俗文化</div>
                <div class="typeTag">
                  <a-tag color="#f3f4f6">历史文化</a-tag>
                  <a-tag color="#f3f4f6">美食探索</a-tag>
                  <a-tag color="#f3f4f6">古迹</a-tag>
                </div>
                <div class="bottom">
                  <div class="intr">
                    <p>7 天行程 | 5 个景点 | 4 晚住宿</p>
                    <div class="deal">
                      <svg-icon name="yes" fill="#22c55e"></svg-icon>
                      <p>已完成1个月</p>
                    </div>
                  </div>
                  <a-button>查看详细</a-button>
                </div>
              </div>
            </a-col>
          </template>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const state = ref<number>(0);
const switchMenu = (num: number) => {
  state.value = num;
}
</script>

<style scoped lang="scss">
.mytrip {
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

  .select {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba($color: #ccc, $alpha: .4);

    .switch {
      margin-top: 25px;

      .item {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        padding: 20px 0;
        border-bottom: 1px solid #e5e7eb;
        cursor: pointer;
        color: #6b7280;

        &.active {
          border-bottom: 2px solid #1e88e5;
          color: #1e88e5;
        }
      }
    }

    .fillter {
      padding: 20px;
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
      border-bottom: 2px solid #f3f4f6;
      gap: 10px;

      .breathe {
        transition: all .5s;
        width: 10px;
        height: 10px;
        border-radius: 100%;
        animation-name: breatheRed;
        animation-duration: 2s;
        animation-iteration-count: infinite;
      }

      h2 {
        font-size: 20px;
        color: #263238;
        font-weight: bold;
      }
    }

    .context {
      padding: 20px;

      &:nth-last-child(1) {
        padding-bottom: 30px;
      }

      .left {
        img {
          width: 100%;
          border-radius: 10px 0 0 10px;
        }
      }

      .right {
        .head {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .btn {
            display: flex;
            align-items: center;
            gap: 10px;

            svg {
              cursor: pointer;
            }
          }

          .title {
            span {
              margin-bottom: 10px;
              color: #dc2626;
            }

            h2 {
              font-weight: bold;
              color: #263238;
            }
          }
        }

        .position {
          display: flex;
          gap: 5px;
          color: #6b7280;
          font-size: 16px;
          padding: 15px 0;
        }

        .des {
          font-size: 17px;
          color: #67707b;
        }

        .typeTag {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 20px 0;

          span {
            color: #4b5563;
            border-radius: 10px;
          }

        }

        .bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #6b7280;

          button {
            border: none;
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

  .betrip {
    margin-top: 25px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba($color: #ccc, $alpha: .4);
    border-radius: 10px;

    .top {
      padding: 20px;
      display: flex;
      align-items: center;
      border-bottom: 2px solid #f3f4f6;
      gap: 10px;

      .breathe {
        transition: all .5s;
        width: 10px;
        height: 10px;
        border-radius: 100%;
        animation-name: breatheYellow;
        animation-duration: 2s;
        animation-iteration-count: infinite;
      }

      h2 {
        font-size: 20px;
        color: #263238;
        font-weight: bold;
      }
    }

    .context {
      padding: 20px;

      &:nth-last-child(1) {
        padding-bottom: 30px;
      }

      .left {
        img {
          width: 100%;
          border-radius: 10px 0 0 10px;
        }
      }

      .right {
        .head {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .btn {
            display: flex;
            align-items: center;
            gap: 10px;

            svg {
              cursor: pointer;
            }
          }

          .title {
            span {
              margin-bottom: 10px;
              color: #ca8a04;
            }

            h2 {
              font-weight: bold;
              color: #263238;
            }
          }
        }

        .position {
          display: flex;
          gap: 5px;
          color: #6b7280;
          font-size: 16px;
          padding: 15px 0;
        }

        .des {
          font-size: 17px;
          color: #67707b;
        }

        .typeTag {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 20px 0;

          span {
            color: #4b5563;
            border-radius: 10px;
          }

        }

        .bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #6b7280;

          .intr {
            .dela {
              display: flex;
              margin-top: 10px;
              gap: 5px;
            }
          }

          .btn {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          button {
            &:nth-child(2) {
              border: none;
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

  .triped {
    margin-top: 25px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba($color: #ccc, $alpha: .4);
    border-radius: 10px;

    .top {
      padding: 20px;
      display: flex;
      align-items: center;
      border-bottom: 2px solid #f3f4f6;
      gap: 10px;

      .breathe {
        transition: all .5s;
        width: 10px;
        height: 10px;
        border-radius: 100%;
        animation-name: breatheGreen;
        animation-duration: 2s;
        animation-iteration-count: infinite;
      }

      h2 {
        font-size: 20px;
        color: #263238;
        font-weight: bold;
      }
    }

    .context {
      padding: 20px;

      &:nth-last-child(1) {
        padding-bottom: 30px;
      }

      .left {
        img {
          width: 100%;
          border-radius: 10px 0 0 10px;
        }
      }

      .right {
        .head {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .btn {
            display: flex;
            align-items: center;
            gap: 10px;

            svg {
              cursor: pointer;
            }
          }

          .title {
            span {
              margin-bottom: 10px;
              color: #ffffff;
            }

            h2 {
              font-weight: bold;
              color: #263238;
            }
          }
        }

        .position {
          display: flex;
          gap: 5px;
          color: #6b7280;
          font-size: 16px;
          padding: 15px 0;
        }

        .des {
          font-size: 17px;
          color: #67707b;
        }

        .typeTag {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 20px 0;

          span {
            color: #4b5563;
            border-radius: 10px;
          }

        }

        .bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #6b7280;

          .intr {
            .deal {
              margin-top: 10px;
              display: flex;
              align-items: center;
              gap: 5px;

              p {
                color: #22c55e;
                font-weight: bold;
              }
            }
          }

          button {
            border: none;
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

@keyframes breatheRed {
  0% {
    background-color: rgba(243, 149, 149, 0.3);
    box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
  }

  50% {
    background-color: rgba(239, 68, 68, 0.8);
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.9);
  }

  100% {
    background-color: rgba(243, 149, 149, 0.3);
    box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
  }
}

@keyframes breatheYellow {
  0% {
    background-color: rgba(250, 240, 160, 0.3);
    box-shadow: 0 0 10px rgba(234, 179, 8, 0.5);
  }

  50% {
    background-color: rgba(234, 179, 8, 0.8);
    box-shadow: 0 0 20px rgba(234, 179, 8, 0.9);
  }

  100% {
    background-color: rgba(250, 240, 160, 0.3);
    box-shadow: 0 0 10px rgba(234, 179, 8, 0.5);
  }
}


@keyframes breatheGreen {
  0% {
    background-color: rgba(167, 243, 167, 0.3);
    box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
  }

  50% {
    background-color: rgba(34, 197, 94, 0.8);
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.9);
  }

  100% {
    background-color: rgba(167, 243, 167, 0.3);
    box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
  }
}
</style>
