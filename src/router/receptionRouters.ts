import type { RouteRecordRaw } from 'vue-router'
const receptionRouters: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '首页',
    },
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: () => import('@/views/reception/index/index.vue'),
        meta: {
          title: '首页',
        },
      },
      {
        path: '/dest',
        component: () => import('@/views/reception/dest/index.vue'),
        meta: {
          title: '目的地',
        },
      },
      {
        path: '/destdetail',
        component: () => import('@/views/reception/destdetail/index.vue'),
        meta: {
          title: '目的地详情',
        },
      },
      {
        path: '/reserve',
        component: () => import('@/views/reception/reserve/index.vue'),
        meta: {
          title: '预定服务',
        },
      },
      {
        path: '/traveltips',
        component: () => import('@/views/reception/traveltips/index.vue'),
        meta: {
          title: '旅行攻略',
        },
      },
      {
        path: '/aichat',
        component: () => import('@/views/reception/aichat/index.vue'),
        meta: {
          title: 'AI旅行顾问',
        },
      },
      {
        path: '/discount',
        component: () => import('@/views/reception/discount/index.vue'),
        meta: {
          title: '特价优惠',
        },
      },
      {
        path: '/about',
        component: () => import('@/views/reception/about/index.vue'),
        meta: {
          title: '关于我们',
        },
      },
      {
        path: '/cart',
        component: () => import('@/views/reception/cart/index.vue'),
        meta: {
          title: '我的旅行购物车',
        },
      },
      {
        path: '/discountdetail',
        component: () => import('@/views/reception/discountdetail/index.vue'),
        meta: {
          title: '旅游特惠详情',
        },
      },
      {
        path: '/attrdetail',
        component: () => import('@/views/reception/attrdetail/index.vue'),
        meta: {
          title: '我的旅行购物车',
        },
      },
      {
        path: '/searchtraveltips',
        component: () => import('@/views/reception/searchtraveltips/index.vue'),
        meta: {
          title: '旅行攻略搜索',
        },
      },
      {
        path: '/traveltipdetail',
        component: () => import('@/views/reception/traveltipdetail/index.vue'),
        meta: {
          title: '旅行攻略详情',
        },
      },
      {
        path: '/payorder',
        component: () => import('@/views/reception/payorder/index.vue'),
        meta: {
          title: '订单结算',
        },
      },
      {
        path: '/payresult',
        component: () => import('@/views/reception/payresult/index.vue'),
        meta: {
          title: '订单结算结果',
        },
      },
      {
        path: '/person',
        component: () => import('@/views/reception/person/index.vue'),
        meta: {
          title: '我的资料',
        },
        redirect: '/person/me',
        children: [
          {
            path: '/person/me',
            component: () => import('@/views/reception/me/index.vue'),
            meta: {
              title: '个人中心',
            },
          },
          {
            path: '/person/mytrip',
            component: () => import('@/views/reception/mytrip/index.vue'),
            meta: {
              title: '我的行程',
            },
          },
          {
            path: '/person/mycollect',
            component: () => import('@/views/reception/mycollect/index.vue'),
            meta: {
              title: '我的收藏',
            },
          },
          {
            path: '/person/myorder',
            component: () => import('@/views/reception/myorder/index.vue'),
            meta: {
              title: '我的订单',
            },
          },
          {
            path: '/person/myguide',
            component: () => import('@/views/reception/myguide/index.vue'),
            meta: {
              title: '我的攻略',
            },
          },
          {
            path: '/person/edituserinfo',
            component: () => import('@/views/reception/edituserinfo/index.vue'),
            meta: {
              title: '编辑个人资料',
            },
          },
          {
            path: '/person/createtraveltips',
            component: () => import('@/views/reception/createtraveltips/index.vue'),
            meta: {
              title: '创建攻略',
            },
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/reception/Login/index.vue'),
    meta: {
      title: '登录',
    },
  },
]

export default receptionRouters
