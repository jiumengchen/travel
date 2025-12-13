import Mock from 'mockjs'

const recommendEvalList: any[] = []

for (let i = 0; i < 3; i++) {
  recommendEvalList.push(
    Mock.mock({
      id: '@increment(1)',
      'score|0-5.1': 1,
      content: '@csentence(50,100)',
      author: {
        id: '@increment(1)',
        name: '@cname',
        imgUrl: 'https://picsum.photos/200/18@increment(1)',
      },
      eval_type: '三亚5天4晚自由行',
    }),
  )
}

export const recommendEval = (options: any) => {
  return {
    code: 200,
    message: '获取评价推荐列表成功',
    data: recommendEvalList,
    ok: true,
  }
}
