import type { RouteRecordRaw } from 'vue-router'
const adminRouters: RouteRecordRaw[] = [
  {
    path: '/admin/login',
    component: () => import('@/views/admin/login/index.vue'),
    meta: {
      title: '登录',
      hidden: true,
    },
  },
  {
    path: '/admin',
    component: () => import('@/views/admin/layout/index.vue'),
    meta: {
      title: '首页',
      hidden: true,
    },
    redirect: '/admin/home',
    children: [
      {
        path: '/admin/home',
        component: () => import('@/views/admin/home/index.vue'),
        meta: {
          title: '首页',
          icon: 'icon-shouye',
        },
      },
      {
        path: '/admin/usermanage',
        redirect: '/admin/usermanage/userlist',
        meta: {
          title: '用户管理',
          icon: 'icon-yonghuguanli1',
        },
        children: [
          {
            path: '/admin/usermanage/userlist',
            component: () => import('@/views/admin/userlist/index.vue'),
            meta: {
              title: '用户列表',
              icon: 'icon-yonghuliebiao',
            },
          },
          {
            path: '/admin/usermanage/userpermiss',
            component: () => import('@/views/admin/userpermiss/index.vue'),
            meta: {
              title: '用户权限',
              icon: 'icon-yonghuquanxian',
            },
          },
          {
            path: '/admin/usermanage/userhandle',
            component: () => import('@/views/admin/userhandle/index.vue'),
            meta: {
              title: '用户处理',
              icon: 'icon-yonghu-fengjinzhanghao',
            },
          },
        ],
      },
      {
        path: '/admin/contentmanage',
        redirect: '/admin/contentmanage/destmanage',
        meta: {
          title: '内容管理',
          icon: 'icon-neirongguanli-01',
        },
        children: [
          {
            path: '/admin/contentmanage/destmanage',
            component: () => import('@/views/admin/destmanage/index.vue'),
            meta: {
              title: '目的地管理',
              icon: 'icon-mudedi',
            },
          },
          {
            path: '/admin/contentmanage/attractionmanage',
            component: () => import('@/views/admin/attractionmanage/index.vue'),
            meta: {
              title: '景点管理',
              icon: 'icon-jingdian',
            },
          },
          {
            path: '/admin/contentmanage/strategymanage',
            component: () => import('@/views/admin/strategymanage/index.vue'),
            meta: {
              title: '攻略管理',
              icon: 'icon-gonglve',
            },
          },
          {
            path: '/admin/contentmanage/tagsmanage',
            component: () => import('@/views/admin/tagsmanage/index.vue'),
            meta: {
              title: '标签管理',
              icon: 'icon-biaoqian',
            },
          },
          {
            path: '/admin/contentmanage/categorymanage',
            component: () => import('@/views/admin/categorymanage/index.vue'),
            meta: {
              title: '类型管理',
              icon: 'icon-fenlei',
            },
          },
        ],
      },
      {
        path: '/admin/shopmanage',
        redirect: '/admin/shopmanage/hotelmanage',
        meta: {
          title: '商品管理',
          icon: 'icon-shangpin',
        },
        children: [
          {
            path: '/admin/shopmanage/hotelmanage',
            component: () => import('@/views/admin/hotelmanage/index.vue'),
            meta: {
              title: '酒店管理',
              icon: 'icon-jiudian',
            },
          },
          {
            path: '/admin/shopmanage/travelmanage',
            component: () => import('@/views/admin/travelmanage/index.vue'),
            meta: {
              title: '旅游团管理',
              icon: 'icon-chuhang',
            },
          },
        ],
      },
      {
        path: '/admin/crmanage',
        redirect: '/admin/crmanage/commentmanage',
        meta: {
          title: '评论与举报管理',
          icon: 'icon-chakantiezigengduojubao',
        },
        children: [
          {
            path: '/admin/crmanage/commentmanage',
            component: () => import('@/views/admin/commentmanage/index.vue'),
            meta: {
              title: '评论管理',
              icon: 'icon-pinglun',
            },
          },
          {
            path: '/admin/crmanage/reportmanage',
            component: () => import('@/views/admin/reportmanage/index.vue'),
            meta: {
              title: '举报管理',
              icon: 'icon-jubao',
            },
          },
        ],
      },
      {
        path: '/admin/ordermanage',
        redirect: '/admin/ordermanage/orderlist',
        meta: {
          title: '订单管理',
          icon: 'icon-dingdan',
        },
        children: [
          {
            path: '/admin/ordermanage/orderlist',
            component: () => import('@/views/admin/orderlist/index.vue'),
            meta: {
              title: '订单列表',
              icon: 'icon-dingdanliebiao',
            },
          },
          {
            path: '/admin/ordermanage/orderrefund',
            component: () => import('@/views/admin/orderrefund/index.vue'),
            meta: {
              title: '退款处理',
              icon: 'icon-tuikuan',
            },
          },
        ],
      },
      {
        path: '/admin/noticemanage',
        component: () => import('@/views/admin/noticemanage/index.vue'),
        meta: {
          title: '公告管理',
          icon: 'icon-gonggao',
        },
      },
    ],
  },
]

export default adminRouters
