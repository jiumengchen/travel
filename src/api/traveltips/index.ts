import request from '@/utils/request'

enum API {
  TRAVELTIP_URL = '/traveltip',
  RECOMMEND_TRAVEL = '/recommendtravel',
}

export const ReqGetTraveltipList = (data: any) =>
  request.get<unknown, any>(API.TRAVELTIP_URL, { params: data })

export const ReqGetRecommendTravelList = () => request.get(API.RECOMMEND_TRAVEL)
