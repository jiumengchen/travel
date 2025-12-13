import Mock from 'mockjs'
import { cart } from './cart'
import { recommentTravel, traveltips } from './traveltip'
import { dest, recommendDest } from './dest'
import { recommendDiscount } from './discount'
import { recommendEval } from './eval'
Mock.mock('/api/cart', 'get', cart)
// index
Mock.mock(/\/api\/recommendtravel.*/, 'get', recommentTravel)
Mock.mock(/\/api\/traveltip.*/, 'get', traveltips)
Mock.mock(/\/api\/recommenddest.*/, 'get', recommendDest)
Mock.mock(/\/api\/recommenddiscount.*/, 'get', recommendDiscount)
Mock.mock(/\/api\/recommendeval.*/, 'get', recommendEval)

// dest
Mock.mock(/\/api\/dest.*/, 'get', dest)
