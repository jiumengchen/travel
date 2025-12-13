import Mock from 'mockjs'
const recommendDestList: any[] = []
for (let i = 0; i < 4; i++) {
  recommendDestList.push(
    Mock.mock({
      id: '@increment(1)',
      tag: '@pick(["热门","推荐"])',
      name: '@city',
      cover: 'https://picsum.photos/200/18@increment(1)',
      'attr_count|66-400': 1,
      'score|0-5.1': 0,
      'score_count|100-200': 1,
      description: '@csentence(50,100)',
    }),
  )
}
export const recommendDest = (options: any) => {
  return {
    code: 200,
    message: '获取推荐目的地列表成功',
    data: recommendDestList,
    ok: true,
  }
}

const destList: any[] = []
for (let i = 0; i < 12; i++) {
  destList.push(
    Mock.mock({
      id: '@increment(1)',
      tag: '@pick(["热门","推荐"])',
      cover: 'https://picsum.photos/200/18@increment(1)',
      name: '@city',
      province: '广东省',
      description: '@ctitle(5,15)',
      'tagList|3': [
        {
          id: '@increment(1)',
          name: '@pick(["海滩","自然风光","热带雨林","佛家寺庙","度假","历史古迹"])',
          color: '@pick(["blue","pink","red","orange","green","cyan","purple"])',
        },
      ],
      'price|100-999': 1,
      'score|0-5.1': 1,
      'flag|1': false,
    }),
  )
}
//目的地列表
export const dest = (options: any) => {
  const url = `http://127.0.0.1${options.url}`
  const queryObj = Object.fromEntries(new URL(url).searchParams.entries())
  if (queryObj.page && queryObj.pageSize && queryObj.sortType) {
    const page = Number(queryObj.page)
    const pageSize = Number(queryObj.pageSize)
    switch (queryObj.sortType) {
      case '1':
        console.log('default')
        break
      case '2':
        destList.sort((a, b) => b.price - a.price)
        break
      case '3':
        destList.sort((a, b) => b.score - a.score)
        break
      case '4':
        destList.sort((a, b) => a.price - b.price)
        break
      case '5':
        destList.sort((a, b) => a.score - b.score)
        break
    }
    let resultArr: any[] = []
    if (queryObj.keyword) {
      const reg = new RegExp(queryObj.keyword)
      resultArr = destList.filter((item) => reg.test(item.name))
    } else {
      resultArr = destList
    }
    return {
      code: 200,
      message: '获取目的地列表成功',
      data: {
        total: resultArr.length,
        list: resultArr.slice((page - 1) * pageSize, page * pageSize),
      },
      ok: true,
    }
  }
}
export const collectDest = (options: any) => {
  return {
    code: 200,
    message: '收藏目的地成功',
    ok: true,
  }
}
