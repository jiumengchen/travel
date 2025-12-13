<template>
  <div class="userinfo">
    <div class="header">
      <div class="left">
        <h1>编辑个人资料</h1>
        <p class="desc">继续你的旅行探索，发现更多精彩目的地。你的下一次旅行计划准备好了吗？</p>
      </div>
      <div class="right">
        <a-button>
          <p>取消</p>
        </a-button>
        <a-button>
          <p>保存</p>
        </a-button>
      </div>
    </div>
    <div class="base-info">
      <h3>基本信息</h3>
      <a-form class="form">
        <a-form-item>
          <p>昵称</p>
          <a-input placeholder="请输入你的昵称" size="large"></a-input>
        </a-form-item>
        <a-form-item>
          <p>性别</p>
          <a-select size="large"></a-select>
        </a-form-item>
        <a-form-item>
          <p>电子邮箱</p>
          <a-input placeholder="请输入你的邮箱" size="large"></a-input>
        </a-form-item>
        <a-form-item>
          <p>手机号码</p>
          <a-input placeholder="请输入你的手机号码" size="large"></a-input>
        </a-form-item>
      </a-form>
      <div class="textarea">
        <p>个人简介</p>
        <a-textarea placeholder="请输入个人简介..." size="large"></a-textarea>
      </div>
    </div>
    <div class="trave-style">
      <h3>旅行偏好</h3>
      <p>旅行风格</p>
      <div class="style-box">
        <div class="item" v-for="item in 8">
          <a-checkbox>探险</a-checkbox>
        </div>
      </div>
      <p>预算范围</p>
      <div class="budget">
        <div class="item" v-for="(item, index) in 3">
          <a-radio :checked="budgetType == index" @change="budgetType = index">经济型</a-radio>
        </div>
      </div>
      <p>最喜欢的目的地</p>
      <a-input placeholder="请输入喜欢的目的地" size="large"></a-input>
      <p>旅行同伴偏好</p>
      <a-select size="large" style="width: 100%;" v-model:value="travePartType">
        <a-select-option value="1">独自旅行</a-select-option>
        <a-select-option value="2">与朋友同行</a-select-option>
        <a-select-option value="3">与家人同行</a-select-option>
        <a-select-option value="4">情侣旅行</a-select-option>
        <a-select-option value="5">团体旅行</a-select-option>
      </a-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const budgetType = ref<number>(-1);
const travePartType = ref<string>('1');
</script>

<style scoped lang="scss">
.userinfo {
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

  .base-info {
    margin-top: 30px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba($color: #ccc, $alpha: .4);
    border-radius: 10px;
    padding: 20px;

    h3 {
      font-weight: bold;
      color: #1d2129;
      font-size: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #e5e6eb;
    }

    .form {
      margin-top: 20px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 30px;

      p {
        color: #4e5969;
        margin-bottom: 5px;
      }
    }

    .textarea {
      p {
        color: #4e5969;
        margin-bottom: 5px;
      }
    }
  }

  .trave-style {
    margin-top: 30px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba($color: #ccc, $alpha: .4);
    border-radius: 10px;
    padding: 20px;

    h3 {
      font-weight: bold;
      color: #1d2129;
      font-size: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #e5e6eb;
    }

    p {
      margin-top: 20px;
      font-size: 16px;
      color: #4e5969;
      margin-bottom: 10px;
    }

    .style-box {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;

      .item {
        border: 1px solid #e5e6eb;
        padding: 10px;
        border-radius: 10px;

        :deep(.ant-checkbox-wrapper) {
          width: 100%;
          height: 100%;
        }

        &:hover {
          background-color: #f3f7ff;
          border-color: #165dff;
        }
      }
    }

    .budget {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;

      .item {
        border: 1px solid #e5e6eb;
        padding: 10px;
        border-radius: 10px;

        :deep(.ant-radio-wrapper) {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
        }

        &:hover {
          background-color: #f3f7ff;
          border-color: #165dff;
        }
      }
    }
  }
}
</style>
