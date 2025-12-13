<template>
  <div class="container">
    <div class="top-title">
      <h1>AI旅行顾问</h1>
      <p>有任何旅行问题？我们的AI旅行顾问随时为您提供个性化的旅行建议和方案</p>
    </div>
    <div class="ai-chat">
      <!-- <div class="left">
        <div class="title">
          <h3>历史对话</h3>
          <div class="deleteBtn">
            <svg-icon name="delete" fill="#86909c" width="18px" height="18px"></svg-icon>
            <p>清空</p>
          </div>
        </div>
        <div class="chat-history">
          <div class="item" :class="{ active: true }">
            <div class="title">广东省汕尾市5日游推荐</div>
            <div class="content">
              我计划下个月去汕尾有什么推荐好玩的我计划下个月去汕尾有什么推荐好玩的我计划下个月去汕尾有什么推荐好玩的我计划下个月去汕尾有什么推荐好玩的我计划下个月去汕尾有什么推荐好玩的我计划下个月去汕尾有什么推荐好玩的
            </div>
          </div>
          <div class="item">
            <div class="title">广东省汕尾市5日游推荐</div>
            <div class="content">
              我计划下个月去汕尾有什么推荐好玩的我计划下个月去汕尾有什么推荐好玩的我计划下个月去汕尾有什么推荐好玩的我计划下个月去汕尾有什么推荐好玩的我计划下个月去汕尾有什么推荐好玩的我计划下个月去汕尾有什么推荐好玩的
            </div>
          </div>
        </div>
        <div class="hot-quest">
          <h4>热门问题</h4>
          <div class="item">
            <svg-icon name="expand" fill="#86909c" width="18px" height="18px"></svg-icon>
            <p>如何规划一次完美的蜜月旅行</p>
          </div>
          <div class="item">
            <svg-icon name="expand" fill="#86909c" width="18px" height="18px"></svg-icon>
            <p>如何规划一次完美的蜜月旅行</p>
          </div>
          <div class="item">
            <svg-icon name="expand" fill="#86909c" width="18px" height="18px"></svg-icon>
            <p>如何规划一次完美的蜜月旅行</p>
          </div>
        </div>
      </div> -->
      <div class="right">
        <div class="header-info">
          <div class="ai-img">
            <svg-icon name="robot" fill="#fff" width="25px" height="25px"></svg-icon>
          </div>
          <div class="ai-info">
            <h3>旅行智能AI</h3>
            <div class="online">
              <div class="tip"></div>
              <p>在线,通常在几分钟内回复</p>
            </div>
          </div>
        </div>
        <div class="message" ref="aichatRef">
          <div class="chat-item">
            <div class="user-img"><svg-icon name="robot" fill="#fff" width="20px" height="20px"></svg-icon></div>
            <div class="chat-msg chat-msg-left">
              您好！我是旅行智荐AI，很高兴为您服务。请问有什么旅行相关的问题需要帮助吗？
              <div class="select-quest">
                <div>帮我规划一下广东省旅游</div>
                <div>海岛度假推荐</div>
                <div>国内自驾游路线</div>
                <div>特色旅游目的地</div>
              </div>
            </div>
          </div>
          <div class="chat-item" :class="{ 'chat-item-right': item.userId === 2025 }" v-for="(item, index) in chatArr"
            :key="index">
            <div class="user-img"><svg-icon name="robot" fill="#fff" width="20px" height="20px"></svg-icon></div>
            <div class="chat-msg" :class="item.userId === 2025 ? 'chat-msg-right' : 'chat-msg-left'">
              {{ item.message }}
              <p class="time">{{ item.time }}</p>
            </div>
          </div>
        </div>
        <div class="send-message">
          <a-textarea class="send-info" @change="handleMsg" :value="msgValue" @keydown.prevent.enter="sendMsg" />
          <div class="send-btn" @click="sendMsg">
            <svg-icon name="sendmsg" fill="#fff" width="25px" height="25px"></svg-icon>
          </div>
        </div>
      </div>
    </div>
    <ContactWe></ContactWe>
    <FooterBar></FooterBar>
  </div>
</template>

