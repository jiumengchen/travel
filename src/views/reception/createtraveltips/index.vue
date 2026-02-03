<template>
  <div class="createtraveltips">
    <div class="header">
      <div class="left">
        <h1>创建攻略</h1>
        <p class="desc">
          别让你的旅行故事只留在相册里！创建攻略，把你的路线、玩法和避坑技巧都分享出来。
        </p>
      </div>
      <div class="right">
        <a-button>
          <p>保存为草稿</p>
        </a-button>
        <a-button>
          <p>发布新攻略</p>
        </a-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.createtraveltips {
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
      display: flex;
      align-items: center;
      gap: 10px;

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
}
</style>
