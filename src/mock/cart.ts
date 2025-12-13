import Mock from 'mockjs'
export const cart = () => {
  const data = Mock.mock({
    'data|3': [
      {
        'id|+1': 1,
        name: '@ctitle(2,10)',
        imgUrl:
          'https://design.gemcoder.com/staticResource/echoAiSystemImages/ba661e539677999dc8c2c02f5f1ad0be.png',
        'price|999-9999': 1,
        flag: false,
        sum: 1,
        parent: 2,
        child: 1,
        time: '@time',
      },
    ],
  })
  return {
    code: 200,
    msg: '获取购物车列表成功',
    data: '你好呀',
    ok: true,
  }
}
