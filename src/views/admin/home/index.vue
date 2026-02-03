<template>
  <div class="dashboard-container">
    <!-- 顶部系统标题和用户信息 -->
    <a-layout>
      <!-- 主要内容区域 -->
      <a-layout-content class="content">
        <!-- 统计卡片区域 -->
        <div class="stats-cards">
          <a-row :gutter="16">
            <a-col :xs="24" :sm="12" :md="6">
              <div class="stat-card">
                <div class="stat-card-content">
                  <div class="stat-icon" style="background-color: #1890ff33;">
                    <user-outlined style="color: #1890ff; font-size: 24px;" />
                  </div>
                  <div class="stat-info">
                    <div class="stat-value">{{ formatNumber(statsData.totalUsers) }}</div>
                    <div class="stat-title">总用户数</div>
                  </div>
                  <div class="stat-trend">
                    <span class="trend-up">+{{ statsData.userGrowth.toFixed(2) }}%</span>
                    <span class="trend-label">较上月</span>
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :xs="24" :sm="12" :md="6">
              <div class="stat-card">
                <div class="stat-card-content">
                  <div class="stat-icon" style="background-color: #52c41a33;">
                    <shop-outlined style="color: #52c41a; font-size: 24px;" />
                  </div>
                  <div class="stat-info">
                    <div class="stat-value">{{ formatNumber(statsData.totalOrders) }}</div>
                    <div class="stat-title">订单总数</div>
                  </div>
                  <div class="stat-trend">
                    <span class="trend-up">+{{ statsData.orderGrowth.toFixed(2) }}%</span>
                    <span class="trend-label">较上月</span>
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :xs="24" :sm="12" :md="6">
              <div class="stat-card">
                <div class="stat-card-content">
                  <div class="stat-icon" style="background-color: #fa8c1633;">
                    <dollar-outlined style="color: #fa8c16; font-size: 24px;" />
                  </div>
                  <div class="stat-info">
                    <div class="stat-value">¥{{ formatNumber(statsData.totalRevenue) }}</div>
                    <div class="stat-title">总收入</div>
                  </div>
                  <div class="stat-trend">
                    <span class="trend-up">+{{ statsData.revenueGrowth.toFixed(2) }}%</span>
                    <span class="trend-label">较上月</span>
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :xs="24" :sm="12" :md="6">
              <div class="stat-card">
                <div class="stat-card-content">
                  <div class="stat-icon" style="background-color: #722ed133;">
                    <star-outlined style="color: #722ed1; font-size: 24px;" />
                  </div>
                  <div class="stat-info">
                    <div class="stat-value">{{ statsData.satisfactionRate.toFixed(2) }}%</div>
                    <div class="stat-title">用户满意度</div>
                  </div>
                  <div class="stat-trend">
                    <span class="trend-up">+{{ statsData.satisfactionGrowth.toFixed(2) }}%</span>
                    <span class="trend-label">较上月</span>
                  </div>
                </div>
              </div>
            </a-col>
          </a-row>
        </div>

        <!-- 图表区域 -->
        <div class="charts-section">
          <a-row :gutter="16">
            <!-- 左侧图表区域 -->
            <a-col :xs="24" :lg="16">
              <div class="chart-container">
                <div class="chart-header">
                  <h3>旅游订单趋势分析</h3>
                  <div class="time-selector">
                    <a-radio-group v-model:value="timeRange" button-style="solid" @change="handleTimeRangeChange">
                      <a-radio-button value="week">本周</a-radio-button>
                      <a-radio-button value="month">本月</a-radio-button>
                      <a-radio-button value="quarter">本季度</a-radio-button>
                    </a-radio-group>
                  </div>
                </div>
                <div class="chart-content">
                  <div ref="orderChartRef" class="chart" style="height: 350px;"></div>
                </div>
              </div>
            </a-col>

            <!-- 右侧热门目的地 -->
            <a-col :xs="24" :lg="8">
              <div class="chart-container">
                <div class="chart-header">
                  <h3>热门旅游目的地</h3>
                  <a-select v-model:value="destinationFilter" style="width: 120px"
                    @change="handleDestinationFilterChange">
                    <a-select-option value="month">本月</a-select-option>
                    <a-select-option value="quarter">本季度</a-select-option>
                    <a-select-option value="year">全年</a-select-option>
                  </a-select>
                </div>
                <div class="chart-content">
                  <div ref="destinationChartRef" class="chart" style="height: 350px;"></div>
                </div>
              </div>
            </a-col>
          </a-row>

          <a-row :gutter="16" style="margin-top: 16px;">
            <!-- 用户分布图表 -->
            <a-col :xs="24" :lg="12">
              <div class="chart-container">
                <div class="chart-header">
                  <h3>用户年龄分布</h3>
                </div>
                <div class="chart-content">
                  <div ref="userChartRef" class="chart" style="height: 300px;"></div>
                </div>
              </div>
            </a-col>

            <!-- 旅游类型偏好 -->
            <a-col :xs="24" :lg="12">
              <div class="chart-container">
                <div class="chart-header">
                  <h3>旅游类型偏好分布</h3>
                </div>
                <div class="chart-content">
                  <div ref="preferenceChartRef" class="chart" style="height: 300px;"></div>
                </div>
              </div>
            </a-col>
          </a-row>
        </div>

        <!-- 数据表格区域 -->
        <div class="table-section">
          <div class="chart-container">
            <div class="chart-header">
              <h3>最新旅游订单</h3>
              <a-button type="primary" @click="refreshData">
                <sync-outlined :spin="refreshing" />
                {{ refreshing ? '刷新中' : '刷新数据' }}
              </a-button>
            </div>
            <div class="table-content">
              <a-table :columns="columns" :data-source="recentOrders" :pagination="{ pageSize: 5 }" row-key="id">
                <template #bodyCell="{ column, record }">
                  <template v-if="column.key === 'destination'">
                    <span>
                      <environment-outlined style="margin-right: 8px; color: #1890ff;" />
                      {{ record.destination }}
                    </span>
                  </template>
                  <template v-else-if="column.key === 'type'">
                    <a-tag :color="getTravelTypeColor(record.type)">
                      {{ record.type }}
                    </a-tag>
                  </template>
                  <template v-else-if="column.key === 'status'">
                    <a-tag :color="getStatusColor(record.status)">
                      {{ record.status }}
                    </a-tag>
                  </template>
                  <template v-else-if="column.key === 'amount'">
                    <span style="font-weight: 500;">¥{{ record.amount }}</span>
                  </template>
                </template>
              </a-table>
            </div>
          </div>
        </div>
      </a-layout-content>

      <!-- 底部信息 -->
      <a-layout-footer class="footer">
        <div class="footer-content">
          <p>旅游智能推荐后台管理系统 © 2023 版权所有 | 数据更新时间: {{ lastUpdateTime }}</p>
        </div>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'
