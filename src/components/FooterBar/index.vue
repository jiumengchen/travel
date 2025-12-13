<template>
  <a-row class="footerBox">
    <a-col :span="24">
      <a-row class="context" :gutter="[30, 30]">
        <a-col :span="6">
          <div class="item">
            <div class="title">
              <svg-icon name="logo" fill="#1e88e5" width="22px" height="22px"></svg-icon>
              <h3>旅游智能推荐</h3>
            </div>
            <p>我们致力于为旅行者提供最优质的旅行体验，让每一次出行都成为难忘的回忆。</p>
            <div class="menu">
              <div class="item">
                <svg-icon name="wx" fill="#fff" width="22px" height="22px"></svg-icon>
              </div>
              <div class="item">
                <svg-icon name="wb" fill="#fff" width="22px" height="22px"></svg-icon>
              </div>
              <div class="item">
                <svg-icon name="xj" fill="#fff" width="16px" height="16px"></svg-icon>
              </div>
              <div class="item">
                <svg-icon name="youtube" fill="#fff" width="16px" height="16px"></svg-icon>
              </div>
            </div>
          </div>
        </a-col>
        <a-col :span="6">
          <div class="item">
            <div class="title">
              <h3>目的地</h3>
            </div>
            <ul class="nav">
              <li>国内游</li>
              <li>出境游</li>
              <li>热门城市</li>
              <li>海岛度假</li>
              <li>主题旅行</li>
              <li>定制旅行</li>
            </ul>
          </div>
        </a-col>
        <a-col :span="6">
          <div class="item">
            <div class="title">
              <h3>旅行服务</h3>
            </div>
            <ul class="nav">
              <li>酒店预订</li>
              <li>机票预订</li>
              <li>旅游保险</li>
              <li>签证服务</li>
              <li>当地向导</li>
              <li>交通租车</li>
            </ul>
          </div>
        </a-col>
        <a-col :span="6">
          <div class="item">
            <div class="title">
              <h3>关于我们</h3>
            </div>
            <ul class="nav">
              <li>公司简介</li>
              <li>联系我们</li>
              <li>加入我们</li>
              <li>隐私政策</li>
              <li>服务条款</li>
              <li>常见问题</li>
            </ul>
          </div>
        </a-col>
      </a-row>
      <a-row class="lastFoot">
        <a-col :span="24">
          <div class="item">
            <div class="left">
              &copy; 2025 旅游智能推荐网. 保留所有权利.
            </div>
            <div class="right">
              <ul>
                <li>隐私政策</li>
                <li>服务条款</li>
                <li>网站地图</li>
              </ul>
            </div>
          </div>
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.footerBox {
  background-color: #263238;
  padding: 0 30px;
  box-sizing: border-box;

  .context {
    padding: 60px 0 40px;
    box-sizing: border-box;
    border-bottom: 2px solid #3c474c;

    .item {

      .title {
        display: flex;
        gap: 10px;
        align-items: center;
        color: #fff;

        h3 {
          font-weight: bold;
          font-size: 18px;
        }
      }

      .nav {
        margin-top: 30px;

        li {
          font-size: 16px;
          color: #9ca3af;
          line-height: 30px;
          margin-bottom: 10px;
          cursor: pointer;

          &:nth-last-child(1) {
            margin-bottom: 0;
          }

          &:hover {
            color: #1e88e5;
          }
        }
      }

      p {
        font-size: 16px;
        line-height: 25px;
        color: #9ca3af;
        padding: 30px 0;
      }

      .menu {
        display: flex;
        align-items: center;
        gap: 20px;

        .item {
          width: 40px;
          height: 40px;
          background-color: #3c474c;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;


          &:hover {
            background-color: #1e88e5;
          }
        }
      }
    }
  }

  .lastFoot {
    padding: 30px 0;

    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 15px;
      color: #6b7280;

      .right {
        ul {
          display: flex;
          align-items: center;
          gap: 20px;

          li {
            &:hover {
              color: #1e88e5;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>
