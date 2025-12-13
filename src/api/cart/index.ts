import request from '@/utils/request'

enum API {
  CART_URL = '/cart',
}

export const ReqGetCartList = () => request.get<unknown, any>(API.CART_URL)
