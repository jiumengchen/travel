import request from '@/utils/request'

enum API {
  RECOMMEND_EVAL = '/recommendeval',
}

export const ReqGetRecommendEvalList = () => request.get(API.RECOMMEND_EVAL)