import {
  UserOutlined,
  ShopOutlined,
  DollarOutlined,
  StarOutlined,
  BellOutlined,
  GlobalOutlined,
  SyncOutlined,
  EnvironmentOutlined
} from '@ant-design/icons-vue'

// 用户头像占位图
const userAvatar = 'https://xsgames.co/randomusers/avatar.php?g=pixel'

// 主要统计数据
const statsData = ref({
  totalUsers: 15240,
  totalOrders: 8920,
  totalRevenue: 3568000,
  satisfactionRate: 96.5,
  userGrowth: 12.5,
  orderGrowth: 8.3,
  revenueGrowth: 15.2,
  satisfactionGrowth: 1.2
})

// 时间范围选择
const timeRange = ref('month')
const destinationFilter = ref('month')
const refreshing = ref(false)
const lastUpdateTime = ref('')

// ECharts实例引用
const orderChartRef = ref(null)
const destinationChartRef = ref(null)
const userChartRef = ref(null)
const preferenceChartRef = ref(null)

// ECharts实例
let orderChart = null
let destinationChart = null
let userChart = null
let preferenceChart = null

// 表格列定义
const columns = [
  {
    title: '订单号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '目的地',
    dataIndex: 'destination',
    key: 'destination',
  },
  {
    title: '旅游类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '客户姓名',
    dataIndex: 'customer',
    key: 'customer',
  },
  {
    title: '金额',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '下单时间',
    dataIndex: 'time',
    key: 'time',
  },
]

// 最近订单数据
const recentOrders = ref([])

// 初始化函数
const initCharts = () => {
  // 初始化订单趋势图表
  if (orderChartRef.value) {
    orderChart = echarts.init(orderChartRef.value)
    renderOrderChart()
  }

  // 初始化热门目的地图表
  if (destinationChartRef.value) {
    destinationChart = echarts.init(destinationChartRef.value)
    renderDestinationChart()
  }

  // 初始化用户分布图表
  if (userChartRef.value) {
    userChart = echarts.init(userChartRef.value)
    renderUserChart()
  }

  // 初始化偏好分布图表
  if (preferenceChartRef.value) {
    preferenceChart = echarts.init(preferenceChartRef.value)
    renderPreferenceChart()
  }
}

