import Mock from 'mockjs'
const recommendTravelList: any[] = []
for (let i = 0; i < 4; i++) {
  recommendTravelList.push(
    Mock.mock({
      id: '@increment(1)',
      tag: '@pick(["目的地","酒店","景点"])',
      cover: 'https://picsum.photos/200/18@increment(1)',
      title: '@ctitle(5,20)',
      description: '@csentence(50,100)',
      author: {
        id: '@increment(1)',
        name: '@cname',
        imgUrl: 'https://picsum.photos/200/18@increment(1)',
      },
      send_time: '@date',
    }),
  )
}
export const traveltips = (options: any) => {
  const url = `http://127.0.0.1${options.url}`
  const queryObj = Object.fromEntries(new URL(url).searchParams.entries())
  const data = Mock.mock({
    'data|20': [
      {
        'id|+1': 1,
        cover: `https://picsum.photos/200/18@increment(1)`,
        title: '@ctitle(10,25)',
        tagList: ['购物指南', '3天2晚'],
        content: '@csentence(50,100)',
        author: {
          'id|+1': 1,
          imgUrl: 'https://q6.itc.cn/q_70/images03/20250306/355fba6a5cb049f5b98c2ed9f03cc5e1.jpeg',
          name: '久梦辰',
        },
        sendTime: '@date',
        'viewCount|80-999': 1,
        'commentCount|80-999': 1,
        'score|0-5.1': 0,
      },
    ],
  })
  if (queryObj.page && queryObj.pageSize) {
    const page = Number(queryObj.page)
    const pageSize = Number(queryObj.pageSize)
    return {
      code: 200,
      message: '获取旅行攻略列表成功',
      data: {
        total: data.data.length,
        list: data.data.slice((page - 1) * pageSize, page * pageSize),
      },
      ok: true,
    }
  }
}

export const recommentTravel = (options: any) => {
  return {
    code: 200,
    message: '获取推荐攻略列表成功',
    data: recommendTravelList,
    ok: true,
  }
}
