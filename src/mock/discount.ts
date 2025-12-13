import Mock from 'mockjs'

const recommendDiscountList: any[] = []

for (let i = 0; i < 3; i++) {
  recommendDiscountList.push(
    Mock.mock({
      id: '@increment(1)',
      cover: 'https://picsum.photos/200/18@increment(1)',
      tag: '@pick(["热门","推荐"])',
      title: '@ctitle(5,10)',
      'score|0-5.1': 1,
      description: '@csentence(50,100)',
      duration: '@pick(["5天4晚","3天2晚","6天5晚","3天3晚","4天3晚"])',
      'max_person|5-20': 1,
      'cur_price|2000-3000': 1,
      'pre_price|3000-4000': 1,
    }),
  )
}

export const recommendDiscount = (options: any) => {
  return {
    code: 200,
    message: '获取推荐特价优惠列表成功',
    data: recommendDiscountList,
    ok: true,
  }
}
