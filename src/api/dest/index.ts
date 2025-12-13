import request from '@/utils/request'

enum API {
  RECOMMEND_DEST = '/recommenddest',
  DEST_URL = '/dest',
}

export const ReqGetRecommendDestList = () => request.get(API.RECOMMEND_DEST)

export const ReqGetDestList = (params: any) => request.get(API.DEST_URL, { params })