// 渲染订单趋势图表
const renderOrderChart = () => {
  const timeLabels = {
    week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    month: ['1-5日', '6-10日', '11-15日', '16-20日', '21-25日', '26-30日'],
    quarter: ['1月', '2月', '3月']
  }

  const option = {
    tooltip: {
      trigger: 'axis',
      formatter: '{b}<br/>订单数: {c}'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: timeLabels[timeRange.value]
    },
    yAxis: {
      type: 'value',
      name: '订单数'
    },
    series: [
      {
        name: '订单数',
        type: 'line',
        smooth: true,
        data: generateOrderData(timeRange.value),
        itemStyle: {
          color: '#1890ff'
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(24, 144, 255, 0.5)'
            },
            {
              offset: 1,
              color: 'rgba(24, 144, 255, 0.1)'
            }
          ])
        }
      }
    ]
  }

  orderChart.setOption(option)
}

// 渲染热门目的地图表
const renderDestinationChart = () => {
  const destinations = ['三亚', '丽江', '桂林', '张家界', '九寨沟', '厦门', '青岛', '西安']
  const data = destinations.map((name, index) => ({
    name,
    value: Math.floor(Math.random() * 500) + 200
  }))

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center',
      data: destinations
    },
    series: [
      {
        name: '热门目的地',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['40%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '16',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: data
      }
    ],
    color: ['#1890ff', '#52c41a', '#fa8c16', '#722ed1', '#f5222d', '#13c2c2', '#eb2f96', '#faad14']
  }

  destinationChart.setOption(option)
}

// 渲染用户年龄分布图表
const renderUserChart = () => {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['18-25岁', '26-35岁', '36-45岁', '46-55岁', '56岁以上']
    },
    yAxis: {
      type: 'value',
      name: '用户数量'
    },
    series: [
      {
        name: '用户数量',
        type: 'bar',
        data: [3200, 4800, 4200, 2100, 900],
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        }
      }
    ]
  }

  userChart.setOption(option)
}

// 渲染偏好分布图表
const renderPreferenceChart = () => {
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      bottom: '5%',
      left: 'center'
    },
    series: [
      {
        name: '旅游类型偏好',
        type: 'pie',
        radius: ['30%', '60%'],
        center: ['50%', '40%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 335, name: '自然风光' },
          { value: 310, name: '文化历史' },
          { value: 234, name: '海滨度假' },
          { value: 135, name: '美食之旅' },
          { value: 154, name: '冒险探索' },
          { value: 120, name: '购物娱乐' }
        ]
      }
    ],
    color: ['#1890ff', '#52c41a', '#fa8c16', '#722ed1', '#f5222d', '#13c2c2']
  }

  preferenceChart.setOption(option)
}

// 生成订单数据
const generateOrderData = (range) => {
  const baseData = {
    week: [120, 132, 101, 134, 90, 230, 210],
    month: [320, 332, 301, 334, 390, 330, 320],
    quarter: [1320, 1132, 1201, 1234, 1190, 1330, 1320]
  }

  // 添加随机波动
  return baseData[range].map(value => {
    const fluctuation = Math.floor(Math.random() * 30) - 15
    return Math.max(value + fluctuation, 0)
  })
}

// 生成最近订单数据
const generateRecentOrders = () => {
  const destinations = ['三亚', '丽江', '桂林', '张家界', '九寨沟', '厦门', '青岛', '西安']
  const types = ['自然风光', '文化历史', '海滨度假', '美食之旅', '冒险探索']
  const customers = ['张伟', '王芳', '李娜', '刘洋', '陈明', '杨静', '赵强', '黄磊']
  const statuses = ['已支付', '待支付', '已完成', '已取消']

  const orders = []
  for (let i = 1; i <= 10; i++) {
    orders.push({
      id: `ORD${20230000 + i}`,
      destination: destinations[Math.floor(Math.random() * destinations.length)],
      type: types[Math.floor(Math.random() * types.length)],
      customer: customers[Math.floor(Math.random() * customers.length)],
      amount: Math.floor(Math.random() * 5000) + 1000,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      time: `2023-09-${10 + i % 20} ${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`
    })
  }

  return orders
}

// 时间范围改变处理
const handleTimeRangeChange = () => {
  renderOrderChart()
}

// 目的地筛选改变处理
const handleDestinationFilterChange = () => {
  renderDestinationChart()
}