<script setup lang="ts">
import ContactWe from '@/components/ContactWe/index.vue'
import FooterBar from '@/components/FooterBar/index.vue'
import axios from 'axios';
import { nanoid } from 'nanoid';
import { onMounted, onUnmounted, ref, nextTick } from 'vue';
const props = defineProps(['headerRef']);
const chatArr = ref<any>([])
const msgValue = ref('');
const aichatRef = ref<HTMLElement | null>(null);
const handleMsg = (e: any) => {
  msgValue.value = e.target.value
}
const sendMsg = async () => {
  console.log(msgValue.value)
  if (msgValue.value.trim() == '') {
    return;
  }
  chatArr.value.push({
    id: nanoid(),
    userId: 2025,
    message: msgValue.value,
    time: '10:30'
  })
  streamText(msgValue.value)
  msgValue.value = '';
  nextTick(() => {
    aichatRef.value?.scrollTo({
      top: aichatRef.value?.scrollHeight
    })
  })
}
const streamText = async (content: string) => {
  chatArr.value.push({
    id: nanoid(),
    userId: -1,
    message: '',
    time: '10:30'
  })
  let offset = 0;
  await axios.post('http://127.0.0.1:3000/api/aichat', { content }, {
    onDownloadProgress(event: any) {
      const xhr = event.event.target;
      const { responseText } = xhr;
      const chunk = responseText.substring(offset)
      chatArr.value[chatArr.value.length - 1].message += chunk;
      offset = responseText.length
      aichatRef.value?.scrollTo({
        top: aichatRef.value?.scrollHeight
      })
    }
  })
  aichatRef.value?.scrollTo({
    top: aichatRef.value?.scrollHeight
  })
  console.log('我执行完了')
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
  padding-top: 80px;

  .top-title {
    width: 100%;
    margin-top: 40px;
    text-align: center;

    h1 {
      color: #1d2129;
      font-weight: bold;
      font-size: 36px;
      margin-bottom: 20px;
    }

    p {
      font-size: 20px;
      color: #86909c;
    }
  }

  .ai-chat {
    padding: 0 200px;
    display: flex;
    gap: 30px;
    margin-top: 40px;
    margin-bottom: 100px;

    .left {
      flex: 1;
      background-color: #fff;
      padding: 20px;
      border-radius: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h3 {
          color: #1d2129;
          font-weight: bold;
          font-size: 16px;
        }

        .deleteBtn {
          cursor: pointer;
          display: flex;
          align-items: center;
          color: #86909c;
          font-size: 14px;
        }
      }

      .chat-history {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        height: 200px;
        overflow: auto;

        .item {
          padding: 15px 10px;
          background-color: #f5f7fa;
          border-radius: 10px;
          cursor: pointer;


          .title {
            font-size: 15px;
            margin-bottom: 10px;
          }

          .content {
            width: 100%;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 12px;
            color: #86909c;
            line-height: 20px;
          }

          &:hover {
            background-color: #f3f4f6;
          }
        }

        .active {
          background-color: #f3f7ff;
          border-left: 3px solid #165dff;

          &:hover {
            background-color: #e7eeff;
          }
        }
      }

      .hot-quest {
        width: 100%;
        margin-top: 15px;
        border-top: 1px solid #eee;
        padding-top: 20px;

        h4 {
          color: #1d2129;
          font-weight: bold;
          font-size: 16px;
          margin-bottom: 20px;
        }

        .item {
          padding: 5px 10px;
          display: flex;
          align-items: center;
          cursor: pointer;
          font-size: 14px;
          color: #86909c;
          border-radius: 5px;
          margin-bottom: 10px;
          gap: 5px;

          &:hover {
            background-color: #f5f7fa;
            color: #165dff;
          }
        }
      }
    }

    .right {
      flex: 2;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      padding: 20px;

      .header-info {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
        margin-bottom: 15px;

        .ai-img {
          width: 45px;
          height: 45px;
          background-color: #165dff;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ai-info {
          h3 {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .online {
            display: flex;
            align-items: center;
            gap: 5px;
            color: #86909c;
            font-size: 13px;

            .tip {
              width: 8px;
              height: 8px;
              background-color: #22c55e;
              border-radius: 100%;
            }
          }
        }
      }

      .message {
        width: 100%;
        height: 400px;
        overflow: auto;
        display: flex;
        flex-direction: column;
        gap: 40px;

        .chat-item {
          display: flex;
          gap: 10px;

          .user-img {
            width: 35px;
            height: 35px;
            background-color: #165dff;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100%;
          }

          .chat-msg {
            min-width: 60px;
            max-width: 80%;
            padding: 15px;
            line-height: 25px;
            position: relative;
            word-break: break-all;

            .time {
              color: #86909c;
              font-size: 12px;
              position: absolute;
              bottom: -25px;
            }

            .select-quest {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 10px;
              margin-top: 10px;

              div {
                background-color: #fff;
                border: 1px solid #d0dfff;
                text-align: center;
                padding: 5px 0;
                border-radius: 10px;
                color: #165dff;
                cursor: pointer;

                &:hover {
                  background-color: #eaeffa;
                }
              }
            }
          }

          .chat-msg-left {
            background-color: #f5f7fa;
            border-radius: 0 10px 10px 10px;
            color: #4e5980;

            .time {
              left: 5px;
            }
          }

          .chat-msg-right {
            background-color: #165dff;
            color: #fff;
            border-radius: 10px 0 10px 10px;

            .time {
              right: 5px;
            }
          }
        }

        .chat-item-right {
          flex-direction: row-reverse;
        }
      }

      .send-message {
        width: 100%;
        padding-top: 20px;
        margin-top: 15px;
        border-top: 1px solid #eee;
        display: flex;
        align-items: center;
        gap: 10px;

        .send-btn {
          width: 50px;
          height: 45px;
          background-color: #165dff;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #fff;
          font-size: 14px;

          &:hover {
            background-color: #2d6dff;
          }
        }
      }
    }
  }
}
</style>
