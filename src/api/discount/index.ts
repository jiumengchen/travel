import request from '@/utils/request'

enum API {
  RECOMMEND_DISCOUNT = '/recommenddiscount',
}

export const ReqGetRecommendDiscountList = () => request.get(API.RECOMMEND_DISCOUNT)