// 刷新数据
const refreshData = () => {
  refreshing.value = true

  // 模拟数据更新
  setTimeout(() => {
    // 更新统计数据
    statsData.value = {
      totalUsers: statsData.value.totalUsers + Math.floor(Math.random() * 100),
      totalOrders: statsData.value.totalOrders + Math.floor(Math.random() * 50),
      totalRevenue: statsData.value.totalRevenue + Math.floor(Math.random() * 50000),
      satisfactionRate: Math.min(99.9, statsData.value.satisfactionRate + (Math.random() * 0.5 - 0.2)),
      userGrowth: statsData.value.userGrowth + (Math.random() * 2 - 1),
      orderGrowth: statsData.value.orderGrowth + (Math.random() * 2 - 1),
      revenueGrowth: statsData.value.revenueGrowth + (Math.random() * 2 - 1),
      satisfactionGrowth: statsData.value.satisfactionGrowth + (Math.random() * 0.5 - 0.2)
    }

    // 更新最近订单
    recentOrders.value = generateRecentOrders()

    // 更新图表
    renderOrderChart()
    renderDestinationChart()

    // 更新最后更新时间
    const now = new Date()
    lastUpdateTime.value = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`

    refreshing.value = false
  }, 800)
}

// 数字格式化
const formatNumber = (num) => {
  if (num >= 10000) {
    return (num / 10000).toFixed(1) + '万'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + '千'
  }
  return num.toLocaleString()
}

// 获取旅游类型颜色
const getTravelTypeColor = (type) => {
  const colorMap = {
    '自然风光': 'green',
    '文化历史': 'blue',
    '海滨度假': 'cyan',
    '美食之旅': 'orange',
    '冒险探索': 'red'
  }
  return colorMap[type] || 'default'
}

// 获取状态颜色
const getStatusColor = (status) => {
  const colorMap = {
    '已支付': 'green',
    '待支付': 'orange',
    '已完成': 'blue',
    '已取消': 'red'
  }
  return colorMap[status] || 'default'
}

// 初始化
onMounted(() => {
  // 初始化最近订单数据
  recentOrders.value = generateRecentOrders()

  // 设置初始更新时间
  const now = new Date()
  lastUpdateTime.value = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`

  // 初始化图表
  initCharts()

  // 监听窗口大小变化，重新渲染图表
  window.addEventListener('resize', handleResize)
})

// 处理窗口大小变化
const handleResize = () => {
  if (orderChart) orderChart.resize()
  if (destinationChart) destinationChart.resize()
  if (userChart) userChart.resize()
  if (preferenceChart) preferenceChart.resize()
}

// 清理资源
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  if (orderChart) orderChart.dispose()
  if (destinationChart) destinationChart.dispose()
  if (userChart) userChart.dispose()
  if (preferenceChart) preferenceChart.dispose()
})
</script>

<style scoped>
.dashboard-container {
  min-height: 100vh;
  background-color: #f0f2f5;
}

.notification-icon {
  font-size: 18px;
  color: white;
  margin-right: 24px;
  cursor: pointer;
}

.user-avatar {
  margin-right: 12px;
  background-color: #f56a00;
}

.username {
  font-weight: 500;
}

.content {
  padding: 24px;
  margin: 0;
  min-height: calc(100vh - 128px);
}

.stats-cards {
  margin-bottom: 24px;
}

.stat-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
  margin-bottom: 16px;
}

.stat-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}

.stat-card-content {
  display: flex;
  align-items: center;
  padding: 20px;
}

.stat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  margin-right: 16px;
}

.stat-info {
  flex: 1;
}

.stat-value {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 4px;
}

.stat-title {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
}

.stat-trend {
  text-align: right;
}

.trend-up {
  color: #52c41a;
  font-weight: 600;
  font-size: 16px;
}

.trend-label {
  display: block;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
  margin-top: 4px;
}

.charts-section {
  margin-bottom: 24px;
}

.chart-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 20px;
  height: 100%;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.chart-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.chart-content {
  width: 100%;
}

.chart {
  width: 100%;
}

.table-section {
  margin-bottom: 24px;
}

.table-content {
  margin-top: 16px;
}

.footer {
  text-align: center;
  background: white;
  padding: 16px 50px;
}

.footer-content {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .header-title {
    font-size: 16px;
  }

  .content {
    padding: 12px;
  }

  .stat-card-content {
    padding: 12px;
  }

  .stat-value {
    font-size: 20px;
  }

  .chart-container {
    padding: 12px;
  }

  .chart-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .chart-header h3 {
    font-size: 16px;
  }

  .time-selector {
    align-self: flex-end;
  }
}
</style>
